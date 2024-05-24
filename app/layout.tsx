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
    <html lang="en">
      <body className={twMerge(lexend.className, "flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
