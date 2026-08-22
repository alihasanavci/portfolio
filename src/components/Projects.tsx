import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import buttonStyles from "./Button.module.css";
import styles from "./Projects.module.css";
import { SectionScrollButton } from "./SectionScrollButton";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const projects = [
  {
    title: "Restoran operasyonlarını tek sistemde birleştiren POS deneyimi",
    description:
      "Garson, mutfak ve yönetim ekipleri arasındaki süreci hızlandıran; sipariş, iletişim ve satış takibini tek platformda buluşturan restoran POS deneyimi.",
    tags: ["UI/UX Design", "Product Design", "Branding"],
    image: "/project-pos.jpeg",
    imageAlt: "Restoran POS arayüzü tablet sunumu",
    imageSide: "right",
    href: "/fast-meal",
  },
  {
    title:
      "Karmaşık hava verilerini anlaşılır bir deneyime dönüştüren mobil uygulama",
    description:
      "Sıcaklık, yağış, nem, rüzgâr ve hissedilen sıcaklık gibi detaylı hava verilerini sade bir arayüzde bir araya getiren, günlük planlamayı kolaylaştıran mobil hava durumu deneyimi.",
    tags: ["UI/UX Design", "Mobile App", "Visual Design"],
    image: "/project-weather.jpeg",
    imageAlt: "Mobil hava durumu uygulaması telefon sunumu",
    imageSide: "left",
    href: "/cloudline",
  },
  {
    title:
      "Kripto piyasalarını tek ekranda izlemeyi ve işlem yapmayı kolaylaştıran platform",
    description:
      "Canlı piyasa verileri, grafikler, alım-satım işlemleri ve presale sürecini tek arayüzde bir araya getiren; yatırımcıların piyasayı daha hızlı takip etmesini ve kararlarını daha anlaşılır verilerle desteklemesini amaçlayan dijital ürün deneyimi.",
    tags: ["UI/UX Design", "Web Design", "Branding"],
    image: "/project-crypto.jpeg",
    imageAlt: "Kripto işlem platformu dizüstü bilgisayar sunumu",
    imageSide: "right",
    href: null,
  },
] as const;

function ProjectCardLink({
  href,
  children,
}: {
  href: string | null;
  children: ReactNode;
}) {
  if (!href) return children;

  return (
    <Link href={href} className="block w-full cursor-pointer">
      {children}
    </Link>
  );
}

function ProjectText({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
      <div className="flex w-full flex-col gap-5 pt-5 font-medium">
        <h3 className="text-[24px] leading-7 text-white">{project.title}</h3>
        <p className="text-[16px] leading-6 tracking-[0.32px] text-[#808080]">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-5 text-[12px] leading-7 font-normal text-[#828282]">
        {project.tags.map((tag, index) => (
          <span key={tag} className="contents">
            {index > 0 && <span aria-hidden="true">*</span>}
            <span className="whitespace-nowrap">{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectImage({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative h-[500px] w-[564px] shrink-0 overflow-hidden rounded-[16px] bg-[#181818]">
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="564px"
        className={`${styles.image} object-cover`}
      />
    </div>
  );
}

function MobileProject({ project }: { project: (typeof projects)[number] }) {
  return (
    <ProjectCardLink href={project.href}>
      <article className={`${styles.card} flex w-full flex-col items-start gap-10 rounded-[24px] border border-[#262626] p-5`}>
      <div className="flex w-full flex-col items-start gap-10">
        <div className="flex w-full flex-col items-start gap-5 font-medium">
          <h3 className="w-full text-[24px] leading-7 text-white">
            {project.title}
          </h3>
          <p className="w-full text-[16px] leading-6 tracking-[0.32px] text-[#808080]">
            {project.description}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-5 text-[12px] leading-7 font-normal text-[#828282]">
          {project.tags.map((tag, index) => (
            <span key={tag} className="contents">
              {index > 0 && <span aria-hidden="true">*</span>}
              <span className="whitespace-nowrap">{tag}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative aspect-[304/348] w-full overflow-hidden rounded-[16px] bg-[#181818]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 96px), 304px"
          className={`${styles.image} object-cover`}
        />
      </div>
      </article>
    </ProjectCardLink>
  );
}

export function Projects() {
  return (
    <section
      id="projeler"
      className={`${montserrat.className} h-auto w-full bg-black px-7 py-10 text-white md:h-[2470px] md:px-[200px] md:py-[120px]`}
    >
      <div className="flex w-full flex-col items-start gap-10 md:hidden">
        <header className="flex w-full flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/experience-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap">
                Projeler
              </p>
            </div>

            <h2 className="w-[182px] max-w-full text-[28px] leading-[40px] font-semibold tracking-normal [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Seçili işler,
              <br />
              düşünülmüş
              <br />
              deneyimler.
            </h2>
          </div>

          <p className="w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Farklı sektörlerde geliştirdiğim seçili UI/UX projelerini burada bir
            araya getiriyorum. Her projede kullanıcı deneyimini, işlevselliği
            ve görsel dili birlikte ele alarak sade, tutarlı ve marka
            kimliğiyle uyumlu dijital ürünler tasarladım.
          </p>
        </header>

        <div className="flex w-full flex-col items-start gap-10">
          {projects.map((project) => (
            <MobileProject key={`mobile-${project.title}`} project={project} />
          ))}
        </div>
      </div>

      <div className="mx-auto hidden w-[1040px] flex-col items-start gap-20 md:flex">
        <header className="flex h-[198px] w-full items-start justify-between">
          <div className="flex flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/experience-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap">
                Projeler
              </p>
            </div>

            <h2 className="flex flex-col gap-5 text-[48px] leading-[34px] font-semibold whitespace-nowrap">
              <span>Seçili işler,</span>
              <span>düşünülmüş</span>
              <span>deneyimler.</span>
            </h2>
          </div>

          <div className="flex h-full w-[540px] items-center justify-center pt-[100px]">
            <p className="text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Farklı sektörlerde geliştirdiğim seçili UI/UX projelerini burada bir
              araya getiriyorum. Her projede kullanıcı deneyimini, işlevselliği
              ve görsel dili birlikte ele alarak sade, tutarlı ve marka
              kimliğiyle uyumlu dijital ürünler tasarladım.
            </p>
          </div>
        </header>

        <div className="flex w-full flex-col gap-10">
          {projects.map((project) => (
            <ProjectCardLink key={project.title} href={project.href}>
              <article className={`${styles.card} flex h-[580px] w-full items-start gap-20 rounded-[24px] border border-[#262626] p-10`}>
                {project.imageSide === "left" ? (
                  <>
                    <ProjectImage project={project} />
                    <ProjectText project={project} />
                  </>
                ) : (
                  <>
                    <ProjectText project={project} />
                    <ProjectImage project={project} />
                  </>
                )}
              </article>
            </ProjectCardLink>
          ))}
        </div>

        <div className="flex h-[52px] w-full items-center justify-center">
          <SectionScrollButton
            sectionId="projeler"
            className={`${buttonStyles.button} ${buttonStyles.secondary} flex h-[52px] items-center justify-center gap-1 rounded-full px-6 py-5 text-[16px] leading-normal font-normal`}
          >
            <span>Tüm Projelerimi Gör</span>
            <span
              aria-hidden="true"
              className="flex size-[25.456px] items-center justify-center text-[20px] leading-none"
            >
              ↗
            </span>
          </SectionScrollButton>
        </div>
      </div>
    </section>
  );
}
