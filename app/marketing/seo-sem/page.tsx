"use client";

import Footer from "@/components/Footer";

export default function SEOSEM() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">SEO & SEM</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura drives organic and paid search traffic through comprehensive SEO 
            and SEM strategies. Our approach combines technical optimization, content 
            strategy, and paid search campaigns to increase visibility, attract qualified 
            leads, and dominate search engine results.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Keyword research and competitive analysis</li>
              <li>• On-page and technical SEO optimization</li>
              <li>• Link building and content strategy</li>
              <li>• Google Ads and Bing Ads campaign management</li>
              <li>• Local SEO and Google Business Profile optimization</li>
              <li>• Performance tracking and ROI reporting</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Google Search Console, Google Ads, SEMrush, Ahrefs, Moz, Screaming Frog, 
              Google Analytics, Bing Webmaster Tools, Yoast SEO, Schema Markup.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}