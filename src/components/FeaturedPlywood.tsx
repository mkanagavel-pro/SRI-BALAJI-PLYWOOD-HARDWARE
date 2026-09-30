import { ShieldCheck, Droplets, Zap, Phone, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function FeaturedPlywood() {
  const plywoodImage = '/plywood_marine_grade_macro_1790698897548.jpg';

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0e1014] border-t border-b border-[#c69a58]/15">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c69a58]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Plywood Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c69a58]/30 shadow-2xl bg-[#151720] group">
              <img
                src={plywoodImage}
                alt="BWP Marine Grade Plywood layers and veneer structure"
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014]/90 via-transparent to-[#0e1014]/30" />

              {/* Architectural Inspection Tag */}
              <div className="absolute top-4 left-4 glass-panel-warm px-3.5 py-1.5 rounded-lg border border-[#c69a58]/40">
                <span className="text-xs font-semibold text-[#f1e5cc] tracking-wide">
                  CORE MATERIAL SPOTLIGHT
                </span>
              </div>

              {/* Bottom Feature Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-white/10 backdrop-blur-md">
                <p className="text-xs text-[#d8cfbe] leading-relaxed">
                  Carefully calibrated core layers with uniform bonding designed for modular kitchens, wardrobes, and high-moisture spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 3 Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-3">
              FEATURED MATERIAL
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 text-balance">
              BWP Marine Grade Plywood
            </h2>

            <p className="text-base sm:text-lg text-[#ded6c2] font-light leading-relaxed mb-8">
              Built for demanding interior applications with strong water and moisture resistance.
              Engineered to preserve dimensional stability and durability across home and commercial installations.
            </p>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Card 1 */}
              <div className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#c69a58]/15 border border-[#c69a58]/30 flex items-center justify-center text-[#e2b872] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1">
                    Termite Resistant
                  </h3>
                  <p className="text-xs text-[#a89e8e] leading-snug">
                    Resistant against pest damage to protect interior cabinetry over years of daily use.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#c69a58]/15 border border-[#c69a58]/30 flex items-center justify-center text-[#e2b872] mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1">
                    Water & Moisture Resistant
                  </h3>
                  <p className="text-xs text-[#a89e8e] leading-snug">
                    High resilience in humid kitchens, vanity cabinets, and moisture-exposed zones.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-panel glass-panel-hover rounded-xl p-4 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#c69a58]/15 border border-[#c69a58]/30 flex items-center justify-center text-[#e2b872] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-1">
                    Strong Performance
                  </h3>
                  <p className="text-xs text-[#a89e8e] leading-snug">
                    Structural density and screw-holding capacity for demanding carpentry joints.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#0e1013] bg-[#c69a58] hover:bg-[#d8ab66] rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Plywood Inquiries ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
              <span className="text-xs text-[#9e9585]">
                Available at our Meyyanur Main Road showroom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
