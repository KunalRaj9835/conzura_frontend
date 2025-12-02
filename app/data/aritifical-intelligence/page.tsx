"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Artificial Intelligence";
  const bg = "/pic/Artificial Intelligence.png";

  const introHeading =
    "The key to unlocking business growth and innovation";

  const introPara =
    "From smarter decision-making to improved customer experiences, AI has the power to transform how organisations operate and compete. Yet many companies struggle to harness their data, extract meaningful insights, and act on them in real time. Data silos, inconsistent quality, and organisational complexity often slow progress—while the rapid rise of generative AI raises expectations even higher. conzura enables organisations to turn their data foundation into a long-term advantage, accelerating insight generation and empowering teams to make confident, high-impact decisions.";

  const midTitle =
    "Get on the fast track to highly customized generative AI";

  const midPara =
    "Generative AI delivers measurable value only when aligned with real business needs. conzura helps organisations build custom AI solutions by focusing on five key success factors—from data readiness and governance to workflow integration, orchestration, and responsible AI practices. This ensures faster deployment, greater accuracy, and secure enterprise-wide scalability.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <SlideUp>
            <div>
              <h1 className="text-5xl font-extralight">{title}</h1>
              <p className="mt-4 text-gray-700 text-lg max-w-xl font-light">
                Build intelligent systems that transform decisions, experiences, and outcomes.
              </p>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO SECTION */}
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
      {/* WHAT WE DO HEADER */}
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
      {/* 4 CARD GRID */}
      {/* -------------------------------------------------- */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

         <SideBySideCard
  title="Analytics & AI"
  text="Unlock enterprise wide intelligence by transforming raw data into clear insights through advanced analytics, machine learning, and scalable AI solutions."
  image="/pic/Analytics & AI.png"
  color="#ffffff"
  href="/data/aritifical-intelligence/1"
/>

<SideBySideCard
  title="Data management"
  text="Organize, standardize, and govern data across your ecosystem with modern platforms and practices that ensure reliability, accessibility, and enterprise wide trust."
  image="/pic/Data management.png"
  color="#f9f9f9"
  href="/data/aritifical-intelligence/2"
/>

<SideBySideCard
  title="Data-led marketing"
  text="Understand audience behavior, personalize engagement, and accelerate growth with marketing strategies powered by analytics and precision targeting."
  image="/pic/Data-led marketing.png"
  color="#eaeaea"
  href="/data/aritifical-intelligence/3"
/>

<SideBySideCard
  title="Generative AI solutions"
  text="Build tailored generative AI systems that automate complex tasks, elevate customer interactions, and accelerate innovation across key business functions."
  image="/pic/Generative AI solutions.png"
  color="#d6d7d9"
  href="/data/aritifical-intelligence/4"
/>


        </div>


      <Footer />
    </div>
  );
}
