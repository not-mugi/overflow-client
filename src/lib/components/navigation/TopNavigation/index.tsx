import Link from "next/link";
import Image from "next/image";
import MugiOverflow from "@/lib/assets/images/mugi/mugi-overflow.png";

import LensIcon from "@/lib/assets/images/icons/lens.svg";

export default function TopNavigation() {

  const GuestActions = () => (
    <ul className="flex items-center gap-4">
      <li className="border border-gray-300 hover:bg-gray-100/50 text-mugi-gray-300 text-center text-sm/8 h-9 inline-block py-1 px-3 rounded-sm font-light">
        <Link href="/signin">Sign In</Link>
      </li>
      <li className="text-white border bg-gray-700 hover:bg-gray-500 border-gray-700/50 text-center text-sm/8 h-9 inline-block py-1 px-3 rounded-sm font-light">
        <Link href="/signup">Sign Up</Link>
      </li>
    </ul>
  )

  return (
    <nav className="w-full h-14 bg-white shadow-sm fixed top-0 border-t-2 border-gray-300/60 z-10">
      <ul className="max-xl:mx-5 max-2xl:mx-20 max-3xl:mx-40 mx-80 flex items-center h-full">
        <li className="xl:min-w-2xs">
          <span className="flex">
            <Image src={MugiOverflow} alt="mugi logo" width={150} height={30} />
          </span>
        </li>
        <li className="grow mx-5">
          <span className="max-md:hidden flex items-center w-full rounded-sm focus-within:outline-3 focus-within:outline-blue-500 p-0.5 h-10">
            <span className="flex items-center h-full w-full p-2 border-gray-300 border rounded-sm">
              <Image src={LensIcon} alt="search icon" className="mx-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-0 text-sm w-full leading-none h-6"
              />
            </span>
          </span>
        </li>
        <li>
          <GuestActions />
        </li>
      </ul>
    </nav>
  );
}
