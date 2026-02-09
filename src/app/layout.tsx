import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Founders' Union",
  description:
    "The first ₹20 lakhs is the hardest to raise. We make it happen. A 90-day residency with guaranteed capital, operator mentors, and momentum.",
  metadataBase: new URL("https://founders-union.local"),
  openGraph: {
    title: "Founders' Union",
    description:
      "Guaranteed ₹20 Lakhs via SAFE + 90-day operator-led residency to get you YC/Shark Tank ready.",
    type: "website"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


