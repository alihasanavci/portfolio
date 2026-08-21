import Image from "next/image";

export function FastMealProductScreens() {
  return (
    <section
      aria-label="Fast Meal ürün ekranları"
      className="relative hidden h-[1417px] w-full min-w-[1440px] overflow-hidden bg-[#fafafa] py-[120px] md:block"
    >
      <div
        className="relative left-1/2 h-[1177px] w-[1597.436px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="absolute left-[212.991px] top-[8.666px] h-[1160.106px] w-[1171.454px]">
          <Image
            src="/fast-meal/pizza.png"
            alt=""
            width={708}
            height={719}
            unoptimized
            className="absolute left-[382.853px] top-[441.003px] z-0 h-[719.103px] w-[708.082px] max-w-none object-cover"
          />

          <Image
            src="/fast-meal/burger.png"
            alt=""
            width={708}
            height={567}
            unoptimized
            className="absolute left-[80.517px] top-0 z-10 h-[566.782px] w-[708.082px] max-w-none object-cover"
          />

          <div className="absolute left-[389.795px] top-[45.355px] z-20 h-[576.407px] w-[797.611px] overflow-hidden rounded-[28.714px]">
            <Image
              src="/fast-meal/dashboard-screen.png"
              alt="Fast Meal satış dashboard ekranı"
              width={1596}
              height={1153}
              unoptimized
              className="h-full w-full max-w-none"
            />
          </div>

          <div className="absolute left-[-15.952px] top-[477.150px] z-30 h-[576.407px] w-[797.611px] overflow-hidden rounded-[28.714px]">
            <Image
              src="/fast-meal/food-drinks-screen.png"
              alt="Fast Meal ürün yönetimi ve ürün detay ekranı"
              width={1596}
              height={1153}
              unoptimized
              className="h-full w-full max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
