import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';
import CaseStudiesSection from '../sections/home/CaseStudiesSection';

export default function MobileMarketingServicesPage() {
  const paragraphs = [
  "We make a perfect use of mobile by channelising the new platforms and leads in the right direction for great scope of work.",
  "These days hardly one can be seen without smartphones as people are more mobile friendly than PC’s, which also boost the possibilities of more audience reach. Mobile marketing is the biggest tool in digital marketing industry which has improve the quality of business so far.",
  "Mobile marketing has given multiple platforms to consumers as well as to the brand for interaction. It has become easier for target audience to reach and understand the product and vice versa not only because of filters on age, gender and location but with interests element has also played a crucial role with mobile browsing data.",
  "We perform in a systematic way to develop websites and implement all necessary steps which caters every individual needs. Considering others players we are far more competent to manage your entire mobile competent as we plan every step of our with strategy, audience profiling, campaign design and development right through delivery and reporting.",
  "Post Engagement Rate Increase"
];
  const counters = [
  {
    "num": "41%",
    "label": "Post Engagement Rate Increase"
  },
  {
    "num": "21%",
    "label": "Page Engagement Rate Increase"
  },
  {
    "num": "+80k",
    "label": "Page Views In Average"
  },
  {
    "num": "180k",
    "label": "Downloads"
  }
];
  const features = [
  "Mobile First Design",
  "Accurate Targeting",
  "SMS Campaings"
];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <Link to="/services" className="hover:underline">Services</Link> &gt; <span className="text-white font-medium">Mobile Marketing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Mobile Marketing
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            {paragraphs[0] || 'Comprehensive digital marketing solutions powered by verified empaneled experts.'}
          </p>
        </div>
      </section>

      {/* 2. Main Service Description & Content */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Deep Content */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-tight">
                About Mobile Marketing
              </h2>

              {paragraphs.slice(1).map((p, idx) => (
                <p key={idx} className="text-base text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Strategy & Key Highlights */}
              {features.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Key Features &amp; Execution Strategy
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 rounded-lg bg-[#f8fafc] border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-[#2fa8e0] mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Quick Stats / CTA Box */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Summary Card */}
              <div className="bg-[#f0f7fb] p-6 rounded-lg border border-[#2fa8e0]/20 space-y-4">
                <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200/80 pb-3">
                  Service Summary
                </h3>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-center justify-between">
                    <span>Expert Review:</span>
                    <strong className="text-[#1b6ba8]">Certified Specialists</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Execution Plan:</span>
                    <strong className="text-[#1b6ba8]">Included ($250 Value)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Reporting:</span>
                    <strong className="text-[#1b6ba8]">Real-time &amp; Transparent</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Support:</span>
                    <strong className="text-[#1b6ba8]">Dedicated Manager</strong>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    to="/request-a-free-seo-analysis"
                    className="block w-full text-center bg-[#98c23d] hover:bg-[#85ab32] text-white font-bold text-xs uppercase tracking-wider py-3 rounded shadow transition-colors"
                  >
                    Request Free Analysis
                  </Link>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Related Services
                </h4>
                <div className="space-y-2 text-sm">
                  <Link to="/search-engine-optimization-services" className="block text-gray-600 hover:text-[#1b6ba8] transition-colors">
                    → Search Engine Optimization
                  </Link>
                  <Link to="/local-seo-services" className="block text-gray-600 hover:text-[#1b6ba8] transition-colors">
                    → Local SEO Services
                  </Link>
                  <Link to="/pay-per-click-management-ppc-services" className="block text-gray-600 hover:text-[#1b6ba8] transition-colors">
                    → Pay Per Click (PPC) Management
                  </Link>
                  <Link to="/social-media-marketing-services" className="block text-gray-600 hover:text-[#1b6ba8] transition-colors">
                    → Social Media Marketing
                  </Link>
                  <Link to="/conversion-rate-optimization-cro-services" className="block text-gray-600 hover:text-[#1b6ba8] transition-colors">
                    → Conversion Rate Optimization
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Performance Numbers / Metric Counters */}
      {counters.length > 0 && (
        <section className="py-14 bg-[#f8fafc] border-b border-gray-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-light text-gray-800 tracking-wide">
                Key Performance Metrics &amp; Delivery
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {counters.map((cnt, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#2fa8e0] mb-2">{cnt.num}</span>
                  <span className="text-xs text-gray-600 font-medium">{cnt.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Case Studies Section */}
      <CaseStudiesSection />

      {/* 5. Contact / Lead Inquiry Form */}
      <ContactFormSection />
    </div>
  );
}
