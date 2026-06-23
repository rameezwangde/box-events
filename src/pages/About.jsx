import Reveal from '../components/Reveal';
import StatsBar from '../components/StatsBar';
import { company, whyChoose } from '../data/siteContent';

export default function About() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-40 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <header>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-royal">About Us</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">BOX PRODUCTIONS</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{company.intro}</p>
          <p className="mt-5 text-lg font-black text-navy">{company.positioning}</p>
        </header>
        <div className="overflow-hidden rounded-[36px] bg-navy p-4 shadow-glow">
          <img src="/event-stage-hero.png" alt="BOX PRODUCTIONS premium event production stage" className="h-full min-h-[420px] w-full rounded-[28px] object-cover" />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <StatsBar />
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-royal">How We Support Agencies</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">Structured production support without the usual event-day friction.</h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 border-t border-dashed border-blue-200 lg:block" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              const active = index === 2;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article
                    className={`relative min-h-[315px] rounded-none border bg-white/72 px-7 py-8 text-center shadow-[0_18px_50px_rgba(6,25,76,.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-glow ${
                      active ? 'border-dashed border-royal' : 'border-dashed border-blue-200 hover:border-champagne'
                    }`}
                  >
                    {index > 0 ? <span className="absolute -left-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-royal lg:block" /> : null}
                    {index < whyChoose.length - 1 ? <span className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-royal lg:block" /> : null}
                    <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full border-2 bg-white font-black ${active ? 'border-royal text-royal shadow-glow' : 'border-champagne text-navy'}`}>
                      0{index + 1}
                    </div>
                    <Icon className={`mx-auto mt-8 ${active ? 'text-royal' : 'text-champagne'}`} size={34} />
                    <h2 className={`mt-5 text-xl font-black ${active ? 'text-royal' : 'text-ink'}`}>{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}