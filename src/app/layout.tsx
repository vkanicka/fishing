import type { Metadata } from "next";
import "./globals.css";
import { Crafty_Girls as MY_FONT } from 'next/font/google'
const myFont = MY_FONT(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
  }
)
 

export const metadata: Metadata = {
  title: "LastMinuteFishing",
  description: "Helper to find SV fish by season",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-gray-900 bg-opacity-60 text-white ${myFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
