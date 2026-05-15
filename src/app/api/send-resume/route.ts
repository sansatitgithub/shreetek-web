import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/smtp';
import { buildResumeEmail } from '@/lib/email-templates';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const location = (formData.get('location') as string) || '';
    const experience = (formData.get('experience') as string) || '';
    const skills = (formData.get('skills') as string) || '';
    const visaStatus = (formData.get('visaStatus') as string) || '';
    const linkedin = (formData.get('linkedin') as string) || '';
    const comments = (formData.get('comments') as string) || '';
    const file = formData.get('resume') as File | null;

    if (!name || !email || !phone || !location || !skills) {
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

    if (name.length > 100 || email.length > 254 || phone.length > 20) {
      return NextResponse.json(
        { error: 'Input fields exceed maximum length' },
        { status: 400 }
      );
    }

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: 'Invalid file type. Only PDF, DOC, and DOCX files are accepted.' },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'File size exceeds 5MB limit.' },
          { status: 400 }
        );
      }
    }

    const sanitize = (str: string) =>
      str.replace(/[<>]/g, '').trim();

    const { subject, html } = buildResumeEmail({
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      location: sanitize(location),
      experience: sanitize(experience),
      skills: sanitize(skills),
      visaStatus: sanitize(visaStatus),
      linkedin: sanitize(linkedin),
      comments: sanitize(comments),
    });

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    await sendEmail({
      to: process.env.RESUME_EMAIL || 'resumes@shreetek.com',
      subject,
      html,
      attachments,
    });

    return NextResponse.json(
      { success: true, message: 'Your resume has been submitted successfully. Our team will review it and reach out to you.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Resume form error:', error);
    const message = error instanceof Error ? error.message : 'Failed to submit resume';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
