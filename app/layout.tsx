import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["600", "700"],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = Nunito_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAVİ İLETİŞİM | Zeytinburnu Para Transferi",
  description:
    "KAVİ İLETİŞİM, Zeytinburnu'nda para transferi dükkânıdır. KoronaPay, Ria, UPT, Kwikpay, MoneyGram ve Intel Express ile yurt dışına para gönderin veya yurt dışından para alın.",
};

export const viewport: Viewport = { themeColor: "#4C5D4A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
