import Link from "next/link";
import Image from "next/image";

import { Search, Menu, Bell, MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer md:hidden" />
            <h1 className="text-2xl font-bold">
              stack<span className="text-orange-500">overflow</span>
            </h1>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/questions"
                className="text-gray-600 hover:text-gray-900"
              >
                Questions
              </Link>
              <Link href="/tags" className="text-gray-600 hover:text-gray-900">
                Tags
              </Link>
              <Link href="/users" className="text-gray-600 hover:text-gray-900">
                Users
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
              <MessageSquare className="h-6 w-6 text-gray-600 cursor-pointer" />
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
