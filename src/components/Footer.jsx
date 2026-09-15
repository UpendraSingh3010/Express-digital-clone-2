import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Bell, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#282d30] text-gray-300">
      {/* 1. Top Section Banner */}
      <div className="bg-[#202528] py-6 border-b border-gray-700/50 text-center">
        <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide">
          Managed Digital Marketing Platform!
        </h3>
      </div>

      {/* 2. Middle Section: Logo + Text + Quick Actions */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <Link to="/">
              <img
                src="/wp-content/uploads/2017/02/ExpressDigital-Logo-160x160.png"
                alt="Express Digital"
                className="h-28 w-28 object-contain bg-white/5 rounded-lg p-2 border border-white/10"
              />
            </Link>
          </div>

          {/* Description */}
          <div className="lg:col-span-9 space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              With our managed digital marketing platform, you no longer need to depend on expensive agency retainers or risky Freelancer work patterns. Now, you can easily understand and initiate Digital campaigns, be it SEO, PPC, SMO, Email or Marketing automation with our validated Digital Experts. For getting started, simply submit an audit request or select one of our curated marketing plans.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
              <a
                href="mailto:care@express.digital"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-[#2fa8e0]" />
                care@express.digital
              </a>
              <Link
                to="/request-a-free-seo-analysis"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Bell className="w-4 h-4 mr-2 text-[#98c23d]" />
                request a free quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-[#1b1f21] py-4 border-t border-gray-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#2fa8e0] flex items-center justify-center text-white transition-colors" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#3b5998] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 16 5h2V0h-3.8C10.5 0 9 1.5 9 4.667z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#0077b5] flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#e4405f] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>

          {/* Back To Top Arrow */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded bg-white/10 hover:bg-[#2fa8e0] flex items-center justify-center text-white transition-colors"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Copyright Text */}
          <div className="text-center md:text-right">
            ©2024 Managed Digital Marketing Platform. All Rights Reserved. A Express Digital, Inc. Initiative
          </div>
        </div>
      </div>
    </footer>
  );
}
