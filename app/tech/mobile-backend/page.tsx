"use client";

import Footer from "@/components/Footer";

export default function MobileBackend() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Mobile Backend</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura builds robust backend systems specifically designed for mobile 
            applications. Our mobile backend services provide real-time data sync, 
            push notifications, authentication, and scalable APIs that power engaging 
            mobile experiences.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• RESTful and GraphQL API development</li>
              <li>• Real-time data synchronization</li>
              <li>• Push notification services (FCM, APNs)</li>
              <li>• User authentication & authorization</li>
              <li>• Cloud storage and file management</li>
              <li>• Backend-as-a-Service (BaaS) integration</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Firebase, AWS Amplify, Node.js, Express, MongoDB, PostgreSQL, Redis, 
              Socket.io, GraphQL, REST APIs, JWT, OAuth 2.0, Cloud Functions.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}