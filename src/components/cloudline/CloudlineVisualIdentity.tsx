import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineVisualIdentity() {
  return (
    <section
      aria-labelledby="cloudline-visual-identity-title"
      className={`${montserrat.className} hidden h-[1324.444px] min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="cloudline-visual-identity-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Logo &amp; Visual Identity
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Cloudline’ın görsel kimliği, hava durumunu sade ve doğrudan temsil
            eden bulut formu üzerine oluşturuldu. Minimal çizgiler ve
            siyah-beyaz kullanım, markaya modern ve güvenilir bir karakter
            kazandırırken uygulamanın genel arayüz diliyle tutarlı bir bütünlük
            sağlıyor.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-10">
          <div className="relative h-[573.444px] w-full overflow-hidden rounded-[36px] bg-black">
            <Image
              src="/cloudline/visual-identity/cloudline-appstore-v2.png"
              alt="Cloudline App Store marka sunumu"
              fill
              unoptimized
              sizes="1040px"
              className="object-cover"
            />
          </div>

          <div className="flex h-[260px] w-full items-start gap-10">
            <div className="relative h-[260px] w-[501px] overflow-hidden rounded-[36px] border border-[rgba(51,51,51,0.2)] bg-white">
              <Image
                src="/cloudline/visual-identity/logo-dark.svg"
                alt="Koyu zeminde Cloudline logosu"
                width={122}
                height={122}
                className="absolute top-[68.658px] left-[189.833px] h-[122px] w-[122px]"
              />
            </div>

            <div className="relative h-[260px] w-[499px] overflow-hidden rounded-[36px] bg-black">
              <Image
                src="/cloudline/visual-identity/logo-light.svg"
                alt="Açık zeminde Cloudline logosu"
                width={122.333}
                height={122.333}
                className="absolute top-[68.491px] left-[188.667px] h-[122.333px] w-[122.333px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
