import "./globals.css";
import type { Metadata } from "next";
import {Inter} from "next/font/google"

export const metadata: Metadata = {
  title: "Mood Calendar",
  description:
    "Welcome to the Website Mood Calendar, a unique platform designed to help you track and understand your emotional journey throughout the year. This innovative website aims to provide a visual representation of your moods, enabling you to gain insights into patterns, triggers, and overall mental well-being.",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-primary-dark ${inter.className}`}>{children}</body>
    </html>
  );
}
