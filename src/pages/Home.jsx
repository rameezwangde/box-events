import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import ClientLogoTile from '../components/ClientLogoTile';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import ServiceGrid from '../components/ServiceGrid';
import StatsBar from '../components/StatsBar';
import { clientele, company, equipmentServices, whyChoose, work } from '../data/siteContent';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-porcelain bg-radial-blue px-5 pb-16 pt-32 lg:px-8">
        <div className="parallax-glow left-[8%] top-32" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-royal">{company.positioning}</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] text-ink md:text-7xl">
              Powering Exceptional Events. <span className="text-royal">Every Time.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">{company.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn-shine inline-flex items-center gap-2 rounded-full bg-royal px-6 py-4 text-sm font-black text-white shadow-glow">
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
              <Link to="/our-work" className="inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white/72 px-6 py-4 text-sm font-black text-navy backdrop-blur-xl">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-royal/30 text-royal"><Play size={14} fill="currentColor" /></span>
                Watch Showreel
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {['Trusted by Top Agencies', '24/7 Support Always Available', 'Premium Quality Reliable Gear'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/64 p-4 shadow-sm backdrop-blur-xl">
                  <ShieldCheck className="text-champagne" size={23} />
                  <p className="text-xs font-black text-navy">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[48px] bg-royal/20 blur-3xl" />
              <motion.img
                src="/event-stage-hero.png"
                alt="Premium event stage setup with blue lighting and LED wall rental"
                className="hero-mask relative aspect-[1.25/1] w-full object-cover shadow-glow"
                animate={{ scale: [1, 1.045, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <GlassCard className="absolute -bottom-8 left-4 right-4 p-4 md:left-10 md:right-10">
                <div className="grid grid-cols-2 gap-3 text-center md:grid-cols-4">
                  {equipmentServices.slice(0, 4).map((item) => (
                    <div key={item} className="rounded-2xl bg-white/60 px-3 py-4">
                      <p className="text-xs font-black uppercase tracking-[0.1em] text-navy">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-8 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsBar />
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Services" title="End-to-End Solutions for Every Event" copy="Premium event production, event equipment rental, custom fabrication, creative event solutions, technical event support, stage setup, LED wall rental, and lighting and sound solutions for agencies." />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(6,78,228,.48),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(232,200,120,.22),transparent_28%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-champagne">About BOX PRODUCTIONS</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.98] md:text-6xl">Reliable Gear. Flawless Events.</h2>
            <p className="mt-7 text-lg leading-8 text-blue-100">{company.intro}</p>
            <div className="mt-9 grid grid-cols-3 gap-3 border-y border-white/12 py-5">
              {['Agency First', 'Rental Ready', 'Show Day Support'].map((item) => (
                <span key={item} className="text-xs font-black uppercase tracking-[0.16em] text-blue-100">{item}</span>
              ))}
            </div>
            <Link to="/about-us" className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-4 text-sm font-black text-navy">
              About Us
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[38px] border border-white/14 bg-white/[0.07] p-4 shadow-glow backdrop-blur-2xl md:p-6">
              <div className="absolute -left-8 top-12 hidden h-[72%] w-px bg-gradient-to-b from-transparent via-champagne to-transparent lg:block" />
              <div className="grid gap-4">
                {whyChoose.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="group relative grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.08] p-5 transition duration-500 hover:-translate-y-1 hover:border-champagne/40 hover:bg-white/[0.12] md:grid-cols-[72px_1fr] md:p-6">
                      <div className="absolute -left-[39px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-champagne shadow-gold lg:block" />
                      <div className="grid h-16 w-16 place-items-center rounded-3xl border border-champagne/35 bg-navy text-champagne transition duration-500 group-hover:scale-105 group-hover:bg-champagne group-hover:text-navy">
                        <Icon size={28} />
                      </div>
                      <div className="md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8">
                        <div>
                          <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-champagne">Assurance 0{index + 1}</p>
                          <h3 className="text-2xl font-black text-white">{item.title}</h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">{item.description}</p>
                        </div>
                        <span className="mt-5 inline-flex rounded-full border border-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-100 md:mt-0">
                          {index === 0 ? 'Agency Trust' : index === 1 ? 'Live Support' : index === 2 ? 'Checked Gear' : 'Pan India'}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-porcelain px-5 py-24 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/8 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Work" title="Built for Agency-Led Productions" copy="From stage setup to LED wall rental and lighting and sound solutions, BOX PRODUCTIONS supports event execution with premium rental equipment and technical teams." />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
            <Reveal>
              <article className="group relative min-h-[560px] overflow-hidden rounded-[38px] bg-navy shadow-glow">
                <img src="/event-stage-hero.png" alt="BOX PRODUCTIONS stage setup LED wall rental lighting and sound solutions" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,25,76,.18),rgba(6,25,76,.92))]" />
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/12 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">Production Showcase</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-2xl">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-champagne">Agency Execution Support</p>
                    <h3 className="font-display text-5xl font-semibold leading-none text-white md:text-6xl">Stage, screen, light and sound - built as one production system.</h3>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {work.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-2xl border border-white/14 bg-white/12 px-4 py-3 text-xs font-black uppercase tracking-[0.13em] text-blue-50 backdrop-blur-xl">{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-4">
              {work.slice(3).map((item, index) => (
                <Reveal key={item} delay={index * 0.08}>
                  <article className="group relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(6,25,76,.08)] transition duration-500 hover:-translate-y-1 hover:shadow-glow md:p-7">
                    <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-royal/10 blur-2xl" />
                    <div className="relative flex items-start gap-5">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-powder text-lg font-black text-royal">0{index + 4}</span>
                      <div>
                        <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-champagne">Execution Stack</p>
                        <h3 className="text-2xl font-black text-ink">{item}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">Part of the BOX PRODUCTIONS event equipment rental and technical event support workflow for agency-led productions.</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={0.28}>
                <div className="rounded-[30px] bg-navy p-6 text-white shadow-glow md:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-champagne">Built for show day</p>
                  <p className="mt-4 text-2xl font-black leading-tight">Premium rental equipment, technical teams, and execution services aligned for agencies.</p>
                  <Link to="/our-work" className="btn-shine mt-6 inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm font-black text-navy">
                    View Our Work
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-blue-100 bg-white py-16">
        <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />
        <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-royal">Trusted by Leading Agencies & Brands</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">Client logos in motion</h2>
          </div>
          <BrandLogo compact />
        </div>
        <div className="logo-marquee relative flex w-max gap-5 px-5">
          {[...clientele, ...clientele].map((client, index) => (
            <ClientLogoTile key={`${client}-${index}`} client={client} compact />
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-navy p-8 text-white shadow-glow md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-champagne">Built for Agencies</p>
              <h2 className="font-display text-4xl font-semibold md:text-5xl">Reliable Gear. Flawless Events.</h2>
              <p className="mt-5 max-w-2xl text-blue-100">We do not just provide equipment, we provide peace of mind.</p>
            </div>
            <Link to="/contact" className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-4 text-sm font-black text-navy">
              Let&apos;s Work Together
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
