export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Box Productions">
      <span className={`relative block ${compact ? 'h-11 w-10' : 'h-14 w-12'} shrink-0`} aria-hidden="true">
        <span className="absolute bottom-1 left-0 h-6 w-5 rounded-sm bg-[#1687c4]" />
        <span className="absolute bottom-4 left-3 h-6 w-3 origin-bottom -rotate-35 rounded-full bg-[#2fb75f]" />
        <span className="absolute left-1 top-0 h-5 w-3 origin-bottom -rotate-35 rounded-full bg-[#f02b93]" />
        <span className="absolute left-5 top-1 h-5 w-2 origin-bottom rotate-25 rounded-full bg-[#f7d11e]" />
        <span className="absolute bottom-7 left-4 h-3 w-3 rounded-full bg-[#5d7cff]" />
      </span>
      <span className="leading-none">
        <span className={`${compact ? 'text-xl' : 'text-3xl'} block font-black tracking-tight text-navy`}>BOX</span>
        <span className={`${compact ? 'text-[11px]' : 'text-sm'} block font-semibold tracking-tight text-navy/80`}>Productions</span>
      </span>
    </span>
  );
}