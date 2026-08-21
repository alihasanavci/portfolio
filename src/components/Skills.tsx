import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const skillGroups = [
  {
    title: "UI/UX Tasarım",
    skills: [
      "Web Design",
      "Mobile App Design",
      "Responsive Design",
      "User Flow",
      "User Research",
    ],
  },
  {
    title: "Design Systems",
    skills: [
      "Component Libraries",
      "Design Guidelines",
      "Component States",
      "Color & Typography",
      "Organized Design Files",
    ],
  },
  {
    title: "Grafik Tasarım",
    skills: [
      "Branding",
      "Social Media Design",
      "Layout & Visual Design",
      "Digital Content Design",
      "Color Theory & Typography",
    ],
  },
  {
    title: "Araçlar",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "AI-Assisted Design Tools",
      "Adobe Premiere Pro",
    ],
  },
] as const;

export function Skills() {
  return (
    <section
      id="beceriler"
      className={`${montserrat.className} h-auto w-full bg-black px-7 py-10 text-white md:h-[1192px] md:px-[200px] md:py-[120px]`}
    >
      <div className="flex w-full flex-col items-start gap-10 md:hidden">
        <header className="flex w-full flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/skills-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap">
                Beceriler
              </p>
            </div>

            <h2 className="w-full text-[28px] leading-[normal] font-semibold tracking-normal">
              Birden fazla disiplin
            </h2>
          </div>

          <p className="w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            Kullanıcı deneyiminden görsel iletişime, tasarım sistemlerinden
            uygulamaya hazır dosyalara kadar dijital projelerin ihtiyaç
            duyduğu farklı tasarım katmanları.
          </p>
        </header>

        <div className="flex w-full flex-col items-start gap-10">
          {skillGroups.map((group) => (
            <article
              key={`mobile-${group.title}`}
              className="flex w-full flex-col items-start gap-5 rounded-[16px] border border-[#262626] bg-[#181818] p-5"
            >
              <h3 className="text-[20px] leading-7 font-medium whitespace-nowrap text-white">
                {group.title}
              </h3>

              <ul className="flex w-full list-disc flex-col gap-1 pl-6 text-[16px] leading-9 font-normal text-[#eeeeee]">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden w-[1040px] flex-col items-start gap-20 md:flex">
        <header className="flex h-36 w-full items-start justify-between">
          <div className="flex flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/skills-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap">
                Beceriler
              </p>
            </div>

            <h2 className="flex flex-col gap-5 text-[48px] leading-[34px] font-semibold whitespace-nowrap">
              <span>Birden fazla</span>
              <span>disiplin</span>
            </h2>
          </div>

          <div className="flex h-full w-[540px] items-end justify-center">
            <p className="text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Kullanıcı deneyiminden görsel iletişime, tasarım sistemlerinden
              uygulamaya hazır dosyalara kadar dijital projelerin ihtiyaç
              duyduğu farklı tasarım katmanları.
            </p>
          </div>
        </header>

        <div className="grid h-[728px] w-full grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="flex h-[344px] w-[500px] flex-col items-start gap-6 rounded-[16px] border border-[#262626] bg-[#181818] p-10"
            >
              <h3 className="text-[24px] leading-7 font-medium whitespace-nowrap text-white">
                {group.title}
              </h3>

              <ul className="flex w-full list-disc flex-col gap-2 pl-6 text-[16px] leading-9 font-normal text-[#eeeeee]">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
