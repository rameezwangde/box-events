const styles = {
  Acme: { mark: 'A', accent: 'text-red-500', bg: 'from-red-50 to-white', name: 'acme', sub: 'We fulfill dreams' },
  'DNA Networks': { mark: 'DNA', accent: 'text-yellow-400', bg: 'from-[#08053a] to-[#151066]', dark: true, name: 'DNA', sub: 'Networks' },
  "Craftsman's Crew": { mark: 'CC', accent: 'text-black', bg: 'from-white to-slate-50', name: "Craftsman's", sub: 'Crew' },
  'Neo Entertainment': { mark: 'neo', accent: 'text-champagne', bg: 'from-black to-zinc-900', dark: true, name: 'neo', sub: 'Entertainment' },
  Oscotel: { mark: 'O', accent: 'text-red-500', bg: 'from-white to-blue-50', name: 'OSCOTEL', sub: '' },
  SKIL: { mark: 'S', accent: 'text-royal', bg: 'from-white to-slate-50', name: 'SKIL', sub: 'Events Accommodation Transportation' },
  Pixeltone: { mark: 'P', accent: 'text-champagne', bg: 'from-white to-yellow-50', name: 'Pixeltone', sub: 'We innovate a company' },
  'Tradition and Trendz': { mark: 'TT', accent: 'text-champagne', bg: 'from-black to-zinc-900', dark: true, name: 'Tradition Trendz', sub: 'Event Management Pvt Ltd' },
  'VPN Agencies': { mark: 'VPN', accent: 'text-green-500', bg: 'from-white to-green-50', name: 'VPN', sub: 'Agencies' },
};

export default function ClientLogoTile({ client, compact = false }) {
  const style = styles[client] || { mark: client.slice(0, 2), accent: 'text-royal', bg: 'from-white to-blue-50', name: client, sub: '' };
  const darkClass = style.dark ? 'border-white/10 text-white' : 'border-blue-100 text-navy';

  return (
    <div className={`group flex ${compact ? 'h-28 min-w-[250px]' : 'h-40'} items-center justify-center rounded-[28px] border bg-gradient-to-br ${style.bg} px-7 shadow-[0_18px_45px_rgba(6,25,76,.07)] transition hover:-translate-y-1 hover:border-champagne hover:shadow-gold ${darkClass}`}>
      <div className="text-center">
        <div className={`mx-auto mb-3 grid ${compact ? 'h-12 w-12 text-lg' : 'h-16 w-16 text-2xl'} place-items-center rounded-full border border-current/20 font-black ${style.accent}`}>
          {style.mark}
        </div>
        <p className={`${compact ? 'text-xl' : 'text-2xl'} font-black leading-tight tracking-tight ${style.dark ? 'text-white' : 'text-navy'}`}>{style.name}</p>
        {style.sub ? <p className={`mt-2 text-[10px] font-black uppercase tracking-[0.18em] ${style.dark ? 'text-white/70' : 'text-slate-500'}`}>{style.sub}</p> : null}
        <span className="mx-auto mt-3 block h-px w-16 bg-champagne transition group-hover:w-24" />
      </div>
    </div>
  );
}