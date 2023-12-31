import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from 'react';import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import AddHospitalForm from "@/components/addHospitalForm";
import { dbConnect } from "@/db/dbConnect";
import HospitalDB from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function Hospital() {
  const hospitalPromise = getHospitals()
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    console.log("addhospital");
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");
    console.log(name, address, district);
    try {
      console.log("in try block");
      await dbConnect();
      const hospital = await HospitalDB.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <main>
      <div className="mt-24">
        <Suspense
          fallback={
            <p className="mt-6 text-center">
              Loading... <LinearProgress/>
            </p>
          }
        >
          <HospitalCatalog hospitalPromise={hospitalPromise}/>
          {profile.data.role == "admin" ? (
            <AddHospitalForm action={addHospital} />
          ) : null}
        </Suspense>
      </div>
    </main>
  )
}