import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PachaPage } from "@/components/pacha/PachaPage";
import { ResponsiveDesktopCanvas } from "@/components/ResponsiveDesktopCanvas";
import styles from "./page.module.css";

export default function PachaOfLondonPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <ResponsiveDesktopCanvas>
        <PachaPage header={<Header />} />
        <div className="hidden md:block">
          <Footer />
        </div>
      </ResponsiveDesktopCanvas>
      <div className={`${styles.mobileFooter} md:hidden`}>
        <Footer />
      </div>
    </main>
  );
}
