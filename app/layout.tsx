import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAYDAM — Nothing hidden. Just meme.",
  description:
    "A fixed-supply, proof-first community meme on Base. No hidden mint, transfer tax, blacklist or promises of return.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
