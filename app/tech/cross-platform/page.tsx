"use client";

import Footer from "@/components/Footer";

export default function CrossPlatform() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Cross-Platform Development</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura delivers efficient cross-platform mobile applications that run 
            seamlessly on both iOS and Android from a single codebase. Our approach 
            combines code reusability with native performance to accelerate time-to-market 
            while maintaining quality.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• React Native app development</li>
              <li>• Flutter application development</li>
              <li>• Shared business logic implementation</li>
              <li>• Platform-specific customizations</li>
              <li>• Third-party SDK integrations</li>
              <li>• Cross-platform state management</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              React Native, Flutter, Dart, Expo, Redux, MobX, Provider, Riverpod, 
              React Navigation, Flutter Navigation, Native Modules, Platform Channels.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}