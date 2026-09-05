export function buildContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  });

  return {
    subject: `New Contact Inquiry - ${data.firstName} ${data.lastName}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Inter','Segoe UI',sans-serif;background:#F8FAFC;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;">
    <tr>
      <td style="background:linear-gradient(135deg,#2563EB,#0EA5E9);padding:32px 40px;border-radius:16px 16px 0 0;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;text-align:center;vertical-align:middle;">
              <span style="color:#fff;font-size:22px;font-weight:bold;">S</span>
            </td>
            <td style="padding-left:14px;">
              <span style="color:#fff;font-size:20px;font-weight:700;">Shreetek <span style="color:#0EA5E9;">Inc</span></span>
            </td>
          </tr>
        </table>
        <h1 style="color:#fff;font-size:22px;font-weight:700;margin:24px 0 4px;">New Contact Inquiry</h1>
        <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0;">${timestamp}</p>
      </td>
    </tr>
    <tr>
      <td style="background:#fff;padding:32px 40px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">
        <table cellpadding="0" cellspacing="0" width="100%">
          ${fieldRow('Full Name', `${data.firstName} ${data.lastName}`)}
          ${fieldRow('Email', data.email)}
          ${fieldRow('Phone', data.phone || 'Not provided')}
          ${fieldRow('Service Interested In', data.service)}
          ${fieldRow('Message', data.message)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="background:#F8FAFC;padding:20px 40px;border:1px solid #E2E8F0;border-radius:0 0 16px 16px;">
        <p style="color:#94A3B8;font-size:12px;margin:0;text-align:center;">
          This email was sent from the Shreetek Inc. website contact form.<br>
          &copy; ${new Date().getFullYear()} Shreetek Inc. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

export function buildResumeEmail(data: {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  visaStatus: string;
  linkedin: string;
  comments: string;
}) {
  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  });

  return {
    subject: `New Resume Submission - ${data.name}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Inter','Segoe UI',sans-serif;background:#F8FAFC;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;">
    <tr>
      <td style="background:linear-gradient(135deg,#2563EB,#0EA5E9);padding:32px 40px;border-radius:16px 16px 0 0;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;text-align:center;vertical-align:middle;">
              <span style="color:#fff;font-size:22px;font-weight:bold;">S</span>
            </td>
            <td style="padding-left:14px;">
              <span style="color:#fff;font-size:20px;font-weight:700;">Shreetek <span style="color:#0EA5E9;">Inc</span></span>
            </td>
          </tr>
        </table>
        <h1 style="color:#fff;font-size:22px;font-weight:700;margin:24px 0 4px;">New Resume Submission</h1>
        <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0;">${timestamp}</p>
      </td>
    </tr>
    <tr>
      <td style="background:#fff;padding:32px 40px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">
        <table cellpadding="0" cellspacing="0" width="100%">
          ${fieldRow('Full Name', data.name)}
          ${fieldRow('Email', data.email)}
          ${fieldRow('Phone', data.phone)}
          ${fieldRow('Location', data.location)}
          ${fieldRow('Years of Experience', data.experience)}
          ${fieldRow('Primary Skills', data.skills)}
          ${fieldRow('Work Authorization', data.visaStatus)}
          ${fieldRow('LinkedIn Profile', data.linkedin || 'Not provided')}
          ${fieldRow('Additional Comments', data.comments || 'Not provided')}
        </table>
      </td>
    </tr>
    <tr>
      <td style="background:#F8FAFC;padding:20px 40px;border:1px solid #E2E8F0;border-radius:0 0 16px 16px;">
        <p style="color:#94A3B8;font-size:12px;margin:0;text-align:center;">
          A resume file is attached to this email.<br>
          This email was sent from the Shreetek Inc. website resume form.<br>
          &copy; ${new Date().getFullYear()} Shreetek Inc. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;">
        <span style="color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
        <p style="color:#0F172A;font-size:15px;font-weight:500;margin:4px 0 0;padding:8px 12px;background:#F8FAFC;border-radius:8px;">${value}</p>
      </td>
    </tr>
  `;
}
