import { Star, Phone, MapPin, ChevronRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function Hero() {
  const heroImage = '/hero_wood_plywood_showroom_1790698880614.jpg';

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sri Balaji Plywood and Hardware showroom interior"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12]/95 via-[#0d0f12]/85 to-[#0d0f12]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-[#0d0f12]/60" />
        {/* Subtle warm architectural glow overlay */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c69a58]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Trust Badge - clean unboxed metadata with star */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1b1e25]/80 border border-[#c69a58]/30 backdrop-blur-md mb-6 shadow-sm">
            <div className="flex items-center gap-1 text-[#e2b872]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-bold font-mono tracking-tight">4.9</span>
            </div>
            <span className="text-xs text-[#ded6c2]/80 font-medium">
              · 60 Google Reviews in Salem
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            Build Strong.{' '}
            <span className="bg-gradient-to-r from-[#f1e5cc] via-[#e2b872] to-[#c69a58] bg-clip-text text-transparent block">
              Build Beautiful.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#d4cbba] max-w-2xl font-light leading-relaxed mb-8">
            Premium plywood, laminates, doors and hardware solutions for homes, interiors and construction projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0e1013] bg-gradient-to-r from-[#e2b872] to-[#c69a58] hover:from-[#ecc687] hover:to-[#d4a864] rounded-xl shadow-lg shadow-black/40 hover:shadow-[#c69a58]/20 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-[#1a1d24]/80 hover:bg-[#252932] border border-[#c69a58]/35 rounded-xl backdrop-blur-md transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#e2b872]" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#ded6c2] hover:text-white bg-[#14161c]/60 hover:bg-[#1f222b] border border-white/10 hover:border-[#c69a58]/40 rounded-xl backdrop-blur-md transition-all whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-[#c69a58]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Key Value Anchor Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-xs text-[#c8beaa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c69a58]" />
              <span className="font-medium text-white/90">BWP Marine Plywood</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#c8beaa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c69a58]" />
              <span className="font-medium text-white/90">Decorative Laminates</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#c8beaa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c69a58]" />
              <span className="font-medium text-white/90">Architectural Doors</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#c8beaa]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c69a58]" />
              <span className="font-medium text-white/90">Precision Hardware</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
