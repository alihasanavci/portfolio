"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { desktopLogoClass, mobileLogoClass } from "./HeaderLayout";
import styles from "./HeaderLogoLink.module.css";

type HeaderLogoLinkProps = {
  mobile?: boolean;
  onActivate?: () => void;
};

export function HeaderLogoLink({ mobile = false, onActivate }: HeaderLogoLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onActivate?.();

    if (pathname !== "/") return;

    event.preventDefault();
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

  return (
    <Link
      href="/"
      aria-label="Ali Hasan Avcı ana sayfa"
      onClick={handleClick}
      className={`${styles.link} cursor-pointer`}
    >
      <Image
        src="/logo.svg"
        alt="Ali Hasan Avcı"
        width={mobile ? 157 : 189}
        height={mobile ? 30 : 36}
        priority
        className={mobile ? mobileLogoClass : desktopLogoClass}
      />
    </Link>
  );
}
