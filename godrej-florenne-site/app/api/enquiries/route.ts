import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const SUPABASE_URL = 'https://nnytxmlxjkqueipwzcal.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_l6qjv2GCsbsVx-ulQc2oqg_oYRkDn32';
const NOTIFY_EMAIL = process.env.FLORENNE_NOTIFY_EMAIL || 'sales@gepropertyhub.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const full_name = String(body.full_name || '').trim().slice(0, 120);
    const mobile = String(body.mobile || '').trim().slice(0, 30);
    const email = body.email ? String(body.email).trim().slice(0, 254) : null;
    const enquiry_type = String(body.enquiry_type || 'General enquiry').trim().slice(0, 100);
    const message = String(body.message || '').trim().slice(0, 2000);
    const contact_consent = body.contact_consent === true;
    if (!full_name || !mobile || !enquiry_type) return NextResponse.json({ error: 'Name, mobile and enquiry type are required.' }, { status: 400 });
    const saved = await fetch(`${SUPABASE_URL}/rest/v1/florenne_enquiries`, {
      method: 'POST', headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ full_name, email, mobile, enquiry_type, message, contact_consent }), cache: 'no-store'
    });
    if (!saved.ok) { console.error('Florenne lead save failed:', saved.status, await saved.text()); return NextResponse.json({ error: 'Could not save enquiry.' }, { status: 502 }); }
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) { console.error('RESEND_API_KEY is not configured.'); return NextResponse.json({ saved: true, emailSent: false }); }
    const mail = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.FLORENNE_FROM_EMAIL || 'Godrej Florenne <onboarding@resend.dev>', to: [NOTIFY_EMAIL],
        subject: `New Godrej Florenne enquiry: ${enquiry_type}`,
        text: ['A new enquiry was submitted on the Godrej Florenne website.', '', `Name: ${full_name}`, `Mobile: +91 ${mobile}`, `Email: ${email || 'Not provided'}`, `Enquiry type: ${enquiry_type}`, `Message: ${message || 'Not provided'}`, `Contact consent: ${contact_consent ? 'Yes' : 'No'}`, `Received at: ${new Date().toISOString()}`].join('\n')
      }), cache: 'no-store'
    });
    if (!mail.ok) { console.error('Florenne email failed:', mail.status, await mail.text()); return NextResponse.json({ saved: true, emailSent: false }); }
    return NextResponse.json({ saved: true, emailSent: true });
  } catch (error) { console.error('Florenne enquiry API error:', error); return NextResponse.json({ error: 'Invalid enquiry request.' }, { status: 400 }); }
}
