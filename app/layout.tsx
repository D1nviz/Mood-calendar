import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Mood Calendar",
  description:
    "Welcome to the Website Mood Calendar, a unique platform designed to help you track and understand your emotional journey throughout the year. This innovative website aims to provide a visual representation of your moods, enabling you to gain insights into patterns, triggers, and overall mental well-being.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-dark-primary text-text-color-primary overflow-x-hidden`}
      >
        <Header />
        <div className="flex">
          <Menu />
          <main className="basis-full min-h-[640px]">{children}</main>
        </div>
        <footer className="absolute bottom-5 right-5 text-xs">
          &copy; 2023 by Dinviz <br /> All rights reserved
        </footer>
      </body>
    </html>
  );
}
