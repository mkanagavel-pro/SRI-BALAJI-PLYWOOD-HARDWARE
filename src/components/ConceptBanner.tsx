import { useState } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function ConceptBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Concept demo notice" className="relative z-50 bg-[#171410] border-b border-[#c69a58]/30 text-[#e8dec8] px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#c69a58]/20 text-[#c69a58] shrink-0">
            <Info className="w-3 h-3" />
          </span>
          <p className="leading-tight">
            <strong className="text-[#c69a58] font-semibold tracking-wide">
              CONCEPT DEMO BY {BUSINESS_INFO.agencyName}
            </strong>{' '}
            <span className="hidden sm:inline">·</span>{' '}
            <span className="text-[#c8beaa]">
              Prepared for presentation to the business owner of{' '}
              <span className="text-white font-medium">{BUSINESS_INFO.name}</span>. Not an official website.
            </span>
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss banner"
          className="text-[#9e9585] hover:text-white transition-colors p-1 rounded hover:bg-white/5 shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
