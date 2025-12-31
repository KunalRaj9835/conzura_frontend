"use client";

import Footer from "@/components/Footer";

export default function VPSHosting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">VPS Hosting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura delivers powerful Virtual Private Server solutions that provide 
            dedicated resources, root access, and complete control over your hosting 
            environment. Perfect for growing businesses that need scalability and 
            customization beyond shared hosting.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Dedicated CPU, RAM, and storage resources</li>
              <li>• Full root access and SSH connectivity</li>
              <li>• Choice of Linux distributions (Ubuntu, CentOS, Debian)</li>
              <li>• Scalable resources with instant upgrades</li>
              <li>• Managed and unmanaged VPS options</li>
              <li>• DDoS protection and automated backups</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              KVM Virtualization, Ubuntu, CentOS, Debian, cPanel/WHM, Plesk, NGINX, 
              Apache, Docker Support, SSH Access, IPv4/IPv6, SSD NVMe Storage.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}