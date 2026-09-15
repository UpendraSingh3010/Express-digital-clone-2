import React from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter Growth',
      price: '$499',
      period: '/ month',
      desc: 'Ideal for local businesses aiming to establish front-page search presence and local visibility.',
      features: [
        'Initial Comprehensive Website Audit',
        'Top 15 Primary Target Keywords',
        'Google My Business Optimization',
        'Monthly Transparent Performance Report',
        'Dedicated Campaign Strategist',
      ],
      cta: 'Choose Starter',
      badge: 'Popular',
      color: 'border-gray-200',
    },
    {
      name: 'Professional Scale',
      price: '$999',
      period: '/ month',
      desc: 'Designed for scaling e-commerce & multi-location businesses needing aggressive market acquisition.',
      features: [
        'Complete Technical & Content Audit',
        'Top 45 Target Primary Keywords',
        'Full On-Page & Off-Page SEO',
        'PPC & Ad Campaign Optimization',
        'Conversion Rate Funnel Optimization',
        'Bi-Weekly Strategy Review Calls',
      ],
      cta: 'Choose Professional',
      badge: 'Recommended',
      color: 'border-[#1b6ba8] ring-2 ring-[#1b6ba8]/20',
      popular: true,
    },
    {
      name: 'Enterprise Custom',
      price: '$1,999',
      period: '/ month',
      desc: 'Full-service digital platform integration with dedicated multi-disciplinary team.',
      features: [
        'Unlimited Keyword Universe',
        'Custom Analytics & CRO Audits',
        'Full PR & Brand Authority Building',
        'Dedicated 3-Expert Agile Pod',
        '24/7 Priority Strategic SLA',
        'Executive Dashboard Integration',
      ],
      cta: 'Contact Enterprise',
      badge: 'Enterprise',
      color: 'border-gray-200',
    },
  ];

  const faqs = [
    {
      q: 'Are there any hidden fees or long lock-in contracts?',
      a: 'None whatsoever. All our pricing structures follow a transparent, performance-driven model with no surprise costs.'
    },
    {
      q: 'Can I combine multiple services under one monthly plan?',
      a: 'Yes. Our platform allows custom multi-channel bundling (e.g. SEO + PPC + Social Media).'
    },
    {
      q: 'What is included in the Free Need Analysis?',
      a: 'You receive a complete $250 audit examining your technical health, keyword opportunities, and a suggested cost breakdown for FREE.'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Fully Managed Digital Marketing Pricing Packages
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            Predictable, transparent investment tiers with verified empaneled experts and performance guarantees.
          </p>
        </div>
      </section>

      {/* 2. Pricing Cards Grid */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-8 border ${p.color} shadow-sm flex flex-col justify-between relative`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#98c23d] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{p.name}</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">{p.desc}</p>
                  <div className="mb-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-[#1b6ba8]">{p.price}</span>
                    <span className="text-xs text-gray-500 ml-1.5">{p.period}</span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-gray-600 mb-8 border-t border-gray-100 pt-6">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <Check className="w-4 h-4 text-[#98c23d] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/request-a-free-seo-analysis"
                  className={`w-full text-center py-3 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                    p.popular
                      ? 'bg-[#1b6ba8] hover:bg-[#154f7d] text-white shadow'
                      : 'bg-gray-100 hover:bg-[#1b6ba8] hover:text-white text-gray-800'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500">
              Clear answers regarding pricing, execution models, and onboarding
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#f8fafc] p-6 rounded-lg border border-gray-200 space-y-2">
                <h4 className="text-base font-bold text-gray-800 flex items-center">
                  <HelpCircle className="w-4 h-4 text-[#2fa8e0] mr-2 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Form */}
      <ContactFormSection />
    </div>
  );
}
