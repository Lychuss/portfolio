import type { Metadata } from "next";
import { DM_Sans, Quicksand, Bungee_Outline, Bungee_Inline} from "next/font/google";
import Navbar from "../layouts/navbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bungeeOutline = Bungee_Outline({
  variable: "--font-bungee-outline",
  subsets: ["latin"],
  weight: "400"
})

const bungeeInline = Bungee_Inline({
  variable: "--font-bungee-inline",
  subsets: ["latin"],
  weight: "400"
})

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Description abouy my self and my works  ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quickSand.variable} ${dmSans.variable} ${bungeeInline.variable} ${bungeeOutline.variable} 
      
      h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
          {children}
        </body>
    </html>
  );
}
