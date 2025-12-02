"use client";

import Footer from "@/components/Footer";

export default function StorageDatabases() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Storage & Databases</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura designs, deploys, and manages enterprise-grade storage and 
            database systems optimized for performance, analytics, scalability, 
            and secure data operations.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Database design & architecture</li>
              <li>• High availability & disaster recovery</li>
              <li>• Metadata management & governance</li>
              <li>• Query tuning and optimization</li>
              <li>• Secure data warehousing</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Oracle, PostgreSQL, MySQL, SQL Server, Snowflake, BigQuery.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
