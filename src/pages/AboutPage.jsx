import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Calendar, Coffee, CheckCircle, ArrowRight } from 'lucide-react';
import PartnerLogos from '../sections/home/PartnerLogos';
import ContactFormSection from '../sections/home/ContactFormSection';

export default function AboutPage() {
  const team = [
    { name: 'Maria Murphy', role: 'Head of Marketing', avatar: '/wp-content/uploads/avatar-6.png' },
    { name: 'Angela Leibius', role: 'Senior SEO Strategist', avatar: '/wp-content/uploads/avatar-4.png' },
    { name: 'Millie Brown', role: 'PPC Campaign Director', avatar: '/wp-content/uploads/avatar-2.png' },
    { name: 'Callum Bailey', role: 'Conversion Specialist', avatar: '/wp-content/uploads/avatar-5.png' },
    { name: 'Daisy Howarth', role: 'Social Media Lead', avatar: '/wp-content/uploads/avatar-7.png' },
    { name: 'Abby Banks', role: 'Content Strategist', avatar: '/wp-content/uploads/avatar-8.png' },
    { name: 'Maisie Wade', role: 'Technical SEO Analyst', avatar: '/wp-content/uploads/avatar-3.png' },
    { name: 'Peter Spencer', role: 'Digital Consultant', avatar: '/wp-content/uploads/avatar-1.png' },
  ];

  const stats = [
    { num: '789', label: 'Clients Served', icon: Users },
    { num: '25', label: 'Events Organized', icon: Calendar },
    { num: '43', label: 'Public Speeches', icon: Award },
    { num: '+1,200', label: 'Coffee Cups', icon: Coffee },
  ];

  const milestones = [
    {
      date: 'January, 2007',
      title: 'Company Inception',
      desc: 'Agency started by web enthusiasts turned digital marketing specialists with a shared vision of transparent marketing.'
    },
    {
      date: 'June, 2008',
      title: 'Top 50 Publisher Blog',
      desc: 'The company’s first publisher blog was released and quickly rose to the Top 50 in its category with 5,000+ unique visitors a day!'
    },
    {
      date: 'October, 2010',
      title: 'Global Expansion',
      desc: 'Established client partnerships across 3 continents and 26 countries, delivering verified ROI across retail and tech.'
    },
    {
      date: 'February, 2012',
      title: 'Enterprise Partnerships',
      desc: 'Our search and social media optimization services were adopted by industry-leading enterprises across UK, USA, and India.'
    },
    {
      date: 'June, 2012',
      title: 'Managed Marketing Platform',
      desc: 'Our company invested heavily to build an all-new search and social optimization platform for next-generation online marketing.'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#1b6ba8] text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-xs uppercase tracking-wider text-blue-200 mb-2">
            <Link to="/" className="hover:underline">Home</Link> &gt; <span className="text-white font-medium">About Express Digital</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            About Express.Digital Platform
          </h1>
          <p className="text-base text-blue-100 max-w-3xl">
            Fully Managed Digital Marketing Platform powered by certified digital experts dedicated to transparent, performance-driven growth.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy & Mission Statement */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-800 leading-relaxed tracking-tight">
              “We appreciate and believe in relationships based on the foundation of transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.”
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Our digital marketing work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients — big or small. With our managed marketing ecosystem, companies no longer need to depend on expensive retainer overheads or risky freelancer patterns.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team of Experts Grid */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wide mb-2">
              Our Empaneled Experts
            </h3>
            <p className="text-sm text-gray-500">
              The certified professionals steering your campaigns toward sustained growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#1b6ba8]/30 shadow-xs"
                />
                <h4 className="text-base font-bold text-gray-800 mb-1">{member.name}</h4>
                <p className="text-xs font-medium text-[#1b6ba8]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Company Statistics */}
      <section className="py-14 bg-[#1b6ba8] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-2">
                  <Icon className="w-8 h-8 mx-auto text-blue-200 mb-1" />
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{item.num}</div>
                  <div className="text-xs sm:text-sm font-medium text-blue-100 uppercase tracking-wider">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Company Milestones Timeline */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wide mb-2">
              Our Journey &amp; Milestones
            </h3>
            <p className="text-sm text-gray-500">
              A track record of technological innovation and client success
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:w-0.5 before:bg-gray-200">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1b6ba8] border-4 border-white shadow-sm mt-1.5 z-10" />

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} w-full`}>
                  <div className="bg-[#f8fafc] p-6 rounded-lg border border-gray-200 shadow-xs">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#2fa8e0]/10 text-[#1b6ba8] text-xs font-bold uppercase tracking-wider mb-2">
                      {m.date}
                    </span>
                    <h4 className="text-base font-bold text-gray-800 mb-2">{m.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Logos */}
      <PartnerLogos />

      {/* 7. Contact & Consultation Form */}
      <ContactFormSection />
    </div>
  );
}
