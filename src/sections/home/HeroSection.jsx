import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Tag, FileEdit, BarChart2, CheckSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#f1f1f1] py-14 border-b border-[#e5e5e5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Titles */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-light text-[#5983b6] tracking-wide mb-2">
            Transparent & Assured
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#333d42]">
            Authentic digital marking results vetted by experts
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white rounded p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0] mb-5">
              <FileEdit className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Fill the need analysis form
            </h4>
            <p className="text-sm text-gray-500">
              Your time: 10 mins. Expert's Time: 30 mins
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0] mb-5">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Get a performance driven analysis & report worth $250 for FREE
            </h4>
            <p className="text-sm text-gray-500">
              Expert's Time: 360 mins
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#f0f7fb] flex items-center justify-center text-[#2fa8e0] mb-5">
              <CheckSquare className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Get a execution plan along with suggested cost structure
            </h4>
            <p className="text-sm text-gray-500">
              Expert's Cost - 80%, Auditing Cost - 20% , Adspent - Additional
            </p>
          </div>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#project-form"
            className="inline-flex items-center bg-[#2fa8e0] hover:bg-[#2594c7] text-white text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Tell us about your project
          </a>
          <Link
            to="/request-a-free-seo-analysis"
            className="inline-flex items-center bg-[#f39c12] hover:bg-[#d8890e] text-white text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all"
          >
            <Tag className="w-4 h-4 mr-2" />
            Request a free quote now
          </Link>
        </div>
      </div>
    </section>
  );
}
