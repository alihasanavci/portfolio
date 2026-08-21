import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const groupClass = "flex w-full flex-col items-start gap-5";
const headingClass =
  "w-full text-[20px] leading-normal font-semibold text-black";
const bodyClass =
  "w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";
const listClass =
  "flex w-full list-disc flex-col items-start gap-5 pl-6 text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080]";
const listItemClass =
  "[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";

export function FastMealMobileProjectInfo() {
  return (
    <section
      aria-label="Fast Meal mobil proje bilgileri"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className={groupClass}>
        <h2 className={headingClass}>Proje Hakkında</h2>
        <p className={bodyClass}>
          Fast Meal, günlük restoran operasyonlarını sadeleştirmek ve servis
          verimliliğini artırmak amacıyla tasarlanan restoran odaklı bir POS
          sistemidir. Sipariş alma, ekip içi iletişim, satış raporlama ve sipariş
          yönetimi gibi temel özellikleri sade ve kullanımı kolay bir arayüzde
          bir araya getirir. Ürünün amacı, iş akışlarını hızlandırmak, müşteri
          memnuniyetini artırmak ve restoran işletmelerinin günlük
          operasyonlarını daha etkili şekilde yönetmesine yardımcı olmaktır.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Misyon</h2>
        <p className={bodyClass}>
          Restoranların günlük operasyonlarını daha hızlı, düzenli ve
          yönetilebilir hâle getiren; sipariş, mutfak ve satış takibini tek
          sistemde bir araya getiren kullanıcı dostu bir POS deneyimi
          oluşturmak.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Katkılarım</h2>
        <p className={bodyClass}>
          Projenin UI/UX tasarım sürecini üstlenerek farklı kullanıcı rollerinin
          ihtiyaçlarını tek bir ürün yapısında bir araya getirdim. Sipariş
          yönetimi, mutfak akışı ve yönetici dashboard’u gibi temel alanların
          bilgi yapısını ve arayüzlerini tasarladım. Görsel hiyerarşi, component
          yapıları ve genel marka dili üzerinde çalışarak ürünün sade, tutarlı
          ve kolay kullanılabilir bir deneyim sunmasına odaklandım.
        </p>
      </div>

      <div className={groupClass}>
        <h2 className={headingClass}>Kapsam</h2>
        <ul className={listClass}>
          <li className={listItemClass}>UI/UX Design</li>
          <li className={listItemClass}>Product Design</li>
          <li className={listItemClass}>Branding</li>
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
            src="/fast-meal/figma-icon.svg"
            alt="Figma"
            width={48}
            height={48}
            className="size-12"
          />
          <Image
            src="/fast-meal/photoshop-icon.svg"
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
