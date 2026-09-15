import React from 'react';
import { Link } from 'react-router-dom';
import PlatformBanners from '../sections/home/PlatformBanners';
import ServicesGrid from '../sections/home/ServicesGrid';
import PartnerLogos from '../sections/home/PartnerLogos';
import CaseStudiesSection from '../sections/home/CaseStudiesSection';
import ContactFormSection from '../sections/home/ContactFormSection';
import { Target, Zap, Award } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Our Digital Marketing Services
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            We use strategy and experience to generate measurable business results. Explore our full suite of managed digital marketing solutions.
          </p>
        </div>
      </section>

      {/* 2. 4 Colored Platform Banners */}
      <PlatformBanners />

      {/* 3. 6 Core Marketing Services Grid */}
      <ServicesGrid />

      {/* 4. Strategy & Impact Capabilities */}
      <section className="py-16 bg-[#f8fafc] border-t border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-tight mb-4">
            We use strategy and experience to generate results
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-12">
            Our specialized teams combine technological rigor with market insights to drive sustainable business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#2fa8e0]/10 text-[#2fa8e0] flex items-center justify-center mx-auto">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Call To Action</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Strategic conversion funnels designed to guide prospects toward high-value conversions and sales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#98c23d]/10 text-[#98c23d] flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Engage</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Interactive social campaigns and personalized content that resonate with your target demographics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#f39c12]/10 text-[#f39c12] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Inspire</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Reputation building and authoritative brand storytelling that establishes long-term customer loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Logos */}
      <PartnerLogos />

      {/* 6. Case Studies */}
      <CaseStudiesSection />

      {/* 7. Contact Form */}
      <ContactFormSection />
    </div>
  );
}
