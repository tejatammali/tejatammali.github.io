import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teja Tammali",
  description: "Teja Tammali — Software Engineer based in the D.C. area.",
  keywords: ["Teja Tammali", "Software Engineer", "UMD", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/ufg7hqz.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={lato.variable}>{children}</body>
    </html>
  );
}
