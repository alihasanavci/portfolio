import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function CloudlineLocationTracking() {
  return (
    <section
      aria-labelledby="cloudline-location-tracking-title"
      className={`${montserrat.className} hidden h-[1048.444px] min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="cloudline-location-tracking-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Dünyanın Her Yerini Tek Dokunuşla Takip Et
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Kolay lokasyon yönetimi sayesinde bulunduğun veya merak ettiğin
            herhangi bir konumu saniyeler içinde ekleyebilir, favori
            lokasyonlarını kaydedebilir ve hava durumunu kesintisiz şekilde
            takip edebilirsin. Arama ve konum yönetimi yapısı, farklı şehirler
            arasında hızlı ve zahmetsiz geçiş yapacak şekilde tasarlandı.
          </p>
        </div>

        <div className="relative h-[573.444px] w-full overflow-hidden rounded-[36px] bg-black">
          <Image
            src="/cloudline/location-screens/locations-list.png"
            alt="Cloudline favori lokasyonlar ekranı"
            width={730.629}
            height={730.629}
            sizes="731px"
            className="absolute top-[169.797px] left-[-138px] z-0 h-[730.629px] w-[730.629px] max-w-none object-cover"
          />
          <Image
            src="/cloudline/location-screens/locations-manage.png"
            alt="Cloudline lokasyon yönetimi ekranı"
            width={730.63}
            height={730.63}
            sizes="731px"
            className="absolute top-[169.796px] left-[447.37px] z-0 h-[730.63px] w-[730.63px] max-w-none object-cover"
          />
          <Image
            src="/cloudline/location-screens/location-search.png"
            alt="Cloudline lokasyon arama ekranı"
            width={1014}
            height={1014}
            sizes="1014px"
            className="absolute top-[28.111px] left-[13px] z-10 h-[1014px] w-[1014px] max-w-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
