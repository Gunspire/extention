import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convert Extend | Extensions, Loft Conversions & Renovations",
  description:
    "Convert Extend design and build home improvement projects — house extensions, loft conversions, and full property renovations. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
