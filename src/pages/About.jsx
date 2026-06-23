import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import StatsBar from '../components/StatsBar';
import { company, whyChoose } from '../data/siteContent';

export default function About() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-32 lg:px-8">
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
      <section className="mx-auto mt-20 grid max-w-7xl gap-5 md:grid-cols-4">
        {whyChoose.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <GlassCard className="h-full">
                <Icon className="mb-5 text-royal" size={30} />
                <h2 className="text-xl font-black text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </section>
    </main>
  );
}
