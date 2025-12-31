"use client";

import Footer from "@/components/Footer";

export default function SharedHosting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Shared Hosting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura provides affordable and reliable shared hosting solutions perfect 
            for small businesses, blogs, and personal websites. Our shared hosting 
            platform offers excellent performance with easy-to-use control panels 
            and one-click installations.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Cost-effective hosting for multiple websites</li>
              <li>• cPanel control panel with intuitive interface</li>
              <li>• One-click app installations (WordPress, Joomla, etc.)</li>
              <li>• Free SSL certificates and daily backups</li>
              <li>• Email hosting with spam protection</li>
              <li>• 99.9% uptime guarantee with 24/7 support</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              cPanel, Apache, PHP, MySQL, SSD Storage, Cloudflare CDN, Let's Encrypt SSL, 
              Softaculous, phpMyAdmin, FTP/SFTP Access, Website Builder.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}