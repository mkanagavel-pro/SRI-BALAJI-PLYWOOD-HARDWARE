import { WHY_CHOOSE_US } from '../data/showroomData';

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 relative bg-[#0e1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
            THE SRI BALAJI COMMITMENT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Why Customers Choose Sri Balaji
          </h2>
          <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed">
            Derived directly from authentic customer experiences and Google review feedback for our
            Salem showroom.
          </p>
        </div>

        {/* 5 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.number}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 group ${
                index === 3 || index === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Clean Editorial Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#c69a58] opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#c69a58]/30 group-hover:w-12 transition-all duration-300" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#e2b872] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#c8beaa] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-[11px] text-[#9e9585]">
                <span>Verified in Google Reviews</span>
              </div>
            </div>
          ))}

          {/* Complementary Card: Visit & Inspect */}
          <div className="glass-panel-warm rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#c69a58]/30 md:col-span-2 lg:col-span-1">
            <div>
              <span className="text-[11px] font-semibold text-[#e2b872] uppercase tracking-wider block mb-2">
                SALEM SHOWROOM
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5">
                Visit & Inspect Materials
              </h3>
              <p className="text-xs sm:text-sm text-[#ded6c2] font-light leading-relaxed">
                Experience tactile surfaces, inspect plywood cross-sections, and test hardware weight in person on Meyyanur Main Road.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-[#e2b872] hover:text-white transition-colors"
              >
                <span>Find Showroom Location →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
