import Image from "next/image";
import { Montserrat } from "next/font/google";
import headerStyles from "../Header.module.css";
import { HeaderLogoLink } from "../HeaderLogoLink";
import {
  desktopHeaderLayoutClass,
  desktopNavigationListClass,
  headerNavigationItems,
} from "../HeaderLayout";
import { SectionNavigationButton } from "../SectionNavigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineHero() {
  return (
      <section
        aria-labelledby="cloudline-title"
        className={`${montserrat.className} relative hidden h-[1001px] min-w-[1440px] overflow-hidden bg-black md:block`}
      >
      <header
        className={`${desktopHeaderLayoutClass} absolute top-0 left-1/2 -translate-x-1/2`}
      >
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

      <div className="absolute top-[99px] left-1/2 z-10 flex w-[1040px] -translate-x-1/2 flex-col items-start justify-center gap-5 py-[120px] whitespace-nowrap">
        <h1
          id="cloudline-title"
          className="text-[48px] leading-normal font-semibold text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
        >
          Cloudline Weather
        </h1>
        <p className="text-[24px] leading-7 font-medium text-[#ededed]">
          Mobile Weather Application
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-0 h-[290px] bg-[#fafafa]" />

      <div className="absolute top-[421px] left-1/2 z-20 h-[580px] w-[1240px] -translate-x-1/2 overflow-hidden rounded-[36px] bg-white">
        <Image
          src="/cloudline/cloudline-hero-card.png"
          alt="Cloudline mobil hava durumu uygulaması sunumu"
          fill
          priority
          sizes="1240px"
          className="object-cover"
        />
      </div>
      </section>
  );
}
