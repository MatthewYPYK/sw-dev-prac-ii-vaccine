import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog({ hospitalPromise }) {
  const hospitalJSON = await hospitalPromise

  return (
    <>
      <h3 className="text-center">
        Explore between { hospitalJSON.count } hospitals
      </h3>
      <div 
        style={{
          margin: "30px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {hospitalJSON.data.map((item) => {
        return(
          <Link
            key={item.id}
            href={`/hospital/${item.id}`}
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
          >
            <Card
              name={item.name}
              image={item.picture}
            />
          </Link>
        )})}
      </div>
    </>
  )
}