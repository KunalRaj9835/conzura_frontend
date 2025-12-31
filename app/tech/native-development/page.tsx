"use client";

import Footer from "@/components/Footer";

export default function NativeDevelopment() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Native Development</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura builds high-performance native mobile applications that leverage 
            the full power of iOS and Android platforms. Our native development 
            approach ensures optimal performance, seamless user experiences, and 
            access to all platform-specific features.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• iOS app development with Swift & SwiftUI</li>
              <li>• Android app development with Kotlin & Jetpack Compose</li>
              <li>• Platform-specific UI/UX implementation</li>
              <li>• Native hardware integration (camera, sensors, GPS)</li>
              <li>• App Store and Google Play optimization</li>
              <li>• Performance profiling and optimization</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Swift, SwiftUI, UIKit, Kotlin, Jetpack Compose, Android SDK, Xcode, Android Studio, 
              Core Data, Room Database, Combine, Coroutines, ARKit, ML Kit.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}