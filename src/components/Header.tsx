"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { scrollToSection } from "./SectionScrollButton";
import styles from "./Header.module.css";
import { MobileMenuOverlay } from "./MobileMenuOverlay";

const navigationItems = [
  { label: "Hakkımda", sectionId: "hakkimda", width: 74 },
  { label: "Deneyimler", sectionId: "deneyimler", width: 83 },
  { label: "Projeler", sectionId: "projeler", width: 56 },
  { label: "Beceriler", sectionId: "beceriler", width: 64 },
  { label: "İletişim", sectionId: "iletisim", width: 53 },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navigateToSection(sectionId: string, closeMenu = false) {
    if (closeMenu) setIsMenuOpen(false);
    scrollToSection(sectionId);
  }

  function navigateHome(closeMenu = false) {
    if (closeMenu) setIsMenuOpen(false);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
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
    <>
      <header
        className={`fixed inset-x-0 top-0 flex h-[94px] w-full items-center justify-between bg-black px-7 py-8 md:hidden ${
          isMenuOpen ? "z-[60]" : "z-40"
        }`}
      >
        <button type="button" aria-label="Ali Hasan Avcı ana sayfa" onClick={() => navigateHome()}>
          <Image
            src="/logo.svg"
            alt="Ali Hasan Avcı"
            width={168}
            height={32}
            priority
            className="h-[32.047px] w-[168.113px]"
          />
        </button>

        <button
          type="button"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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
          id="mobile-menu"
          onNavigate={(sectionId) => navigateToSection(sectionId, true)}
          onNavigateHome={() => navigateHome(true)}
        />
      )}

      <header className="mx-auto hidden h-[99px] w-full max-w-[1440px] items-center justify-between px-[200px] md:flex">
        <button type="button" aria-label="Ali Hasan Avcı ana sayfa" onClick={() => navigateHome()}>
          <Image
            src="/logo.svg"
            alt="Ali Hasan Avcı"
            width={225}
            height={43}
            priority
            className="h-[42.973px] w-[225.265px]"
          />
        </button>

        <nav aria-label="Ana navigasyon">
          <ul className="flex items-center gap-10 whitespace-nowrap text-[14px] leading-normal font-medium text-white">
            {navigationItems.map((item) => (
              <li key={item.sectionId} style={{ width: item.width }}>
                <button
                  type="button"
                  onClick={() => navigateToSection(item.sectionId)}
                  className={`${styles.desktopNavItem} [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
