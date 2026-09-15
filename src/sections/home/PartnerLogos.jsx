import React from 'react';

export default function PartnerLogos() {
  const logos = [
    '/wp-content/uploads/clientlogo-9-150x150.png',
    '/wp-content/uploads/clientlogo-6-150x150.png',
    '/wp-content/uploads/clientlogo-8-150x150.png',
    '/wp-content/uploads/clientlogo-11-150x150.png',
    '/wp-content/uploads/clientlogo-5-150x150.png',
    '/wp-content/uploads/clientlogo-12-150x150.png',
    '/wp-content/uploads/clientlogo-2-150x150.png',
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200/70">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((src, idx) => (
            <div key={idx} className="w-28 h-20 flex items-center justify-center p-2">
              <img
                src={src}
                alt={`Client Logo ${idx + 1}`}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1b6ba8]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
