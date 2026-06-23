import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Box, Menu, Phone, X } from 'lucide-react';
import { company, navItems } from '../data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-blue-100 bg-white/94 shadow-[0_18px_60px_rgba(6,25,76,.12)] backdrop-blur-2xl'
          : 'bg-white/86 shadow-[0_10px_35px_rgba(6,25,76,.08)] backdrop-blur-xl'
      }`}
    >
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3" aria-label="BOX PRODUCTIONS home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-royal text-white shadow-glow">
            <Box size={24} />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-tight text-navy">BOX</span>
            <span className="block text-xs font-bold tracking-[0.18em] text-navy">PRODUCTIONS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-blue-100 bg-white p-1 shadow-sm backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                  isActive ? 'bg-royal text-white shadow-glow' : 'text-navy hover:bg-powder hover:text-royal'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="group btn-shine flex min-w-[196px] items-center justify-center gap-2 rounded-full border border-champagne bg-white px-4 py-3 text-xs font-black text-navy shadow-sm backdrop-blur-xl" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            <Phone size={15} />
            {company.phone}
          </a>
          <Link className="btn-shine flex items-center gap-2 rounded-full bg-royal px-5 py-3 text-xs font-bold text-white shadow-glow" to="/contact">
            Get In Touch
            <ArrowRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-100 bg-white text-navy shadow-sm lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full z-40 h-[calc(100vh-76px)] bg-porcelain/98 px-4 pb-6 pt-4 shadow-[inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-2xl transition duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_24px_70px_rgba(6,25,76,.18)]">
          <div className="min-h-0 flex-1 overflow-y-auto p-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
                      isActive ? 'bg-royal text-white shadow-glow' : 'bg-powder/45 text-navy hover:bg-powder hover:text-royal'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="grid shrink-0 gap-3 border-t border-blue-100 bg-white p-3 sm:grid-cols-2">
            <a
              className="flex items-center justify-center gap-2 rounded-2xl border border-champagne bg-white px-5 py-4 text-sm font-black text-navy"
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={17} />
              {company.phone}
            </a>
            <Link
              className="btn-shine flex items-center justify-center gap-2 rounded-2xl bg-royal px-5 py-4 text-sm font-black text-white shadow-glow"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Get In Touch
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}