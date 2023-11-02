"use client";
import { useSearchParams } from "next/navigation";
import DateReserve from "@/components/dateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import App from "next/app";
import { BookingItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";

export default function Booking() {
  const urlParams = useSearchParams();
  const hid = urlParams.get("id");
  const hospital = urlParams.get("hospital");
  const dispatch = useDispatch<AppDispatch>()
  const makeBooking = () => {
    console.log(urlParams)
    console.log(hid, hospital, date, name)
    if (hid && hospital && date && name) {
      console.log("reserve ok")
      const item: BookingItem = {
        name: name,
        surname: surname,
        id: id,
        hospital: hospital,
        bookDate: dayjs(date).format("YYYY/MM/DD")
      }
      console.log("item", item)
      dispatch(addReservation(item))
    }
  }
  const [date, setDate] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value)
  }
  const [id, setId] = useState<string>("");
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }
  const [bookHospital, setBookHospital] = useState<string>("Chulalongkorn Hospital");
  const handleHospitalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedHospital = event.target.value;
    setBookHospital(selectedHospital)
  }

  return (
    <main className="w-[100%] pb-40  pt-20 flex flex-col items-center">
      <div className="w-1/3">
        <div className="space-y-12">
          

          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-7 text-gray-900">โปรดกรอกข้อมูลให้ครบถ้วน</h1>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  ชื่อ
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  นามสกุล
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={surname}
                    onChange={handleSurnameChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="identification-number" className="block text-sm font-medium leading-6 text-gray-900">
                  รหัสประจำตัวประชาชน
                </label>
                <div className="mt-2 pl-1">
                  <input
                    id="identification-number"
                    name="identification-number"
                    autoComplete=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={id}
                    onChange={handleIdChange}
                  />
                </div>
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                  วันที่ต้องการรับวัคซีน
                </label>

                <DateReserve
                  onDateChange={(value: Dayjs) => {
                    setDate(value)
                  }}
                />

                <div className="mt-2">
                </div>
              </div>

            </div>
          </div>
        </div>

        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-950 px-3 py-2 text-white shadow-sm"
          onClick={makeBooking}
        >
          Book Hospital
        </button>
      </div>
    </main>
  )
}