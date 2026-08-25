"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { HeaderLogoLink } from "../HeaderLogoLink";
import { mobileHeaderLayoutClass } from "../HeaderLayout";
import { MobileMenuOverlay } from "../MobileMenuOverlay";
import { useSectionNavigation } from "../SectionNavigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function CloudlineMobileHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useSectionNavigation();

  function navigateToSection(sectionId: string) {
    setIsMenuOpen(false);
    navigate(sectionId);
  }

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <section
      aria-labelledby="cloudline-mobile-title"
      className={`${montserrat.className} relative w-full overflow-hidden bg-black md:hidden`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[155px] bg-[#fafafa]" />

      <header
        className={`${mobileHeaderLayoutClass} ${
          isMenuOpen ? "z-[60]" : "z-40"
        }`}
      >
        <HeaderLogoLink mobile />

        <button
          type="button"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="cloudline-mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`flex size-[30px] items-center justify-center ${
            isMenuOpen ? "fixed top-8 right-7 z-[60]" : "relative"
          }`}
        >
          <span aria-hidden="true" className="relative block size-[30px]">
            <span
              className={`absolute top-[6px] left-[3px] h-[2px] w-[24px] rounded-[15px] bg-white transition-transform duration-300 ease-in-out motion-reduce:duration-0 ${
                isMenuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-[14px] left-[3px] h-[2px] w-[24px] rounded-[15px] bg-white transition-[opacity,transform] duration-300 ease-in-out motion-reduce:duration-0 ${
                isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute top-[22px] h-[2px] rounded-[15px] bg-white transition-[left,width,transform] duration-300 ease-in-out motion-reduce:duration-0 ${
                isMenuOpen
                  ? "left-[3px] w-[24px] -translate-y-[8px] -rotate-45"
                  : "left-[10px] w-[17px]"
              }`}
            />
          </span>
        </button>
      </header>

      {isMenuOpen && (
        <MobileMenuOverlay
          id="cloudline-mobile-menu"
          onNavigate={navigateToSection}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <div className="relative z-10 mx-7 pt-[134px]">
        <div className="flex w-full flex-col items-start gap-4">
          <h1
            id="cloudline-mobile-title"
            className="text-[28px] leading-normal font-semibold whitespace-nowrap text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
          >
            Cloudline Weather
          </h1>
          <p className="w-full text-[16px] leading-7 font-medium text-[#ededed]">
            Mobile Weather Application
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-[40.403px] ml-3 aspect-[378/310] w-[calc(100%-24px)] overflow-hidden rounded-[36px] bg-white">
        <div className="absolute top-[-51.097%] left-[-16.138%] h-[170.645%] w-[132.275%]">
          <Image
            src="/cloudline/mobile-hero/hero-image.png"
            alt="Cloudline mobil hava durumu uygulaması sunumu"
            width={3186}
            height={4096}
            loading="lazy"
            sizes="(max-width: 767px) 133vw, 0px"
            className="absolute top-0 left-[-0.02%] h-[121.44%] w-[100.04%] max-w-none object-fill"
          />
        </div>
      </div>
    </section>
  );
}
