import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/lib/components/navigation/Header";
import Sidebar from "@/lib/components/navigation/Sidebar";

const mugi_local_fonts = localFont({
  src: [
    {
      path: "../lib/fonts/NotoSansMyanmar.woff2",
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
        <div className="w-screen h-screen flex flex-col">
          <Header />
          <div className="container mx-auto flex grow w-full">
            <Sidebar />
            <main className="flex-1 bg-mugi-400/20 py-4 px-24">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
