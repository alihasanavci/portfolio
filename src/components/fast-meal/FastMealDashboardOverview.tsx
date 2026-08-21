import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export function FastMealDashboardOverview() {
  return (
    <section
      aria-labelledby="fast-meal-dashboard-overview-title"
      className={`${montserrat.className} hidden h-[1037.444px] w-full min-w-[1440px] bg-[#fafafa] px-[200px] py-[120px] md:block`}
    >
      <div className="mx-auto flex w-[1040px] flex-col items-start gap-20">
        <div className="flex w-[658px] flex-col items-start gap-5">
          <h2
            id="fast-meal-dashboard-overview-title"
            className="w-full text-[24px] leading-7 font-semibold text-black"
          >
            Operasyonu Tek Bakışta Yönet
          </h2>
          <p className="w-full text-[16px] leading-6 font-medium tracking-[0.32px] text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Dashboard; günlük satışlar, toplam gelir, sipariş sayısı, yeni
            müşteriler, popüler ürünler ve çalışan performansı gibi temel
            verileri tek ekranda bir araya getirir. Bilgi hiyerarşisi,
            yöneticilerin önemli metriklere hızlıca ulaşabilmesi ve restoranın
            genel performansını kolayca takip edebilmesi üzerine kurgulandı.
          </p>
        </div>

        <div className="h-[573.444px] w-full overflow-hidden rounded-[24px] bg-black">
          <Image
            src="/fast-meal/dashboard-overview.png"
            alt="Fast Meal yönetici dashboard ekranı"
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
