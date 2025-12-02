"use client";

import Footer from "@/components/Footer";

export default function CloudAnalytics() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Cloud & Analytics</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura delivers complete cloud and analytics solutions across AWS,
            Azure, and Google Cloud. We help enterprises modernize data systems,
            build secure cloud ecosystems, and enable real-time decision-making
            through powerful analytics platforms.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Cloud migration & modernization</li>
              <li>• Data Lake & Data Warehouse engineering</li>
              <li>• End-to-end BI & dashboard development</li>
              <li>• Cloud-native ETL/ELT pipeline creation</li>
              <li>• Multi-cloud governance & cost optimization</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              AWS, Azure, GCP, BigQuery, Snowflake, Hive, Power BI, Tableau,
              Looker, Qlik, Talend, Informatica, AWS Glue.
            </p>
          </div>

          {/* Feature Block — Use Cases */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Use Cases</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Real-time analytics dashboards</li>
              <li>• Customer behavior & personalization</li>
              <li>• End-to-end CI/CD data pipelines</li>
              <li>• Predictive forecasting & optimization</li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
