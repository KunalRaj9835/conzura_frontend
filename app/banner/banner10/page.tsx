"use client";

import Footer from "@/components/Footer";

const Box = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h3 className="text-xl font-medium text-[#D60000] leading-snug">{title}</h3>
    <p className="text-gray-700 mt-3 text-sm leading-relaxed font-light">{text}</p>
  </div>
);

export default function conzuraAIPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#F4F7FB] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl font-extralight mb-4">Unlock the power of AI with conzura.AI</h1>

            <div className="h-[3px] w-16 bg-[#D60000] mb-6"></div>

            <p className="text-gray-700 leading-relaxed max-w-md font-light">
              conzura.AI unifies data, automation, and intelligence into a single seamless ecosystem.
              From raw, fragmented data to enterprise-grade AI deployment, conzura accelerates every step of the journey.
              Built for scale, speed, and real-world impact, it empowers organizations to operate smarter, faster, and more efficiently.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Box title="100+ AI accelerators" text="to optimize and automate operations end-to-end." />
  <Box title="AI agents tailored by industry" text="built for automotive, aerospace, IT, and automation." />
  <Box title="Open cloud architecture" text="smooth integration with AWS, Azure, GCP, and Fabric." />
  <Box title="Full observability dashboards" text="track cost, model drift, compliance, and performance." />
  <Box title="5+ years of AI expertise" text="delivering scalable, production-grade AI systems across global industries." />
  <Box title="Unified data-to-AI pipeline" text="from ingestion to deployment, ensuring your data becomes AI-ready with zero friction." />
</div>


        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-extralight">Key benefits of conzura</h2>
          <div className="h-[3px] w-16 bg-[#D60000] mt-3 mb-12"></div>

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-medium text-[#D60000]">Seamless AI integration</h3>
              <p className="text-gray-700 mt-3 leading-relaxed font-light">
                Integrates into existing workflows with cloud-agnostic design.
                No disruptive overhauls — deploy AI instantly across hybrid environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#D60000]">Efficiency & cost savings</h3>
              <p className="text-gray-700 mt-3 leading-relaxed font-light">
                Automate processes, reduce delays, eliminate human error,
                and streamline operations with built-in governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#D60000]">Analytics at your fingertips</h3>
              <p className="text-gray-700 mt-3 leading-relaxed font-light">
                Leverage conzura’s domain-specific datasets + third-party data
                for real-time insights and faster decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#D60000]">Personalized experiences</h3>
              <p className="text-gray-700 mt-3 leading-relaxed font-light">
                AI tools adapt to customer needs, enhancing user experience
                while reducing operational effort and increasing satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="w-full py-24 bg-[#1F2937] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-extralight">conzura impact</h2>
          <div className="h-[3px] w-16 bg-[#D60000] mt-3 mb-10"></div>

          <p className="max-w-3xl text-gray-300 leading-relaxed font-light">
            conzura.AI empowers organizations to scale AI with control, speed,
            and measurable business results — across automotive, aerospace,
            embedded, and digital transformation programs.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <ImpactCard metric="100+" text="AI accelerators and industry-ready agents" />
            <ImpactCard metric="27%" text="reduction in process turnaround time" />
            <ImpactCard metric="40%" text="boost in customer satisfaction scores" />
            <ImpactCard metric="20%" text="productivity increase through AI automation" />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ImpactCard({ metric, text }: { metric: string | number; text: string }) {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-4xl font-light text-[#D60000]">{metric}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed text-sm font-light">{text}</p>
    </div>
  );
}
