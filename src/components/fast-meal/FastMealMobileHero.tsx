"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { useSectionNavigation } from "../SectionNavigation";
import { MobileMenuOverlay } from "../MobileMenuOverlay";
import { HeaderLogoLink } from "../HeaderLogoLink";
import { mobileHeaderLayoutClass } from "../HeaderLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function FastMealMobileHero() {
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
      aria-labelledby="fast-meal-mobile-title"
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
          aria-controls="fast-meal-mobile-menu"
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
          id="fast-meal-mobile-menu"
          onNavigate={navigateToSection}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <div className="relative z-10 mx-7 mt-[134px] flex flex-col items-start gap-4">
        <h1
          id="fast-meal-mobile-title"
          className="text-[28px] leading-normal font-semibold whitespace-nowrap text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
        >
          Fast Meal
        </h1>
        <p className="w-full text-[16px] leading-7 font-medium text-[#ededed]">
          Point of Sale (POS) App
        </p>
      </div>

      <div className="relative z-10 mt-10 ml-3 aspect-[378/310] w-[calc(100%-24px)] rounded-[24px]">
        <div className="absolute top-[0.129%] left-1/2 h-full w-full -translate-x-1/2 overflow-hidden rounded-[24px] bg-white">
          <div className="absolute top-1/2 left-1/2 aspect-[506.44/378.197] w-[133.979%] -translate-x-1/2 -translate-y-[49.97%] overflow-hidden bg-[#111113]">
            <div className="absolute top-[-1.756%] left-[-9.788%] h-[106.52%] w-[119.32%]">
              <Image
                src="/fast-meal/hero-mobile-base.png"
                alt="Fast Meal POS dashboard arayüzü"
                fill
                priority
                sizes="(max-width: 767px) 160vw, 0px"
                className="object-cover"
              />
              <Image
                src="/fast-meal/hero-mobile-overlay.png"
                alt=""
                fill
                priority
                aria-hidden="true"
                sizes="(max-width: 767px) 160vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Image
          src="/fast-meal/hero-mobile-mockup.png"
          alt=""
          width={1480}
          height={987}
          priority
          aria-hidden="true"
          sizes="(max-width: 767px) 149.53vw, 0px"
          className="pointer-events-none absolute top-1/2 left-[49.889%] z-20 h-[129.315%] w-[159.024%] max-w-none -translate-x-1/2 -translate-y-[48.793%] object-fill"
        />
      </div>
    </section>
  );
}
