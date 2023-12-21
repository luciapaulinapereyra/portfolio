import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucia Pereyra portfolio",
  description: "Hola! Soy Lucia Pereyra, desarrolladora web.",
  manifest: "site.webmanifest",
  icons: [
    {
      href: "favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      url: "favicon-16x16.png",
    },
    {
      href: "favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      url: "favicon-32x32.png",
    },
    {
      href: "apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      url: "apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
