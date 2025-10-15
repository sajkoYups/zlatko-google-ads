import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import landingContent from "../content/landing.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: landingContent.site.title,
  description: landingContent.site.description,
  openGraph: {
    title: landingContent.site.title,
    description: landingContent.site.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: landingContent.site.title,
    description: landingContent.site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
