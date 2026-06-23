const logos = {
  Acme: '/clients/acme.jpg',
  'DNA Networks': '/clients/dna.jpg',
  "Craftsman's Crew": '/clients/craftsmans-crew.jpg',
  'Eblitz Creations': '/clients/eblitz.jpg',
  'Neo Entertainment': '/clients/neo.jpg',
  Oscotel: '/clients/oscotel.jpg',
  SKIL: '/clients/skil.png',
  Pixeltone: '/clients/pixeltone.gif',
  'Tradition and Trendz': '/clients/tradition-trendz.jpg',
  'VPN Agencies': '/clients/vpn.png',
  Workaholics: '/clients/workaholics.jpg',
  'UBS Forums': '/clients/ubs-forums.png',
};

export default function ClientLogoTile({ client, compact = false }) {
  const src = logos[client];

  return (
    <div className={`group flex ${compact ? 'h-28 min-w-[250px]' : 'h-40'} items-center justify-center rounded-[28px] border border-blue-100 bg-white px-7 shadow-[0_18px_45px_rgba(6,25,76,.07)] transition hover:-translate-y-1 hover:border-champagne hover:shadow-gold`}>
      {src ? (
        <img
          src={src}
          alt={client}
          className="max-h-[76%] max-w-[86%] object-contain transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <p className="text-2xl font-black text-navy">{client}</p>
      )}
    </div>
  );
}