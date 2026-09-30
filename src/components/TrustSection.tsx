import { Star, ShieldCheck, Truck, Users, Tag, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function TrustSection() {
  const highlights = [
    { title: 'Genuine Products', desc: 'Authentic plywood & reliable hardware' },
    { title: 'Good Variety', desc: 'Broad selection of laminates & fittings' },
    { title: 'Reasonable Pricing', desc: 'Direct competitive rates for every scale' },
    { title: 'Delivery Support', desc: 'Safe transport to construction sites' },
    { title: 'Helpful Staff', desc: 'Attentive, courteous product assistance' },
    { title: 'Quality Assurance', desc: 'BWP Marine Grade & termite resistant' },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#0b0c10] border-t border-b border-white/5 overflow-hidden">
      {/* Subtle radial ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c69a58]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Big Rating & Metric Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-3 block">
              PUBLIC GOOGLE FEEDBACK
            </span>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
              <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
                4.9
              </span>
              <div className="flex flex-col items-start">
                <div className="flex text-[#e2b872] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#ded6c2] font-semibold tracking-wide">
                  Top Rated in Salem
                </span>
              </div>
            </div>

            <p className="font-display text-2xl sm:text-3xl font-bold text-[#e2b872] mb-4">
              60 Google Reviews
            </p>

            <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed mb-6">
              Customers highlight product quality, variety, reasonable pricing, delivery and helpful service.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#c69a58]/30 text-xs font-medium text-white transition-all"
              >
                <span>View Public Reviews on Google Maps</span>
                <span className="text-[#c69a58]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Highlights grid derived from actual reviews */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#c69a58]/20">
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#c69a58]" />
                <span>What Customers Value in Salem</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#141720]/80 border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-xs font-semibold text-white mb-1">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#a89e8e] leading-snug">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8e8576]">
                <span>Source: Google Maps Business Profile</span>
                <span className="text-[#c69a58]">Salem, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
