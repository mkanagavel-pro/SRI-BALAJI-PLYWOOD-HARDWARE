import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/showroomData';
import { Maximize2, X, Info } from 'lucide-react';

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Showroom', 'Plywood', 'Hardware', 'Interiors', 'Products'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#0e1014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
              VISUAL REPOSITORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 text-balance">
              Gallery & Material Concepts
            </h2>
            <p className="text-sm text-[#c8beaa] font-light max-w-xl">
              Explore material references across plywood cross-sections, decorative laminates, and modern architectural woodwork.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141720] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c69a58] text-[#0e1013] font-semibold'
                    : 'text-[#ded6c2] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden group cursor-pointer border border-white/10 relative"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#161820]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014]/90 via-[#0e1014]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating Category Tag */}
                <div className="absolute top-3.5 left-3.5 glass-panel px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#e2b872] border border-[#c69a58]/30">
                  {item.category}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption & Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-[#e2b872] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ded6c2]/80 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Concept Reference Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#14161f] border border-white/5 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#c69a58] shrink-0 mt-0.5" />
          <p className="text-xs text-[#a89e8e] leading-relaxed">
            <strong className="text-[#ded6c2]">Presentation Note:</strong> For this concept/demo, publicly visible
            Google images and architectural renders are used as visual references. For the final production website,
            they will be replaced with owner-approved showroom and warehouse photographs.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#12141a] rounded-2xl overflow-hidden border border-[#c69a58]/30 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveLightbox(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-[#12141a]">
              <span className="text-xs font-semibold text-[#c69a58] uppercase tracking-wider block mb-1">
                {activeLightbox.category}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-[#c8beaa] font-light">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
