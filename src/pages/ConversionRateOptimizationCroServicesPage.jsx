import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';
import CaseStudiesSection from '../sections/home/CaseStudiesSection';

export default function ConversionRateOptimizationCroServicesPage() {
  const paragraphs = [
  "The matter of fact is Conversion Rate Optimization (CRO) plays vital role in supporting site performance by improving the ratio of site visitors converted into actual customers. Increasing sales, click through rates and other unidentified goals have also been assisted by CRO which ultimately leads to huge traffic on site.",
  "To increase the ratio of visitors on your website CRO is must to apply as it is considered the most important aspect of digital marketing. CRO needs to be improved every time for more good results after testing is complete. In this case if you decide to build a whole new website for years you will still be able to receive the same response from all tests that you run now.",
  "From the very beginning we feel effective communication more important for collaboration as it create a “test path” that will ensure you about specific goals for revenue generation, customer loyalty and overall market share increase.",
  "We have successfully achieved our goals through being persistent in research, ambitious development, rigorous testing and meticulous reporting. We keep a track of ways through which users are interacting with your website while developing strategies for increasing the engagement of customers and conversion rate.",
  "We help you to make the visitors do what you want them to on your site, our team is ready to help optimize your site and boost the conversion rates, providing a successful a long-term effect CRO strategy for your business."
];
  const counters = [
  {
    "num": "21",
    "label": "CRO"
  },
  {
    "num": "15",
    "label": "Design Update"
  },
  {
    "num": "9",
    "label": "Website Redesign"
  },
  {
    "num": "17",
    "label": "A/B Split Testing"
  },
  {
    "num": "6",
    "label": "Website Flow Redesign"
  },
  {
    "num": "11",
    "label": "Adding Social Sharing"
  }
];
  const features = [
  "CRO techniques",
  "A/B Split Testing",
  "Better website ROI"
];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <Link to="/services" className="hover:underline">Services</Link> &gt; <span className="text-white font-medium">Conversion Rate Optimization</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Conversion Rate Optimization
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
                About Conversion Rate Optimization
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
