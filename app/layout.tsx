import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavTabs } from "@/components/nav-tabs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harvard Connection Platform",
  description: "Discover classmates and build connections at Harvard College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="h-full w-full m-0 p-0 flex flex-col">
        <NavTabs />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
