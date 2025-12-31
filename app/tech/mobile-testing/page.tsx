"use client";

import Footer from "@/components/Footer";

export default function MobileTesting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Testing & QA</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura ensures mobile app quality through comprehensive testing strategies 
            that cover functionality, performance, security, and user experience. Our QA 
            processes identify issues early and guarantee that apps perform flawlessly 
            across devices and operating systems.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Automated testing (unit, integration, E2E)</li>
              <li>• Manual testing and exploratory testing</li>
              <li>• Device compatibility testing</li>
              <li>• Performance and load testing</li>
              <li>• Security and penetration testing</li>
              <li>• Beta testing and user acceptance testing</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              XCTest, Espresso, Detox, Appium, Jest, Maestro, Firebase Test Lab, 
              BrowserStack, TestFlight, Google Play Console, Charles Proxy, Postman.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}