"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

function clearUrlHash() {
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}

export function scrollToSection(sectionId: string, mobileOffset = 94) {
  clearUrlHash();

  requestAnimationFrame(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = window.matchMedia("(max-width: 767px)").matches
      ? mobileOffset
      : 0;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  });
}

type SectionScrollButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
> & {
  sectionId: string;
  children: ReactNode;
};

export function SectionScrollButton({
  sectionId,
  children,
  ...props
}: SectionScrollButtonProps) {
  return (
    <button type="button" onClick={() => scrollToSection(sectionId)} {...props}>
      {children}
    </button>
  );
}
