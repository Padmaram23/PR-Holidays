import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const clean = (value, max) =>
      typeof value === 'string' ? value.trim().slice(0, max) : '';

    const name = clean(body.name, 120);
    const email = clean(body.email, 160);

    if (name.length < 2) {
      return Response.json({ error: 'Please share your name.' }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
      return Response.json({ error: 'Please share a valid email address.' }, { status: 400 });
    }

    const rawTravellers = Number(body.travellers);
    const travellers = Number.isFinite(rawTravellers)
      ? Math.min(Math.max(Math.round(rawTravellers), 1), 40)
      : 1;

    const record = {
      name,
      email,
      phone: clean(body.phone, 40),
      country: clean(body.country, 80),
      experience: clean(body.experience, 120),
      travel_window: clean(body.travel_window, 120),
      travellers,
      message: clean(body.message, 2000),
      status: 'new',
      source: clean(body.source, 60) || 'website'
    };

    const created = await base44.asServiceRole.entities.Enquiry.create(record);

    return Response.json({ ok: true, id: created.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}