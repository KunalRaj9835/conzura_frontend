import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
      <section className="w-full bg-[#1F2937] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-widest text-red-500 font-medium">
            2025 DIGITAL ENGINEERING INSIGHTS
          </p>

          <h1 className="text-4xl md:text-5xl font-extralight leading-tight mt-4">
            IT Services & Digital Engineering: Accelerating Enterprise Transformation
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">
              The Digital Engineering Services Revolution
            </h2>
          </div>

          <p className="text-lg leading-relaxed mb-6 font-light">
            Global enterprises face an existential imperative: transform
            digitally or face irrelevance. The engineering services market is
            projected to grow from $2.34 trillion in 2025 to $4.65 trillion by
            2032. Digital product engineering alone is expanding from $216
            billion to $354 billion by 2028 at 10.4% annually.
          </p>

          <p className="text-lg leading-relaxed mb-6 font-light">
            This growth is driven by the universal shift toward software-defined
            products, cloud-native infrastructure, and data-driven
            decision-making. Organizations across industries are reimagining
            offerings through digital transformation. Achieving this requires
            specialized engineering talent—capabilities conzura delivers.
          </p>

          {/* TABLE 1 */}
          <table className="w-full border border-gray-300 mt-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Segment</th>
                <th className="border px-4 py-2">2025 Value</th>
                <th className="border px-4 py-2">2032 Value</th>
                <th className="border px-4 py-2">Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Engineering Services Market</td>
                <td className="border px-4 py-2">$2.34T</td>
                <td className="border px-4 py-2">$4.65T</td>
                <td className="border px-4 py-2">~8.3% CAGR</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Digital Product Engineering</td>
                <td className="border px-4 py-2">$216B</td>
                <td className="border px-4 py-2">$354B (2028)</td>
                <td className="border px-4 py-2">10.4% CAGR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MARKET DRIVERS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">
              Key Market Drivers Fueling Digital Transformation
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium">
                Cloud-Native Application Development Surge
              </h3>
              <p className="text-lg mt-2 font-light">
                Cloud-native architectures dominate modern enterprise strategy.
                The cloud market is projected to reach $2.97 trillion by 2033
                as organizations migrate from monolithic systems to
                microservices, serverless, and containerized environments.
                Banking alone is allocating over 40% of IT budgets to digital
                transformation, with cloud-native development a key priority.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Artificial Intelligence and Machine Learning Integration
              </h3>
              <p className="text-lg mt-2 font-light">
                AI adoption is accelerating, with 63% of organizations planning
                implementation within three years. The global AI market is
                growing at 37.3% annually. Integrating AI into enterprise
                ecosystems demands expertise in MLOps, lifecycle management,
                responsible AI, and scalable deployment. conzura provides talent
                capable of delivering AI/ML integration across healthcare,
                manufacturing, finance, and more.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Internet of Things and Edge Computing Proliferation
              </h3>
              <p className="text-lg mt-2 font-light">
                IoT adoption reached 1.2 billion devices in 2024, driving
                engineering needs from embedded firmware to edge computing and
                cloud integration. Smart city initiatives increased 18% globally,
                requiring complex multi-layer engineering skillsets. conzura
                delivers teams versed in embedded systems, cloud, analytics, and
                domain-specific requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Digital Twin Technology and Simulation
              </h3>
              <p className="text-lg mt-2 font-light">
                Digital twins are transforming aerospace, automotive,
                manufacturing, and energy. The low-code/no-code market will
                reach $86.9 billion by 2027, enabling rapid digital twin
                development. Implementing these systems requires expertise in 3D
                modeling, physics simulation, IoT integration, and data
                engineering—capabilities supported by conzura’s specialist talent
                pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">
              How conzura Enables Digital Engineering Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-3">
                Comprehensive Technology Stack Expertise
              </h3>
              <p className="text-lg font-light">
                conzura supports cloud platforms (AWS, Azure, GCP, Microsoft
                Fabric), data engineering, microservices, serverless
                architectures, integration systems, and analytics tooling. This
                breadth ensures clients receive complete engineering coverage
                across the digital stack.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-3">
                Flexible Engagement Models
              </h3>
              <p className="text-lg font-light">
                conzura provides staffing, contract teams, managed services,
                build-operate-transfer (BOT), and consulting. These models
                ensure clients can scale talent precisely to project needs,
                optimize cost, and accelerate delivery.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-3">
                Domain-Specific Engineering Expertise
              </h3>
              <p className="text-lg font-light">
                conzura specializes in aerospace, automotive, industrial
                automation, healthcare, and IT services—industries requiring
                deep regulatory and technical knowledge. Teams bring experience
                in DO-178C, ADAS, telemedicine, IoT, SCADA, predictive
                maintenance, and regulated software development.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-3">
                Quality Excellence and Compliance
              </h3>
              <p className="text-lg font-light">
                conzura follows ISO 9001:2015-certified processes including
                verification and validation, automated coverage analysis, and
                full requirements traceability—critical for safety-critical
                engineering.
              </p>
            </div>
          </div>

          {/* TABLE 2 */}
          <table className="w-full border border-gray-300 mt-12">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Capability</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Tech Stack</td>
                <td className="border px-4 py-2">
                  Cloud, data engineering, microservices, serverless
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Domains</td>
                <td className="border px-4 py-2">
                  Aerospace, Automotive, Healthcare, Automation
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Compliance</td>
                <td className="border px-4 py-2">
                  ISO-certified, V&V, traceability
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* REGIONAL MARKETS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">
              Regional Market Dynamics and Opportunities
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium">Asia Pacific</h3>
              <p className="text-lg font-light">
                Asia Pacific leads with 36.74% market share, driven by strong
                manufacturing bases, aggressive digital adoption, abundant
                talent, and government-led digital initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">North America</h3>
              <p className="text-lg font-light">
                North America’s $520 billion market is fueled by advanced
                technology adoption, aerospace and defense, fintech innovation,
                and renewable energy engineering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Europe</h3>
              <p className="text-lg font-light">
                Europe emphasizes regulatory compliance, sustainability, and EV
                transformation—driving demand for automotive, green engineering,
                and compliance-focused engineering services.
              </p>
            </div>
          </div>

          {/* TABLE 3 */}
          <table className="w-full border border-gray-300 mt-12">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Region</th>
                <th className="border px-4 py-2">Market Share</th>
                <th className="border px-4 py-2">Key Drivers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Asia Pacific</td>
                <td className="border px-4 py-2">36.74%</td>
                <td className="border px-4 py-2">Manufacturing, digital adoption</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">North America</td>
                <td className="border px-4 py-2">$520B</td>
                <td className="border px-4 py-2">Aerospace, defense, fintech</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Europe</td>
                <td className="border px-4 py-2">Growing</td>
                <td className="border px-4 py-2">EV, regulatory engineering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">Addressing Digital Engineering Challenges</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium">Skills Gap and Talent Scarcity</h3>
              <p className="text-lg font-light">
                Digital engineering talent shortages represent a major barrier.
                conzura addresses this through extensive talent networks,
                multi-step screening processes, and continuous upskilling
                initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Legacy System Integration</h3>
              <p className="text-lg font-light">
                Legacy systems complicate transformation. conzura provides
                engineers experienced with both modern and legacy technologies,
                ensuring safe incremental modernization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Cost and Timeline Pressures</h3>
              <p className="text-lg font-light">
                Rapid team assembly, variable cost structures, and proven
                methodologies enable conzura to deliver reliable, predictable
                project execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Security and Compliance</h3>
              <p className="text-lg font-light">
                conzura integrates secure development, compliance expertise, and
                DevSecOps practices to ensure security without slowing delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE TRENDS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">
              Emerging Trends Shaping Digital Engineering's Future
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium">
                Generative AI and Code Synthesis
              </h3>
              <p className="text-lg font-light">
                Generative AI is transforming engineering productivity. conzura
                trains teams on AI-driven development tools and incorporates
                them into delivery workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Platform Engineering and Developer Experience
              </h3>
              <p className="text-lg font-light">
                Internal platforms accelerate engineering velocity. conzura
                provides platform engineers who build self-service environments
                enabling faster, safer development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Sustainable Software Engineering
              </h3>
              <p className="text-lg font-light">
                conzura supports energy-efficient architectures and
                sustainability-aware design practices balancing performance and
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-extralight">Conclusion</h2>
          </div>

          <p className="text-lg leading-relaxed font-light">
            Digital transformation demands specialized talent, domain expertise,
            and proven execution. conzura’s digital engineering
            capabilities—spanning cloud, AI/ML, embedded systems, automation,
            and enterprise software—position the company as a trusted partner
            for organizations modernizing their products and operations. With
            conzura, enterprises accelerate innovation while reducing risk.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
