import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dei Providentia",
  description: "Dei Providentia Scholarship Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen overflow-x-hidden">
      <body
        className={twMerge(
          lexend.className,
          "flex flex-col overflow-x-hidden overflow-y-scroll"
        )}
      >
        {children}
      </body>
    </html>
  );
}
