import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/providers";

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
      <body className={`${sourceSans.variable} antialiased`}>
        <ReduxProvider>
          <main className="">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
