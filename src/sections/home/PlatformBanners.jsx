import React from 'react';
import { Link } from 'react-router-dom';

export default function PlatformBanners() {
  const banners = [
    {
      title: 'Social Media Marketing',
      path: '/social-media-marketing-services',
      bgColor: 'bg-[#1b588e]',
      btnHover: 'hover:bg-[#154673]',
      image: '/wp-content/uploads/services-socialmediamarketing-alt-colors-optimized.png',
    },
    {
      title: 'Organic Long-Term SEO',
      path: '/search-engine-optimization-services',
      bgColor: 'bg-[#2fa8e0]',
      btnHover: 'hover:bg-[#2594c7]',
      image: '/wp-content/uploads/services-seo-alt-colors-optimized.png',
    },
    {
      title: 'Advanced Analytics',
      path: '/company-online-presence-analysis-and-audit-services',
      bgColor: 'bg-[#98c23d]',
      btnHover: 'hover:bg-[#85ab32]',
      image: '/wp-content/uploads/services-analytics-alt-colors-optimized.png',
    },
    {
      title: 'Pay Per Click Strategies',
      path: '/pay-per-click-management-ppc-services',
      bgColor: 'bg-[#7f9f28]',
      btnHover: 'hover:bg-[#6c8720]',
      image: '/wp-content/uploads/services-payperclick-alt-colors-optimized.png',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-tight mb-3">
            Fully Managed Digital Marketing Platform
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Digital Marketing, Search Engine & Social Media Optimization, Inbound, Marketing Automation and Email Marketing.
          </p>
        </div>

        {/* 4 Colored Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {banners.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} rounded-lg overflow-hidden flex flex-col items-center justify-between text-white p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-200 min-h-[320px]`}
            >
              <div className="w-full flex justify-center py-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-auto object-contain"
                />
              </div>

              <div className="w-full text-center">
                <Link
                  to={item.path}
                  className={`inline-block w-full py-3 px-4 bg-white/15 ${item.btnHover} border border-white/25 rounded text-sm font-semibold tracking-wide text-white uppercase transition-colors`}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
