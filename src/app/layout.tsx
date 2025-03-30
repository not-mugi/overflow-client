import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const mugi_local_fonts = localFont({
  src: [
    {
      path: "../fonts/NotoSansMyanmar.woff2",
    },
  ],
});

export const metadata: Metadata = {
  title: "Mugi Overflow",
  description: "Where burmese developers learn, share and build careers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${mugi_local_fonts.className} antialiased`}>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
