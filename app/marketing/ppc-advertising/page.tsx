"use client";

import Footer from "@/components/Footer";

export default function PPCAdvertising() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">PPC Advertising</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura maximizes your advertising budget with strategic pay-per-click 
            campaigns that deliver immediate results. Our PPC experts manage Google Ads, 
            social media advertising, and display campaigns to generate qualified leads 
            and drive conversions at optimal costs.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Google Ads and Bing Ads campaign management</li>
              <li>• Facebook, Instagram, and LinkedIn advertising</li>
              <li>• Display and remarketing campaigns</li>
              <li>• Shopping ads and product feed optimization</li>
              <li>• Bid management and budget optimization</li>
              <li>• Conversion tracking and performance analysis</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Google Ads, Microsoft Advertising, Facebook Ads Manager, Google Tag Manager, 
              Google Analytics, SEMrush, SpyFu, Optmyzr, WordStream, Unbounce.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}