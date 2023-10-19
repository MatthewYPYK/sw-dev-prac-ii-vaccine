import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from 'react';

export default function Hospital() {
  const hospitalPromise = getHospitals()

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
        </Suspense>
      </div>
    </main>
  )
}