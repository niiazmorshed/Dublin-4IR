import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins, Red_Rose } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import "./globals.css";

const nasalization = localFont({
  src: "./fonts/nasalization.woff",
  variable: "--font-nasalization",
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dublin 4ir — Accelerate Your Digital Future",
  description:
    "Ireland's digital partner — world-class web & app development for government and enterprise projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} ${nasalization.variable} ${redRose.variable} ${poppins.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
