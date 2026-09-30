import { useState } from 'react';
import { X, Send, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, PRODUCT_CATEGORIES, ProductItem } from '../data/showroomData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: ProductItem | null;
}

export function InquiryModal({ isOpen, onClose, preselectedProduct }: InquiryModalProps) {
  const [clientType, setClientType] = useState<'Homeowner' | 'Carpenter / Contractor' | 'Architect / Designer'>('Homeowner');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(
    preselectedProduct ? [preselectedProduct.name] : ['Plywood']
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleMaterial = (item: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(item) ? prev.filter((m) => m !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // In a real setup or WhatsApp draft:
      const text = encodeURIComponent(
        `Hello Sri Balaji Plywood & Hardware, I am ${name || 'a customer'} (${clientType}). I am inquiring about: ${selectedMaterials.join(
          ', '
        )}. Notes: ${notes || 'Looking for pricing and availability'}.`
      );
      window.open(`https://wa.me/916265599664?text=${text}`, '_blank');
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#12141a] border border-[#c69a58]/35 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-[#9e9585] hover:text-white rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#c69a58]/20 text-[#c69a58] flex items-center justify-center mx-auto mb-4 border border-[#c69a58]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Inquiry Drafted
            </h3>
            <p className="text-xs sm:text-sm text-[#ded6c2] max-w-sm mx-auto mb-6 font-light">
              Connecting you directly with Sri Balaji Plywood & Hardware on WhatsApp / Phone for immediate assistance.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="py-3 px-4 rounded-xl bg-[#c69a58] text-[#0e1013] text-xs font-semibold"
              >
                Call Directly: {BUSINESS_INFO.phoneDisplay}
              </a>
              <button
                onClick={onClose}
                className="py-2.5 text-xs text-[#a89e8e] hover:text-white"
              >
                Back to Showroom
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-[#c69a58] uppercase mb-1 block">
              MATERIAL REQUIREMENT INQUIRY
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Inquire With Sri Balaji
            </h3>
            <p className="text-xs text-[#a89e8e] mb-5 font-light leading-relaxed">
              Connect with our Meyyanur Main Road team for material availability, BWP plywood stock, and pricing guidance.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Client Type */}
              <div>
                <label className="text-[11px] font-medium text-[#c8beaa] block mb-1.5">
                  I am inquiring as:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Homeowner', 'Carpenter / Contractor', 'Architect / Designer'] as const).map(
                    (type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setClientType(type)}
                        className={`py-2 px-2 text-[11px] font-medium rounded-lg text-center border transition-all cursor-pointer ${
                          clientType === type
                            ? 'bg-[#c69a58]/20 border-[#c69a58] text-[#e2b872]'
                            : 'bg-white/5 border-white/10 text-[#9e9585] hover:text-white'
                        }`}
                      >
                        {type.split(' ')[0]}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Materials Needed */}
              <div>
                <label className="text-[11px] font-medium text-[#c8beaa] block mb-1.5">
                  Materials required:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {PRODUCT_CATEGORIES.map((p) => {
                    const active = selectedMaterials.includes(p.name);
                    return (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => toggleMaterial(p.name)}
                        className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                          active
                            ? 'bg-[#c69a58] text-[#0e1013] border-[#c69a58] font-semibold'
                            : 'bg-white/5 border-white/10 text-[#c8beaa] hover:border-white/20'
                        }`}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-[#c8beaa] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#181b24] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#6c6558] focus:outline-none focus:border-[#c69a58]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#c8beaa] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181b24] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#6c6558] focus:outline-none focus:border-[#c69a58]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[11px] font-medium text-[#c8beaa] block mb-1">
                  Project Notes or Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need BWP marine plywood for kitchen woodwork & brass handles..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#181b24] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#6c6558] focus:outline-none focus:border-[#c69a58] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e2b872] to-[#c69a58] hover:from-[#ecc687] hover:to-[#d4a864] text-[#0e1013] text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit & Connect with Showroom</span>
              </button>

              <p className="text-[10px] text-center text-[#787165]">
                Direct showroom assistance · Phone: {BUSINESS_INFO.phoneDisplay}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
