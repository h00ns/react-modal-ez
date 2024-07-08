import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import MyModalProvider from "../providers/MyModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "react-modal-ez",
  description:
    "Try using modals easily and simply in React with react-modal-ez!",
  openGraph: {
    title: "react-modal-ez",
    description:
      "Try using modals easily and simply in React with react-modal-ez!",
    type: "website",
    url: "https://react-modal-ez.site",
    siteName: "react-modal-ez",
    locale: "en_US",
    images: {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "react-modal-ez",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyModalProvider>
          {children}
          <VercelAnalytics />
        </MyModalProvider>
      </body>
    </html>
  );
}
