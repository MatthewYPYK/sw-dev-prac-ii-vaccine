import TopMenuItem from "@/components/topMenuItem";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row justify-end border-b-2 border-gray-300">
      <TopMenuItem
        title="Booking"
        pageRef="/booking"
      />
      <Image
        src="/img/logo.png"
        className="mt-1 ml-1 mr-1 mh-1 h-12 w-auto flex justify-start"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
    </div>
  )
}