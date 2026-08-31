import { AureliPage } from "@/components/aureli/AureliPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ResponsiveDesktopCanvas } from "@/components/ResponsiveDesktopCanvas";

export default function AureliDetailPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#fafafa]">
      <ResponsiveDesktopCanvas>
        <AureliPage header={<Header />} />
        <div className="hidden md:block">
          <Footer />
        </div>
      </ResponsiveDesktopCanvas>
      <div className="md:hidden">
        <Footer />
      </div>
    </main>
  );
}
