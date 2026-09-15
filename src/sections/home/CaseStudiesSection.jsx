import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  const projects = [
    {
      title: 'Opertray Division',
      description: 'This website achieved Google ranking in four months.',
      image: '/wp-content/uploads/project-thumb-1-389x260.png',
      link: '/project-view/opertray-division',
    },
    {
      title: 'Tremely Designs',
      description: 'Increased organic traffic by 180% within six months.',
      image: '/wp-content/uploads/project-thumb-2-390x260.png',
      link: '/project-view/tremely-designs',
    },
    {
      title: 'Plainst Tech',
      description: 'Top 3 search positions achieved for 45 primary keywords.',
      image: '/wp-content/uploads/project-thumb-4-389x260.png',
      link: '/project-view/plainst-technologies',
    },
    {
      title: 'Maindex Solutions',
      description: '320% return on ad spend with PPC optimization.',
      image: '/wp-content/uploads/project-thumb-3-390x260.png',
      link: '/project-view/maindex-solutions',
    },
  ];

  return (
    <section className="py-16 bg-[#363d41] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header with Title and Navigation Controls */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-600/50">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
              Our case studies
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/case-studies"
              className="text-xs uppercase tracking-wider font-semibold text-gray-300 hover:text-[#2fa8e0] transition-colors flex items-center"
            >
              See all projects
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <div className="hidden sm:flex items-center space-x-1">
              <button className="w-8 h-8 rounded bg-white/10 hover:bg-[#2fa8e0] flex items-center justify-center text-white transition-colors" aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded bg-white/10 hover:bg-[#2fa8e0] flex items-center justify-center text-white transition-colors" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2a3034] rounded-lg overflow-hidden border border-gray-700/60 group hover:border-[#2fa8e0] transition-all duration-200 flex flex-col"
            >
              <div className="overflow-hidden h-48 bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#2fa8e0] transition-colors mb-2">
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-700/50">
                  <Link
                    to={item.link}
                    className="text-xs font-semibold text-[#2fa8e0] hover:underline flex items-center"
                  >
                    View Project <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
