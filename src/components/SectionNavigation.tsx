"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ButtonHTMLAttributes, type ReactNode } from "react";
import { scrollToSection } from "./SectionScrollButton";

const pendingSectionKey = "portfolio:pending-section";

export function useSectionNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const pendingSection = sessionStorage.getItem(pendingSectionKey);
    if (!pendingSection) return;

    sessionStorage.removeItem(pendingSectionKey);
    scrollToSection(pendingSection);
  }, [pathname]);

  function navigateToSection(sectionId: string) {
    if (pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    sessionStorage.setItem(pendingSectionKey, sectionId);
    router.push("/");
  }

  return navigateToSection;
}

type SectionNavigationButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick"
> & {
  sectionId: string;
  children: ReactNode;
};

export function SectionNavigationButton({
  sectionId,
  children,
  ...props
}: SectionNavigationButtonProps) {
  const navigateToSection = useSectionNavigation();

  return (
    <button
      type="button"
      onClick={() => navigateToSection(sectionId)}
      {...props}
    >
      {children}
    </button>
  );
}
