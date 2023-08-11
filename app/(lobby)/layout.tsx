import type { Metadata } from "next";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Wrapper from "@/components/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Mood Calendar",
  description:
    "Welcome to the Website Mood Calendar, a unique platform designed to help you track and understand your emotional journey throughout the year. This innovative website aims to provide a visual representation of your moods, enabling you to gain insights into patterns, triggers, and overall mental well-being.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          <Menu />
          <main className="basis-full h-screen">
           {children}
          </main>
        </div>
      </body>
    </html>
  );
}
