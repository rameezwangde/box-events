import CountUp from './CountUp';
import { stats } from '../data/siteContent';

export default function StatsBar({ className = '' }) {
  return (
    <div className={`grid gap-3 rounded-[28px] border border-blue-100/90 bg-white/92 p-3 text-navy shadow-[0_24px_70px_rgba(6,25,76,.14)] backdrop-blur-2xl md:grid-cols-5 ${className}`}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="reactive-card flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-4 shadow-sm">
            <Icon className="shrink-0 text-royal" size={25} />
            <div>
              <p className="text-2xl font-black leading-none"><CountUp value={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.08em] text-slate-600">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
