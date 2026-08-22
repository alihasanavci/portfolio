import Image from "next/image";
import { Montserrat } from "next/font/google";
import ctaStyles from "../fast-meal/FastMealProjectPresentation.module.css";
import styles from "./CloudlineMobileProjectPresentation.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function CloudlineMobileProjectPresentation() {
  return (
    <section
      aria-labelledby="cloudline-mobile-project-presentation-title"
      className={`${montserrat.className} ${styles.section} flex w-full flex-col items-start gap-10 bg-black pt-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 px-7 break-words">
        <h2
          id="cloudline-mobile-project-presentation-title"
          className="w-full text-[20px] leading-6 font-semibold text-white"
        >
          Proje Sunumu
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Cloudline’ın görsel dili, temel ekranları ve hava durumu verilerini
          sunma biçimini bir araya getiren kapsamlı proje sunumu. Uygulamanın
          genel yapısını, bilgi hiyerarşisini ve arayüz detaylarını bütün olarak
          inceleyebilirsin.
        </p>
      </div>

      <div className="relative aspect-[402/1732.5403] w-full overflow-hidden bg-[#101010]">
        <Image
          src="/cloudline/project-presentation/cloudline-presentation-mobile.png"
          alt="Cloudline mobil kapsamlı proje sunumu"
          width={804}
          height={3466}
          unoptimized
          className="h-full w-full object-fill"
        />
      </div>

      <div className="flex h-[52px] w-full items-center justify-center">
        <a
          href="https://www.behance.net/gallery/244427611/Cloudline-Weather-App"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaStyles.behanceCta} flex h-[52px] w-[258.456px] items-center justify-center gap-1 rounded-[999px] px-6 py-5 text-[16px] leading-none font-normal whitespace-nowrap text-white`}
        >
          <span>Behance’de Görüntüle</span>
          <span aria-hidden="true" className={ctaStyles.behanceArrow} />
        </a>
      </div>
    </section>
  );
}
