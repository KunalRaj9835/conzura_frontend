"use client";

import Footer from "@/components/Footer";

export default function WordPressHosting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">WordPress Hosting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura delivers optimized WordPress hosting with blazing-fast performance, 
            automatic updates, and enhanced security. Our WordPress-specific infrastructure 
            is fine-tuned for speed, reliability, and seamless content management.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Pre-installed and optimized WordPress setup</li>
              <li>• Automatic WordPress core and plugin updates</li>
              <li>• Advanced caching (Redis, Varnish, CDN)</li>
              <li>• WordPress-specific security hardening</li>
              <li>• Staging environments for testing</li>
              <li>• Expert WordPress support team</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              WordPress 6.x, PHP 8.x, MySQL/MariaDB, NGINX, Redis Cache, Varnish, 
              WP-CLI, Git Integration, CloudFlare CDN, Let's Encrypt SSL, Jetpack.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}