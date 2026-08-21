import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const textBlockClass = "flex w-[658px] flex-col items-start gap-5";
const headingClass = "w-full text-[24px] leading-7 font-semibold text-black";
const bodyClass =
  "w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";
const detailGroupClass = "flex w-full flex-col items-start gap-5";
const detailItemClass =
  "list-disc leading-6 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]";

export function FastMealProjectInfo() {
  return (
    <section
      aria-label="Fast Meal proje bilgileri"
      className={`${montserrat.className} hidden h-[889px] w-full min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] items-start gap-20">
        <div className="flex w-[658px] shrink-0 flex-col items-start justify-center gap-20">
          <div className={textBlockClass}>
            <h2 className={headingClass}>Proje Hakkında</h2>
            <p className={bodyClass}>
              Fast Meal, günlük restoran operasyonlarını sadeleştirmek ve servis
              verimliliğini artırmak amacıyla tasarlanan restoran odaklı bir POS
              sistemidir. Sipariş alma, ekip içi iletişim, satış raporlama ve
              sipariş yönetimi gibi temel özellikleri sade ve kullanımı kolay
              bir arayüzde bir araya getirir. Ürünün amacı, iş akışlarını
              hızlandırmak, müşteri memnuniyetini artırmak ve restoran
              işletmelerinin günlük operasyonlarını daha etkili şekilde
              yönetmesine yardımcı olmaktır.
            </p>
          </div>

          <div className={textBlockClass}>
            <h2 className={headingClass}>Misyon</h2>
            <p className={bodyClass}>
              Restoranların günlük operasyonlarını daha hızlı, düzenli ve
              yönetilebilir hâle getiren; sipariş, mutfak ve satış takibini tek
              sistemde bir araya getiren kullanıcı dostu bir POS deneyimi
              oluşturmak.
            </p>
          </div>

          <div className={textBlockClass}>
            <h2 className={headingClass}>Katkılarım</h2>
            <p className={bodyClass}>
              Projenin UI/UX tasarım sürecini üstlenerek farklı kullanıcı
              rollerinin ihtiyaçlarını tek bir ürün yapısında bir araya
              getirdim. Sipariş yönetimi, mutfak akışı ve yönetici dashboard’u
              gibi temel alanların bilgi yapısını ve arayüzlerini tasarladım.
              Görsel hiyerarşi, component yapıları ve genel marka dili üzerinde
              çalışarak ürünün sade, tutarlı ve kolay kullanılabilir bir deneyim
              sunmasına odaklandım.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-10">
          <div className={detailGroupClass}>
            <h2 className={headingClass}>Kapsam</h2>
            <ul className="flex flex-col gap-5 pl-6 text-[16px] leading-6 font-medium tracking-[0.32px] whitespace-nowrap text-[#808080]">
              <li className={detailItemClass}>UI/UX Design</li>
              <li className={detailItemClass}>Product Design</li>
              <li className={detailItemClass}>Branding</li>
            </ul>
          </div>

          <div className={detailGroupClass}>
            <h2 className={headingClass}>Rolüm</h2>
            <ul className="flex flex-col gap-5 pl-6 text-[16px] leading-6 font-medium tracking-[0.32px] whitespace-nowrap text-[#808080]">
              <li className={detailItemClass}>UI/UX Design</li>
              <li className={detailItemClass}>Visual Direction</li>
            </ul>
          </div>

          <div className={detailGroupClass}>
            <h2 className={headingClass}>Araçlar</h2>
            <div className="flex items-start gap-3">
              <Image
                src="/fast-meal/figma-icon.svg"
                alt="Figma"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <Image
                src="/fast-meal/photoshop-icon.svg"
                alt="Adobe Photoshop"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
