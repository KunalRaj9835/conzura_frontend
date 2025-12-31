"use client";

import Footer from "@/components/Footer";

export default function DedicatedServers() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Dedicated Servers</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura offers enterprise-grade dedicated servers with maximum performance, 
            security, and control. Get an entire physical server exclusively for your 
            business with premium hardware, guaranteed resources, and complete 
            administrative access.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Exclusive use of high-performance hardware</li>
              <li>• Intel Xeon or AMD EPYC processors</li>
              <li>• Up to 512GB RAM and enterprise SSD/NVMe storage</li>
              <li>• Multiple IP addresses and dedicated bandwidth</li>
              <li>• Custom server configurations and OS installations</li>
              <li>• 24/7 monitoring and hardware replacement</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Intel Xeon, AMD EPYC, DDR4 ECC RAM, NVMe SSD, RAID Configurations, 
              IPMI/KVM Remote Access, Windows Server, Linux Distributions, 10Gbps Network.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}