"use client";

import Footer from "@/components/Footer";

export default function MobileDesign() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">UI/UX Design</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura crafts intuitive and visually compelling mobile interfaces that 
            delight users and drive engagement. Our design process combines user research, 
            interaction design, and visual aesthetics to create experiences that feel 
            natural and effortless.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• User research and persona development</li>
              <li>• Wireframing and interactive prototyping</li>
              <li>• iOS and Android design system creation</li>
              <li>• Motion design and micro-interactions</li>
              <li>• Usability testing and iteration</li>
              <li>• Accessibility-focused design (WCAG)</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Figma, Sketch, Adobe XD, Principle, ProtoPie, Zeplin, InVision, 
              Material Design, Human Interface Guidelines, Design Tokens, Lottie Animations.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}