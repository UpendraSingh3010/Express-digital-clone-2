import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, 
  Trophy, 
  Key, 
  Flag, 
  Mail, 
  Keyboard, 
  ArrowRight, 
  CheckCircle,
  Quote,
  ChevronRight
} from 'lucide-react';

export default function AffiliateManagementServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const statBoxes = [
    {
      icon: Wallet,
      count: '14',
      label: 'Affiliate Marketing Campaigns'
    },
    {
      icon: Trophy,
      count: '14',
      label: 'Affiliate monitoring'
    },
    {
      icon: Key,
      count: '8',
      label: 'Recruiting new affiliates'
    },
    {
      icon: Flag,
      count: '9',
      label: 'Selection of affiliate networks'
    },
    {
      icon: Mail,
      count: '3',
      label: 'Affiliate Rewards Program Management'
    },
    {
      icon: Keyboard,
      count: '9',
      label: 'Banner creation'
    }
  ];

  const caseStudies = [
    {
      title: 'Opertray Division',
      link: '/project-view/opertray-division',
      image: '/wp-content/uploads/project-thumb-1-389x260.png',
      excerpt: 'This website achieved Google ranking in four months: Ranks #1-#3 for keyword “Opertray”'
    },
    {
      title: 'Tremely Designs',
      link: '/project-view/tremely-designs',
      image: '/wp-content/uploads/project-thumb-2-390x260.png',
      excerpt: 'This site applies a smart SEO strategy to acquire online clients via long-tail search…'
    },
    {
      title: 'Plainst Tech',
      link: '/project-view/plainst-technologies',
      image: '/wp-content/uploads/project-thumb-4-389x260.png',
      excerpt: 'Currently, 65% of the total traffic on the site and most of the online revenue comes from organic...'
    },
    {
      title: 'Maindex Solutions',
      link: '/project-view/maindex-solutions',
      image: '/wp-content/uploads/project-thumb-3-390x260.png',
      excerpt: 'Consistent top tier search optimization and affiliate marketing performance across all business metrics.'
    }
  ];

  const testimonials = [
    {
      name: 'Irene Warner',
      role: 'CEO & Founder',
      avatar: '/wp-content/uploads/avatar-6.png',
      quote: '“We’ve looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they’ve been awesome to work with.”'
    },
    {
      name: 'Angela Leibius',
      role: 'Chief Executive Officer',
      avatar: '/wp-content/uploads/avatar-5.png',
      quote: '“These guys have built a strong relationship with our team and our partners. We couldn’t be happier with the results and consistent growth.”'
    },
    {
      name: 'Millie Brown',
      role: 'Marketing Head',
      avatar: '/wp-content/uploads/avatar-2.png',
      quote: '“Their strategic approach to digital marketing and affiliate publisher recruitment has delivered exponential growth for our digital assets.”'
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center text-xs text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#1b6ba8] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400" />
          <Link to="/services" className="hover:text-[#1b6ba8] transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400" />
          <span className="text-gray-800 font-semibold">Affiliate Management</span>
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
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Illustration */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <img 
                src="/wp-content/uploads/services-afilate-management-380x380.png"
                alt="Affiliate Management" 
                className="w-[280px] sm:w-[340px] md:w-[380px] h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Right: Title & Subtitle */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                Affiliate Management
              </h1>
              <p className="text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-2xl">
                Affiliate marketing is the base of great relationship between advertiser, publisher and customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Lead Intro Paragraph */}
      <section className="bg-[#f8f9fa] py-12 border-b border-gray-200/80">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 text-center md:text-left">
          <p className="text-[17px] sm:text-[18px] text-gray-700 leading-relaxed font-light">
            Affiliate marketing is a form of online advertising which consist of rewarding an affiliate for referring a visitor or rewarding a consumer for doing an action, such as shopping online or subscribing to a news letter. For free popularity of your page affiliate marketing plays an important role to create a network for related websites which direct customers to purchase from your website.
          </p>
        </div>
      </section>

      {/* 4. Section: 3 Strategy Columns */}
      <section className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-lg bg-[#fafbfc] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                As per our analysis affiliate campaigns have shown the best out put when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#fafbfc] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Real objective of affiliate marketing is to plan everything according to objectives with well planned research, specified effort intended to develop long-term relationships with third party websites, research industry-relevant websites with trusted pages and to construct a valuable and reliable network for your website that is responsible for quality and consumer conversion.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#fafbfc] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Affiliate marketing contribute in various business traits and have the quality and ability to be flexible with commission values at the time when the sales hit because higher commission will ensure affiliates to work harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: 6 Info Boxes / Metrics */}
      <section className="bg-white pb-16 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {statBoxes.map((box, idx) => {
              const IconComp = box.icon;
              return (
                <div key={idx} className="flex flex-col items-center group p-4">
                  {/* Circular Icon Container */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#006fac] flex items-center justify-center text-[#006fac] mb-3 group-hover:bg-[#006fac] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#006fac] mb-1">
                    {box.count}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-snug">
                    {box.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Section: Dark Slate Case Studies */}
      <section className="bg-[#363d41] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-gray-600/50 mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide">
              Our case studies
            </h2>
            <Link 
              to="/case-studies"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              See all projects <ChevronRight className="w-4 h-4 text-[#2fa8e0]" />
            </Link>
          </div>

          {/* 4 Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-[#2a3034] rounded overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-700/40 flex flex-col"
              >
                <div className="overflow-hidden relative aspect-[390/260]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#2fa8e0] transition-colors">
                      <Link to={project.link}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-300/80 leading-relaxed">
                      {project.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link 
                      to={project.link}
                      className="text-xs font-semibold text-[#2fa8e0] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      View Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: CTA Banner Bar */}
      <section className="bg-[#1b6ba8] text-white py-8 border-t border-b border-blue-700">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xl sm:text-2xl font-light tracking-wide text-center sm:text-left">
            Tell us about your project
          </div>
          <a
            href="#quote-form"
            className="inline-flex items-center px-6 py-3 bg-[#2fa8e0] hover:bg-[#2595c7] text-white font-medium text-sm rounded transition-all shadow-sm hover:shadow-md"
          >
            Request a free quote now
          </a>
        </div>
      </section>

      {/* 8. Section: Dark Testimonials Ribbon */}
      <section className="bg-[#2f3539] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#252b2e] p-6 rounded border border-gray-700/50 flex flex-col justify-between space-y-4"
              >
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-700/40">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-600" 
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Section: Two-Column Value Proposition */}
      <section className="bg-white py-16 border-b border-gray-200/70">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#006fac]" /> Strategic Partner Alignment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our affiliate management team can establish a clear understanding of your brand, proposition and products to help you outperform your competitors. We possess the skills and track record to connect your business with high-value publishers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#006fac]" /> Compliance &amp; Attribution
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                It is also important to maintain a trusting relationship with your affiliate sites and protect your brand from rogue activities. We ensure compliance, transparent attribution, and ongoing commission optimization to safeguard brand equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section: Tell Us About Your Project Contact Form */}
      <section id="quote-form" className="bg-[#f1f1f1] py-16 border-t border-gray-300/80">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
              Tell us about your project
            </h2>
            <p className="text-sm text-[#006fac] font-medium">
              Let us help you get your business online and grow it with passion
            </p>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto pt-2 leading-relaxed">
              We can manage all aspects of an affiliate campaign for your business and know how to motivate affiliates to sell your product. We know which affiliate networks are the best for your industry and we know how to build relationships that will lead to increased sales.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-white rounded-lg shadow-sm text-center border border-green-200">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-1">Thank You!</h3>
              <p className="text-sm text-gray-600">Your message has been received. Our affiliate specialists will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200/80 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#006fac] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#006fac] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Your Phone"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#006fac] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Website URL</label>
                  <input 
                    type="url" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#006fac] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message *</label>
                <textarea 
                  rows={4}
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your project, timeline, and current affiliate marketing goals..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#006fac] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 text-center">
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#006fac] hover:bg-[#005a8c] text-white font-semibold text-sm rounded shadow-sm hover:shadow transition-all uppercase tracking-wider"
                >
                  Request a Free Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
