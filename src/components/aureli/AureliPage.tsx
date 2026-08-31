import { Montserrat } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";
import presentationCtaStyles from "../fast-meal/FastMealProjectPresentation.module.css";
import styles from "./AureliPage.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const info = {
  about:
    "AURELI, 1981’den bu yana kalite, güven ve ince işçilik üzerine inşa edilen lüks bir mücevher markasıdır. Yüzük, kolye, küpe ve bileklik koleksiyonlarını zamansız bir estetik ve rafine bir marka diliyle sunar. Projede amaç, markanın köklü geçmişini ve premium karakterini modern bir dijital deneyime taşıyarak kullanıcıların koleksiyonları sade, zarif ve güven veren bir yapı içinde keşfedebilmesini sağlamaktı.",
  mission:
    "AURELI’nin zamansız zarafetini, köklü marka mirasını ve yüksek kalite algısını dijital ortama taşıyan; modern kullanıcılar için sade, prestijli ve güven veren bir alışveriş deneyimi oluşturmak.",
  contributions:
    "AURELI’nin web deneyimini baştan sona yeniden ele alarak UI/UX tasarımını, sayfa yapısını ve genel görsel yönünü oluşturdum. Mücevher koleksiyonlarının daha güçlü biçimde öne çıkması için içerik hiyerarşisini ve ürün sunumunu sadeleştirdim; tipografi, boşluk kullanımı, renk dengesi ve görsel detaylarla markanın premium kimliğini destekleyen tutarlı bir arayüz sistemi geliştirdim. Responsive yapı ve e-ticaret deneyimini de dikkate alarak kullanıcıların ürünleri farklı cihazlarda rahatça keşfedebilmesine odaklandım.",
};

function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.infoBlock}>
      <h2>{title}</h2>
      <div className={styles.bodyText}>{children}</div>
    </div>
  );
}

function SectionIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.sectionIntro}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ProjectInfo() {
  return (
    <section className={styles.projectInfo} data-figma-node="2426:408,2426:1087">
      <div className={styles.infoColumns}>
        <div className={styles.infoLeft}>
          <TextBlock title="Proje Hakkında"><p>{info.about}</p></TextBlock>
          <TextBlock title="Misyon"><p>{info.mission}</p></TextBlock>
          <TextBlock title="Katkılarım"><p>{info.contributions}</p></TextBlock>
        </div>
        <div className={styles.infoRight}>
          <TextBlock title="Kapsam">
            <ul><li>UI/UX Design</li><li>Web Design</li><li>E-commerce Website Design</li></ul>
          </TextBlock>
          <TextBlock title="Rolüm">
            <ul><li>UI/UX Design</li><li>Visual Direction</li><li>Product Experience</li></ul>
          </TextBlock>
          <TextBlock title="Araçlar">
            <div className={styles.tools}>
              <span className={styles.figmaIcon}>
                <Image src="/aureli/figma-icon-bg.svg" alt="" aria-hidden="true" width={48} height={48} />
                <Image src="/aureli/figma-icon.svg" alt="Figma" width={22.291} height={33.436} />
              </span>
              <Image src="/aureli/photoshop-icon.svg" alt="Adobe Photoshop" width={48} height={48} />
            </div>
          </TextBlock>
        </div>
      </div>
    </section>
  );
}

function VisualIdentity() {
  return (
    <section className={styles.identity} data-figma-node="2426:457,2426:1133">
      <SectionIntro
        title="Logo & Visual Identity"
        description="AURELI’nin görsel kimliği, markanın zamansız zarafetini, köklü geçmişini ve premium karakterini yansıtacak şekilde oluşturuldu. İnce ve dengeli serif tipografi, markaya sofistike ve güven veren bir duruş kazandırırken; logoda yer alan 1981 detayı markanın mirasını ve uzun yıllara dayanan güven duygusunu destekliyor. Siyah, kırık beyaz ve sıcak nötr tonlardan oluşan kullanım yapısı ise mücevherlerin önüne geçmeden markanın lüks ve rafine kimliğini güçlü biçimde tamamlıyor."
      />
      <div className={styles.identityVisuals}>
        <picture>
          <source media="(max-width: 767px)" srcSet="/aureli/identity-main-mobile.png" />
          <img className={styles.identityMain} src="/aureli/identity-main-desktop.png" alt="AURELI görsel kimlik sunumu" />
        </picture>
        <div className={styles.identityCards}>
          <div className={`${styles.identityCard} ${styles.identityLight}`}>
            <picture>
              <source media="(max-width: 767px)" srcSet="/aureli/identity-light-mobile.png" />
              <img src="/aureli/identity-light-desktop.png" alt="AURELI açık zemin logosu" />
            </picture>
          </div>
          <div className={`${styles.identityCard} ${styles.identityDark}`}>
            <picture>
              <source media="(max-width: 767px)" srcSet="/aureli/identity-dark-mobile.png" />
              <img src="/aureli/identity-dark-desktop.png" alt="AURELI koyu zemin logosu" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ node, title, description, asset }: { node: string; title: string; description: string; asset: string }) {
  return (
    <section className={styles.feature} data-figma-node={node}>
      <SectionIntro title={title} description={description} />
      <picture>
        <source media="(max-width: 767px)" srcSet={`/aureli/${asset}-mobile.png`} />
        <img className={styles.featureImage} src={`/aureli/${asset}-desktop.png`} alt={title} />
      </picture>
    </section>
  );
}

function ProjectPresentation() {
  return (
    <section className={styles.presentation} data-figma-node="2426:653,2426:1330">
      <SectionIntro
        title="Proje Sunumu"
        description="AURELI’nin görsel kimliği, koleksiyon yapısı, ürün sunumu ve e-ticaret deneyimini bir araya getiren kapsamlı proje sunumu. Web sitesinin genel yapısını, arayüz detaylarını ve markanın premium karakterinin dijital deneyime nasıl taşındığını bütün olarak inceleyebilirsin."
      />
      <picture className={styles.presentationVisual}>
        <source media="(max-width: 767px)" srcSet="/aureli/presentation-mobile.png" />
        <img className={styles.presentationImage} src="/aureli/presentation-desktop.png" alt="AURELI kapsamlı proje sunumu" />
      </picture>
      <div className={styles.presentationCtaRow} data-figma-node="2426:1055,2426:1732">
        <a
          href="https://www.behance.net/gallery/252478993/AURELI-Luxury-Jewelry-Web-Design"
          target="_blank"
          rel="noopener noreferrer"
          className={`${presentationCtaStyles.behanceCta} ${styles.presentationCta}`}
        >
          <span>Behance’de Görüntüle</span>
          <span aria-hidden="true" className={presentationCtaStyles.behanceArrow} />
        </a>
      </div>
    </section>
  );
}

export function AureliPage({ header }: { header: ReactNode }) {
  return (
    <div className={`${montserrat.className} ${styles.page}`}>
      <section className={styles.hero} data-figma-node="2426:393,2426:1065">
        <div className={styles.header}>{header}</div>
        <div className={styles.heroText}><h1>AURELI</h1><p>Luxury Jewelry Brand</p></div>
        <div className={styles.heroLight} />
        <div className={styles.heroMedia}><picture><source media="(max-width: 767px)" srcSet="/aureli/hero-mobile.png" /><img className={styles.heroImage} src="/aureli/hero.png" alt="AURELI lüks mücevher web sitesi" /></picture></div>
      </section>
      <ProjectInfo />
      <section className={styles.brand} data-figma-node="2426:451,2426:1127">
        <div className={styles.brandVisual}>
          <Image className={styles.brandImage} src="/aureli/brand-source.png" alt="" aria-hidden="true" width={1672} height={941} unoptimized />
          <picture className={styles.brandLogo}>
            <source media="(max-width: 767px)" srcSet="/aureli/brand-logo-mobile.png" />
            <img src="/aureli/brand-logo-desktop.png" alt="AURELI 1981" />
          </picture>
        </div>
      </section>
      <VisualIdentity />
      <FeatureSection node="2426:475,2426:1151" title="Ürünü Öne Çıkaran Rafine Alışveriş Deneyimi" description="Ürün kartları; görseli merkeze alırken fiyat, indirim, gramaj ve ürün adı gibi satın alma kararını etkileyen temel bilgileri sade ve okunabilir bir hiyerarşiyle sunacak şekilde tasarlandı. Böylece kullanıcı ihtiyaç duyduğu detaylara hızlıca ulaşırken, AURELI’nin premium ve rafine marka algısı korunuyor." asset="product" />
      <FeatureSection node="2426:585,2426:1262" title="Net Kategoriler, Hızlı Keşif" description="Yüzük, kolye, bilezik ve küpe gibi ana ürün grupları görsel olarak ayrıştırılarak kullanıcıların aradıkları kategoriye hızlıca ulaşması sağlandı. Sade kategori yapısı ve güçlü ürün görselleri sayesinde koleksiyonlar arasında gezinme süreci daha anlaşılır, düzenli ve premium bir deneyime dönüştürüldü." asset="categories" />
      <ProjectPresentation />
    </div>
  );
}
