import Image from "next/image";
import { Fragment_Mono, Montserrat } from "next/font/google";
import styles from "./About.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function About() {
  return (
    <section id="hakkimda" className={`${montserrat.className} h-auto w-full bg-[#fafafa] md:h-[959px]`}>
      <div className="flex h-full w-full flex-col items-start gap-10 px-7 py-10 md:hidden">
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/about-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap text-[#828282] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Hakkımda
              </p>
            </div>

            <h2 className="w-full text-[28px] leading-[normal] font-semibold tracking-normal text-black [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Estetikten fazlası, deneyimde yalın.
            </h2>
          </div>

          <div className="w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            <p>
              Web ve mobil ürünler için sade, anlaşılır ve görsel açıdan güçlü
              arayüzler tasarlayan bir UI/UX Designer’ım. Tasarım sürecinde
              kullanıcı ihtiyaçlarını, iş hedeflerini ve ürün gereksinimlerini
              birlikte değerlendirerek yalnızca iyi görünen değil, kullanımı
              kolay ve tutarlı dijital deneyimler oluşturmaya odaklanıyorum.
            </p>
            <p className="mt-7">
              Bir projeyi ele alırken içeriğin nasıl yapılandırılacağını,
              kullanıcıların ihtiyaç duydukları bilgi ve işlemlere nasıl
              ulaşacağını ve deneyimin farklı ekranlarda nasıl devam edeceğini
              bütüncül şekilde düşünüyorum. Web siteleri ve mobil uygulamalar
              için arayüzler oluşturuyor; düzenli component yapıları ve design
              system’lar hazırlayarak tasarımların tutarlı, ölçeklenebilir ve
              geliştiriciye aktarılabilir olmasına önem veriyorum.
            </p>
            <p className="mt-7">
              Grafik tasarım deneyimim ise tipografi, renk ve marka kimliği gibi
              görsel unsurları dijital ürünlere daha güçlü biçimde taşımama katkı
              sağlıyor. Her projede kullanıcı deneyimiyle markanın görsel dilini
              doğru noktada buluşturmayı ve ortaya işlevsel, tutarlı ve karakter
              sahibi bir ürün çıkarmayı hedefliyorum.
            </p>
          </div>
        </div>

        <div className="relative aspect-[346/500] w-full shrink-0 overflow-hidden rounded-[24px] border border-[#e4e4e4] bg-[#f7f7f7]">
          <Image
            src="/about-photo.png"
            alt="Ali Hasan Avcı"
            fill
            sizes="(max-width: 767px) calc(100vw - 56px), 376px"
            className={`${styles.photo} object-cover`}
          />

          <div className="pointer-events-none absolute inset-x-[19px] bottom-[19px] flex flex-col items-start gap-4 rounded-[16px] border border-[#e4e4e4] bg-white px-5 py-6 leading-7 backdrop-blur-[7px]">
            <p className="text-[16px] font-semibold tracking-[0.32px] whitespace-nowrap text-black [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Ali Hasan Avcı
            </p>
            <p className={`${fragmentMono.className} text-[12px] font-normal whitespace-nowrap text-[#828282] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]`}>
              UI/UX DESIGNER * WEB &amp; MOBILE
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden h-full w-full max-w-[1440px] items-start gap-[60px] px-[200px] py-[120px] md:flex">
        <div className="relative h-[500px] w-[376px] shrink-0 overflow-hidden rounded-[24px] border border-[#e4e4e4] bg-[#f7f7f7]">
          <Image
            src="/about-photo.png"
            alt="Ali Hasan Avcı"
            width={376}
            height={500}
            className={`${styles.photo} absolute inset-0 h-full w-full object-cover object-center`}
          />

          <div className="pointer-events-none absolute bottom-[19px] left-[19px] flex h-[83px] w-[336px] flex-col items-start gap-4 rounded-[16px] border border-[#e4e4e4] bg-white px-5 py-6 leading-7 backdrop-blur-[7px]">
            <p className="text-[16px] font-semibold tracking-[0.32px] whitespace-nowrap text-black [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Ali Hasan Avcı
            </p>
            <p className={`${fragmentMono.className} text-[12px] font-normal whitespace-nowrap text-[#828282] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]`}>
              UI/UX DESIGNER * WEB &amp; MOBILE
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-10 pt-5">
          <div className="flex h-[144px] flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/about-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap text-[#828282] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Hakkımda
              </p>
            </div>

            <h2 className="flex h-[88px] flex-col items-start gap-5 text-[48px] leading-normal font-semibold whitespace-nowrap text-black">
              <span className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Estetikten fazlası,
              </span>
              <span className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                deneyimde yalın.
              </span>
            </h2>
          </div>

          <div className="h-[515px] w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            <p>
              Web ve mobil ürünler için sade, anlaşılır ve görsel açıdan güçlü
              arayüzler tasarlayan bir UI/UX Designer’ım. Tasarım sürecinde
              kullanıcı ihtiyaçlarını, iş hedeflerini ve ürün gereksinimlerini
              birlikte değerlendirerek yalnızca iyi görünen değil, kullanımı
              kolay ve tutarlı dijital deneyimler oluşturmaya odaklanıyorum.
            </p>
            <p className="mt-7">
              Bir projeyi ele alırken içeriğin nasıl yapılandırılacağını,
              kullanıcıların ihtiyaç duydukları bilgi ve işlemlere nasıl
              ulaşacağını ve deneyimin farklı ekranlarda nasıl devam edeceğini
              bütüncül şekilde düşünüyorum. Web siteleri ve mobil uygulamalar
              için arayüzler oluşturuyor; düzenli component yapıları ve design
              system’lar hazırlayarak tasarımların tutarlı, ölçeklenebilir ve
              geliştiriciye aktarılabilir olmasına önem veriyorum.
            </p>
            <p className="mt-7">
              Grafik tasarım deneyimim ise tipografi, renk ve marka kimliği gibi
              görsel unsurları dijital ürünlere daha güçlü biçimde taşımama katkı
              sağlıyor. Her projede kullanıcı deneyimiyle markanın görsel dilini
              doğru noktada buluşturmayı ve ortaya işlevsel, tutarlı ve karakter
              sahibi bir ürün çıkarmayı hedefliyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
