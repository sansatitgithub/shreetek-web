import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/smtp';
import { buildContactEmail } from '@/lib/email-templates';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (firstName.length > 100 || lastName.length > 100 || email.length > 254) {
      return NextResponse.json(
        { error: 'Input fields exceed maximum length' },
        { status: 400 }
      );
    }

    const sanitize = (str: string) =>
      str.replace(/[<>]/g, '').trim();

    const { subject, html } = buildContactEmail({
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      service: sanitize(service || 'Not specified'),
      message: sanitize(message),
    });

    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@shreetek.com',
      subject,
      html,
    });

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry. We will get back to you shortly.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
