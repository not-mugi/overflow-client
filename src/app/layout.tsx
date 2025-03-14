import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import TopNavigation from "@/lib/components/navigation/TopNavigation";
import SideNavigation from "@/lib/components/navigation/SideNavigation";

const MugiFonts = localFont({
  src : [
    {
      path : "../lib/fonts/SFMonoMedium.otf",
    },
    {
      path : "../lib/fonts/SFMonoLight.otf",
    },
    {
      path : "../lib/fonts/NotoSansMyanmar.woff2",
    }
  ]
})

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
      <body
        className={`${MugiFonts.className} antialiased tracking-tighter`}
      >
        <header>
          <TopNavigation />
        </header>
        <section className="relative">
          <SideNavigation />
          <main className="mt-14 max-xl:mx-5 max-2xl:mx-20 max-3xl:mx-40 mx-80 md:pl-50 p-5 h-screen">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
