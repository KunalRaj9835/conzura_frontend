"use client";

import Footer from "@/components/Footer";

export default function AnalyticsReporting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Analytics & Reporting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura transforms marketing data into actionable insights through comprehensive 
            analytics and reporting. Our approach tracks every metric that matters, provides 
            clear visualizations, and delivers recommendations that drive continuous improvement 
            and measurable ROI.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Google Analytics setup and configuration</li>
              <li>• Custom dashboard creation and KPI tracking</li>
              <li>• Conversion funnel analysis and optimization</li>
              <li>• Attribution modeling and customer journey mapping</li>
              <li>• Regular performance reports and insights</li>
              <li>• Data-driven recommendations and strategy refinement</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Google Analytics 4, Google Tag Manager, Google Data Studio, Tableau, 
              Power BI, Mixpanel, Hotjar, Crazy Egg, Kissmetrics, Adobe Analytics.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}