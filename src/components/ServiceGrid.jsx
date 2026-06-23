import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/siteContent';
import Reveal from './Reveal';

const serviceTones = [
  'from-royal/18 via-white to-champagne/18',
  'from-navy/10 via-white to-royal/12',
  'from-champagne/22 via-white to-blue-50',
  'from-royal/12 via-white to-navy/10',
];

export default function ServiceGrid({ limit }) {
  const shown = limit ? services.slice(0, limit) : services;
  const [featured, ...rest] = shown;

  if (!featured) return null;

  const FeaturedIcon = featured.icon;

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-16 h-64 w-[72%] -translate-x-1/2 rounded-full bg-royal/10 blur-3xl" />
      <div className="relative grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <article className="group relative flex min-h-[560px] overflow-hidden rounded-[34px] bg-navy p-7 text-white shadow-glow transition duration-500 hover:-translate-y-1">
            <img
              src="/event-stage-hero.png"
              alt="Event production company stage setup and technical event support"
              className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,25,76,.98),rgba(6,25,76,.72)_52%,rgba(6,78,228,.52))]" />
            <div className="absolute -right-20 top-16 h-60 w-60 rounded-full border border-champagne/35" />
            <div className="absolute -right-10 top-28 h-36 w-36 rounded-full border border-white/15" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-3xl bg-white text-royal shadow-gold">
                    <FeaturedIcon size={30} />
                  </span>
                  <span className="rounded-full border border-champagne/45 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-champagne backdrop-blur-xl">
                    01 Core Service
                  </span>
                </div>
                <h3 className="font-display text-5xl font-semibold leading-none">{featured.title}</h3>
                <p className="mt-7 max-w-md text-base leading-8 text-blue-50">{featured.description}</p>
              </div>

              <div>
                <div className="my-8 grid grid-cols-2 gap-3">
                  {['Planning', 'Execution', 'Stage Setup', 'On-ground Coordination'].map((item) => (
                    <span key={item} className="rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-blue-50 backdrop-blur-xl">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-champagne">{featured.keywords}</p>
                <Link to="/services" className="btn-shine mt-7 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-4 text-sm font-black text-navy">
                  View Service
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-5 lg:col-span-7">
          {rest.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index + 1) * 0.08}>
                <article className={`group relative overflow-hidden rounded-[30px] border border-blue-100 bg-gradient-to-br ${serviceTones[index + 1] || serviceTones[0]} p-6 shadow-[0_18px_50px_rgba(6,25,76,.08)] transition duration-500 hover:-translate-y-1 hover:shadow-glow md:p-7`}>
                  <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/70 blur-xl" />
                  <div className="absolute bottom-0 right-0 h-full w-28 bg-[linear-gradient(135deg,transparent_35%,rgba(6,78,228,.08)_35%,rgba(6,78,228,.08)_62%,transparent_62%)]" />
                  <div className="relative grid gap-6 md:grid-cols-[88px_1fr_auto] md:items-center">
                    <div className="flex md:block">
                      <div className="grid h-20 w-20 place-items-center rounded-[26px] bg-navy text-white shadow-glow transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                        <Icon size={30} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-[0.22em] text-royal">0{index + 2}</span>
                        <span className="h-px w-12 bg-champagne" />
                      </div>
                      <h3 className="text-2xl font-black text-ink">{service.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{service.description}</p>
                      <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-royal">{service.keywords}</p>
                    </div>
                    <Link to="/services" className="btn-shine inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-navy shadow-sm transition group-hover:bg-royal group-hover:text-white" aria-label={`View ${service.title}`}>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.32}>
            <div className="grid gap-3 rounded-[30px] border border-blue-100 bg-white/72 p-4 shadow-[0_18px_45px_rgba(6,25,76,.07)] backdrop-blur-xl md:grid-cols-4">
              {['Agency Brief', 'Creative Build', 'Technical Prep', 'Show Day'].map((step, index) => (
                <div key={step} className="relative rounded-2xl bg-powder/55 px-4 py-4 text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-royal">Step 0{index + 1}</p>
                  <p className="mt-2 text-sm font-black text-navy">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}