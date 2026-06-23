import { ArrowRight, Phone } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { company, services } from '../data/siteContent';

export default function Contact() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-32 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.85fr]">
        <header>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-royal">Contact</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">Let&apos;s Build Your Next Production</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Contact BOX PRODUCTIONS for event production, event equipment rental, custom fabrication, creative event solutions, technical event support, stage setup, LED wall rental, and lighting and sound solutions.
          </p>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-shine mt-9 inline-flex items-center gap-3 rounded-full bg-royal px-7 py-4 text-sm font-black text-white shadow-glow">
            <Phone size={18} />
            {company.phone}
          </a>
        </header>
        <GlassCard>
          <h2 className="text-2xl font-black text-ink">Production Requirements</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Share your brief with BOX PRODUCTIONS for agency rental and event production support.</p>
          <form className="mt-7 space-y-4">
            {['Name', 'Company / Agency', 'Phone', 'Event Requirement'].map((label) => (
              <label key={label} className="block">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-navy">{label}</span>
                {label === 'Event Requirement' ? (
                  <textarea className="min-h-32 w-full rounded-2xl border border-blue-100 bg-white/80 p-4 outline-none transition focus:border-royal" />
                ) : (
                  <input className="w-full rounded-2xl border border-blue-100 bg-white/80 p-4 outline-none transition focus:border-royal" />
                )}
              </label>
            ))}
            <button type="button" className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-black text-white">
              Submit Enquiry
              <ArrowRight size={16} />
            </button>
          </form>
        </GlassCard>
      </section>
      <section className="mx-auto mt-20 max-w-7xl">
        <h2 className="text-2xl font-black text-ink">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-blue-100 bg-white p-5 text-sm font-black text-navy">
              {service.title}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
