import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./FastMealProjectPresentation.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function FastMealMobileProjectPresentation() {
  return (
    <section
      aria-labelledby="fast-meal-mobile-project-presentation-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-black py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 px-7 [word-break:break-word]">
        <h2
          id="fast-meal-mobile-project-presentation-title"
          className="w-full text-[20px] leading-normal font-semibold text-white"
        >
          Proje Sunumu
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Fast Meal’in görsel dili, arayüzleri ve temel kullanım senaryolarını
          bir araya getiren kapsamlı proje sunumu. Ürünün genel yapısını ve
          tasarım detaylarını bütün olarak inceleyebilirsin.
        </p>
      </div>

      <div className="relative aspect-[402/2216.027] w-full overflow-hidden bg-[#101010]">
        <Image
          src="/fast-meal/project-presentation-mobile.png"
          alt="Fast Meal kapsamlı proje sunumu"
          fill
          unoptimized
          sizes="100vw"
          className="object-fill"
        />
      </div>

      <div className="flex h-[52px] w-full items-center justify-center">
        <a
          href="https://www.behance.net/gallery/246283775/Fast-Meal-Point-of-Sale-(POS)-App"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.behanceCta} flex h-[52px] w-[258.456px] items-center justify-center gap-1 rounded-[999px] px-6 py-5 text-[16px] leading-none font-normal whitespace-nowrap text-white`}
        >
          <span>Behance’de Görüntüle</span>
          <span aria-hidden="true" className={styles.behanceArrow} />
        </a>
      </div>
    </section>
  );
}
