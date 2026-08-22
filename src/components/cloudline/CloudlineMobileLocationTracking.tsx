import Image from "next/image";
import { Montserrat } from "next/font/google";

import styles from "./CloudlineMobileLocationTracking.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineMobileLocationTracking() {
  return (
    <section
      aria-labelledby="cloudline-mobile-location-tracking-title"
      className={`${montserrat.className} ${styles.section} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 pt-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 break-words">
        <h2
          id="cloudline-mobile-location-tracking-title"
          className="w-full text-[20px] leading-6 font-semibold text-black"
        >
          Dünyanın Her Yerini Tek Dokunuşla Takip Et
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Kolay lokasyon yönetimi sayesinde bulunduğun veya merak ettiğin
          herhangi bir konumu saniyeler içinde ekleyebilir, favori
          lokasyonlarını kaydedebilir ve hava durumunu kesintisiz şekilde takip
          edebilirsin. Arama ve konum yönetimi yapısı, farklı şehirler arasında
          hızlı ve zahmetsiz geçiş yapacak şekilde tasarlandı.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.innerCard}>
          <Image
            src="/cloudline/weather-overview/main-screen.png"
            alt="Cloudline lokasyon takibi sunum ekranı"
            width={337}
            height={337}
            sizes="(max-width: 767px) 98vw, 337px"
            className={styles.screen}
          />
        </div>
      </div>
    </section>
  );
}
