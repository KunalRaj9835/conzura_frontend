"use client";

import Footer from "@/components/Footer";

export default function BackendEngineering() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Backend Engineering</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura builds stable, scalable, and secure backend systems that power 
            enterprise applications. Our backend engineering focuses on high 
            performance, robust integration, and clean architecture.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Enterprise backend development</li>
              <li>• REST & GraphQL API development</li>
              <li>• Integration with ERP, CRM, and Cloud services</li>
              <li>• Performance tuning & optimization</li>
              <li>• DevOps-enabled CI/CD deployments</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Java, .NET, Python, Microservices, Docker, Kubernetes, API Gateways.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
