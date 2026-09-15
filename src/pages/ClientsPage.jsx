import React from 'react';
import { Link } from 'react-router-dom';
import PartnerLogos from '../sections/home/PartnerLogos';
import TestimonialBanner from '../sections/home/TestimonialBanner';
import ContactFormSection from '../sections/home/ContactFormSection';
import { CheckCircle } from 'lucide-react';

export default function ClientsPage() {
  const clients = [
    { name: 'Coderama', category: 'Software & Cloud', country: 'United States' },
    { name: 'Opertray Division', category: 'Industrial & Manufacturing', country: 'United Kingdom' },
    { name: 'Tremely Designs', category: 'E-Commerce & Fashion', country: 'Australia' },
    { name: 'Plainst Technologies', category: 'Fintech & Mobile', country: 'Singapore' },
    { name: 'Maindex Solutions', category: 'Healthcare Tech', country: 'Canada' },
    { name: 'Existernal Ltd.', category: 'Global Logistics', country: 'Germany' },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Clients</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Our Valued Clients &amp; Partners
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            We proudly help 50+ enterprise and growth-stage brands worldwide scale organic reach and maximize marketing performance.
          </p>
        </div>
      </section>

      {/* 2. Client Partner Logos */}
      <PartnerLogos />

      {/* 3. Customer Directory */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-tight mb-2">
              Featured Client Partnerships
            </h2>
            <p className="text-sm text-gray-500">
              Selected organizations achieving exceptional digital ROI with Express Digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((c, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#2fa8e0]" />
                  <h3 className="text-base font-bold text-gray-800">{c.name}</h3>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Industry: <strong className="text-gray-700">{c.category}</strong></p>
                  <p>Region: <strong className="text-gray-700">{c.country}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonial Banner */}
      <TestimonialBanner />

      {/* 5. Contact Section */}
      <ContactFormSection />
    </div>
  );
}
