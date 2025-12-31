"use client";

import Footer from "@/components/Footer";

export default function ContentMarketing() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Content Marketing</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura creates compelling content that educates, engages, and converts 
            your target audience. Our content marketing strategies combine storytelling, 
            SEO optimization, and strategic distribution to establish thought leadership 
            and drive sustainable business growth.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Content strategy and editorial calendar development</li>
              <li>• Blog writing and SEO-optimized articles</li>
              <li>• Whitepapers, eBooks, and case studies</li>
              <li>• Video content and infographic creation</li>
              <li>• Content distribution and promotion</li>
              <li>• Performance analytics and optimization</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              WordPress, HubSpot CMS, Google Docs, Grammarly, Hemingway Editor, 
              BuzzSumo, Canva, Adobe Creative Suite, CoSchedule, Airtable.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}