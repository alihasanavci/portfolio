import Image from "next/image";

export function FastMealMobileProductScreens() {
  return (
    <section
      aria-label="Fast Meal mobil ürün ekranları"
      className="relative h-[calc(80px+130.132vw)] w-full overflow-hidden bg-[#fafafa] md:hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-[calc(40px+0.958vw)] left-[-14.759vw] aspect-[520.667/515.623] w-[129.519vw]"
      >
        <Image
          src="/fast-meal/pizza.png"
          alt=""
          width={709}
          height={720}
          unoptimized
          className="absolute top-[38.014%] left-[32.684%] z-0 h-[61.986%] w-[60.444%] max-w-none object-fill"
        />

        <Image
          src="/fast-meal/burger.png"
          alt=""
          width={709}
          height={567}
          unoptimized
          className="absolute top-0 left-[6.873%] z-10 h-[48.856%] w-[60.444%] max-w-none object-fill"
        />

        <div className="absolute top-[5.284%] left-[34.637%] z-20 h-[46.935%] w-[65.363%] overflow-hidden rounded-[1.411vw]">
          <Image
            src="/fast-meal/dashboard-screen.png"
            alt="Fast Meal satış dashboard ekranı"
            width={1596}
            height={1153}
            unoptimized
            className="h-full w-full max-w-none object-cover object-top"
          />
        </div>

        <div className="absolute top-[42.505%] left-0 z-30 h-[46.935%] w-[65.363%] overflow-hidden rounded-[1.411vw]">
          <Image
            src="/fast-meal/food-drinks-screen.png"
            alt="Fast Meal ürün yönetimi ve ürün detay paneli"
            width={1596}
            height={1153}
            unoptimized
            className="h-full w-full max-w-none object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
