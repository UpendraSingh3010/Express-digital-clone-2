import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, ArrowRight } from 'lucide-react';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function ResourcesPage() {
  const ebooks = [
    {
      title: 'A Practical Guide To Killer Marketing Content',
      category: 'Content Strategy',
      desc: 'Master the art of creating compelling, search-optimized editorial assets that convert readers into brand evangelists.',
      link: '/download-view/a-practical-guide-to-killer-marketing-content',
    },
    {
      title: 'Introduction To Business Blogging',
      category: 'Inbound Marketing',
      desc: 'Proven tactics for building organic domain authority, targeting buyer personas, and scaling weekly search impressions.',
      link: '/download-view/introduction-to-business-blogging',
    },
    {
      title: '100 Content Marketing Tips',
      category: 'Growth Tactics',
      desc: 'A dense, action-oriented compendium of tested conversion optimization tricks, headlines, and distribution channels.',
      link: '/download-view/100-content-marketing-tips',
    },
    {
      title: 'Guest Blogging E-book',
      category: 'Link Building & PR',
      desc: 'Step-by-step outreach framework for acquiring high-authority editorial mentions and sustainable backlink profiles.',
      link: '/download-view/guest-blogging-e-book',
    },
    {
      title: 'SEO Warrior',
      category: 'Search Engine Optimization',
      desc: 'Technical site audits, crawl optimization, structured data schemas, and algorithm survival blueprints.',
      link: '/download-view/seo-warrior',
    },
    {
      title: 'The Art Of Digital Marketing',
      category: 'Omnichannel Strategy',
      desc: 'Harmonizing PPC, SEO, CRO, and email automation into a cohesive, high-ROI client acquisition engine.',
      link: '/download-view/the-art-of-digital-marketing',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">Resources</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Free Marketing Resources &amp; E-Books
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            Download complimentary actionable guides, research papers, and technical blueprints written by our empaneled specialists.
          </p>
        </div>
      </section>

      {/* 2. Resources Grid */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#2fa8e0]/10 text-[#1b6ba8] flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    {b.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    <Link to={b.link} className="hover:text-[#1b6ba8] transition-colors">
                      {b.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <Link
                    to={b.link}
                    className="font-bold text-[#1b6ba8] hover:underline flex items-center"
                  >
                    View E-Book <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <span className="inline-flex items-center text-gray-500">
                    <Download className="w-3.5 h-3.5 mr-1 text-[#98c23d]" /> Free PDF
                  </span>
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
