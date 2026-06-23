import ClientLogoTile from '../components/ClientLogoTile';
import Reveal from '../components/Reveal';
import { clientele } from '../data/siteContent';

export default function Clientele() {
  return (
    <main className="bg-porcelain px-5 pb-24 pt-32 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-royal">Clientele</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">Trusted by Leading Agencies & Brands</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            BOX PRODUCTIONS works as a premium rental partner for agencies supporting brands with event production, event equipment rental, custom fabrication, and technical event support.
          </p>
        </header>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clientele.map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <ClientLogoTile client={client} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}