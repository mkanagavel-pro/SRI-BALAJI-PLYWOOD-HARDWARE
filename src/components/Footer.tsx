import { MapPin, Phone, ShieldAlert, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08090b] text-[#ded6c2] border-t border-white/10 pt-16 pb-24 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              SRI BALAJI
            </h3>
            <p className="text-xs font-semibold tracking-widest text-[#c69a58] uppercase mb-4">
              PLYWOOD & HARDWARE
            </p>
            <p className="text-xs sm:text-sm text-[#9e9585] leading-relaxed max-w-sm mb-6 font-light">
              Premium plywood, laminates, doors and hardware solutions for homes, interiors and construction projects.
            </p>

            <div className="space-y-2 text-xs text-[#c8beaa]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c69a58] shrink-0 mt-0.5" />
                <span>Salem, Tamil Nadu 636009</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c69a58] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a89e8e]">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#e2b872] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom Information */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Showroom Address
            </h4>
            <p className="text-xs text-[#a89e8e] leading-relaxed mb-4">
              17/5, 6 & 7, Meyyanur Main Road,
              <br />
              Opposite First American, Arisipalayam,
              <br />
              Salem, Tamil Nadu 636009
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e2b872] hover:text-white transition-colors"
            >
              <span>View On Google Maps →</span>
            </a>
          </div>
        </div>

        {/* Mandatory Concept Website Disclaimer & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs font-medium text-[#c69a58]">
              Concept Website Demo by {BUSINESS_INFO.agencyName}
            </p>
            <p className="text-[11px] text-[#787165]">
              Not the official website of SRI BALAJI PLYWOOD & HARDWARE. Designed strictly as a client presentation concept.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#635c52]">
              © {new Date().getFullYear()} Concept Showcase
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a89e8e] hover:text-white border border-white/5 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
