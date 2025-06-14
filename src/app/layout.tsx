import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinit Tech Solutions",
  description:
    "Empower your business with innovative software solutions from Infinit. We specialize in custom web development, UI/UX design, cloud integration, and digital transformation for startups and enterprises. Discover our proven expertise, client success stories, and cutting-edge technology to accelerate your growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-[#040304] text-[#EDFFF8]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
