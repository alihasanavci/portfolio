import Image from "next/image";
import { Montserrat } from "next/font/google";
import footerStyles from "../Footer.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const externalLinkClass =
  `${footerStyles.link} inline-block`;

export function FastMealFooter() {
  return (
    <footer
      className={`${montserrat.className} hidden h-[210px] w-full min-w-[1440px] bg-black px-[200px] py-20 md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-10">
        <Image
          src="/fast-meal/footer-divider.svg"
          alt=""
          width={1040}
          height={1}
          unoptimized
          className="h-px w-full"
        />

        <div className="flex w-full items-center justify-between text-[14px] leading-7 font-medium tracking-[0.28px] text-[#ededed]">
          <p className="opacity-50 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            © 2026 Ali Hasan Avcı. Tüm hakları saklıdır.
          </p>

          <nav
            aria-label="Fast Meal footer bağlantıları"
            className="flex items-center gap-4"
          >
            <a
              href="https://www.behance.net/alihasanavci"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              Behance
            </a>
            <span aria-hidden="true" className="opacity-50">
              *
            </span>
            <a
              href="https://www.linkedin.com/in/alihasanavci/"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="opacity-50">
              *
            </span>
            <a
              href="/ali-hasan-avci-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
