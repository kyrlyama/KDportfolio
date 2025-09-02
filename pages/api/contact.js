// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const { name = "Anonymous", email = "no-reply@example.com", message = "" } =
    req.body || {};

  // читаем переменные окружения (поддерживаю два названия на всякий случай)
  const GMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const GMAIL_APP_PASSWORD =
    process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
  const MAIL_TO = process.env.MAIL_TO || GMAIL_USER;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return res.status(500).json({
      ok: false,
      error:
        "Mail credentials are missing (.env.local: GMAIL_USER / GMAIL_APP_PASSWORD).",
    });
  }

  // транспорт Gmail через app password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  // простая разметка без вложенных бэктиков
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2>New message from portfolio</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br>${message.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  const mailOptions = {
    from: `"Portfolio" <${GMAIL_USER}>`,       // для Gmail from == user
    to: MAIL_TO,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("MAIL ERROR:", e);
    return res.status(500).json({ ok: false, error: "Mail send failed" });
  }
}
