import { FastMealCategoryAccess } from "@/components/fast-meal/FastMealCategoryAccess";
import { FastMealDashboardOverview } from "@/components/fast-meal/FastMealDashboardOverview";
import { Footer } from "@/components/Footer";
import { FastMealHero } from "@/components/fast-meal/FastMealHero";
import { FastMealMobileProjectInfo } from "@/components/fast-meal/FastMealMobileProjectInfo";
import { FastMealMobileDashboardOverview } from "@/components/fast-meal/FastMealMobileDashboardOverview";
import { FastMealMobileCategoryAccess } from "@/components/fast-meal/FastMealMobileCategoryAccess";
import { FastMealMobileProductScreens } from "@/components/fast-meal/FastMealMobileProductScreens";
import { FastMealMobileProjectPresentation } from "@/components/fast-meal/FastMealMobileProjectPresentation";
import { FastMealMobileSecureLogin } from "@/components/fast-meal/FastMealMobileSecureLogin";
import { FastMealMobileVisualIdentity } from "@/components/fast-meal/FastMealMobileVisualIdentity";
import { FastMealProjectInfo } from "@/components/fast-meal/FastMealProjectInfo";
import { FastMealProductScreens } from "@/components/fast-meal/FastMealProductScreens";
import { FastMealProjectPresentation } from "@/components/fast-meal/FastMealProjectPresentation";
import { FastMealSecureLogin } from "@/components/fast-meal/FastMealSecureLogin";
import { FastMealVisualIdentity } from "@/components/fast-meal/FastMealVisualIdentity";
import { ResponsiveDesktopCanvas } from "@/components/ResponsiveDesktopCanvas";

export default function FastMealPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <ResponsiveDesktopCanvas>
        <FastMealHero />
        <FastMealMobileProjectInfo />
        <FastMealMobileProductScreens />
        <FastMealMobileVisualIdentity />
        <FastMealMobileSecureLogin />
        <FastMealMobileDashboardOverview />
        <FastMealMobileCategoryAccess />
        <FastMealMobileProjectPresentation />
        <FastMealProjectInfo />
        <FastMealProductScreens />
        <FastMealVisualIdentity />
        <FastMealSecureLogin />
        <FastMealDashboardOverview />
        <FastMealCategoryAccess />
        <FastMealProjectPresentation />
        <Footer />
      </ResponsiveDesktopCanvas>
    </main>
  );
}
