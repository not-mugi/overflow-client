import Image from "next/image";
import MugiOverflow from "@/lib/assets/images/mugi/mugi-overflow.png";

export default function Header() {
  return (
    <header className="p-4 border-b-1 border-b-gray-200 border-t-2 border-t-mugi-400/50">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={MugiOverflow} alt="mugi logo" />
        <nav className="space-x-4">
          <a
            href="#"
            className="px-4 py-2 font-bold text-xs tracking-widest bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Login
          </a>
          <a
            href="#"
            className="px-4 py-2 font-bold text-xs tracking-widest bg-mugi-400 text-white rounded hover:bg-mugi-500"
          >
            Signup
          </a>
        </nav>
      </div>
    </header>
  );
}
