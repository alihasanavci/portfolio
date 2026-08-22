import Image from "next/image";
import { Montserrat } from "next/font/google";

import styles from "./CloudlineMobileWeatherOverview.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineMobileWeatherOverview() {
  return (
    <section
      aria-labelledby="cloudline-mobile-weather-overview-title"
      className={`${montserrat.className} ${styles.section} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 pt-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 break-words">
        <h2
          id="cloudline-mobile-weather-overview-title"
          className="w-full text-[20px] leading-6 font-semibold text-black"
        >
          Net Bilgi, Sade Deneyim
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Cloudline ana ekranı, kullanıcının ihtiyaç duyduğu temel hava durumu
          verilerini karmaşık bir yapı oluşturmadan tek bakışta sunacak şekilde
          tasarlandı. Sıcaklık, hissedilen sıcaklık, saatlik tahmin ve yağış
          ihtimali gibi önemli bilgiler açık bir hiyerarşiyle öne çıkarılarak
          hızlı ve rahat bir kullanım deneyimi hedeflendi.
        </p>
      </div>

      <div className={styles.card}>
        <Image
          src="/cloudline/weather-overview/main-screen.png"
          alt="Cloudline ana hava durumu ekranı"
          width={337}
          height={337}
          sizes="(max-width: 767px) 98vw, 337px"
          className={styles.screen}
        />
      </div>
    </section>
  );
}
