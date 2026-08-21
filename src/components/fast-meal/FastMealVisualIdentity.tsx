import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealVisualIdentity() {
  return (
    <section
      aria-labelledby="fast-meal-visual-identity-title"
      className={`${montserrat.className} hidden h-[1337.444px] w-full min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="fast-meal-visual-identity-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Logo &amp; Visual Identity
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Fast Meal’in görsel kimliği, markanın hızlı, samimi ve ulaşılabilir
            yapısını yansıtmak amacıyla oluşturuldu. Logoda tercih edilen
            yumuşak formlar ve sıcak sarı ton, markaya enerjik ve davetkâr bir
            karakter kazandırırken; oluşturulan görsel dil ürün arayüzüyle
            bütünlük sağlayacak şekilde kurgulandı.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-10">
          <div className="relative h-[573.444px] w-full overflow-hidden rounded-[24px] bg-black">
            <Image
              src="/fast-meal/visual-identity-dashboard.png"
              alt="Fast Meal görsel kimliğinin dashboard üzerinde uygulanışı"
              width={2080}
              height={1147}
              unoptimized
              className="h-full w-full object-fill"
            />
          </div>

          <div className="flex w-full items-start gap-10">
            <div className="flex h-[260px] w-[500px] items-center justify-center rounded-[24px] border border-[rgba(51,51,51,0.2)] bg-white">
              <Image
                src="/fast-meal/logo-yellow.svg"
                alt="Sarı Fast Meal logosu"
                width={357}
                height={71}
                unoptimized
                className="h-[70.625px] w-[356.334px]"
              />
            </div>

            <div className="flex h-[260px] w-[500px] items-center justify-center rounded-[24px] bg-[#ffca40]">
              <Image
                src="/fast-meal/logo-white.svg"
                alt="Beyaz Fast Meal logosu"
                width={357}
                height={71}
                unoptimized
                className="h-[70.625px] w-[356.334px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
