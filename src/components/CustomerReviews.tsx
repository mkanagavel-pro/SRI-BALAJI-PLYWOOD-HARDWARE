import { Star, ShieldCheck, HeartHandshake, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function CustomerReviews() {
  const verifiedThemes = [
    {
      theme: 'Genuine Products',
      detail: 'Customers note genuine quality across plywood grades and building supplies.',
    },
    {
      theme: 'Good Variety',
      detail: 'Extensive stock of laminates, door styles, and architectural hardware fittings.',
    },
    {
      theme: 'Reasonable Pricing',
      detail: 'Competitive and fair pricing recognized by Salem contractors and home owners.',
    },
    {
      theme: 'Quality Plywood & Hardware',
      detail: 'Reliable BWP marine grade plywood and sturdy hardware mechanisms.',
    },
    {
      theme: 'Helpful Staff',
      detail: 'Courteous in-person guidance on material sizing, applications, and suitability.',
    },
    {
      theme: 'Excellent Customer Support',
      detail: 'Responsive assistance from selection through delivery coordination.',
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 relative bg-[#0b0d10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
            VERIFIED FEEDBACK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            What Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed">
            A factual summary of authentic customer sentiments published on our official Google Maps listing.
          </p>
        </div>

        {/* Big Review Summary Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#c69a58]/25 shadow-2xl relative overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Overall Score & Star Breakdown */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-medium text-[#c8beaa] uppercase tracking-wider mb-2">
                OVERALL RATING
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-white">
                  4.9
                </span>
                <span className="text-xl text-[#9e9585]">/ 5</span>
              </div>

              <div className="flex text-[#e2b872] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-sm font-semibold text-white mb-1">
                60 Google Reviews
              </p>
              <p className="text-xs text-[#9e9585] mb-6">
                Verified Google Business Profile · Salem
              </p>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c69a58]/15 hover:bg-[#c69a58]/25 border border-[#c69a58]/40 text-xs font-semibold text-[#e2b872] transition-colors"
              >
                <span>Read All on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: Public Review Themes Matrix */}
            <div className="lg:col-span-8">
              <h3 className="font-display text-base font-bold text-white mb-4">
                Public Reviews Consistently Highlight:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {verifiedThemes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#141720]/80 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c69a58] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-0.5">
                        {item.theme}
                      </h4>
                      <p className="text-[11px] text-[#a89e8e] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#8e8576] flex items-center justify-between">
                <span>*No fabricated quotations. All points reflect public review consensus.</span>
                <span className="text-[#c69a58]">Salem, TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
