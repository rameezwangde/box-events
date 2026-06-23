import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { company, navItems, services } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(6,78,228,.5),transparent_35%),radial-gradient(circle_at_85%_40%,rgba(232,200,120,.22),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <div className="mb-6">
            <BrandLogo />
          </div>
          <p className="max-w-md text-sm leading-7 text-blue-100">{company.intro}</p>
          <Link to="/contact" className="btn-shine mt-7 inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm font-bold text-navy">
            Start a Production Brief
            <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-champagne">Pages</h2>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-champagne" to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-champagne">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
            <Phone size={16} />
            {company.phone}
          </a>
        </div>
      </div>
      <div className="relative border-t border-white/12 px-5 py-5 text-center text-xs text-blue-100">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
