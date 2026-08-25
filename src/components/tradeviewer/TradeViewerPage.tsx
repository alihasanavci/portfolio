"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import headerStyles from "../Header.module.css";
import { Footer } from "../Footer";
import presentationCtaStyles from "../fast-meal/FastMealProjectPresentation.module.css";
import { HeaderLogoLink } from "../HeaderLogoLink";
import {
  desktopHeaderLayoutClass,
  desktopNavigationListClass,
  headerNavigationItems,
  mobileHeaderLayoutClass,
} from "../HeaderLayout";
import { MobileMenuOverlay } from "../MobileMenuOverlay";
import { lockBodyScroll } from "../bodyScrollLock";
import { ResponsiveDesktopCanvas } from "../ResponsiveDesktopCanvas";
import {
  SectionNavigationButton,
  useSectionNavigation,
} from "../SectionNavigation";
import styles from "./TradeViewerPage.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const projectCopy = {
  about:
    "TradeViewer, kullanıcıların kripto piyasalarını takip edebilmesi, canlı on-chain verileri inceleyebilmesi ve futures trading fırsatlarını değerlendirebilmesi için tasarladığım bir Web3 trading platformu konseptidir. Gerçek zamanlı piyasa verileri, grafikler, token ekosistemi ve presale katılımı gibi farklı özellikleri tek bir deneyimde bir araya getirir. Projede amaç, yoğun ve teknik finansal verileri daha anlaşılır bir yapıda sunarak hem yeni hem de deneyimli kullanıcıların piyasayı daha rahat takip edebileceği bir arayüz oluşturmaktı.",
  mission:
    "Kripto piyasalarındaki yoğun veri ve işlem yapısını sadeleştirerek kullanıcıların piyasa hareketlerini, on-chain verileri ve trading fırsatlarını tek bir platform üzerinden daha hızlı ve anlaşılır biçimde takip edebilmesini sağlamak.",
  contribution:
    "TradeViewer’ın UI/UX tasarım sürecini ele alarak platformun bilgi hiyerarşisini, içerik yapısını ve temel arayüzlerini tasarladım. Piyasa verileri, grafikler, trading alanları ve presale içeriklerinin kullanıcıyı yormadan anlaşılır biçimde sunulmasına odaklandım. Görsel hiyerarşi, component yapıları ve platformun genel görsel dili üzerinde çalışarak ürünün modern, tutarlı ve kolay kullanılabilir bir deneyim sunmasını hedefledim.",
};

const featureSections = [
  {
    className: styles.presale,
    title: "Presale Sürecinde Şeffaf Takip",
    description:
      "Toplanan toplam tutar, satış oranı ve hedef miktar gibi temel presale verileri kullanıcıya açık ve anlaşılır biçimde sunulur. İlerleme çubuğu ve net satın alma alanı sayesinde kullanıcı, sürecin mevcut durumunu hızlıca görebilir ve token alım işlemini doğrudan aynı alan üzerinden gerçekleştirebilir.",
    desktopAsset: "/tradeviewer/presale-desktop.png",
    mobileAsset: "/tradeviewer/presale-mobile.png",
    desktopSize: [1040, 573.444],
    mobileSize: [346, 190.781],
  },
  {
    className: styles.tokenomics,
    title: "Tüm Token Ekonomisi, Tek Bakışta",
    description:
      "Toplam arz, presale fiyatı ve token dağılımı; kullanıcıların ekosistemin yapısını hızlıca anlayabilmesi için açık ve görsel olarak ayrıştırılmış biçimde sunuldu. Dağılım oranları, kullanım alanları ve temel token bilgileri tek bölümde bir araya getirilerek yatırım kararını destekleyen daha anlaşılır ve şeffaf bir bilgi deneyimi oluşturuldu.",
    desktopAsset: "/tradeviewer/tokenomics-desktop.png",
    mobileAsset: "/tradeviewer/tokenomics-mobile.png",
    desktopSize: [1040, 573.444],
    mobileSize: [346, 190.781],
  },
  {
    className: styles.roadmap,
    title: "Gelişim Süreci, Adım Adım",
    description:
      "TradeViewer’ın gelişim süreci; presale, beta platform ve tam lansman gibi temel aşamalara ayrılarak kullanıcıya açık ve anlaşılır biçimde sunuldu. Tamamlanan adımlar, sıradaki hedefler ve gelecek geliştirmeler aynı yapı içinde gösterilerek ürünün uzun vadeli vizyonunun kolayca takip edilmesi hedeflendi.",
    desktopAsset: "/tradeviewer/roadmap-desktop.png",
    mobileAsset: "/tradeviewer/roadmap-mobile.png",
    desktopSize: [1040, 573.444],
    mobileSize: [346, 190.781],
  },
] as const;

function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
      aria-expanded={open}
      aria-controls="tradeviewer-mobile-menu"
      onClick={onClick}
      className={`flex size-[30px] items-center justify-center ${open ? "fixed top-8 right-7 z-[60]" : "relative"}`}
    >
      <span aria-hidden="true" className="relative block size-[30px]">
        <span className={`absolute top-[6px] left-[3px] h-[2px] w-6 rounded-full bg-white transition-transform duration-300 ease-in-out motion-reduce:duration-0 ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`absolute top-[14px] left-[3px] h-[2px] w-6 rounded-full bg-white transition-[opacity,transform] duration-300 ease-in-out motion-reduce:duration-0 ${open ? "scale-x-0 opacity-0" : ""}`} />
        <span className={`absolute top-[22px] h-[2px] rounded-full bg-white transition-[left,width,transform] duration-300 ease-in-out motion-reduce:duration-0 ${open ? "left-[3px] w-6 -translate-y-2 -rotate-45" : "left-[10px] w-[17px]"}`} />
      </span>
    </button>
  );
}

function DesktopHeader() {
  return (
    <header className={`${desktopHeaderLayoutClass} absolute top-0 left-1/2 z-30 -translate-x-1/2`}>
      <HeaderLogoLink />
      <nav aria-label="Ana navigasyon">
        <ul className={desktopNavigationListClass}>
          {headerNavigationItems.map((item) => (
            <li key={item.sectionId} style={{ width: item.width }}>
              <SectionNavigationButton sectionId={item.sectionId} className={headerStyles.desktopNavItem}>
                {item.label}
              </SectionNavigationButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MobileHero() {
  const [open, setOpen] = useState(false);
  const navigate = useSectionNavigation();

  useEffect(() => {
    if (!open) return;
    const unlockBodyScroll = lockBodyScroll();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className={styles.mobileHero} aria-labelledby="tradeviewer-mobile-title">
      <header className={`${mobileHeaderLayoutClass} ${open ? "z-[60]" : "z-40"}`}>
        <HeaderLogoLink mobile />
        <HamburgerButton open={open} onClick={() => setOpen((value) => !value)} />
      </header>
      {open && (
        <MobileMenuOverlay
          id="tradeviewer-mobile-menu"
          onClose={() => setOpen(false)}
          onNavigate={(sectionId) => {
            setOpen(false);
            navigate(sectionId);
          }}
        />
      )}
      <div className={styles.mobileHeroText}>
        <h1 id="tradeviewer-mobile-title">TradeViewer</h1>
        <p>Web3 Trading Platform</p>
      </div>
      <div className={styles.mobileHeroCard}>
        <Image src="/tradeviewer/hero-mobile.png" alt="TradeViewer Web3 trading platformu sunumu" fill priority sizes="calc(100vw - 24px)" />
      </div>
    </section>
  );
}

function DesktopHero() {
  return (
    <section className={styles.desktopHero} aria-labelledby="tradeviewer-title">
      <DesktopHeader />
      <div className={styles.desktopHeroText}>
        <h1 id="tradeviewer-title">TradeViewer</h1>
        <p>Web3 Trading Platform</p>
      </div>
      <div className={styles.desktopHeroCard}>
        <Image src="/tradeviewer/hero-desktop.png" alt="TradeViewer Web3 trading platformu sunumu" fill priority sizes="1240px" />
      </div>
    </section>
  );
}

function ProjectInfo({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? styles.mobileProjectInfo : styles.desktopProjectInfo} aria-label="TradeViewer proje bilgileri">
      <div className={styles.projectInfoColumns}>
        <div className={styles.projectInfoMain}>
          <InfoBlock title="Proje Hakkında" text={projectCopy.about} />
          <InfoBlock title="Misyon" text={projectCopy.mission} />
          <InfoBlock title="Katkılarım" text={projectCopy.contribution} />
        </div>
        <div className={styles.projectInfoAside}>
          <InfoList title="Kapsam" items={["UI/UX Design", "Web Design", "Visual Design"]} />
          <InfoList title="Rolüm" items={["UI/UX Design", "Visual Direction"]} />
          <div className={styles.infoBlock}>
            <h2>Araçlar</h2>
            <div className={styles.tools}>
              <Image src="/cloudline/figma-icon.svg" alt="Figma" width={48} height={48} />
              <Image src="/cloudline/photoshop-icon.svg" alt="Adobe Photoshop" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return <div className={styles.infoBlock}><h2>{title}</h2><p>{text}</p></div>;
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return <div className={styles.infoBlock}><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

function Overview({ mobile = false }: { mobile?: boolean }) {
  return <section className={mobile ? styles.mobileOverview : styles.desktopOverview}><Image src={mobile ? "/tradeviewer/overview-mobile.png" : "/tradeviewer/overview-desktop.png"} alt="TradeViewer platform ekranları" width={mobile ? 386 : 834} height={mobile ? 409 : 881} sizes={mobile ? "386px" : "834px"} className={styles.overviewImage} /></section>;
}

function VisualIdentity({ mobile = false }: { mobile?: boolean }) {
  return <section className={mobile ? styles.mobileIdentity : styles.desktopIdentity}><div className={styles.sectionText}><h2>Logo &amp; Visual Identity</h2><p>TradeViewer’ın görsel kimliği, Web3 ve trading dünyasının teknolojik, dinamik ve yenilikçi karakterini yansıtacak şekilde oluşturuldu. Logodaki akışkan ve bağlantılı form; veri akışını, ağ yapısını ve dijital ekosistemi çağrıştırırken mor tonları markaya modern ve güçlü bir teknoloji hissi kazandırıyor. Oluşturulan görsel dil, platformun koyu arayüz yapısıyla bütünleşerek tutarlı ve ayırt edici bir marka karakteri oluşturuyor.</p></div>{mobile ? <div className={styles.identityViewport}><div className={styles.identityMainCard}><Image src="/tradeviewer/identity-mobile.png" alt="TradeViewer logo ve görsel kimlik sunumu" width={346} height={331} sizes="calc(100vw - 56px)" className={styles.identityImage} /></div><div className={styles.identityLeftCard}><Image src="/tradeviewer/identity-mobile.png" alt="" width={346} height={331} sizes="calc((100vw - 56px) * .48)" className={styles.identityImage} /></div><div className={styles.identityRightCard}><Image src="/tradeviewer/identity-mobile.png" alt="" width={346} height={331} sizes="calc((100vw - 56px) * .48)" className={styles.identityImage} /></div></div> : <div className={styles.identityViewport}><Image src="/tradeviewer/identity-desktop.png" alt="TradeViewer logo ve görsel kimlik sunumu" width={1040} height={1187} sizes="1040px" className={styles.identityImage} /></div>}</section>;
}

function FeatureSection({ feature, mobile = false }: { feature: (typeof featureSections)[number]; mobile?: boolean }) {
  const [width, height] = mobile ? feature.mobileSize : feature.desktopSize;
  return <section className={`${mobile ? styles.mobileFeature : styles.desktopFeature} ${feature.className}`}><div className={styles.sectionText}><h2>{feature.title}</h2><p>{feature.description}</p></div><div className={styles.featureViewport}><Image src={mobile ? feature.mobileAsset : feature.desktopAsset} alt={`${feature.title} arayüz sunumu`} width={width} height={height} sizes={mobile ? "calc(100vw - 56px)" : "1040px"} className={styles.featureImage} /></div></section>;
}

function Presentation({ mobile = false }: { mobile?: boolean }) {
  return <section className={mobile ? styles.mobilePresentation : styles.desktopPresentation}><div className={styles.sectionText}><h2>Proje Sunumu</h2><p>TradeViewer’ın görsel dili, trading arayüzleri, presale yapısı, token ekonomisi ve roadmap bölümlerini bir araya getiren kapsamlı proje sunumu. Platformun genel yapısını, bilgi hiyerarşisini ve temel kullanıcı akışlarını bütün olarak inceleyebilirsin.</p></div>{mobile ? <Image src="/tradeviewer/presentation-mobile.png" alt="TradeViewer kapsamlı proje sunumu" width={402} height={3803.097} sizes="100vw" className={styles.presentationImage} /> : <div className={styles.presentationViewport}><Image src="/tradeviewer/presentation-desktop.png" alt="TradeViewer kapsamlı proje sunumu" width={1040} height={9812.986} sizes="1040px" className={styles.presentationImage} /></div>}<div className={styles.presentationCtaRow}><a href="https://www.behance.net/gallery/248751019/TradeViewer-Crypto-Trading-Presale-Landing-Page" target="_blank" rel="noopener noreferrer" className={`${presentationCtaStyles.behanceCta} ${styles.presentationCta}`}><span>Behance’de Görüntüle</span><span aria-hidden="true" className={presentationCtaStyles.behanceArrow} /></a></div></section>;
}

function MobilePage() {
  return <div className={styles.mobilePage}><MobileHero /><ProjectInfo mobile /><Overview mobile /><VisualIdentity mobile />{featureSections.map((feature) => <FeatureSection key={feature.title} feature={feature} mobile />)}<Presentation mobile /><Footer /></div>;
}

function DesktopPage() {
  return <div className={styles.desktopPage}><DesktopHero /><ProjectInfo /><Overview /><VisualIdentity />{featureSections.map((feature) => <FeatureSection key={feature.title} feature={feature} />)}<Presentation /><Footer /></div>;
}

export function TradeViewerPage() {
  return <main className={`${montserrat.className} min-h-screen w-full overflow-x-hidden bg-[#fafafa]`}><ResponsiveDesktopCanvas><div className="md:hidden"><MobilePage /></div><div className="hidden md:block"><DesktopPage /></div></ResponsiveDesktopCanvas></main>;
}
