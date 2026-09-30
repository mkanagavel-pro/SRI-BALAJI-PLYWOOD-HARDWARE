import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

interface MobileQuickBarProps {
  onOpenInquiry: () => void;
}

export function MobileQuickBar({ onOpenInquiry }: MobileQuickBarProps) {
  return (
    <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1014]/95 backdrop-blur-md border-t border-[#c69a58]/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#e2b872] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Call Showroom</span>
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#e2b872] to-[#c69a58] text-[#0e1013] transition-transform active:scale-95 shadow-md"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-wide">Directions</span>
        </a>

        {/* Quick Inquiry */}
        <button
          onClick={onOpenInquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1c1f28] hover:bg-[#252936] text-[#ded6c2] border border-[#c69a58]/25 transition-colors active:scale-95"
        >
          <MessageSquare className="w-4 h-4 text-[#c69a58] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Inquire</span>
        </button>
      </div>
    </aside>
  );
}
