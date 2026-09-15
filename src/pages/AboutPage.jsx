import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Calendar, 
  Coffee, 
  CheckCircle, 
  ChevronRight,
  TrendingUp,
  BarChart2,
  Mail,
  Target
} from 'lucide-react';

export default function AboutPage() {
  const metrics = [
    { num: '10', label: 'Years in Marketing' },
    { num: '143', label: 'Web Analytics' },
    { num: '176', label: 'Email Campaigns' },
    { num: '41', label: 'First Position' },
    { num: '46', label: 'Team Members' },
    { num: '196', label: 'SEO Campaigns' },
  ];

  const team = [
    { name: 'Maria Murphy', role: 'Development manager', avatar: '/wp-content/uploads/avatar-6.png' },
    { name: 'Angela Leibius', role: 'Chief Executive Officer', avatar: '/wp-content/uploads/avatar-4.png' },
    { name: 'Millie Brown', role: 'Developer', avatar: '/wp-content/uploads/avatar-2.png' },
    { name: 'Callum Bailey', role: 'Founder and President', avatar: '/wp-content/uploads/avatar-5.png' },
    { name: 'Daisy Howarth', role: 'Human resources', avatar: '/wp-content/uploads/avatar-7.png' },
    { name: 'Abby Banks', role: 'Search Engine Optimisation Specialist', avatar: '/wp-content/uploads/avatar-8.png' },
    { name: 'Maisie Wade', role: 'Web Analytics Specialist', avatar: '/wp-content/uploads/avatar-3.png' },
    { name: 'Peter Spencer', role: 'Art Director', avatar: '/wp-content/uploads/avatar-1.png' },
  ];

  const quickStats = [
    { num: '789', label: 'Clients Served', icon: Users },
    { num: '25', label: 'Events Organized', icon: Calendar },
    { num: '43', label: 'Public Speeches', icon: Award },
    { num: '+1,200', label: 'Coffee Cups', icon: Coffee },
  ];

  const clientLogos = [
    '/wp-content/uploads/clientlogo-9.png',
    '/wp-content/uploads/clientlogo-6.png',
    '/wp-content/uploads/clientlogo-8.png',
    '/wp-content/uploads/clientlogo-11.png',
    '/wp-content/uploads/clientlogo-1.png',
    '/wp-content/uploads/clientlogo-2.png',
    '/wp-content/uploads/clientlogo-3.png',
    '/wp-content/uploads/clientlogo-5.png'
  ];

  const milestones = [
    {
      year: '2007',
      items: [
        {
          date: 'January, 2007',
          desc: 'Agency started by web enthusiasts turned digital experts.'
        }
      ]
    },
    {
      year: '2008',
      items: [
        {
          date: 'June, 2008',
          desc: 'The company’s first publisher blog was released and quickly rose to the Top 50 in its category with 5000 + unique visitors a day!'
        }
      ]
    },
    {
      year: '2010',
      items: [
        {
          date: 'October, 2010',
          desc: 'Established Business Clients across 3 continents, 26 countries.'
        }
      ]
    },
    {
      year: '2012',
      items: [
        {
          date: 'February, 2012',
          desc: 'Our search and social media optimization services used by some of the top companies in UK, USA, India.'
        },
        {
          date: 'June, 2012',
          desc: 'Our company invested heavily to build all new search and social optimisation platform for next generation online marketing.'
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#1b6ba8] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400" />
          <span className="text-gray-800 font-semibold">About Us</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section 
        className="w-full bg-[#006fac] text-white py-14 sm:py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/wp-content/uploads/pattern-web-ransparent.png)',
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
            About Express Digital
          </h1>
          <p className="text-base sm:text-lg text-blue-100 font-light max-w-2xl mx-auto leading-relaxed">
            Fully Managed Digital Marketing Platform powered by Verified Digital Experts! Assured Results.
          </p>
        </div>
      </section>

      {/* 3. Core Philosophy Statement */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed tracking-tight italic">
            “We appreciate and believe in relationships based on the foundation of transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.”
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We made efforts for delivering outstanding results with innovative creative ideas. Our motive is to construct meaningful relationship with your clients by involving them with your brand using social media.
          </p>
        </div>
      </section>

      {/* 4. Six Key Metric Counters */}
      <section className="bg-[#f8f9fa] py-14 border-b border-gray-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-4 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#006fac] mb-1">
                  {m.num}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team of Experts Grid on #3b434a */}
      <section className="bg-[#3b434a] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide mb-2">
              Our Digital Experts
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Empaneled specialists dedicated to your digital growth and transparent reporting
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#31383e] rounded p-6 text-center border border-gray-700/50 hover:border-[#2fa8e0]/60 transition-all duration-300 flex flex-col items-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-600 group-hover:border-[#2fa8e0] transition-colors">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-[#2fa8e0] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-400 font-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quick Stats Ribbon on #373e45 */}
      <section className="bg-[#373e45] text-white py-10 border-t border-gray-700/40">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {quickStats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <IconComp className="w-6 h-6 text-[#2fa8e0] mb-2" />
                  <span className="text-2xl sm:text-3xl font-light text-white mb-0.5">
                    {item.num}
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Vision Highlight Banner on #59ace7 */}
      <section className="bg-[#59ace7] text-white py-14">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-blue-900/80">
            O U R &nbsp; V I S I O N
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-snug">
            The most respected Internet marketing agency. We want to change the way businesses speak, listen and share online.
          </h2>
        </div>
      </section>

      {/* 8. Passionate About Our Clients Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
              Passionate About Our Clients
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Our digital marketing work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients — big or small.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
            {clientLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="p-3 bg-[#fafafa] rounded border border-gray-100 flex items-center justify-center h-20 hover:border-gray-300 transition-colors"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${idx + 1}`} 
                  className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Milestones Interactive Timeline */}
      <section className="bg-[#f9fafb] py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight mb-2">
              Milestones
            </h2>
            <p className="text-sm text-gray-500 font-light">
              Some remarkable events our digital marketing agency went through.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-gray-200 before:hidden sm:before:block">
            {milestones.map((block, bIdx) => (
              <div key={bIdx} className="space-y-6">
                <div className="flex justify-center">
                  <span className="px-5 py-1.5 bg-[#006fac] text-white text-sm font-bold rounded-full shadow-sm z-10">
                    {block.year}
                  </span>
                </div>

                {block.items.map((mItem, mIdx) => (
                  <div 
                    key={mIdx}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 max-w-2xl mx-auto space-y-2"
                  >
                    <h4 className="text-base font-semibold text-[#006fac]">
                      {mItem.date}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {mItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
