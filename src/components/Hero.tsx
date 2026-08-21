import Image from "next/image";
import { Montserrat } from "next/font/google";
import buttonStyles from "./Button.module.css";
import { SectionScrollButton } from "./SectionScrollButton";

const montserratRegular = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export function Hero() {
  return (
    <section
      aria-label="Giriş"
      className={`${montserratRegular.className} absolute inset-0 overflow-hidden bg-black`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute top-[385px] left-1/2 z-0 h-[493px] w-[877px] max-w-none -translate-x-1/2 object-cover md:top-[-173px] md:left-0 md:h-[1201px] md:w-[2135px] md:translate-x-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-[128px] left-7 z-10 flex w-[calc(100%_-_56px)] max-w-[346px] flex-col items-start gap-9 md:top-[208px] md:left-[200px] md:w-[565px] md:max-w-none">
        <div className="flex h-11 w-[200px] items-center gap-2.5 rounded-full border border-white/16 bg-[#0a0a0a]/50 px-5">
          <Image
            src="/hero-svg-4.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
            className="size-5"
          />
          <span className="text-[14px] leading-[58px] font-normal whitespace-nowrap text-white">
            Yeni Projelere Açık
          </span>
        </div>

        <h1
          id="hero-title-mobile"
          className="text-[28px] leading-[33px] font-normal tracking-normal text-white md:hidden [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
        >
          Kullanıcı deneyimiyle marka kimliğini bir araya getiren dijital
          ürünler tasarlayan bir UI/UX Designer’ım.
        </h1>

        <h1
          id="hero-title-desktop"
          className="hidden h-[178px] text-[40px] leading-[50px] font-normal tracking-normal whitespace-nowrap text-white md:block [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
        >
          Kullanıcı deneyimiyle marka
          <br />
          kimliğini bir araya getiren
          <br />
          dijital ürünler tasarlayan
          <br />
          bir UI/UX Designer’ım.
        </h1>

        <div className="flex w-full items-center gap-[clamp(4px,4vw,16px)]">
          <SectionScrollButton
            sectionId="projeler"
            className={`${buttonStyles.button} ${buttonStyles.primary} flex h-[51px] w-[clamp(112px,32.59vw,131px)] shrink-0 items-center justify-center rounded-full px-4 text-[16px] leading-normal font-normal whitespace-nowrap min-[402px]:px-6`}
          >
            <span>Projelerim</span>
          </SectionScrollButton>

          <SectionScrollButton
            sectionId="iletisim"
            className={`${buttonStyles.button} ${buttonStyles.secondary} flex h-[52px] min-w-0 flex-1 items-center justify-center gap-1 rounded-full px-2 text-[16px] leading-normal font-normal whitespace-nowrap min-[402px]:w-[181.456px] min-[402px]:flex-none min-[402px]:px-6`}
          >
            İletişime Geç
            <span className="flex size-[25.456px] items-center justify-center">
              <span className="flex size-[18px] -rotate-135 items-center justify-center overflow-hidden">
                <svg aria-hidden="true" className="size-[11.7px]" viewBox="0 0 11.7 11.7" fill="none">
                  <path d="M5.85.6v10.5M.6 5.85l5.25 5.25 5.25-5.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </SectionScrollButton>
        </div>
      </div>
    </section>
  );
}
