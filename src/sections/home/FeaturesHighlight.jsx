import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesHighlight() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top 3 Columns Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-gray-200/80">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0]">
                <div className="dslc-info-box-image-inner">
                  <span className="dslc-icon dslc-icon-ext-shield text-xl"></span>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-800">
                Online Reputation Management
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0]">
                <div className="dslc-info-box-image-inner">
                  <span className="dslc-icon dslc-icon-ext-basic_mixer2 text-xl"></span>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-800">
                Conversion Rate Optimization
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0]">
                <div className="dslc-info-box-image-inner">
                  <span className="dslc-icon dslc-icon-ext-linegraph text-xl"></span>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-800">
                Real-Time Social Media Analytics
              </h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              We produce bespoke reports and technical audits that can help your business with specific areas of digital marketing.
            </p>
          </div>
        </div>

        {/* 2-Column SEO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16">
          {/* Left Column Image */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/wp-content/uploads/seo_specialist_workplace-optimized.png"
              alt="Appear On the Front Page of Google"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-tight mb-4">
                Appear On the Front Page of Google!
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <div className="dslc-info-box-image-inner text-[#2fa8e0] flex-shrink-0">
                  <span className="dslc-icon dslc-icon-ext-profile-male text-lg"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Connect with pre-qualified customers</h4>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="dslc-info-box-image-inner text-[#2fa8e0] flex-shrink-0">
                  <span className="dslc-icon dslc-icon-ext-clock text-lg"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Save time and money</h4>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="dslc-info-box-image-inner text-[#2fa8e0] flex-shrink-0">
                  <span className="dslc-icon dslc-icon-ext-clock text-lg"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Rely on an experienced and knowledgeable team</h4>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-block border-2 border-[#2fa8e0] text-[#2fa8e0] hover:bg-[#2fa8e0] hover:text-white font-medium text-xs uppercase tracking-wider px-6 py-3 rounded transition-all"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
