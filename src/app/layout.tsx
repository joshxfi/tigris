import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import "./globals.css";

import { Navbar } from "@/components/navbar";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tigris.omsimos.com"),
  title: "Tigris",
  description:
    "Tigris serves as a platform for students to express their creativity, share their ideas, and contribute to the diverse array of content spanning art, writing, and photography, as well as deliver the latest college updates.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Tigris — CET Publication",
    description:
      "Tigris serves as a platform for students to express their creativity, share their ideas, and contribute to the diverse array of content spanning art, writing, and photography, as well as deliver the latest college updates.",
    images: [
      "https://github.com/joshxfi/tigris/assets/69457996/1372a41e-84f6-402e-969a-77859c4d0bb8",
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} ${playfairDisplay.variable}`}>
        <main className="max-w-screen-xl mx-auto container px-6 md:px-12 2xl:px-0">
          <Toaster />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
