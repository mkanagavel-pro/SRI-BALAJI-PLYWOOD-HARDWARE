import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 ${
          scrolled
            ? 'bg-[#0e1013]/90 backdrop-blur-md border-b border-[#c69a58]/20 shadow-xl'
            : 'bg-[#0e1013]/40 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand - Zone 1: Architectural typography */}
          <a
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69a58]"
          >
            <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-[#e2b872] transition-colors leading-none">
              SRI BALAJI
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mt-0.5">
              PLYWOOD & HARDWARE
            </span>
          </a>

          {/* Desktop Nav - Zone 2: Clean typography with subtle hover */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c8beaa]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 text-[13px] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions - Zone 3: CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#e8dec8] hover:text-white border border-[#c69a58]/30 rounded-lg hover:border-[#c69a58] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#c69a58]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0e1013] bg-gradient-to-r from-[#e2b872] to-[#c69a58] hover:from-[#ecc687] hover:to-[#d4a864] rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 rounded-lg text-[#ded6c2] hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-md flex flex-col justify-end"
        >
          <div className="bg-[#12141a] border-t border-[#c69a58]/30 rounded-t-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <p className="font-display text-base font-bold text-white">SRI BALAJI</p>
                <p className="text-[10px] tracking-widest text-[#c69a58]">PLYWOOD & HARDWARE</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#9e9585] hover:text-white rounded-lg border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-sm font-medium text-[#ded6c2] hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#c69a58]/60">→</span>
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-[#0e1013] bg-[#c69a58] rounded-xl"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-white border border-[#c69a58]/40 rounded-xl hover:bg-[#c69a58]/10"
              >
                <Phone className="w-4 h-4 text-[#c69a58]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
