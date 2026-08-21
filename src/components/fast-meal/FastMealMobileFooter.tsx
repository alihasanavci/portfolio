import { Montserrat } from "next/font/google";
import footerStyles from "../Footer.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const linkClass =
  `${footerStyles.link} inline-block`;

export function FastMealMobileFooter() {
  return (
    <footer
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-black px-7 py-10 md:hidden`}
    >
      <div aria-hidden="true" className="h-px w-full bg-[#262626]" />

      <div className="flex w-full flex-col items-center gap-10 text-center text-[14px] leading-7 font-medium tracking-[0.28px] text-[#ededed]">
        <nav
          aria-label="Fast Meal mobil footer bağlantıları"
          className="flex max-w-full flex-nowrap items-center justify-center gap-4"
        >
          <a
            href="https://www.behance.net/alihasanavci"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
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
            className={linkClass}
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
            className={linkClass}
          >
            CV
          </a>
        </nav>

        <p className="max-w-full opacity-50 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          © 2026 Ali Hasan Avcı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
