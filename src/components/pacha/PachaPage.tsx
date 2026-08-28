import Image from "next/image";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import presentationCtaStyles from "../fast-meal/FastMealProjectPresentation.module.css";
import styles from "./PachaPage.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const info = {
  about: "Pacha of London, Londra merkezli lüks bir saat ve mücevher butiği için tasarladığım premium perakende web deneyimidir. Platform; nadir saatler, fine jewellery, luxury bags ve premium hizmetleri markanın sofistike kimliğini yansıtan rafine bir dijital yapı içinde sunar. Projede amaç, yüksek segment ürünleri güçlü bir görsel hiyerarşiyle öne çıkarırken kullanıcıların koleksiyonları rahatça keşfedebileceği, güven veren ve modern bir alışveriş deneyimi oluşturmaktı.",
  mission: "Pacha of London’ın lüks ve seçkin marka karakterini dijital ortama taşıyan; premium ürünleri zarif, anlaşılır ve güven veren bir deneyimle sunan güçlü bir web arayüzü oluşturmak.",
  contributions: "Pacha of London’ın web sitesini baştan sona yeniden ele alarak UI/UX tasarımını, sayfa yapısını ve genel görsel yönünü oluşturdum. Nadir saatler, mücevherler, çantalar ve premium hizmetlerin kolay keşfedilebilmesi için içerik hiyerarşisini ve navigasyon yapısını sadeleştirdim. Ürün sunumu, tipografi, boşluk kullanımı ve görsel detaylar üzerinde çalışarak markanın lüks, prestijli ve modern kimliğini dijital deneyime tutarlı biçimde yansıtmaya odaklandım.",
};

function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  return <div className={styles.infoBlock}><h2>{title}</h2><div className={styles.bodyText}>{children}</div></div>;
}

function SectionIntro({ title, description }: { title: string; description: string }) {
  return <div className={styles.sectionIntro}><h2>{title}</h2><p>{description}</p></div>;
}

function ProjectInfo() {
  return <section className={styles.projectInfo} data-figma-node="2417:190,2417:1137"><div className={styles.infoColumns}>
    <div className={styles.infoLeft}>
      <TextBlock title="Proje Hakkında"><p>{info.about}</p></TextBlock>
      <TextBlock title="Misyon"><p>{info.mission}</p></TextBlock>
      <TextBlock title="Katkılarım"><p>{info.contributions}</p></TextBlock>
    </div>
    <div className={styles.infoRight}>
      <TextBlock title="Kapsam"><ul><li>UI/UX Design</li><li>Web Design</li><li>Visual Design</li></ul></TextBlock>
      <TextBlock title="Rolüm"><ul><li>UI/UX Design</li><li>Visual Direction</li></ul></TextBlock>
      <TextBlock title="Araçlar"><div className={styles.tools}><span className={styles.figmaIcon}><Image src="/pacha-of-london/figma-icon-bg.svg" alt="" aria-hidden="true" width={48} height={48} /><Image src="/pacha-of-london/figma-icon.svg" alt="Figma" width={22.291} height={33.436} /></span><Image src="/pacha-of-london/photoshop-icon.svg" alt="Adobe Photoshop" width={48} height={48} /></div></TextBlock>
    </div>
  </div></section>;
}

function VisualIdentity() {
  return <section className={styles.identity} data-figma-node="2417:245,2417:1189">
    <SectionIntro title="Logo & Visual Identity" description="Pacha of London’ın görsel kimliği, markanın lüks, zarif ve zamansız karakterini yansıtacak şekilde oluşturuldu. Monogram yapısı markaya güçlü ve ayırt edici bir imza kazandırırken, serif tipografi klasik lüks hissini destekliyor. Altın ve koyu kahverengi tonlardan oluşan renk paleti ise premium ürünlerle uyumlu, sıcak ve sofistike bir marka atmosferi oluşturuyor." />
    <div className={styles.identityVisuals}>
      <picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/identity-main-mobile.png" /><img className={styles.identityMain} src="/pacha-of-london/identity-main-desktop.png" alt="Pacha of London görsel kimlik sunumu" /></picture>
      <div className={styles.logoCards}>
        <div className={styles.logoCard}><picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/identity-gold-mobile.png" /><img src="/pacha-of-london/identity-gold-desktop.png" alt="Pacha of London altın monogramı" /></picture></div>
        <div className={styles.logoCard}><picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/identity-dark-mobile.png" /><img src="/pacha-of-london/identity-dark-desktop.png" alt="Pacha of London koyu monogramı" /></picture></div>
      </div>
    </div>
  </section>;
}

function FeatureSection({ node, title, description, desktopAsset, mobileAsset, collections = false }: { node: string; title: string; description: string; desktopAsset: string; mobileAsset: string; collections?: boolean }) {
  return <section className={`${styles.feature} ${collections ? styles.collections : ""}`} data-figma-node={node}>
    <SectionIntro title={title} description={description} />
    <picture><source media="(max-width: 767px)" srcSet={mobileAsset} /><img className={styles.featureImage} src={desktopAsset} alt={title} /></picture>
  </section>;
}

function ProjectPresentation() {
  return <section className={styles.presentation} data-figma-node="2417:537,2417:1481">
    <SectionIntro title="Proje Sunumu" description="Pacha of London’ın görsel kimliği, ürün sunumu, koleksiyon yapısı ve premium hizmetlerini bir araya getiren kapsamlı proje sunumu. Web sitesinin genel yapısını, arayüz detaylarını ve markanın lüks dijital deneyime nasıl taşındığını bütün olarak inceleyebilirsin." />
    <picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/presentation-mobile.png" /><img className={styles.presentationImage} src="/pacha-of-london/presentation-desktop.png" alt="Pacha of London kapsamlı proje sunumu" /></picture>
    <div className={styles.presentationCtaRow} data-figma-node="2417:1105,2417:2049"><a href="https://www.behance.net/gallery/249368957/Pacha-of-London-Luxury-Watches-Jewellery-Web-Design" target="_blank" rel="noopener noreferrer" className={`${presentationCtaStyles.behanceCta} ${styles.presentationCta}`}><span>Behance’de Görüntüle</span><span aria-hidden="true" className={presentationCtaStyles.behanceArrow} /></a></div>
  </section>;
}

export function PachaPage({ header }: { header: ReactNode }) {
  return <div className={`${montserrat.className} ${styles.page}`}>
    <section className={styles.hero} data-figma-node="2417:175,2417:1115">
      <div className={styles.header}>{header}</div><div className={styles.heroText}><h1>Pacha Of London</h1><p>Luxury Watches &amp; Jewellery</p></div><div className={styles.heroLight} />
      <picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/hero-mobile.png" /><img className={styles.heroImage} src="/pacha-of-london/hero-desktop.png" alt="Pacha of London lüks saat ve mücevher web sitesi" /></picture>
    </section>
    <ProjectInfo />
    <section className={styles.watch} data-figma-node="2417:232,2417:1176"><picture><source media="(max-width: 767px)" srcSet="/pacha-of-london/watch-mobile.png" /><img src="/pacha-of-london/watch-desktop.png" alt="Pacha of London saat koleksiyonu sunumu" /></picture></section>
    <VisualIdentity />
    <FeatureSection node="2417:298,2417:1242" title="Premium Ürünleri Öne Çıkaran Sunum" description="Nadir saatler, fine jewellery ve luxury bag koleksiyonları; büyük ürün görselleri, güçlü boşluk kullanımı ve sade bilgi hiyerarşisiyle öne çıkarıldı. Amaç, ürünlerin premium algısını destekleyen ve kullanıcıyı gereksiz detayla yormayan rafine bir keşif deneyimi oluşturmaktı." desktopAsset="/pacha-of-london/premium-desktop.png" mobileAsset="/pacha-of-london/premium-mobile.png" />
    <FeatureSection node="2417:369,2417:1313" collections title="Koleksiyonlar Arasında Kolay Keşif" description="Saat, mücevher, çanta ve diğer premium kategoriler arasında geçişi kolaylaştıran sade ve düzenli bir navigasyon yapısı oluşturuldu. Kullanıcıların aradıkları ürün grubuna hızlıca ulaşabilmesi için kategori yapısı ve içerik hiyerarşisi mümkün olduğunca net tutuldu." desktopAsset="/pacha-of-london/collections-desktop.png" mobileAsset="/pacha-of-london/collections-mobile.png" />
    <ProjectPresentation />
  </div>;
}
