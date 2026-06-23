import SectionHeader from '../components/SectionHeader';
import ServiceGrid from '../components/ServiceGrid';
import Reveal from '../components/Reveal';
import { equipmentServices } from '../data/siteContent';

export default function Services() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-32 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-royal">Services</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">Event Production, Custom Fabrication & Technical Event Support</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            BOX PRODUCTIONS provides premium event equipment rental, creative event solutions, stage setup, LED wall rental, lighting and sound solutions, and execution services for agencies.
          </p>
        </header>
        <div className="mt-14">
          <ServiceGrid />
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-7xl">
        <SectionHeader eyebrow="Rental Inventory" title="Reliable Equipment for Agency Productions" copy="Audio visual, lighting, stage, truss, sound, power, and rigging support for premium events." />
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {equipmentServices.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="h-full rounded-[26px] border border-blue-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
                <h2 className="text-lg font-black text-navy">{item}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
