import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
