import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealMobileSecureLogin() {
  return (
    <section
      aria-labelledby="fast-meal-mobile-secure-login-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 [word-break:break-word]">
        <h2
          id="fast-meal-mobile-secure-login-title"
          className="w-full text-[20px] leading-normal font-semibold text-black"
        >
          Güvenli Giriş Deneyimi
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Fast Meal’e giriş, kullanıcıya özel Sales ID ve şifre doğrulamasıyla
          gerçekleştirilir. Zorunlu kimlik bilgileri sayesinde sisteme yalnızca
          yetkili kullanıcıların erişmesi hedeflenir.
        </p>
      </div>

      <div className="relative aspect-[346/190.781] w-full overflow-hidden rounded-[7.985px] bg-black">
        <Image
          src="/fast-meal/secure-login-mobile.png"
          alt="Fast Meal güvenli giriş ekranı"
          width={2080}
          height={1147}
          unoptimized
          sizes="(max-width: 767px) calc(100vw - 56px), 0px"
          className="h-full w-full object-fill"
        />
      </div>
    </section>
  );
}
