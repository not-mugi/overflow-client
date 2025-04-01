import Link from "next/link";

import {
  Home,
  HelpCircle,
  Tag,
  Users,
  Star,
  Bookmark,
  History,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="md:block w-64 sticky overflow-y-auto top-[68px] max-h-[calc(100vh-64px)] bg-gray-50 border-r border-gray-200 p-4">
      <nav className="space-y-1">
        <Link
          href="/"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
        >
          <Home className="h-5 w-5 mr-3" />
          မူလစာမျက်နှာ
        </Link>
        <Link
          href="/questions"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          မေးခွန်းများ
        </Link>
        <Link
          href="/tags"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
        >
          <Tag className="h-5 w-5 mr-3" />
          တဂ်များ
        </Link>
        <Link
          href="/users"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
        >
          <Users className="h-5 w-5 mr-3" />
          ပါဝင်သူများ
        </Link>

        <div className="pt-4 mt-4 border-t border-gray-200">
          <h5 className="px-4 text-sm font-medium text-gray-500 uppercase">
            Personal
          </h5>
          <div className="mt-2 space-y-1">
            <Link
              href="/bookmarks"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
            >
              <Bookmark className="h-5 w-5 mr-3" />
              Bookmarks
            </Link>
            <Link
              href="/history"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
            >
              <History className="h-5 w-5 mr-3" />
              History
            </Link>
            <Link
              href="/starred"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
            >
              <Star className="h-5 w-5 mr-3" />
              Starred
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}
