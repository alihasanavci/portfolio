import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineWeatherOverview() {
  return (
    <section
      aria-labelledby="cloudline-weather-overview-title"
      className={`${montserrat.className} hidden h-[1048.444px] min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="cloudline-weather-overview-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Net Bilgi, Sade Deneyim
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Cloudline ana ekranı, kullanıcının ihtiyaç duyduğu temel hava durumu
            verilerini karmaşık bir yapı oluşturmadan tek bakışta sunacak şekilde
            tasarlandı. Sıcaklık, hissedilen sıcaklık, saatlik tahmin ve yağış
            ihtimali gibi önemli bilgiler açık bir hiyerarşiyle öne çıkarılarak
            hızlı ve rahat bir kullanım deneyimi hedeflendi.
          </p>
        </div>

        <div className="relative h-[573.444px] w-full overflow-hidden rounded-[24px] bg-black">
          <Image
            src="/cloudline/weather-overview/main-screen.png"
            alt="Cloudline ana hava durumu ekranı"
            width={1014}
            height={1014}
            sizes="1014px"
            className="absolute top-[28.556px] left-[13px] h-[1014px] w-[1014px] max-w-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
