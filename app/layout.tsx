import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saydam-memecoin.vercel.app"),
  title: "SAYDAM — Nothing hidden. Just meme.",
  description:
    "A fixed-supply, proof-first community meme on Base. No hidden mint, transfer tax, blacklist or promises of return.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SAYDAM — Nothing hidden. Just meme.",
    description:
      "A proof-first community meme on Base. Pre-launch: no token is deployed yet.",
    url: "/",
    siteName: "SAYDAM",
    images: [
      {
        url: "/social-header.png",
        width: 1500,
        height: 500,
        alt: "SAYDAM glass frog — Nothing hidden. Just meme.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAYDAM — Nothing hidden. Just meme.",
    description:
      "A proof-first community meme on Base. Pre-launch: no token is deployed yet.",
    creator: "@SaydamOnBase",
    images: ["/social-header.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
