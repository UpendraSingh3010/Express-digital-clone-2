import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function CaseStudiesPage() {
  const projects = [
    {
      title: 'Opertray Division',
      category: 'Industrial Engineering',
      result: 'Ranked #1 on Google in 4 Months',
      desc: 'Through targeted long-tail SEO and architectural re-platforming, Opertray Division achieved front-page rankings across 28 high-intent terms.',
      image: '/wp-content/uploads/project-thumb-1-389x260.png',
      link: '/project-view/opertray-division',
    },
    {
      title: 'Tremely Designs',
      category: 'E-Commerce Fashion',
      result: '+180% Organic Revenue Growth',
      desc: 'Optimizing product schema, site performance, and high-converting content hubs drove unprecedented quarterly returns.',
      image: '/wp-content/uploads/project-thumb-2-390x260.png',
      link: '/project-view/tremely-designs',
    },
    {
      title: 'Plainst Technologies',
      category: 'Fintech & Cloud',
      result: 'Top 3 Positions for 45 Core Keywords',
      desc: 'Competitor gap analysis and backlink acquisition campaigns positioned Plainst Tech ahead of legacy industry players.',
      image: '/wp-content/uploads/project-thumb-4-389x260.png',
      link: '/project-view/plainst-technologies',
    },
    {
      title: 'Maindex Solutions',
      category: 'Healthcare Software',
      result: '320% Return on Ad Spend (ROAS)',
      desc: 'Restructured multi-channel PPC bidding algorithms to capture high-intent healthcare enterprise buyers.',
      image: '/wp-content/uploads/project-thumb-3-390x260.png',
      link: '/project-view/maindex-solutions',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Case Studies &amp; Proven Track Record
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            Explore how our managed digital marketing platform and verified specialists deliver tangible, audited results for partners worldwide.
          </p>
        </div>
      </section>

      {/* 2. Projects Grid */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-60 overflow-hidden bg-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#1b6ba8] uppercase tracking-wider block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{proj.title}</h3>
                    <div className="inline-flex items-center text-xs font-bold text-[#98c23d] bg-[#98c23d]/10 px-2.5 py-1 rounded mb-3">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      {proj.result}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to={proj.link}
                      className="text-xs font-bold text-[#1b6ba8] hover:text-[#2fa8e0] uppercase tracking-wider flex items-center"
                    >
                      Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
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
