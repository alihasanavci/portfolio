import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealMobileVisualIdentity() {
  return (
    <section
      aria-labelledby="fast-meal-mobile-visual-identity-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 [word-break:break-word]">
        <h2
          id="fast-meal-mobile-visual-identity-title"
          className="w-full text-[20px] leading-normal font-semibold text-black"
        >
          Logo &amp; Visual Identity
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Fast Meal’in görsel kimliği, markanın hızlı, samimi ve ulaşılabilir
          yapısını yansıtmak amacıyla oluşturuldu. Logoda tercih edilen yumuşak
          formlar ve sıcak sarı ton, markaya enerjik ve davetkâr bir karakter
          kazandırırken; oluşturulan görsel dil ürün arayüzüyle bütünlük
          sağlayacak şekilde kurgulandı.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[13.308px]">
        <div className="relative aspect-[346/190.781] w-full overflow-hidden rounded-[7.985px] bg-black">
          <Image
          src="/fast-meal/visual-identity-dashboard-mobile.png"
            alt="Fast Meal görsel kimliğinin dashboard üzerinde uygulanışı"
            fill
            unoptimized
            sizes="(max-width: 767px) calc(100vw - 56px), 0px"
            className="object-fill"
          />
        </div>

        <div className="flex w-full items-start gap-[13.308px]">
          <div className="flex aspect-[166.346/86.5] min-w-0 flex-1 items-center justify-center rounded-[7.985px] border-[0.333px] border-[rgba(51,51,51,0.2)] bg-white">
            <Image
              src="/fast-meal/logo-yellow.svg"
              alt="Sarı Fast Meal logosu"
              width={119}
              height={24}
              unoptimized
              className="h-auto w-[71.271%]"
            />
          </div>

          <div className="flex aspect-[166.346/86.5] min-w-0 flex-1 items-center justify-center rounded-[7.985px] bg-[#ffca40]">
            <Image
              src="/fast-meal/logo-white.svg"
              alt="Beyaz Fast Meal logosu"
              width={119}
              height={24}
              unoptimized
              className="h-auto w-[71.271%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
