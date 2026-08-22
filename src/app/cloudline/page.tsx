import { CloudlineHero } from "@/components/cloudline/CloudlineHero";
import { CloudlineMobileHero } from "@/components/cloudline/CloudlineMobileHero";
import { CloudlineLocationTracking } from "@/components/cloudline/CloudlineLocationTracking";
import { CloudlineMobileProjectInfo } from "@/components/cloudline/CloudlineMobileProjectInfo";
import { CloudlineMobileProjectPresentation } from "@/components/cloudline/CloudlineMobileProjectPresentation";
import { CloudlineMobileLocationTracking } from "@/components/cloudline/CloudlineMobileLocationTracking";
import { CloudlineMobileWeatherShowcase } from "@/components/cloudline/CloudlineMobileWeatherShowcase";
import { CloudlineMobileVisualIdentity } from "@/components/cloudline/CloudlineMobileVisualIdentity";
import { CloudlineMobileWeatherOverview } from "@/components/cloudline/CloudlineMobileWeatherOverview";
import { CloudlineProjectPresentation } from "@/components/cloudline/CloudlineProjectPresentation";
import { CloudlineProjectInfo } from "@/components/cloudline/CloudlineProjectInfo";
import { CloudlineVisualIdentity } from "@/components/cloudline/CloudlineVisualIdentity";
import { CloudlineWeatherOverview } from "@/components/cloudline/CloudlineWeatherOverview";
import { CloudlineWeatherShowcase } from "@/components/cloudline/CloudlineWeatherShowcase";
import { Footer } from "@/components/Footer";
import styles from "./CloudlinePage.module.css";

export default function CloudlinePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <div className="md:hidden">
        <CloudlineMobileHero />
        <CloudlineMobileProjectInfo />
        <CloudlineMobileWeatherShowcase />
        <CloudlineMobileVisualIdentity />
        <CloudlineMobileWeatherOverview />
        <CloudlineMobileLocationTracking />
        <CloudlineMobileProjectPresentation />
        <Footer />
      </div>

      <div className={`${styles.desktopShell} hidden md:block`}>
        <div className={styles.desktopCanvas}>
          <CloudlineHero />
          <CloudlineProjectInfo />
          <CloudlineWeatherShowcase />
          <CloudlineVisualIdentity />
          <CloudlineWeatherOverview />
          <CloudlineLocationTracking />
          <CloudlineProjectPresentation />
          <Footer />
        </div>
      </div>
    </main>
  );
}
