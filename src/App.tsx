/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ConceptBanner } from './components/ConceptBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { FeaturedPlywood } from './components/FeaturedPlywood';
import { InteriorSolutions } from './components/InteriorSolutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustSection } from './components/TrustSection';
import { GallerySection } from './components/GallerySection';
import { CustomerReviews } from './components/CustomerReviews';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { InquiryModal } from './components/InquiryModal';
import { ProductItem } from './data/showroomData';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<ProductItem | null>(null);

  const handleOpenInquiryWithProduct = (product: ProductItem) => {
    setSelectedProductForInquiry(product);
    setInquiryModalOpen(true);
  };

  const handleOpenGeneralInquiry = () => {
    setSelectedProductForInquiry(null);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#e5dec9] flex flex-col selection:bg-[#c69a58]/30 selection:text-white">
      {/* 1. Presentation Concept Notice Banner */}
      <ConceptBanner />

      {/* 2. Floating Premium Glass Navbar */}
      <Navbar onOpenInquiry={handleOpenGeneralInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Products Section */}
        <ProductsSection onSelectProductForInquiry={handleOpenInquiryWithProduct} />

        {/* 6. Featured Plywood Section */}
        <FeaturedPlywood />

        {/* 7. Interior Solutions Section */}
        <InteriorSolutions />

        {/* 8. Why Customers Choose Us */}
        <WhyChooseUs />

        {/* 9. Trust & Rating Metric Section */}
        <TrustSection />

        {/* 10. Gallery Masonry Showcase */}
        <GallerySection />

        {/* 11. Customer Reviews Summary */}
        <CustomerReviews />

        {/* 12. Showroom Location & Contact */}
        <LocationSection />

        {/* 13. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenInquiry={handleOpenGeneralInquiry} />

      {/* 16. Inquiry & Stock Check Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedProduct={selectedProductForInquiry}
      />
    </div>
  );
}
