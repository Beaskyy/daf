import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deafaccessfoundation.com"),
  title: {
    default: "Deaf Access Foundation | Advancing Access in Nigeria",
    template: "%s | Deaf Access Foundation"
  },
  description: "Deaf Access Foundation (DAF) is dedicated to advancing access, awareness, and opportunities for Deaf and hard-of-hearing communities in Nigeria through education, advocacy, and technology.",
  keywords: [
    "Deaf Access Foundation",
    "DAF Nigeria",
    "Deaf community Nigeria",
    "Communication accessibility",
    "Sign language Nigeria",
    "Deaf education Africa",
    "Disability rights Nigeria",
    "SignFlow",
    "Deaf advocacy"
  ],
  authors: [{ name: "Deaf Access Foundation" }],
  creator: "Deaf Access Foundation",
  publisher: "Deaf Access Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://deafaccessfoundation.com",
    siteName: "Deaf Access Foundation",
    title: "Deaf Access Foundation | Advancing Access in Nigeria",
    description: "Advancing access, awareness, and opportunities for Deaf communities in Nigeria through education and advocacy.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Deaf Access Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deaf Access Foundation | Advancing Access in Nigeria",
    description: "Advancing access, awareness, and opportunities for Deaf communities in Nigeria.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deafaccessfoundation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-secondary/30">
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
