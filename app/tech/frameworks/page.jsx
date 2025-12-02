"use client";

import Footer from "@/components/Footer";

export default function Frameworks() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Frameworks</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura builds scalable, high-performance enterprise applications using 
            modern backend frameworks such as Spring Boot, Kafka, and microservices. 
            These frameworks power mission-critical workloads and distributed systems.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Microservices architecture design</li>
              <li>• Event-driven backend development</li>
              <li>• Building REST / GraphQL APIs</li>
              <li>• High-throughput data processing systems</li>
              <li>• Legacy-to-modern framework migration</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Spring Boot, Kafka, Java, .NET, Python, Event Streaming, 
              API Gateways, Kubernetes-based runtime environments.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
