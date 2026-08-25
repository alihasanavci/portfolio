"use client";

import { useEffect, useState } from "react";
import { useSectionNavigation } from "./SectionNavigation";
import styles from "./Header.module.css";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { HeaderLogoLink } from "./HeaderLogoLink";
import {
  desktopHeaderLayoutClass,
  desktopNavigationListClass,
  headerNavigationItems,
  mobileHeaderLayoutClass,
} from "./HeaderLayout";
import { lockBodyScroll } from "./bodyScrollLock";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useSectionNavigation();

  function navigateToSection(sectionId: string, closeMenu = false) {
    if (closeMenu) setIsMenuOpen(false);
    navigate(sectionId);
  }

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const unlockBodyScroll = lockBodyScroll();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
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
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      <header className={desktopHeaderLayoutClass}>
        <HeaderLogoLink />

        <nav aria-label="Ana navigasyon">
          <ul className={desktopNavigationListClass}>
            {headerNavigationItems.map((item) => (
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
