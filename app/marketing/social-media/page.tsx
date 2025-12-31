"use client";

import Footer from "@/components/Footer";

export default function SocialMediaMarketing() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Social Media Marketing</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura builds engaged communities and drives brand awareness through 
            strategic social media marketing. Our campaigns create meaningful connections 
            with your audience across Facebook, Instagram, LinkedIn, Twitter, and TikTok, 
            turning followers into customers.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Social media strategy and content planning</li>
              <li>• Profile optimization and brand consistency</li>
              <li>• Content creation (graphics, videos, copy)</li>
              <li>• Community management and engagement</li>
              <li>• Paid social advertising campaigns</li>
              <li>• Influencer partnerships and collaborations</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Facebook Ads Manager, Instagram Business, LinkedIn Campaign Manager, 
              Hootsuite, Buffer, Sprout Social, Canva, Adobe Creative Suite, Meta Business Suite.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}