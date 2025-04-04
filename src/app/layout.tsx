import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";


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
      <body className={`antialiased`}>
        <div className="min-h-screen">
          <Header />
          <div className={`flex`}>
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
