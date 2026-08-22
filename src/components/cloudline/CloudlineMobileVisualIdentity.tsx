import Image from "next/image";
import { Montserrat } from "next/font/google";

import styles from "./CloudlineMobileVisualIdentity.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineMobileVisualIdentity() {
  return (
    <section
      aria-labelledby="cloudline-mobile-visual-identity-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 break-words">
        <h2
          id="cloudline-mobile-visual-identity-title"
          className="w-full text-[20px] leading-6 font-semibold text-black"
        >
          Logo &amp; Visual Identity
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Cloudline’ın görsel kimliği, hava durumunu sade ve doğrudan temsil
          eden bulut formu üzerine oluşturuldu. Minimal çizgiler ve siyah-beyaz
          kullanım, markaya modern ve güvenilir bir karakter kazandırırken
          uygulamanın genel arayüz diliyle tutarlı bir bütünlük sağlıyor.
        </p>
      </div>

      <div className={styles.visualGroup}>
        <div className={styles.presentation}>
          <Image
            src="/cloudline/visual-identity/cloudline-appstore-v2.png"
            alt="Cloudline App Store marka sunumu"
            fill
            unoptimized
            sizes="calc(100vw - 56px)"
            className={styles.presentationImage}
          />
        </div>

        <div className={styles.logoRow}>
          <div className={`${styles.logoCard} ${styles.lightCard}`}>
            <Image
              src="/cloudline/visual-identity/logo-dark.svg"
              alt="Koyu Cloudline logosu"
              width={41}
              height={41}
              className={styles.logo}
            />
          </div>
          <div className={`${styles.logoCard} ${styles.darkCard}`}>
            <Image
              src="/cloudline/visual-identity/logo-light.svg"
              alt="Açık Cloudline logosu"
              width={41}
              height={41}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
