import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<
      Record<"name" | "email" | "subject" | "message", unknown>
    >;

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message || !emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Lütfen tüm alanları geçerli bilgilerle doldurun." },
        { status: 400 },
      );
    }

    if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { message: "Gönderdiğiniz bilgiler izin verilen uzunluğu aşıyor." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "BURAYA_KEY_GELECEK") {
      return NextResponse.json(
        { message: "Mesaj servisi henüz yapılandırılmamış." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: "Ali Hasan Avcı Portfolio <website@alihasanavci.com>",
      to: ["contact@alihasanavci.com"],
      replyTo: email,
      subject,
      text: `Ad & Soyad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}`,
      html: `
        <h2>Yeni portfolyo iletişim mesajı</h2>
        <p><strong>Ad &amp; Soyad:</strong> ${safeName}</p>
        <p><strong>E-posta:</strong> ${safeEmail}</p>
        <p><strong>Konu:</strong> ${safeSubject}</p>
        <p><strong>Mesaj:</strong><br />${safeMessage}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Mesajınız başarıyla gönderildi." });
  } catch {
    return NextResponse.json(
      { message: "Mesaj gönderilirken beklenmeyen bir hata oluştu." },
      { status: 500 },
    );
  }
}
