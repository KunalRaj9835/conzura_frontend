"use client";

import Footer from "@/components/Footer";

export default function AppSecurity() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">App Security</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura implements comprehensive security measures to protect mobile 
            applications from threats and vulnerabilities. Our security-first approach 
            ensures data protection, secure communications, and compliance with industry 
            standards and regulations.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• End-to-end data encryption</li>
              <li>• Secure API communication (SSL/TLS)</li>
              <li>• Biometric authentication integration</li>
              <li>• Code obfuscation and anti-tampering</li>
              <li>• Security audits and penetration testing</li>
              <li>• GDPR and compliance implementation</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              AES Encryption, RSA, SSL/TLS, OAuth 2.0, JWT, Keychain (iOS), Keystore (Android), 
              ProGuard, R8, Certificate Pinning, Biometric APIs, Firebase Security Rules.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}