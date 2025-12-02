"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Data-led Marketing";
  const bg = "/pic/Data-led marketing.png";

  const introHeading = "Drive intelligent growth by activating your customer data";

  const introPara =
    "Great marketing depends on understanding customers deeply. conzura helps organisations harness data, analytics, and AI to target the right customers, personalise experiences, and improve acquisition and retention. With unified data and predictive intelligence, your marketing becomes smarter, faster, and more effective.";

  const midTitle =
    "Transform marketing with real-time insights and AI-driven targeting";

  const midPara =
    "conzura integrates customer data, builds predictive models, and deploys performance frameworks that optimise marketing spend. From segmentation to personalisation to attribution, we help you build customer experiences that convert and scale.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <SlideUp>
            <div>
              <h1 className="text-5xl font-extralight">{title}</h1>
              <p className="mt-4 text-gray-700 text-lg max-w-xl font-light">
                Unlock customer value with data-driven marketing intelligence.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SlideUp>
          <h2 className="text-3xl font-light text-red-600 leading-snug">
            {introHeading}
          </h2>
        </SlideUp>

        <SlideUp>
          <div className="w-16 h-1 bg-red-600 mt-4"></div>
        </SlideUp>

        <SlideUp>
          <p className="mt-8 text-gray-700 leading-relaxed font-light text-justify">
            {introPara}
          </p>
        </SlideUp>
      </div>

      {/* -------------------------------------------------- */}
      {/* MID SECTION */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <h3 className="text-3xl font-light leading-snug text-red-600">
              {midTitle}
            </h3>
          </SlideUp>

          <SlideUp>
            <div className="w-16 h-1 bg-red-600 mt-4"></div>
          </SlideUp>

          <SlideUp>
            <p className="mt-8 text-gray-700 leading-relaxed font-light text-justify">
              {midPara}
            </p>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* WHAT WE DO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <SlideUp>
          <h3 className="text-3xl font-light text-red-600 leading-snug">
            What we do
          </h3>
        </SlideUp>

        <SlideUp>
          <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
        </SlideUp>
      </div>

      {/* -------------------------------------------------- */}
      {/* CARDS (NO SLIDEUP HERE) */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        <SideBySideCard
  title="Customer segmentation"
  text="Build precise, behaviour driven segments powered by predictive analytics."
  image="/pic/Customer segmentation.png"
  color="#ffffff"
/>

<SideBySideCard
  title="Personalisation engines"
  text="Deliver personalised experiences across channels using AI-driven recommendations."
  image="/pic/Personalisation engines.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Campaign optimisation"
  text="Optimise performance with intelligent attribution, spend allocation, and forecasting."
  image="/pic/Campaign optimisation.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="Customer lifetime value intelligence"
  text="Use predictive lifecycle modelling to maximise retention, loyalty, and revenue."
  image="/pic/Customer lifetime value intelligence.png"
  color="#d6d7d9"
/>

      </div>

      <Footer />
    </div>
  );
}
