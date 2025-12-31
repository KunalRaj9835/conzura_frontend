"use client";

import Footer from "@/components/Footer";

export default function EmailMarketing() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Email Marketing</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura delivers personalized email marketing campaigns that nurture leads, 
            drive conversions, and build lasting customer relationships. Our data-driven 
            approach combines segmentation, automation, and compelling design to maximize 
            engagement and ROI.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Email strategy and campaign planning</li>
              <li>• List building and segmentation</li>
              <li>• Email design and copywriting</li>
              <li>• Marketing automation and drip campaigns</li>
              <li>• A/B testing and optimization</li>
              <li>• Deliverability management and analytics</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Mailchimp, HubSpot, SendGrid, Constant Contact, ActiveCampaign, 
              Klaviyo, Litmus, Email on Acid, Mailgun, Campaign Monitor.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}