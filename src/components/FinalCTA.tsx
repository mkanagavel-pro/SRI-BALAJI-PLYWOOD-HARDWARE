import { Phone, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0a0c0e] border-t border-[#c69a58]/20">
      {/* Background glow and lighting accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d1914] via-[#0a0c0e] to-[#0a0c0e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#c69a58]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#c69a58] uppercase mb-4 block">
          READY TO START YOUR BUILD?
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance leading-tight">
          Build Your Next Project With Confidence.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#ded6c2] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore plywood, laminates, doors and hardware solutions for your next home or interior project.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#0e1013] bg-gradient-to-r from-[#e2b872] to-[#c69a58] hover:from-[#ecc687] hover:to-[#d4a864] rounded-xl shadow-xl shadow-black/50 transition-all active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-white bg-[#161922] hover:bg-[#202430] border border-[#c69a58]/35 rounded-xl backdrop-blur-md transition-all active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 text-[#e2b872]" />
            <span>Get Directions</span>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-[#8e8576]">
          <span>Meyyanur Main Road, Salem</span>
          <span>·</span>
          <span>BWP Marine Grade Plywood</span>
          <span>·</span>
          <span>4.9★ Google Rating</span>
        </div>
      </div>
    </section>
  );
}
