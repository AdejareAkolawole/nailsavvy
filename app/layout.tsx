import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "NailSavvy — Premium Nail Care in Nigeria",
  description: "Book your nail appointment with NailSavvy. Expert manicures, pedicures, gel nails, acrylics, nail art and home service across Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
