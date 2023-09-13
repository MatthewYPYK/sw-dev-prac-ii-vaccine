"use client";
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function Booking() {
  return (
    <main className="w-[100%] pb-40  pt-20 flex flex-col items-center">
      <div className="w-1/3">
        <form>
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
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="hospital-name" className="block text-sm font-medium leading-6 text-gray-900">
                    โรงพยาบาล
                  </label>
                  <div className="mt-2">
                    <select
                      id="hospital-name"
                      name="hospital-name"
                      autoComplete=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Chulalongkorn Hospital</option>
                      <option>Rajavithi Hospital</option>
                      <option>Thammasat University Hospital</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    วันที่ต้องการรับวัคซีน
                  </label>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker/>
                  </LocalizationProvider>

                  <div className="mt-2">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}