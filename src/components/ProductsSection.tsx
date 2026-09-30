import { useState } from 'react';
import { Layers, ArrowRight, Check, Phone } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductItem, BUSINESS_INFO } from '../data/showroomData';

interface ProductsSectionProps {
  onSelectProductForInquiry?: (product: ProductItem) => void;
}

export function ProductsSection({ onSelectProductForInquiry }: ProductsSectionProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ProductItem | null>(null);

  const filteredCategories =
    activeCategoryFilter === 'all'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.category === activeCategoryFilter);

  return (
    <section id="products" className="py-20 sm:py-28 relative bg-[#0b0d10] border-t border-white/5">
      {/* Background architectural glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c69a58]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
            CORE PRODUCT PORTFOLIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Everything You Need to Build Better.
          </h2>
          <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed">
            From foundation joinery to refined exterior touches, explore our core collection of plywood,
            laminates, doors, hardware, and interior materials available at our Salem showroom.
          </p>
        </div>

        {/* Category Filter Buttons (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#14171f] border border-white/10 rounded-xl mb-10 w-fit max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeCategoryFilter === 'all'
                ? 'bg-[#c69a58] text-[#0e1013] font-semibold shadow-sm'
                : 'text-[#ded6c2] hover:text-white hover:bg-white/5'
            }`}
          >
            All Categories ({PRODUCT_CATEGORIES.length})
          </button>
          {PRODUCT_CATEGORIES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveCategoryFilter(p.category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === p.category
                  ? 'bg-[#c69a58] text-[#0e1013] font-semibold shadow-sm'
                  : 'text-[#ded6c2] hover:text-white hover:bg-white/5'
              }`}
            >
              {p.category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((item) => (
            <article
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-white/10 relative"
            >
              {/* Product Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#161820]">
                <img
                  src={item.image}
                  alt={`${item.name} available at Sri Balaji Plywood & Hardware`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/30 to-transparent" />

                {/* Key feature tag - clean single unboxed text */}
                <div className="absolute top-3.5 left-3.5 glass-panel px-3 py-1 rounded-md text-[11px] font-semibold text-[#f1e5cc] border border-[#c69a58]/30">
                  {item.keyFeature}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#e2b872] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c8beaa] leading-relaxed mb-5 font-light">
                    {item.description}
                  </p>

                  {/* Factual Highlights List */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-white/10">
                    {item.highlightPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#dcd4c2]">
                        <Check className="w-3.5 h-3.5 text-[#c69a58] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#c8beaa] hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c69a58]" />
                    <span>Inquire Showroom</span>
                  </a>
                  <button
                    onClick={() => {
                      if (onSelectProductForInquiry) {
                        onSelectProductForInquiry(item);
                      } else {
                        setActiveModalItem(item);
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#e2b872] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Quick Details Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-[#12141a] border border-[#c69a58]/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {activeModalItem.name}
            </h3>
            <p className="text-xs font-semibold text-[#c69a58] mb-4">
              {activeModalItem.keyFeature}
            </p>
            <div className="rounded-xl overflow-hidden mb-4 h-48">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-[#ded6c2] leading-relaxed mb-4 font-light">
              {activeModalItem.description}
            </p>
            <div className="space-y-1.5 mb-6 bg-black/30 p-3 rounded-lg border border-white/5">
              {activeModalItem.highlightPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#dcd4c2]">
                  <Check className="w-3.5 h-3.5 text-[#c69a58]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-[#0e1013] bg-[#c69a58] hover:bg-[#d8ab66] rounded-xl transition-colors"
              >
                Call to Check Stock ({BUSINESS_INFO.phoneDisplay})
              </a>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2.5 text-xs text-[#c8beaa] hover:text-white border border-white/10 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
