import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Mugi Overflow - Where Burmese Developers Learn, Share and Build careers.",
  description: "မြန်မာနိုင်ငံမှ programming ကို စိတ်ဝင်စားသူများ ပွင့်လင်းမြင်သာစွာ ပူးပေါင်းပါဝင်နိုင်မည့် အမေးအဖြေကွန်ယက်",
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
