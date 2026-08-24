import Image from "next/image";
import { Montserrat } from "next/font/google";
import ctaStyles from "../fast-meal/FastMealProjectPresentation.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function CloudlineProjectPresentation() {
  return (
    <section
      aria-labelledby="cloudline-project-presentation-title"
      className={`${montserrat.className} hidden h-[5002.075px] min-w-[1440px] bg-black px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="cloudline-project-presentation-title"
            className="w-full text-[24px] leading-7 font-semibold text-white"
          >
            Proje Sunumu
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Cloudline’ın görsel dili, temel ekranları ve hava durumu verilerini
            sunma biçimini bir araya getiren kapsamlı proje sunumu. Uygulamanın
            genel yapısını, bilgi hiyerarşisini ve arayüz detaylarını bütün
            olarak inceleyebilirsin.
          </p>
        </div>

        <div className="h-[4443.075px] w-full overflow-hidden rounded-[36px] bg-[#101010]">
          <Image
            src="/cloudline/project-presentation/cloudline-presentation.png"
            alt="Cloudline kapsamlı proje sunumu"
            width={2080}
            height={8887}
            unoptimized
            className="h-full w-full object-fill"
          />
        </div>

        <a
          href="https://www.behance.net/gallery/244427611/Cloudline-Weather-App"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaStyles.behanceCta} flex h-[52px] w-full items-center justify-center gap-1 rounded-[999px] px-6 py-5 text-[16px] leading-none font-normal whitespace-nowrap text-white`}
        >
          <span>Behance’de Görüntüle</span>
          <span aria-hidden="true" className={ctaStyles.behanceArrow} />
        </a>
      </div>
    </section>
  );
}
