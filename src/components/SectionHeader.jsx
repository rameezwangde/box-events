import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <Reveal className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : ''}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-royal">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{copy}</p> : null}
    </Reveal>
  );
}
