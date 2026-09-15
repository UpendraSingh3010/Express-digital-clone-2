import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    service: 'Search Engine Optimization',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="project-form" className="py-16 bg-[#f1f1f1] border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-tight mb-2">
            Tell us about your project
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal">
            Let us help you get your business online and grow it with passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Testimonial & Value proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/wp-content/uploads/avatar-5.png"
                  alt="Daisy Howarth"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#2fa8e0]"
                />
                <div>
                  <h4 className="text-base font-bold text-gray-800">Daisy Howarth</h4>
                  <p className="text-xs text-gray-500">Marketing Director, Coderama</p>
                  <div className="flex text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                “Express Digital transformed our organic reach in just under 4 months. Their transparent reporting and dedicated empaneled experts made all the difference to our online conversions.”
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2">
                Why Partner With Us?
              </h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#98c23d] mr-2.5" />
                  Validated & certified digital marketing experts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#2fa8e0] mr-2.5" />
                  Performance-driven execution plans
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#f39c12] mr-2.5" />
                  Transparent pricing structure with 0 hidden fees
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#1b6ba8] mr-2.5" />
                  Free comprehensive need analysis worth $250
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your project details have been received. An empaneled marketing specialist will review your request and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                  >
                    <option>Search Engine Optimization (SEO)</option>
                    <option>Pay Per Click (PPC) Management</option>
                    <option>Social Media Marketing (SMO)</option>
                    <option>Content Marketing Strategy</option>
                    <option>Conversion Rate Optimization (CRO)</option>
                    <option>Online Reputation Management (ORM)</option>
                    <option>Web Design & Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements, target goals, or challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded focus:bg-white focus:outline-none focus:border-[#2fa8e0] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2fa8e0] hover:bg-[#2594c7] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow transition-all"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
