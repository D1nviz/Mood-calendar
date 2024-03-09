import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

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
        className={`${inter.className} bg-dark-primary text-text-color-primary overflow-x-hidden h-screen overflow-hidden`}
      >
        <div className="bg-[#4a3b40] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] animate-spin-slow"></div>
        <div className="bg-[#434354] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] animate-spin-slow"></div>
        <div className="bg-[#4f5443] absolute -z-10 right-[33%] bottom-[-5rem] h-[15.25rem] w-[30rem] rounded-full blur-[10rem] animate-spin-slow"></div>
        <Header />
        <main className="basis-full min-h-[640px]">{children}</main>
        <footer className="absolute bottom-5 right-5 text-xs">
          &copy; 2023 by Dinviz <br /> All rights reserved
        </footer>
      </body>
    </html>
  );
}
