import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Ali Hasan Avcı — UI/UX Designer",
  description:
    "Web ve mobil ürünler için kullanıcı odaklı, sade ve güçlü arayüzler tasarlayan UI/UX Designer. Seçili projeler, deneyimler ve iletişim bilgileri.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
