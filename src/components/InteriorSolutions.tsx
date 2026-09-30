import { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function InteriorSolutions() {
  const [activeTab, setActiveTab] = useState<'Plywood' | 'Laminates' | 'Doors' | 'Hardware'>('Plywood');
  const interiorImage = '/src/assets/images/interior_living_wood_joinery_1790698909436.jpg';

  const categoryDetails = {
    Plywood: {
      role: 'Internal Structural Core',
      desc: 'Forms the durable framework of wardrobes, kitchen carcasses, partition walls, and customized furniture.',
      spec: 'BWP Marine Grade & Termite Resistant for long-term endurance.',
    },
    Laminates: {
      role: 'Visual Surface Aesthetic',
      desc: 'Provides seamless textures, rich woodgrains, and tactile matte surfaces that elevate room ambiance.',
      spec: 'High surface wear resistance with contemporary designer decors.',
    },
    Doors: {
      role: 'Architectural Transition',
      desc: 'Defines room privacy, acoustics, and entryway presence with dimensional stability.',
      spec: 'Uniform flush cores built to withstand seasonal temperature variations.',
    },
    Hardware: {
      role: 'Tactile Functionality & Security',
      desc: 'Brushed brass handles, mortise locksets, and smooth hinges that bring fluid daily interaction.',
      spec: 'Precision mechanisms and corrosion-resistant metal finishes.',
    },
  };

  const categories: Array<'Plywood' | 'Laminates' | 'Doors' | 'Hardware'> = [
    'Plywood',
    'Laminates',
    'Doors',
    'Hardware',
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#0b0d10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
            INTEGRATED INTERIOR SOLUTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            From Structure to Style.
          </h2>
          <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed">
            Bring together plywood, laminates, doors and hardware to create interiors that are built to last and designed to look beautiful.
          </p>
        </div>

        {/* Visual Category Chips / Interactive Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#e2b872] to-[#c69a58] text-[#0e1013] font-semibold shadow-lg shadow-[#c69a58]/15 scale-105'
                  : 'bg-[#151720] text-[#ded6c2] hover:text-white hover:bg-[#1f222d] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interior Scene Showcase Card with Active Breakdown */}
        <div className="relative rounded-2xl overflow-hidden border border-[#c69a58]/25 shadow-2xl bg-[#12141a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
            {/* Visual Interior Scene */}
            <div className="lg:col-span-8 relative min-h-[300px] lg:min-h-full">
              <img
                src={interiorImage}
                alt="Integrated interior design showing plywood, laminates, and brass hardware"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#12141a]" />

              {/* In-scene interactive overlay label */}
              <div className="absolute bottom-4 left-4 glass-panel px-3.5 py-1.5 rounded-lg border border-white/15">
                <span className="text-xs text-white/90">
                  Living & Architectural Woodwork Concept
                </span>
              </div>
            </div>

            {/* Explanatory Panel for Selected Category */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#12141a]">
              <div>
                <span className="text-[11px] font-semibold text-[#c69a58] tracking-widest uppercase mb-1 block">
                  ROLE IN INTERIORS
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {activeTab}
                </h3>
                <p className="text-xs font-semibold text-[#e2b872] mb-4">
                  {categoryDetails[activeTab].role}
                </p>

                <p className="text-xs sm:text-sm text-[#c8beaa] font-light leading-relaxed mb-6">
                  {categoryDetails[activeTab].desc}
                </p>

                <div className="p-3.5 rounded-xl bg-black/40 border border-[#c69a58]/20 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c69a58] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#ded6c2] leading-snug">
                      {categoryDetails[activeTab].spec}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="flex items-center justify-between w-full py-2.5 px-4 text-xs font-semibold text-white bg-white/5 hover:bg-[#c69a58]/20 border border-[#c69a58]/30 rounded-xl transition-all"
                >
                  <span>Consult With Our Staff</span>
                  <ChevronRight className="w-4 h-4 text-[#c69a58]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
