import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foothill Engineering Club",
  description: "Welcome to our collaborative community!",
};

import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
