import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-lg font-semibold">
              Mugi Overflow
            </h2>
            <p className="mt-2">
              Empowering developers to learn, share, and grow with modern web
              technologies.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white text-sm font-semibold">Products</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Collectives
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Talent
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Work Here
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold">Network</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Stack Overflow
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Stack Exchange
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Meta
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Mugi Overflow. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
