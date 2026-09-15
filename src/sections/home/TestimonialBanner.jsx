import React from 'react';

export default function TestimonialBanner() {
  return (
    <section className="py-14 bg-[#8ec63f] text-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-5">
          <img
            src="/wp-content/uploads/avatar-6.png"
            alt="Irene Warner"
            className="w-20 h-20 rounded-full border-4 border-white/30 shadow-md object-cover"
          />
        </div>

        {/* Quote */}
        <blockquote className="text-xl sm:text-2xl font-light italic leading-relaxed mb-4">
          “We’ve looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they’ve been awesome to work with.”
        </blockquote>

        {/* Author */}
        <div className="text-sm font-semibold tracking-wider uppercase">
          Irene Warner <span className="font-normal opacity-90">— CEO & Founder</span>
        </div>
      </div>
    </section>
  );
}
