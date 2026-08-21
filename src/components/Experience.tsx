import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const experiences = [
  {
    date: "May 2026  —  Günümüz",
    role: "UI/UX Designer",
    company: "Freelance",
    country: "Türkiye",
    cardTop: 0,
    markerTop: 50,
    dateTop: 48,
    bullets: [
      "Farklı sektörlerden markalar, girişimler ve bireysel müşteriler için web sitesi, landing page ve mobil uygulama arayüzleri tasarlıyorum. Her projeye müşterinin hedeflerini, ihtiyaçlarını ve mevcut sorunlarını anlayarak başlıyor; proje kapsamını buna göre şekillendiriyorum.",
      "Tasarım sürecini içerik yapısından final arayüzlere kadar bağımsız olarak yönetiyor, proje için en uygun kullanıcı deneyimini ve görsel yönü oluşturuyorum. Gerektiğinde mevcut ürünleri yeniden ele alarak daha anlaşılır, tutarlı ve marka kimliğiyle uyumlu hâle getiriyorum.",
      "Müşterilerle doğrudan iletişim kuruyor, geri bildirimleri sürece dahil ediyor ve geliştiricilerin rahatlıkla uygulayabileceği düzenli tasarım dosyaları teslim ediyorum.",
    ],
  },
  {
    date: "Ağu 2023  —  Günümüz",
    role: "UI/UX Designer",
    company: "BoldArt Design",
    country: "Birleşik Krallık",
    cardTop: 40,
    markerTop: 90,
    dateTop: 87,
    bullets: [
      "Web ve mobil ürünler için kullanıcı odaklı, responsive ve görsel açıdan tutarlı arayüzler tasarlıyorum. Kullanılabilirlik, işlevsellik ve marka kimliğini birlikte ele alarak sade, modern ve anlaşılır dijital deneyimler oluşturuyorum.",
      "High-fidelity arayüzler, design system’lar, yeniden kullanılabilir component’ler ve farklı ekran boyutlarına uyum sağlayan responsive yapılar hazırlıyorum. Mevcut arayüzleri daha düzenli, tutarlı ve kullanıcı dostu hâle getiren tasarım çözümleri geliştiriyorum.",
      "Geliştiricilerle yakın çalışarak component durumlarını, responsive davranışları ve handoff detaylarını açık biçimde tanımlıyor; uygulamaya hazır, düzenli tasarım dosyaları teslim ediyorum.",
    ],
  },
  {
    date: "Oca 2024  —  Günümüz",
    role: "Graphic Designer",
    company: "BoldArt Design",
    country: "Birleşik Krallık",
    cardTop: 40,
    markerTop: 90,
    dateTop: 87,
    bullets: [
      "Markaların farklı dijital platformlarda güçlü ve tutarlı bir görsel kimlik oluşturmasına katkı sağlayan tasarımlar hazırlıyorum. Sosyal medya içerikleri, banner’lar, kampanya görselleri ve dijital pazarlama materyalleri üzerinde çalışıyorum.",
      "Her projede markanın kimliğini, iletişim dilini ve hedef kitlesini dikkate alarak görsel çözümler geliştiriyor; tasarım yaklaşımını projenin ihtiyaçlarına göre şekillendiriyorum.",
      "Görsel tutarlılık, kompozisyon, tipografi ve marka algısına odaklanarak tüm içeriklerin aynı görsel sistemin parçası gibi görünmesine önem veriyorum.",
    ],
  },
  {
    date: "Oca 2025  —  Günümüz",
    role: "Video Editor",
    company: "Freelance",
    country: "Türkiye",
    cardTop: 40,
    markerTop: 90,
    dateTop: 87,
    bullets: [
      "YouTube ve sosyal medya platformları için uzun ve kısa formatlı video içerikleri düzenliyorum. Canlı yayın kayıtlarını ve ham görüntüleri daha anlaşılır, akıcı ve izleyici ilgisini koruyan içeriklere dönüştürüyorum.",
      "Kurgu sürecinde tempo, zamanlama, görsel ritim ve içerik akışına odaklanıyor; videonun tarzına ve hedef kitlesine uygun dinamik düzenlemeler hazırlıyorum. Shorts ve Reels gibi kısa formatlarda ise ana mesajı koruyarak içeriği daha hızlı tüketilebilir ve dikkat çekici hâle getiriyorum.",
      "Videoları farklı platformların formatlarına göre uyarlarken içerik dili, görsel yapı ve genel tonun tutarlı kalmasına önem veriyorum.",
    ],
  },
] as const;

const mobileExperiences = experiences;

export function Experience() {
  return (
    <section
      id="deneyimler"
      className={`${montserrat.className} h-auto w-full bg-black px-7 py-10 text-white md:h-[2429px] md:px-[200px] md:py-[120px]`}
    >
      <div className="flex w-full flex-col items-start gap-10 md:hidden">
        <div className="flex w-full flex-col items-start gap-10">
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
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Deneyimler
              </p>
            </div>
            <h2 className="w-full text-[28px] leading-[normal] font-semibold tracking-normal text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Fikirden arayüze...
            </h2>
          </div>

          <p className="w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            UI/UX alanında 3 yılı aşkın deneyimle; B2B SaaS, Web3, e-ticaret,
            mobil uygulamalar ve farklı dijital ürün projelerinde görev aldım.
            Kullanıcı ihtiyaçlarını, iş hedeflerini ve teknik gereksinimleri
            anlaşılır, işlevsel ve görsel olarak tutarlı arayüzlere dönüştürdüm.
            Farklı sektörlerde ve proje yapılarında edindiğim deneyim sayesinde
            ürünleri yalnızca ekran bazında değil; kullanıcı deneyimi, responsive
            yapı, tasarım sistemi ve marka bütünlüğü açısından da ele aldım.
          </p>
        </div>

        <div className="flex w-full flex-col items-start">
          {mobileExperiences.map((experience, index) => (
            <article
              key={`mobile-${experience.date}-${experience.role}`}
              className="relative flex w-full items-stretch gap-10"
            >
              <div className="w-0.5 shrink-0 self-stretch bg-[#262626]" />

              <div
                className={`flex min-w-0 flex-1 flex-col items-start gap-5 ${
                  index === mobileExperiences.length - 1 ? "" : "pb-10"
                }`}
              >
                <div className="flex min-h-[68px] items-start py-5">
                  <p className="text-[14px] leading-7 font-medium tracking-[0.28px] whitespace-pre text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                    {experience.date}
                  </p>
                </div>

                <div className="flex w-full flex-col items-start gap-5 rounded-[24px] border border-[#262626] bg-[#181818] p-5">
                  <div className="flex w-full flex-col items-start leading-7">
                    <div className="flex w-full items-center justify-between gap-2 max-[359px]:flex-col max-[359px]:items-start">
                      <h3 className="text-[16px] font-medium whitespace-nowrap text-white">
                        {experience.role}
                      </h3>
                      <p className="shrink-0 text-center text-[10px] font-normal whitespace-nowrap text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                        {experience.country}
                      </p>
                    </div>
                    <p className="text-[12px] font-normal text-[#808080]">
                      {experience.company}
                    </p>
                  </div>

                  <ul className="flex w-full list-disc flex-col gap-5 pl-[21px] text-[14px] leading-5 font-normal tracking-[0.28px] text-[#eeeeee]">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Image
                src="/experience-dot.svg"
                alt=""
                width={8}
                height={8}
                aria-hidden="true"
                className="absolute top-[21px] left-[-3px] size-2"
              />
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden w-[1040px] flex-col items-start gap-20 md:flex">
        <div className="flex h-[225px] w-full flex-col items-start gap-10">
          <div className="flex h-[90px] flex-col items-start gap-8">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/experience-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Deneyimler
              </p>
            </div>
            <h2 className="text-[48px] leading-normal font-semibold whitespace-nowrap text-white [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
              Fikirden arayüze...
            </h2>
          </div>

          <p className="h-[95px] w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
            UI/UX alanında 3 yılı aşkın deneyimle; B2B SaaS, Web3, e-ticaret,
            mobil uygulamalar ve farklı dijital ürün projelerinde görev aldım.
            Kullanıcı ihtiyaçlarını, iş hedeflerini ve teknik gereksinimleri
            anlaşılır, işlevsel ve görsel olarak tutarlı arayüzlere dönüştürdüm.
            Farklı sektörlerde ve proje yapılarında edindiğim deneyim sayesinde
            ürünleri yalnızca ekran bazında değil; kullanıcı deneyimi, responsive
            yapı, tasarım sistemi ve marka bütünlüğü açısından da ele aldım.
          </p>
        </div>

        <div className="flex h-[1884px] w-full flex-col items-start">
          {experiences.map((experience) => (
            <article
              key={`${experience.date}-${experience.role}`}
              className="relative grid w-full grid-cols-[198px_2px_760px] gap-x-10"
            >
              <p
                className="absolute left-0 w-[198px] text-center text-[16px] leading-7 font-medium tracking-[0.32px] whitespace-pre text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
                style={{ top: experience.dateTop }}
              >
                {experience.date}
              </p>

              <div className="col-start-2 h-full w-0.5 bg-[#262626]" />

              <div
                className="col-start-3 flex w-[760px] flex-col items-start gap-8 rounded-[24px] border border-[#262626] bg-[#181818] p-10"
                style={{
                  marginTop: experience.cardTop,
                }}
              >
                <div className="flex w-full flex-col items-start gap-1 leading-7">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="text-[24px] font-medium text-white">
                      {experience.role}
                    </h3>
                    <p className="text-center text-[12px] font-normal text-[#808080] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                      {experience.country}
                    </p>
                  </div>
                  <p className="text-[16px] font-normal text-[#808080]">
                    {experience.company}
                  </p>
                </div>

                <ul className="flex w-full list-disc flex-col gap-6 pl-6 text-[16px] leading-6 font-normal tracking-[0.32px] text-[#eeeeee]">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <Image
                src="/experience-dot.svg"
                alt=""
                width={8}
                height={8}
                aria-hidden="true"
                className="absolute left-[235px] size-2"
                style={{ top: experience.markerTop }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
