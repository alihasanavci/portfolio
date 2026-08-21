"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const navigationItems = [
  { label: "Hakkımda", href: "#hakkimda", width: 74 },
  { label: "Deneyimler", href: "#deneyimler", width: 83 },
  { label: "Projeler", href: "#projeler", width: 56 },
  { label: "Beceriler", href: "#beceriler", width: 64 },
  { label: "İletişim", href: "#iletisim", width: 53 },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="fixed inset-x-0 top-0 z-40 flex h-[94px] w-full items-center justify-between bg-black px-7 py-8 md:hidden">
        <a href="#" aria-label="Ali Hasan Avcı ana sayfa">
          <Image
            src="/logo.svg"
            alt="Ali Hasan Avcı"
            width={168}
            height={32}
            priority
            className="h-[32.047px] w-[168.113px]"
          />
        </a>

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
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigasyon"
          className={`${montserrat.className} fixed inset-0 z-50 h-dvh w-full overflow-y-auto bg-black text-white md:hidden`}
        >
          <div className="flex h-[94px] w-full items-center justify-between px-7 py-8">
            <a
              href="#"
              aria-label="Ali Hasan Avcı ana sayfa"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="Ali Hasan Avcı"
                width={168}
                height={32}
                priority
                className="h-[32.047px] w-[168.113px]"
              />
            </a>

            <span aria-hidden="true" className="size-[30px]" />
          </div>

          <div className="absolute inset-x-7 top-[134px] bottom-10 flex flex-col items-start justify-between pb-20">
            <nav aria-label="Mobil ana navigasyon">
              <ul className="flex flex-col items-start gap-10 text-[20px] leading-[normal] font-medium">
                {navigationItems.map((item) => (
                  <li key={`mobile-${item.href}`}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="transition-opacity duration-300 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Sosyal bağlantılar"
              className="flex w-full flex-col items-start gap-5 text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed]"
            >
              <a
                href="https://www.behance.net/alihasanavci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
              >
                <span>Behance</span>
                <Image
                  src="/contact-arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className="size-[18px] -rotate-135"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alihasanavci/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
              >
                <span>Linkedln</span>
                <Image
                  src="/contact-arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className="size-[18px] -rotate-135"
                />
              </a>
              <a
                href="/ali-hasan-avci-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[25px] items-center opacity-50"
              >
                CV
              </a>
            </nav>
          </div>
        </div>
      )}

      <header className="mx-auto hidden h-[99px] w-full max-w-[1440px] items-center justify-between px-[200px] md:flex">
        <a href="#" aria-label="Ali Hasan Avcı ana sayfa">
          <Image
            src="/logo.svg"
            alt="Ali Hasan Avcı"
            width={225}
            height={43}
            priority
            className="h-[42.973px] w-[225.265px]"
          />
        </a>

        <nav aria-label="Ana navigasyon">
          <ul className="flex items-center gap-10 whitespace-nowrap text-[14px] leading-normal font-medium text-white">
            {navigationItems.map((item) => (
              <li key={item.href} style={{ width: item.width }}>
                <a
                  href={item.href}
                  className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
