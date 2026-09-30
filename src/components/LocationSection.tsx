import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/showroomData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#0e1014] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c69a58] uppercase mb-2 block">
            LOCATION & CONTACT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Visit Our Showroom
          </h2>
          <p className="text-sm sm:text-base text-[#c8beaa] font-light leading-relaxed">
            Conveniently situated on Meyyanur Main Road opposite First American in Arisipalayam, Salem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Location Details */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-[#c69a58]/25 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c69a58] animate-pulse" />
                <span className="text-xs font-semibold text-[#e2b872] uppercase tracking-wider">
                  SHOWROOM OPEN
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-[#a89e8e] mb-6">
                Category: {BUSINESS_INFO.category}
              </p>

              {/* Address details */}
              <div className="space-y-4 mb-6 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c69a58] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#9e9585] block mb-0.5">Showroom Address:</span>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      17/5, 6 & 7, Meyyanur Main Road,
                      <br />
                      Opposite First American,
                      <br />
                      Arisipalayam, Salem, Tamil Nadu 636009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c69a58] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#9e9585] block mb-0.5">Direct Showroom Phone:</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="text-xs sm:text-sm text-[#e2b872] hover:text-white font-semibold transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c69a58] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#9e9585] block mb-0.5">Operating Hours:</span>
                    <p className="text-xs sm:text-sm text-[#ded6c2]">
                      Monday – Saturday: 9:00 AM – 8:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#1a1d25] hover:bg-[#252934] border border-[#c69a58]/35 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-[#c69a58]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#0e1013] bg-gradient-to-r from-[#e2b872] to-[#c69a58] hover:from-[#ecc687] hover:to-[#d4a864] rounded-xl shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              <button
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-[#c8beaa] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#c69a58]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Map-Style Visual Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden bg-[#12141c]">
            {/* Map styling grid graphic */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0c0f] p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[300px]">
              {/* Subtle architectural grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f232e_1px,transparent_1px),linear-gradient(to_bottom,#1f232e_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161922] border border-[#c69a58]/30 text-xs text-[#e2b872] font-semibold mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Landmark: Opposite First American</span>
                </div>

                <h4 className="font-display text-xl font-bold text-white mb-2">
                  Meyyanur Main Road, Arisipalayam
                </h4>
                <p className="text-xs text-[#a89e8e] max-w-md font-light leading-relaxed">
                  Easily accessible from major arterial roads in Salem. Ideal for contractor vehicle loading, plywood inspection, and hardware consultations.
                </p>
              </div>

              {/* Pin Center Visual */}
              <div className="relative z-10 my-6 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#c69a58]/15 animate-ping absolute inset-0" />
                  <div className="w-16 h-16 rounded-full bg-[#1b1e28] border-2 border-[#c69a58] flex items-center justify-center shadow-xl relative z-10 text-[#c69a58]">
                    <MapPin className="w-8 h-8 fill-[#c69a58]/20" />
                  </div>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="text-xs text-[#ded6c2]">
                  <span className="text-[#c69a58] font-semibold">PIN: 636009</span> · Salem, Tamil Nadu
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e2b872] hover:text-white transition-colors"
                >
                  <span>Open in Google Maps Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
