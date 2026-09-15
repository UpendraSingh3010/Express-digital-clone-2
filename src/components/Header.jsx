import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, FileText } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. Top Blue Announcement Bar */}
      {!announcementClosed && (
        <div className="bg-[#1b6ba8] text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-between transition-all">
          <div className="flex-1 text-center font-normal tracking-wide">
            Fully Managed Digital Marketing Platform powered by Verified Digital Experts! Assured Results.
          </div>
          <button
            onClick={() => setAnnouncementClosed(true)}
            className="text-white/80 hover:text-white ml-2 text-sm font-bold p-0.5"
            aria-label="Close Announcement"
          >
            ✕
          </button>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="bg-[#f4f4f4] border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[84px]">
          {/* Exact Brand Logo matching user request */}
          <Link 
            to="/" 
            id="brand-logo-link" 
            className="flex items-center gap-3 shrink-0 group focus:outline-none py-0.5"
          >
            <img 
              alt="Express Digital - Fully Managed Digital Marketing Platform" 
              className="w-auto object-contain transition-all duration-200 group-hover:scale-[1.02] h-12 sm:h-14 lg:h-16" 
              src="/uploads/2017/03/dark_logo_transparent_background-with-Tagline.png" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full">
            {/* About Dropdown with seamless hover bridge */}
            <div 
              className="relative group h-full flex items-center border-l border-gray-300/70"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                to="/about"
                className={`px-5 py-2 text-[14px] font-medium tracking-wide flex items-center transition-colors ${
                  location.pathname === '/about' ? 'text-[#1b6ba8] font-semibold' : 'text-[#333333] hover:text-[#1b6ba8]'
                }`}
              >
                About
                <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-500 group-hover:text-[#1b6ba8]" />
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-1 z-50 transition-all duration-150 ${aboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="w-72 bg-white shadow-xl border border-gray-200 py-2 rounded-b">
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Marketing Platform</span>
                    <span className="text-[11px] text-gray-500">Highly Experienced Empaneled Experts</span>
                  </div>
                  <Link 
                    to="/about" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Digital Marketing Platform
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Our Services
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Pricing Packages
                  </Link>
                  <div className="px-4 py-2 mt-2 bg-gray-50 border-t border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Experience</span>
                    <span className="text-[11px] text-gray-500">Selected clients and projects</span>
                  </div>
                  <Link 
                    to="/clients" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Our Clients
                  </Link>
                  <Link 
                    to="/testimonials" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Testimonials
                  </Link>
                  <Link 
                    to="/resources" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Free Resources
                  </Link>
                  <Link 
                    to="/case-studies" 
                    onClick={() => setAboutDropdownOpen(false)} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0f6fa] hover:text-[#1b6ba8]"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            {/* Services with Seamless Mega Dropdown */}
            <div 
              className="relative group h-full flex items-center border-l border-gray-300/70"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`px-5 py-2 text-[14px] font-medium tracking-wide flex items-center transition-colors ${
                  location.pathname.includes('services') ? 'text-[#1b6ba8] font-semibold' : 'text-[#333333] hover:text-[#1b6ba8]'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-500 group-hover:text-[#1b6ba8]" />
              </Link>

              {/* Mega Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-150 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="w-[880px] bg-white shadow-2xl border border-gray-200 p-6 grid grid-cols-3 gap-6 rounded-b">
                  {/* Col 1 */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b6ba8] border-b border-gray-200 pb-2 mb-3">
                      Web Development
                    </h4>
                    <p className="text-[11px] text-gray-500 mb-3">Web Design & Development Solutions</p>
                    <div className="space-y-2 text-sm">
                      <Link to="/content-marketing-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Content Marketing Strategy
                      </Link>
                      <Link to="/web-design-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Web Design
                      </Link>
                      <Link to="/web-development-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Web Development
                      </Link>
                      <Link to="/mobile-marketing-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Mobile Marketing
                      </Link>
                      <Link to="/digital-consultancy-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Digital Consultancy
                      </Link>
                      <Link to="/reputation-management-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Reputation Management
                      </Link>
                    </div>
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b6ba8] border-b border-gray-200 pb-2 mb-3">
                      Online Marketing
                    </h4>
                    <p className="text-[11px] text-gray-500 mb-3">How we can help you get more sales</p>
                    <div className="space-y-2 text-sm">
                      <Link to="/search-engine-optimization-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Search Engine Optimization
                      </Link>
                      <Link to="/local-seo-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Local SEO
                      </Link>
                      <Link to="/social-media-marketing-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Social Media Marketing
                      </Link>
                      <Link to="/email-marketing-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Email Marketing
                      </Link>
                      <Link to="/pay-per-click-management-ppc-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Pay Per Click (PPC) Management
                      </Link>
                    </div>
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b6ba8] border-b border-gray-200 pb-2 mb-3">
                      Sales Optimization
                    </h4>
                    <p className="text-[11px] text-gray-500 mb-3">Improve the success of marketing efforts</p>
                    <div className="space-y-2 text-sm">
                      <Link to="/conversion-rate-optimization-cro-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Conversion Rate Optimization
                      </Link>
                      <Link to="/company-online-presence-analysis-and-audit-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform">
                        Online Presence Analysis
                      </Link>
                      <Link to="/affiliate-management-services" onClick={() => setServicesDropdownOpen(false)} className="block text-gray-700 hover:text-[#1b6ba8] hover:translate-x-1 transition-transform font-medium">
                        Affiliate Management
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="h-full flex items-center border-l border-gray-300/70">
              <Link
                to="/case-studies"
                className={`px-5 py-2 text-[14px] font-medium tracking-wide transition-colors ${
                  location.pathname === '/case-studies' ? 'text-[#1b6ba8] font-semibold' : 'text-[#333333] hover:text-[#1b6ba8]'
                }`}
              >
                Case Studies
              </Link>
            </div>

            {/* Blog */}
            <div className="h-full flex items-center border-l border-gray-300/70">
              <Link
                to="/blog"
                className={`px-5 py-2 text-[14px] font-medium tracking-wide transition-colors ${
                  location.pathname === '/blog' ? 'text-[#1b6ba8] font-semibold' : 'text-[#333333] hover:text-[#1b6ba8]'
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Contact us */}
            <div className="h-full flex items-center border-l border-r border-gray-300/70">
              <Link
                to="/contact-us"
                className={`px-5 py-2 text-[14px] font-medium tracking-wide transition-colors ${
                  location.pathname === '/contact-us' ? 'text-[#1b6ba8] font-semibold' : 'text-[#333333] hover:text-[#1b6ba8]'
                }`}
              >
                Contact us
              </Link>
            </div>

            {/* Highlighted CTA: FREE SEO ANALYSIS (Green #98c23d) */}
            <div className="relative group h-full flex items-center pl-4">
              <Link
                to="/request-a-free-seo-analysis"
                className="bg-[#98c23d] hover:bg-[#88af33] text-white text-[13px] font-bold tracking-wider uppercase px-4 py-3 rounded flex items-center shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 mr-1.5" />
                FREE SEO ANALYSIS
                <ChevronDown className="w-3.5 h-3.5 ml-1.5" />
              </Link>

              {/* Dropdown for Free Quotes */}
              <div className="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="w-60 bg-white shadow-xl border border-gray-200 py-2 rounded-b">
                  <Link to="/social-media-marketing-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE SMO QUOTE
                  </Link>
                  <Link to="/reputation-management-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE ORM QUOTE
                  </Link>
                  <Link to="/conversion-rate-optimization-cro-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE CRO QUOTE
                  </Link>
                  <Link to="/pay-per-click-management-ppc-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE PPC QUOTE
                  </Link>
                  <Link to="/web-design-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE WEB DESIGN QUOTE
                  </Link>
                  <Link to="/email-marketing-services" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-[#f0f6fa] hover:text-[#98c23d]">
                    FREE EMAIL MARKETING QUOTE
                  </Link>
                </div>
              </div>
            </div>

            {/* Search Icon */}
            <div className="relative pl-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:text-[#1b6ba8] hover:border-[#1b6ba8] bg-white transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-64 bg-white shadow-lg border border-gray-200 p-2 z-50 rounded">
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#1b6ba8]"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <span className="mobile_toggle flex lg:hidden items-center space-x-2">
            <Link
              to="/request-a-free-seo-analysis"
              className="bg-[#98c23d] text-white text-xs font-bold px-3 py-2 rounded"
            >
              FREE ANALYSIS
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile_button p-2 border border-gray-300 rounded text-gray-700 bg-white flex items-center text-xs font-medium"
              aria-label="Menu"
            >
              Menu &nbsp;
              <span className="symbol_menu font-bold text-base">{mobileMenuOpen ? '╳' : '≡'}</span>
            </button>
          </span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 py-4 space-y-2 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800 border-b border-gray-100"
          >
            Home
          </Link>

          {/* About Mobile Section */}
          <div className="py-2 border-b border-gray-100">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#1b6ba8] mb-1.5"
            >
              About Express Digital ▾
            </Link>
            <div className="pl-3 space-y-1 text-xs text-gray-600">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1">Digital Marketing Platform</Link>
              <Link to="/clients" onClick={() => setMobileMenuOpen(false)} className="block py-1">Our Clients</Link>
              <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-1">Testimonials</Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1">Pricing Packages</Link>
              <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-1">Free Resources</Link>
            </div>
          </div>

          {/* Services Mobile Section */}
          <div className="py-2 border-b border-gray-100">
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-gray-800 mb-1.5"
            >
              Services ▾
            </Link>
            <div className="pl-3 space-y-1 text-xs text-gray-600">
              <Link to="/search-engine-optimization-services" onClick={() => setMobileMenuOpen(false)} className="block py-1">SEO Services</Link>
              <Link to="/local-seo-services" onClick={() => setMobileMenuOpen(false)} className="block py-1">Local SEO</Link>
              <Link to="/social-media-marketing-services" onClick={() => setMobileMenuOpen(false)} className="block py-1">Social Media</Link>
              <Link to="/pay-per-click-management-ppc-services" onClick={() => setMobileMenuOpen(false)} className="block py-1">PPC Management</Link>
              <Link to="/content-marketing-services" onClick={() => setMobileMenuOpen(false)} className="block py-1">Content Marketing</Link>
              <Link to="/affiliate-management-services" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-medium text-[#1b6ba8]">Affiliate Management</Link>
            </div>
          </div>

          <Link
            to="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800 border-b border-gray-100"
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800 border-b border-gray-100"
          >
            Blog
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-800"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
