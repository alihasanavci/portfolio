import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const screenClass =
  "h-[573.444px] w-full overflow-hidden rounded-[24px] bg-black";

export function FastMealCategoryAccess() {
  return (
    <section
      aria-labelledby="fast-meal-category-access-title"
      className={`${montserrat.className} hidden h-[1637.889px] w-full min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="fast-meal-category-access-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
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

        <div className="flex w-full flex-col items-start gap-10">
          <div className={screenClass}>
            <Image
              src="/fast-meal/categories-screen.png"
              alt="Fast Meal yiyecek ve içecek kategori ekranı"
              width={2080}
              height={1147}
              unoptimized
              className="h-full w-full object-fill"
            />
          </div>

          <div className={screenClass}>
            <Image
              src="/fast-meal/product-detail-screen.png"
              alt="Fast Meal ürün seçimi ve ürün detay paneli"
              width={2080}
              height={1147}
              unoptimized
              className="h-full w-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
