"use client";

import Footer from "@/components/Footer";

export default function CloudHosting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Cloud Hosting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura provides scalable cloud hosting infrastructure that grows with 
            your business. Built on distributed architecture with automatic failover, 
            our cloud hosting ensures maximum uptime, flexibility, and performance 
            for demanding applications.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Auto-scaling resources based on demand</li>
              <li>• Distributed architecture across multiple servers</li>
              <li>• Pay-as-you-go pricing model</li>
              <li>• Automatic failover and load balancing</li>
              <li>• Integrated CDN and caching solutions</li>
              <li>• Real-time resource monitoring and analytics</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              AWS, Google Cloud, Azure, OpenStack, Kubernetes, Docker, Load Balancers, 
              Object Storage, CloudFlare CDN, Auto-scaling Groups, Monitoring Tools.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}