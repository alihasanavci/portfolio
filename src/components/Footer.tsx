import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./Footer.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const linkClass =
  `${styles.link} h-[10px] leading-[10px] whitespace-nowrap`;

const mobileLinkClass =
  `${styles.link} h-[10px] leading-[10px] whitespace-nowrap`;

export function Footer() {
  return (
    <footer
      className={`${montserrat.className} h-[180px] w-full bg-black px-7 py-10 text-[#ededed] md:h-[210px] md:px-[200px] md:py-20`}
    >
      <div className="flex w-full flex-col items-start gap-10 md:hidden">
        <div className="relative h-0 w-full shrink-0">
          <Image
            src="/footer-divider.svg"
            alt=""
            fill
            sizes="calc(100vw - 56px)"
            aria-hidden="true"
            className="absolute -top-px left-0 h-px w-full object-fill"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-10 text-[14px] leading-[10px] font-medium tracking-[0.28px]">
          <nav
            aria-label="Sosyal bağlantılar"
            className="flex h-[10px] max-w-full items-center justify-center gap-4"
          >
            <a
              href="https://www.behance.net/alihasanavci"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileLinkClass}
            >
              Behance
            </a>
            <span aria-hidden="true" className="h-1 w-1.5 leading-1 opacity-50">
              *
            </span>
            <a
              href="https://www.linkedin.com/in/alihasanavci/"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileLinkClass}
            >
              Linkedln
            </a>
          </nav>

          <p className="h-[10px] w-full text-center leading-[10px] whitespace-nowrap opacity-50">
            © 2026 Ali Hasan Avcı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      <div className="mx-auto hidden w-[1040px] flex-col items-start gap-10 md:flex">
        <div className="relative h-0 w-full shrink-0">
          <Image
            src="/footer-divider.svg"
            alt=""
            width={1040}
            height={1}
            aria-hidden="true"
            className="absolute -top-px left-0 h-px w-[1040px]"
          />
        </div>

        <div className="flex h-[10px] w-full items-center justify-between text-[14px] leading-[10px] font-medium tracking-[0.28px]">
          <p className="h-[10px] whitespace-nowrap opacity-50">
            © 2026 Ali Hasan Avcı. Tüm hakları saklıdır.
          </p>

          <nav
            aria-label="Sosyal bağlantılar"
            className="flex h-[10px] items-center gap-4"
          >
            <a
              href="https://www.behance.net/alihasanavci"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Behance
            </a>
            <span aria-hidden="true" className="h-1 w-1.5 leading-1 opacity-50">
              *
            </span>
            <a
              href="https://www.linkedin.com/in/alihasanavci/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Linkedln
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
