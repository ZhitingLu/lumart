import type { Metadata } from "next";
import localFont from "next/font/local";
import ReduxProvider from "../store/Provider";
import "./globals.css";
import Header from '../app/components/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LuMart - Your favorite online store",
  description: "Shop the best products at LuMart. Fast, reliable, and affordable.",
  openGraph: {
    title: "LuMart - The best online store",
    description: "Find the latest products at unbeatable prices!",
    url: "www.lumart.com",
    images: [{
      url: "/images/og-image.jpg",
      width: 800,
      height: 600,
      alt: "LuMart",
    }
    ]
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
