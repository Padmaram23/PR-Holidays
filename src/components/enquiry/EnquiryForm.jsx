import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const fieldClass =
  'w-full rounded-none border-0 border-b border-heritage-charcoal/25 bg-transparent px-0 py-3 text-[0.95rem] text-heritage-charcoal transition-colors placeholder:text-heritage-charcoal/35 focus:border-heritage-maroon focus:outline-none focus:ring-0';
const labelClass = 'block text-[9.5px] uppercase tracking-[0.2em] text-heritage-earth/60';

const fallbackExperiences = [
  'The Living Heritage Journey',
  'The Sacred Tamil Nadu Journey',
  'Not sure yet — I would like your guidance'
];

export default function EnquiryForm({ experiences = [], defaultExperience = '', source = 'website' }) {
  const options = experiences.length ? experiences : fallbackExperiences;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    experience: defaultExperience || options[0],
    travel_window: '',
    travellers: '2',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultExperience) {
      setForm((prev) => ({ ...prev, experience: defaultExperience }));
    }
  }, [defaultExperience]);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setError('');

    try {
      const response = await base44.functions.invoke('submitEnquiry', {
        ...form,
        travellers: Number(form.travellers) || 1,
        source
      });

      if (response?.data?.ok) {
        setStatus('success');
        return;
      }

      setError(response?.data?.error || 'Your enquiry could not be sent just now. Please try again.');
      setStatus('idle');
    } catch (err) {
      setError('Your enquiry could not be sent just now. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="border-t border-heritage-bronze/50 pt-10" role="status">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-heritage-bronze/50 text-heritage-bronze">
          <Check className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <p className="mt-6 text-balance font-heading text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight text-heritage-charcoal">
          Thank you — your letter has reached us.
        </p>
        <p className="mt-4 max-w-md text-[0.98rem] leading-[1.85] text-heritage-earth/75">
          We reply personally, and every journey is planned one conversation at a time. You will hear
          from us soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setForm((prev) => ({ ...prev, message: '', travel_window: '' }));
          }}
          className="mt-8 border-b border-heritage-maroon/40 pb-1 text-[10px] uppercase tracking-[0.22em] text-heritage-maroon transition-colors hover:border-heritage-maroon"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="border-t border-heritage-charcoal/15 pt-9" noValidate>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className={labelClass}>
            Your name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="How should we greet you?"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-email" className={labelClass}>
            Email *
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className={labelClass}>
            Phone or WhatsApp
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="Optional"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-country" className={labelClass}>
            Travelling from
          </label>
          <input
            id="enquiry-country"
            type="text"
            value={form.country}
            onChange={update('country')}
            placeholder="City or country"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-experience" className={labelClass}>
            Which journey draws you
          </label>
          <select
            id="enquiry-experience"
            value={form.experience}
            onChange={update('experience')}
            className={`${fieldClass} cursor-pointer`}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="enquiry-window" className={labelClass}>
            When you hope to travel
          </label>
          <input
            id="enquiry-window"
            type="text"
            value={form.travel_window}
            onChange={update('travel_window')}
            placeholder="A month, a season, or a date"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="enquiry-travellers" className={labelClass}>
            How many of you
          </label>
          <input
            id="enquiry-travellers"
            type="number"
            min="1"
            max="40"
            value={form.travellers}
            onChange={update('travellers')}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-message" className={labelClass}>
            What are you hoping to find?
          </label>
          <textarea
            id="enquiry-message"
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell us what draws you to Tamil Nadu — the history, the food, the quiet, the people."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-6 border-l-2 border-heritage-maroon pl-4 text-[0.9rem] text-heritage-maroon">
          {error}
        </p>
      )}

      <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-3 bg-heritage-maroon px-8 py-4 text-[10.5px] uppercase tracking-[0.24em] text-heritage-ivory transition-colors duration-300 hover:bg-heritage-earth disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              Sending
              <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.5} />
            </>
          ) : (
            <>
              Send your enquiry
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </>
          )}
        </button>
        <p className="max-w-xs text-[0.78rem] leading-relaxed text-heritage-earth/55">
          We use your details only to reply to your enquiry. Nothing is booked or charged here.
        </p>
      </div>
    </form>
  );
}