import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./CloudlineMobileProjectInfo.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const groupClass = "flex w-full flex-col items-start gap-5";
const headingClass =
  "w-full text-[20px] leading-6 font-semibold text-black";
const bodyClass =
  "w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";
const listClass =
  "flex w-full list-disc flex-col items-start gap-5 pl-6 text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080]";
const listItemClass =
  "[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";

export function CloudlineMobileProjectInfo() {
  return (
    <section
      aria-label="Cloudline mobil proje bilgileri"
      className={`${montserrat.className} ${styles.section} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 pt-10 md:hidden`}
    >
      <div className={groupClass}>
        <h2 className={headingClass}>Proje Hakkında</h2>
        <p className={bodyClass}>
          Cloudline, kullanıcıların dünyanın farklı konumlarındaki hava
          durumunu hızlı, anlaşılır ve güvenilir biçimde takip edebilmesi için
          tasarladığım mobil bir hava durumu uygulamasıdır. Sıcaklık, hissedilen
          sıcaklık, yağış ihtimali, nem, rüzgâr ve farklı hava koşulları gibi
          temel verileri sade ve kolay okunabilir bir arayüzde bir araya
          getirir. Projede amaç, gereksiz bilgi yoğunluğundan kaçınarak günlük
          planlama için gerçekten ihtiyaç duyulan verilere hızlı erişim
          sağlayan temiz ve kullanıcı dostu bir mobil deneyim oluşturmaktı.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Misyon</h2>
        <p className={bodyClass}>
          Karmaşık ve yoğun hava durumu verilerini sadeleştirerek kullanıcıların
          ihtiyaç duydukları bilgilere hızlıca ulaşabileceği, anlaşılır ve gözü
          yormayan bir mobil deneyim oluşturmak.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Katkılarım</h2>
        <p className={bodyClass}>
          Cloudline’ın UI/UX tasarım sürecini baştan sona ele alarak bilgi
          hiyerarşisi, navigasyon yapısı ve temel ekranların arayüzlerini
          tasarladım. Sıcaklık, yağış, nem, rüzgâr ve diğer hava verilerinin
          kolay okunabilir biçimde sunulmasına odaklandım. Görsel hiyerarşi,
          component yapıları ve genel görsel dil üzerinde çalışarak uygulamanın
          sade, tutarlı ve hızlı kullanılabilir bir deneyim sunmasını
          hedefledim.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Kapsam</h2>
        <ul className={listClass}>
          <li className={listItemClass}>UI/UX Design</li>
          <li className={listItemClass}>Mobile App Design</li>
          <li className={listItemClass}>Visual Design</li>
        </ul>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Rolüm</h2>
        <ul className={listClass}>
          <li className={listItemClass}>UI/UX Design</li>
          <li className={listItemClass}>Visual Direction</li>
        </ul>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Araçlar</h2>
        <div className="flex items-start gap-3">
          <Image
            src="/cloudline/figma-icon.svg"
            alt="Figma"
            width={48}
            height={48}
            className="size-12"
          />
          <Image
            src="/cloudline/photoshop-icon.svg"
            alt="Adobe Photoshop"
            width={48}
            height={48}
            className="size-12"
          />
        </div>
      </div>
    </section>
  );
}
