import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Irene Warner',
      role: 'CEO & Founder',
      company: 'Warner Innovations',
      avatar: '/wp-content/uploads/avatar-6.png',
      text: '“We’ve looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they’ve been awesome to work with.”'
    },
    {
      name: 'Daisy Howarth',
      role: 'Marketing Director',
      company: 'Coderama',
      avatar: '/wp-content/uploads/avatar-5.png',
      text: '“Express Digital transformed our organic reach in just under 4 months. Their transparent reporting and dedicated empaneled experts made all the difference to our online conversions.”'
    },
    {
      name: 'Angela Leibius',
      role: 'Chief Technology Officer',
      company: 'Opertray Division',
      avatar: '/wp-content/uploads/avatar-4.png',
      text: '“Their strategic PPC audits cut our customer acquisition costs by 35% while expanding keyword volume across two continents. Exceptional technical caliber.”'
    },
    {
      name: 'Peter Spencer',
      role: 'Head of Growth',
      company: 'Plainst Tech',
      avatar: '/wp-content/uploads/avatar-2.png',
      text: '“No other agency provides this level of transparency in cost and execution. The combination of managed platform tools and seasoned experts is unbeatable.”'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Testimonials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Client Testimonials &amp; Success Stories
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            Read what industry leaders and verified partners say about collaborating with Express Digital.
          </p>
        </div>
      </section>

      {/* 2. Testimonial Cards Grid */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative space-y-4">
                <Quote className="w-10 h-10 text-[#1b6ba8]/15 absolute right-6 top-6" />
                <div className="flex items-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#1b6ba8]/40"
                  />
                  <div>
                    <h3 className="text-base font-bold text-gray-800">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.role}, <strong className="text-gray-700">{t.company}</strong></p>
                    <div className="flex text-amber-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic pt-2">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form */}
      <ContactFormSection />
    </div>
  );
}
