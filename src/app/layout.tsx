import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack JavaScript development | WebStackup",
  description:
    "We primarily specialize in Full Stack JavaScript development, adhering to web standards and best practices, utilizing modern web technologies to build and deliver high-quality solutions",
  keywords:
    "HTML, CSS, TypeScript, React, React Native, Next.js, Node.js, Full Stack JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
