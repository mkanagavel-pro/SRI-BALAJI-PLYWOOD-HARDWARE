import { Star, MessageSquare, CheckCircle2, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function AboutSection() {
  const showroomImage = '/src/assets/images/interior_living_wood_joinery_1790698909436.jpg';

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-[#0d0f12]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#c69a58]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Architectural Sub-kicker */}
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-3">
              ABOUT SRI BALAJI PLYWOOD & HARDWARE
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
              Materials That Bring Ideas to Life.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed mb-8">
              <p>
                <strong className="text-white font-medium">SRI BALAJI PLYWOOD & HARDWARE</strong> provides
                plywood, laminates, doors, hardware and interior-material solutions in Salem, Tamil Nadu.
              </p>
              <p>
                Our inventory features{' '}
                <strong className="text-[#f1e5cc] font-medium">BWP Marine Grade Plywood</strong>, designed
                for strong performance with high water and moisture resistance, as well as termite resistant
                qualities for reliable interior construction.
              </p>
              <p>
                Whether you are a homeowner crafting your living space, an architect specifying finishes, or
                a contractor sourcing building materials, we offer competitive pricing and delivery support
                alongside professional, helpful staff guidance.
              </p>
            </div>

            {/* 4 Glass Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-panel rounded-xl p-3.5 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="flex items-center gap-1 text-[#e2b872] mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-display text-lg font-bold text-white tracking-tight">4.9★</span>
                </div>
                <span className="text-[11px] text-[#a89e8e] leading-snug">Google Rating</span>
              </div>

              <div className="glass-panel rounded-xl p-3.5 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="flex items-center gap-1 text-[#e2b872] mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span className="font-display text-lg font-bold text-white tracking-tight">60+</span>
                </div>
                <span className="text-[11px] text-[#a89e8e] leading-snug">Google Reviews</span>
              </div>

              <div className="glass-panel rounded-xl p-3.5 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="flex items-center gap-1 text-[#e2b872] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-display text-base font-bold text-white tracking-tight">Quality</span>
                </div>
                <span className="text-[11px] text-[#a89e8e] leading-snug">Products</span>
              </div>

              <div className="glass-panel rounded-xl p-3.5 border border-[#c69a58]/20 flex flex-col justify-between">
                <div className="flex items-center gap-1 text-[#e2b872] mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="font-display text-base font-bold text-white tracking-tight">Helpful</span>
                </div>
                <span className="text-[11px] text-[#a89e8e] leading-snug">Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c69a58]/25 shadow-2xl bg-[#14161d]">
              <img
                src={showroomImage}
                alt="Sri Balaji interior materials application showcase"
                className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013]/90 via-[#0e1013]/20 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel-warm rounded-xl p-4 sm:p-5 border border-[#c69a58]/30 shadow-lg">
                <p className="text-xs font-semibold text-[#e2b872] tracking-wider uppercase mb-1">
                  Meyyanur Main Road, Salem
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-light leading-snug">
                  Specializing in BWP marine grade plywood, decorative laminates, doors, and architectural hardware fittings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
