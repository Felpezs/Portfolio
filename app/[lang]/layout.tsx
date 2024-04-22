import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, type Locale } from "../../i18n-config";

const inter = Inter({
  weight: ["700", "600", "500", "400"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Check my projects, experiences and technologies that I've been working with!",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-surface-800`}>{children}</body>
    </html>
  );
}
