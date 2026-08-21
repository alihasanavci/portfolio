import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  mobileCvLinkClass,
  mobileNavigationLinkClass,
  mobileSocialLinkClass,
} from "./HeaderInteractions";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const navigationItems = [
  { label: "Hakkımda", sectionId: "hakkimda" },
  { label: "Deneyimler", sectionId: "deneyimler" },
  { label: "Projeler", sectionId: "projeler" },
  { label: "Beceriler", sectionId: "beceriler" },
  { label: "İletişim", sectionId: "iletisim" },
] as const;

type MobileMenuOverlayProps = {
  id: string;
  onNavigate: (sectionId: string) => void;
  onNavigateHome: () => void;
};

export function MobileMenuOverlay({
  id,
  onNavigate,
  onNavigateHome,
}: MobileMenuOverlayProps) {
  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Mobil navigasyon"
      className={`${montserrat.className} fixed inset-0 z-50 h-dvh w-full overflow-y-auto bg-black text-white md:hidden`}
    >
      <div className="flex h-[94px] w-full items-center justify-between px-7 py-8">
        <button
          type="button"
          aria-label="Ali Hasan Avcı ana sayfa"
          onClick={onNavigateHome}
        >
          <Image
            src="/logo.svg"
            alt="Ali Hasan Avcı"
            width={168}
            height={32}
            priority
            className="h-[32.047px] w-[168.113px]"
          />
        </button>

        <span aria-hidden="true" className="size-[30px]" />
      </div>

      <div className="absolute inset-x-7 top-[134px] bottom-10 flex flex-col items-start justify-between pb-20">
        <nav aria-label="Mobil ana navigasyon">
          <ul className="flex flex-col items-start gap-10 text-[20px] leading-[normal] font-medium">
            {navigationItems.map((item) => (
              <li key={`mobile-${item.sectionId}`}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.sectionId)}
                  className={mobileNavigationLinkClass}
                >
                  {item.label}
                </button>
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
            className={mobileSocialLinkClass}
          >
            <span>Behance</span>
            <Image src="/contact-arrow.svg" alt="" width={18} height={18} aria-hidden="true" className="size-[18px] -rotate-135" />
          </a>
          <a
            href="https://www.linkedin.com/in/alihasanavci/"
            target="_blank"
            rel="noopener noreferrer"
            className={mobileSocialLinkClass}
          >
            <span>Linkedln</span>
            <Image src="/contact-arrow.svg" alt="" width={18} height={18} aria-hidden="true" className="size-[18px] -rotate-135" />
          </a>
          <a
            href="/ali-hasan-avci-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={mobileCvLinkClass}
          >
            CV
          </a>
        </nav>
      </div>
    </div>
  );
}
