import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const mobileScreenClass =
  "relative aspect-[346/190.781] w-full overflow-hidden rounded-[24px] bg-black";

const mobileImageClass =
  "h-full w-full object-fill";

export function FastMealMobileCategoryAccess() {
  return (
    <section
      aria-labelledby="fast-meal-mobile-category-access-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 [word-break:break-word]">
        <h2
          id="fast-meal-mobile-category-access-title"
          className="w-full text-[20px] leading-normal font-semibold text-black"
        >
          Kategorilere Hızlı Erişim
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Yiyecek ve içecek kategorileri, seçim sürecini hızlandırmak ve hata
          payını azaltmak için görsel olarak ayrıştırılmış bir yapıda sunuldu.
          Kullanıcılar doğru kategoriye hızlıca ulaşarak müşterinin istediği
          ürünü kolayca seçebilir ve masaya ekleyebilir.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[13.308px]">
        <div className={mobileScreenClass}>
          <Image
            src="/fast-meal/categories-screen-mobile.png"
            alt="Fast Meal yiyecek ve içecek kategori ekranı"
            width={2080}
            height={1147}
            unoptimized
            sizes="(max-width: 767px) calc(100vw - 56px), 0px"
            className={mobileImageClass}
          />
        </div>

        <div className={mobileScreenClass}>
          <Image
            src="/fast-meal/product-detail-screen-mobile.png"
            alt="Fast Meal ürün seçimi ve ürün detay paneli"
            width={2080}
            height={1147}
            unoptimized
            sizes="(max-width: 767px) calc(100vw - 56px), 0px"
            className={mobileImageClass}
          />
        </div>
      </div>
    </section>
  );
}
