import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import StickyCart from "@/components/StickyCart";
import EmailPopup from "@/components/EmailPopup";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: "Dermacell Lab | The Biological Future of Skincare",
  description: "Clinical grade Red Light Therapy recovery mask operating at 660nm & 850nm. Harness the power of photobiomodulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${orbitron.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <Cart />
        <StickyCart />
        <EmailPopup />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
