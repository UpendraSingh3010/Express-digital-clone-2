import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass, Link2, Target, Layout, Mail, MessageSquare, Tag } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      title: 'Local Search Strategy',
      description: 'Maximize your presence on search engine results pages on a local scale.',
      icon: MapPin,
      badgeColor: 'bg-[#2fa8e0]',
      link: '/local-seo-services',
    },
    {
      title: 'Maps Search Optimization',
      description: 'Google Maps Optimization is an important part of any successful local marketing strategy.',
      icon: Compass,
      badgeColor: 'bg-[#98c23d]',
      link: '/local-seo-services',
    },
    {
      title: 'Link Building & Content',
      description: 'Link building is and will continue to be a tremendously important component of Search Engine Optimization (SEO).',
      icon: Link2,
      badgeColor: 'bg-[#f39c12]',
      link: '/content-marketing-services',
    },
    {
      title: 'Paid Search Advertising',
      description: 'Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.',
      icon: Target,
      badgeColor: 'bg-[#2fa8e0]',
      link: '/pay-per-click-management-ppc-services',
    },
    {
      title: 'Custom Website Design',
      description: 'Our team specializes in affordable web design and e-commerce.',
      icon: Layout,
      badgeColor: 'bg-[#98c23d]',
      link: '/web-design-services',
    },
    {
      title: 'Custom Email Design',
      description: 'Custom email templates that speak to your customers and resonate with your brand.',
      icon: Mail,
      badgeColor: 'bg-[#f39c12]',
      link: '/email-marketing-services',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* 6 Services Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={idx} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full ${svc.badgeColor} flex items-center justify-center text-white flex-shrink-0 shadow-sm mt-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-800">
                    <Link to={svc.link} className="hover:text-[#2fa8e0] transition-colors">
                      {svc.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-100">
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
