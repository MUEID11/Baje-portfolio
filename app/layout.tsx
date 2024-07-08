import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mueid's Portfolio",
  description: "minimalistic modern portfolio",
  icons: {
    icon: "/favicon.ico",
    // You can add other icon sizes/formats if needed
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/mblacklogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/mwblacklogo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
