import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms/header/Header";
import { Footer } from "@/components/organisms/footer/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Food Wagen",
  description: "Find meals that are accessible near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased `}>
        <Header />
        <main className="container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
