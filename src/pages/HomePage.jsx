import React from 'react';
import HeroSection from '../sections/home/HeroSection';
import FeaturesHighlight from '../sections/home/FeaturesHighlight';
import PlatformBanners from '../sections/home/PlatformBanners';
import ServicesGrid from '../sections/home/ServicesGrid';
import PartnerLogos from '../sections/home/PartnerLogos';
import TestimonialBanner from '../sections/home/TestimonialBanner';
import CaseStudiesSection from '../sections/home/CaseStudiesSection';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Top 3 Features & Appear on Front Page of Google */}
      <FeaturesHighlight />

      {/* 3. 4 Full-Height Color Banners */}
      <PlatformBanners />

      {/* 4. 6 Service Items Grid */}
      <ServicesGrid />

      {/* 5. Client Partner Logos */}
      <PartnerLogos />

      {/* 6. Green Testimonial Quote Banner */}
      <TestimonialBanner />

      {/* 7. Dark Case Studies Section */}
      <CaseStudiesSection />

      {/* 8. Tell Us About Your Project & Lead Form */}
      <ContactFormSection />
    </div>
  );
}
