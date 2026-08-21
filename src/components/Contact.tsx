"use client";

import Image from "next/image";
import { Fragment_Mono, Montserrat } from "next/font/google";
import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";
import buttonStyles from "./Button.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
});

const contactItems = [
  {
    label: "EMAIL",
    value: "contact@alihasanavci.com",
    href: "mailto:contact@alihasanavci.com",
  },
  { label: "MERKEZ", value: "Mersin, Türkiye" },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/alihasanavci/",
    href: "https://www.linkedin.com/in/alihasanavci/",
  },
  {
    label: "BEHANCE",
    value: "behance.net/alihasanavci",
    href: "https://www.behance.net/alihasanavci",
  },
] as const;

function ContactArrow() {
  return (
    <span className="flex size-[25.456px] shrink-0 items-center justify-center">
      <Image
        src="/contact-arrow.svg"
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
        className="size-[18px] -rotate-135"
      />
    </span>
  );
}

const fields = [
  { id: "name", label: "Ad & Soyad", placeholder: "Ali Hasan Avcı" },
  { id: "email", label: "Eposta", placeholder: "mehmet@example.com" },
  { id: "subject", label: "Konu", placeholder: "Web tasarımı" },
] as const;

type FieldName = "name" | "email" | "subject" | "message";
type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialTouched: Record<FieldName, boolean> = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

function getFieldError(field: FieldName, value: string) {
  if (!value.trim()) return "Bu alan zorunludur.";
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Geçerli bir e-posta adresi girin.";
  }
  return "";
}

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  function updateValue(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  }

  function blurField(field: FieldName) {
    setFocusedField(null);
    setTouched((current) => ({ ...current, [field]: true }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitStatus === "sending") return;

    setSubmitted(true);
    setTouched({ name: true, email: true, subject: true, message: true });

    const hasError = (Object.keys(values) as FieldName[]).some((field) =>
      Boolean(getFieldError(field, values[field])),
    );
    if (hasError) return;

    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Mesaj gönderilemedi.");
      }

      setSubmitStatus("success");
      setSubmitMessage(result.message || "Mesajınız başarıyla gönderildi.");
      setValues(initialValues);
      setTouched(initialTouched);
      setSubmitted(false);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
      );
    }
  }

  function fieldState(field: FieldName) {
    const error = getFieldError(field, values[field]);
    const showError = (touched[field] || submitted) && Boolean(error);
    return {
      error,
      showError,
      isActive: focusedField === field,
      isFilled: Boolean(values[field].trim()) && !error,
    };
  }

  return (
    <section
      id="iletisim"
      className={`${montserrat.className} h-auto w-full bg-black px-7 py-10 text-white md:h-[1534px] md:px-[200px] md:py-[120px]`}
    >
      <div className="mx-auto flex w-full flex-col items-start gap-10 md:w-[1040px] md:gap-20">
        <header className="flex h-auto w-full flex-col items-start gap-10 md:h-[169px] md:items-center">
          <div className="flex w-full flex-col items-start gap-8 md:items-center">
            <div className="flex h-6 items-center gap-2">
              <Image
                src="/contact-star.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="size-6"
              />
              <p className="text-[12px] leading-normal font-normal whitespace-nowrap">
                İletişim
              </p>
            </div>
            <h2 className="w-full text-[28px] leading-[normal] font-semibold tracking-normal md:text-center md:text-[48px] md:leading-[34px] md:whitespace-nowrap">
              Birlikte güçlü işler üretelim.
            </h2>
          </div>

          <p className="w-full text-left text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] md:w-[928px] md:text-center">
            Dijital ürünler, yeni projeler ve iş fırsatları için benimle iletişime
            geçebilirsin.
            <br />
            İhtiyaçlarını birlikte değerlendirip nasıl katkı sağlayabileceğimi
            konuşalım.
          </p>
        </header>

        <div className="grid h-auto w-full grid-cols-1 gap-5 md:h-[258px] md:grid-cols-2">
          {contactItems.map((item) => (
            <article
              key={item.label}
              className="flex h-auto w-full flex-col items-start gap-5 rounded-[16px] border border-[#262626] p-5 md:h-[119px] md:w-[510px] md:rounded-[24px] md:p-10"
            >
              <p
                className={`${fragmentMono.className} h-2 text-[12px] leading-2 text-[#828282]`}
              >
                {item.label}
              </p>
              {"href" in item ? (
                <a
                  href={item.href}
                  target={item.label === "EMAIL" ? undefined : "_blank"}
                  rel={item.label === "EMAIL" ? undefined : "noopener noreferrer"}
                  className="flex h-[11px] w-full min-w-0 items-center gap-1 text-[16px] leading-[11px] font-medium text-[#eeeeee] md:w-auto md:whitespace-nowrap"
                >
                  <span className="min-w-0 break-all md:break-normal">{item.value}</span>
                  {item.label !== "EMAIL" && <ContactArrow />}
                </a>
              ) : (
                <p className="h-[11px] text-[16px] leading-[11px] font-medium text-[#eeeeee]">
                  {item.value}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch overflow-hidden rounded-[16px] border border-[#262626] bg-[#181818] md:min-h-[707px] md:flex-row">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex w-full shrink-0 flex-col items-start gap-10 px-5 py-10 md:min-h-[707px] md:w-[520px] md:p-10"
          >
            <div className="flex w-full flex-col items-start gap-5 md:w-[440px]">
              <h3 className="text-[20px] leading-normal font-semibold whitespace-nowrap md:text-[24px] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Mesajını bırak
              </h3>
              <p className="w-full text-[16px] leading-7 font-medium tracking-[0.32px] text-[#ededed] md:whitespace-nowrap [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                Projen veya iş fırsatınla ilgili detayları paylaşabilirsin.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 md:w-[440px]">
              {fields.map((field) => {
                const state = fieldState(field.id);
                const stateClass = state.showError
                  ? "border-[#dc3e42]"
                  : state.isActive
                    ? "border-[#f25aae] placeholder:text-[#f1f2f2]"
                    : "border-[#262626]";

                return (
                  <label
                    key={field.id}
                    htmlFor={field.id}
                    className="flex w-full flex-col gap-2"
                  >
                    <span className="h-2 pl-[9px] text-[12px] leading-2 font-medium tracking-[0.24px] text-[#808080]">
                      {field.label}
                    </span>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.id === "email" ? "email" : "text"}
                      required
                      value={values[field.id]}
                      placeholder={field.placeholder}
                      aria-invalid={state.showError}
                      aria-describedby={`${field.id}-hint`}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => blurField(field.id)}
                      onChange={(event) =>
                        updateValue(field.id, event.target.value)
                      }
                      className={`h-[50px] w-full rounded-[10px] border bg-[rgba(16,16,16,0.7)] px-4 text-[14px] leading-normal font-medium tracking-[0.28px] text-[#f1f2f2] outline-none placeholder:text-[#ededed] placeholder:opacity-50 ${stateClass}`}
                    />
                    {state.showError && (
                      <span
                        id={`${field.id}-hint`}
                        className="h-2 px-4 text-[12px] leading-2 font-normal tracking-[0.24px] whitespace-nowrap text-[#dc3e42]"
                      >
                        {state.error}
                      </span>
                    )}
                  </label>
                );
              })}

              {(() => {
                const state = fieldState("message");
                const stateClass = state.showError
                  ? "border-[#dc3e42]"
                  : state.isActive
                    ? "border-[#f25aae] placeholder:text-[#f1f2f2]"
                    : "border-[#262626]";

                return (
                  <label
                    htmlFor="message"
                    className="flex w-full flex-col gap-2"
                  >
                    <span className="h-2 pl-[9px] text-[12px] leading-2 font-medium tracking-[0.24px] text-[#808080]">
                      Mesaj
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={values.message}
                      placeholder="Projeniz hakkında bilgi verin..."
                      aria-invalid={state.showError}
                      aria-describedby="message-hint"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => blurField("message")}
                      onChange={(event) =>
                        updateValue("message", event.target.value)
                      }
                      className={`h-[161px] w-full resize-none rounded-[10px] border bg-[rgba(16,16,16,0.7)] pt-5 pr-4 pb-5 pl-4 text-[14px] leading-7 font-medium tracking-[0.28px] text-[#f1f2f2] outline-none placeholder:text-[#ededed] placeholder:opacity-50 md:h-[138px] ${stateClass}`}
                    />
                    {state.showError && (
                      <span
                        id="message-hint"
                        className="h-2 px-4 text-[12px] leading-2 font-normal tracking-[0.24px] whitespace-nowrap text-[#dc3e42]"
                      >
                        {state.error}
                      </span>
                    )}
                  </label>
                );
              })()}
            </div>

            <button
              type="submit"
              disabled={submitStatus === "sending"}
              className={`${buttonStyles.button} ${buttonStyles.primary} flex h-[51px] w-full shrink-0 items-center justify-center rounded-full px-6 py-5 text-[16px] leading-normal font-normal disabled:cursor-not-allowed disabled:opacity-60 md:w-[440px]`}
            >
              <span>{submitStatus === "sending" ? "Gönderiliyor..." : "Gönder"}</span>
            </button>

            {submitMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`w-full text-[13px] leading-5 md:w-[440px] ${
                  submitStatus === "success" ? "text-[#f25aae]" : "text-[#dc3e42]"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>

          <div className="relative aspect-[346/707] w-full shrink-0 overflow-hidden md:aspect-auto md:w-[520px] md:self-stretch">
            <Image
              src="/contact-photo.png"
              alt="Pembe ve mavi tonlarda şehir manzarası"
              fill
              sizes="(max-width: 767px) calc(100vw - 56px), 520px"
              className={`${styles.photo} object-cover`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
