import Link from "next/link";
import Image from "next/image";

import { Search, Menu, Bell, MessageSquare } from "lucide-react";

import mugiOverflow from "@/assets/images/mugi/mugi-overflow.png";
import BetaTag from "./ui/beta-tag";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-t-2 border-t-mugi-300 border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer md:hidden" />
            <Image alt="mugi-overflow-logo" src={mugiOverflow} />
            <nav className="hidden md:flex space-x-4">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 relative">
                ဘလော့ဂ် <BetaTag />
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
              <MessageSquare className="h-6 w-6 text-gray-600 cursor-pointer" />
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
