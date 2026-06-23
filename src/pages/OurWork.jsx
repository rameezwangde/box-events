import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { work } from '../data/siteContent';

export default function OurWork() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-32 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-royal">Our Work</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">Premium Production Support for Flawless Events</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our work is built around event production company standards for agencies: clean stage setup, dependable event equipment rental, LED wall rental, lighting and sound solutions, and technical event support.
          </p>
        </header>
        <div className="mt-14 overflow-hidden rounded-[36px] bg-navy p-4 shadow-glow">
          <img src="/event-stage-hero.png" alt="Blue event lighting stage setup by BOX PRODUCTIONS" className="h-[460px] w-full rounded-[28px] object-cover" />
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-7xl">
        <SectionHeader eyebrow="Capabilities" title="Execution Services for Agencies" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {work.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <article className="rounded-[28px] border border-blue-100 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-royal">Capability 0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black text-ink">{item}</h2>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
