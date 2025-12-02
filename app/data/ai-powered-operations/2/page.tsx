"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Customer Operations";
  const bg = "/pic/Customer operations.png";

  const introHeading =
    "Deliver seamless customer experiences with data, intelligence, and speed";

  const introPara =
    "Customer expectations have never been higher. conzura transforms customer operations by integrating AI-driven insights, automated workflows, and omnichannel orchestration. We help you deliver fast, personalised, high-quality experiences that strengthen loyalty and reduce service friction.";

  const midTitle =
    "Customer operations designed for immediate, relevant, and predictive engagement";

  const midPara =
    "conzura enables enterprises to unify customer data, infuse intelligent recommendations, and streamline every touchpoint. From onboarding to service to retention, we help organisations engage customers more effectively using data-led strategies and powerful AI tools.";

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
                Create personalised, connected customer experiences at scale.
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
      {/* MID */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <h3 className="text-3xl font-light text-red-600 leading-snug">
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
      {/* CARDS — NO SLIDEUP */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <SideBySideCard
  title="Customer journey optimisation"
  text="Design frictionless customer journeys supported by intelligence and automation."
  image="/pic/Customer journey optimization1.png"
  color="#ffffff"
/>

<SideBySideCard
  title="AI-assisted service"
  text="Enable agents and customers with real-time recommendations and automated resolutions."
  image="/pic/AI-assisted service.png"
  color="#f9f9f9"
/>

<SideBySideCard
  title="Omnichannel orchestration"
  text="Deliver consistent experiences across chat, email, voice, self-service, and mobile."
  image="/pic/Omnichannel orchestration.png"
  color="#eaeaea"
/>

<SideBySideCard
  title="Customer insights & analytics"
  text="Turn customer signals into predictive insights that drive engagement and loyalty."
  image="/pic/Customer insights & analytics.png"
  color="#d6d7d9"
/>


      </div>

      <Footer />
    </div>
  );
}
