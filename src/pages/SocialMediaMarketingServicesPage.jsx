import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';
import CaseStudiesSection from '../sections/home/CaseStudiesSection';

export default function SocialMediaMarketingServicesPage() {
  const paragraphs = [
  "We are delighted to say that we are full SEO service agency who are trained to handle social media in much better way than others. Our social media specialist team can arrange a systematic set up for your business objectives, identify your target audience, create engagement to share content and combine social media with all aspects of your online presence.",
  "Social Media Marketing is on the top of our priority list as it connects consumer with your brand. We will give complete assistance and support to your social media which includes social programs, content planning (and generation), blogger outreach and video distribution among other services that aim to convince new consumers to buy and as results increase profit rates.",
  "Above and all our main objective is always to connect with maximum number of consumers on social media platforms for the brand promotion and services awareness. One can see the results of advertising which reflects on re- tweets, shares, comments, likes and views. Talking about user generated content is much popular on social media platforms like Facebook, Google+, Twitter, Pinterest and LinkedIn.",
  "To excel your business we play crucial role to get the feedback on your brand to understand the perception of people towards your product usage.",
  "We are opinionated on the fact that content of social media platforms like Facebook, Twitter or Pinterest are major factors to bring traffic on site. We will manage to have the most suitable type of content and platform for your brand."
];
  const counters = [];
  const features = [
  "Brand Monitoring",
  "Social Media Contests",
  "Social Media Management",
  "Setup & Custom Profile Design"
];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <Link to="/services" className="hover:underline">Services</Link> &gt; <span className="text-white font-medium">Social Media Marketing Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Social Media Marketing Services
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
                About Social Media Marketing Services
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
