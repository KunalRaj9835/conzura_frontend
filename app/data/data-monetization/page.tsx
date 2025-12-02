"use client";
import Footer from "@/components/Footer";

export default function DataMonetizationPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-extralight mb-4">
            Data Monetization
          </h1>

          <p className="text-black leading-relaxed max-w-3xl text-justify">
            Convert raw enterprise datasets into revenue-driving digital products, 
            analytics services, APIs, and insight layers. Unlock financial and strategic 
            value by operationalizing your data assets.
          </p>

          {/* Main Feature Block */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-extralight mb-4">
              How We Create Value
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm text-justify">
              <li>• Market-ready dashboards & analytic products</li>
              <li>• API-based access to curated datasets</li>
              <li>• Predictive & prescriptive insights for customers</li>
              <li>• Usage-based billing & subscription enablement</li>
              <li>• Secure sharing platforms for partners & vendors</li>
              <li>• Customer segmentation & behavioral insights</li>
              <li>• Enterprise-grade data marketplaces</li>
            </ul>
          </div>

          {/* Additional Section */}
          <div className="mt-10 p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
            <h3 className="text-xl font-extralight mb-3">
              The Business Impact
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              Data monetization transforms data from a cost center into a strategic 
              asset. It enables new revenue streams, enhances customer experience, 
              and improves product competitiveness.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">
                Monetization Models
              </h4>
              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• Subscription-based analytics</li>
                <li>• Pay-per-use data APIs</li>
                <li>• White-label insights platforms</li>
                <li>• Benchmarking & industry intelligence</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-300 shadow-sm">
              <h4 className="font-extralight mb-2">
                Industries Benefiting
              </h4>
              <ul className="text-sm text-gray-700 space-y-2 text-justify">
                <li>• Manufacturing & industrial</li>
                <li>• Finance & insurance</li>
                <li>• Retail & e-commerce</li>
                <li>• Telecom & logistics</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
