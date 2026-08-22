export const desktopHeaderLayoutClass =
  "mx-auto hidden h-[99px] w-full max-w-[1440px] items-center justify-between px-[200px] md:flex";

export const desktopNavigationListClass =
  "flex items-center gap-10 whitespace-nowrap text-[14px] leading-normal font-medium text-white";

export const mobileHeaderLayoutClass =
  "fixed inset-x-0 top-0 flex h-[94px] w-full items-center justify-between bg-black px-7 py-8 md:hidden";

export const desktopLogoClass = "h-[42.973px] w-[225.265px]";
export const mobileLogoClass = "h-[32.047px] w-[168.113px]";

export const headerNavigationItems = [
  { label: "Hakkımda", sectionId: "hakkimda", width: 74 },
  { label: "Deneyimler", sectionId: "deneyimler", width: 83 },
  { label: "Projeler", sectionId: "projeler", width: 56 },
  { label: "Beceriler", sectionId: "beceriler", width: 64 },
  { label: "İletişim", sectionId: "iletisim", width: 53 },
] as const;
