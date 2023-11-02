import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import TopMenuItem from "@/components/topMenuItem";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row space-between border-b-2 border-gray-300">
      { session ?
        <Link href="/api/auth/signout">
          <div className="w-36 text-center ml-6 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
            Sign out from { session.user?.name }
          </div>
        </Link>
        :
        <Link href="/api/auth/signin">
          <div className="w-36 text-center ml-0 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
            Sign in
          </div>
        </Link>
      }        
      <Link href="/mybooking">
        <div className="w-40 text-center ml-4 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
          My Booking
        </div>
      </Link>
      <div className="h-14 bg-white fixed top-0 right-0 z-30 flex flex-row justify-end">
        <TopMenuItem
          title="Booking"
          pageRef="/hospital"
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
    </div>
  )
}