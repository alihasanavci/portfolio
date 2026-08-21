import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealSecureLogin() {
  return (
    <section
      aria-labelledby="fast-meal-secure-login-title"
      className={`${montserrat.className} hidden h-[989.444px] w-full min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="fast-meal-secure-login-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Güvenli Giriş Deneyimi
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Fast Meal’e giriş, kullanıcıya özel Sales ID ve şifre doğrulamasıyla
            gerçekleştirilir. Zorunlu kimlik bilgileri sayesinde sisteme
            yalnızca yetkili kullanıcıların erişmesi hedeflenir.
          </p>
        </div>

        <div className="h-[573.444px] w-full overflow-hidden rounded-[24px] bg-black">
          <Image
            src="/fast-meal/secure-login.png"
            alt="Fast Meal güvenli giriş ekranı"
            width={2080}
            height={1147}
            unoptimized
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </section>
  );
}
