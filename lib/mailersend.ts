import { MailerSend, EmailParams, Recipient, Sender } from "mailersend";

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmailPayload) {
  const apiKey = process.env.MAILERSEND_API_KEY;
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL;
  const fromName = process.env.MAILERSEND_FROM_NAME ?? "Biointegral Saúde";
  const toEmail = process.env.MAILERSEND_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    throw new Error("MailerSend não configurado.");
  }

  const mailerSend = new MailerSend({ apiKey });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const emailParams = new EmailParams()
    .setFrom(new Sender(fromEmail, fromName))
    .setTo([new Recipient(toEmail, "Recepção Biointegral")])
    .setReplyTo(new Recipient(email, name))
    .setSubject(`Contato pelo site — ${name}`)
    .setText(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    )
    .setHtml(`
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>E-mail:</strong> ${safeEmail}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage}</p>
    `);

  await mailerSend.email.send(emailParams);
}
