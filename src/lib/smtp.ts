import nodemailer from 'nodemailer';

export function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete. Check SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendEmail({
  to,
  subject,
  html,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: Buffer | string; contentType?: string }[];
}) {
  const transporter = createTransporter();

  const info = await transporter.sendMail({
    from: `"Shreetek Inc." <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    attachments,
  });

  return info;
}
