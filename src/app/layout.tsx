import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Music Academy",
  description: "Project by Tejas Chaudhari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body>
      <div className={"relative w-full flex items-center justify-center"}>
        <Navbar/>
      </div>
        {children}
      </body>
    </html>
  );
}
