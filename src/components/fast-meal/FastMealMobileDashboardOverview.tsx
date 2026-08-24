import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealMobileDashboardOverview() {
  return (
    <section
      aria-labelledby="fast-meal-mobile-dashboard-overview-title"
      className={`${montserrat.className} flex w-full flex-col items-start gap-10 bg-[#fafafa] px-7 py-10 md:hidden`}
    >
      <div className="flex w-full flex-col items-start gap-5 [word-break:break-word]">
        <h2
          id="fast-meal-mobile-dashboard-overview-title"
          className="w-full text-[20px] leading-normal font-semibold text-black"
        >
          Operasyonu Tek Bakışta Yönet
        </h2>
        <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          Dashboard; günlük satışlar, toplam gelir, sipariş sayısı, yeni
          müşteriler, popüler ürünler ve çalışan performansı gibi temel verileri
          tek ekranda bir araya getirir. Bilgi hiyerarşisi, yöneticilerin önemli
          metriklere hızlıca ulaşabilmesi ve restoranın genel performansını
          kolayca takip edebilmesi üzerine kurgulandı.
        </p>
      </div>

      <div className="relative aspect-[346/190.781] w-full overflow-hidden rounded-[24px] bg-black">
        <Image
          src="/fast-meal/dashboard-overview-mobile.png"
          alt="Fast Meal yönetici dashboard ekranı"
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
