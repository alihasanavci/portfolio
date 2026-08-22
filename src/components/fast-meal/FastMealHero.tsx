import Image from "next/image";
import { Montserrat } from "next/font/google";
import headerStyles from "../Header.module.css";
import { HeaderLogoLink } from "../HeaderLogoLink";
import { SectionNavigationButton } from "../SectionNavigation";
import {
  desktopHeaderLayoutClass,
  desktopNavigationListClass,
  headerNavigationItems,
} from "../HeaderLayout";
import { FastMealMobileHero } from "./FastMealMobileHero";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const desktopContainer =
  "absolute left-1/2 w-[1240px] -translate-x-1/2";

export function FastMealHero() {
  return (
    <>
      <FastMealMobileHero />
      <section
        aria-labelledby="fast-meal-title"
        className={`${montserrat.className} relative hidden h-[1001px] min-w-[1440px] overflow-visible bg-black md:block`}
      >
      <header className={`${desktopHeaderLayoutClass} absolute top-0 left-1/2 -translate-x-1/2`}>
          <HeaderLogoLink />

          <nav aria-label="Ana navigasyon">
            <ul className={desktopNavigationListClass}>
              {headerNavigationItems.map((item) => (
                <li key={item.sectionId} style={{ width: item.width }}>
                  <SectionNavigationButton
                    sectionId={item.sectionId}
                    className={headerStyles.desktopNavItem}
                  >
                    {item.label}
                  </SectionNavigationButton>
                </li>
              ))}
            </ul>
          </nav>
      </header>

      <div className={`${desktopContainer} top-[99px]`}>
        <div className="flex w-full flex-col items-start justify-center gap-5 px-[100px] py-[120px] whitespace-nowrap">
          <h1
            id="fast-meal-title"
            className="text-[48px] leading-normal font-semibold text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
          >
            Fast Meal
          </h1>
          <p className="text-[24px] leading-7 font-medium text-[#ededed]">
            Point of Sale (POS) App
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-0 h-[290px] w-screen -translate-x-1/2 bg-[#fafafa]" />

      <div
        className={`${desktopContainer} top-[421px] z-10 h-[580px] overflow-visible rounded-[24px]`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[24px] bg-white">
          <Image
            src="/fast-meal/hero-base.png"
            alt="Fast Meal POS dashboard arayüzü"
            fill
            priority
            sizes="1240px"
            className="object-cover"
          />
          <Image
            src="/fast-meal/hero-overlay.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="1240px"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute top-[-45px] left-[-120px] h-[703px] w-[1480px] overflow-hidden">
          <Image
            src="/fast-meal/hero-mockup.png"
            alt=""
            width={1480}
            height={987}
            priority
            aria-hidden="true"
            className="absolute top-[-19.06%] left-0 h-[140.4%] w-full max-w-none object-cover object-center"
          />
        </div>
      </div>
      </section>
    </>
  );
}
