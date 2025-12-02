"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  const title = "Generative AI Solutions";
  const bg = "/pic/Generative AI solutions.png";

  const introHeading =
    "Build customised generative AI solutions that accelerate transformation";

  const introPara =
    "Generative AI is changing how organisations innovate, operate, and engage customers. conzura helps you deploy tailored generative AI solutions that automate workflows, enhance creativity, power intelligent search, and elevate customer interactions. Our frameworks ensure safety, governance, and scalability from day one.";

  const midTitle =
    "Enterprise-grade generative AI engineered for real impact";

  const midPara =
    "conzura designs, trains, and integrates generative AI models that align with your business goals. From RAG systems to custom LLMs to automated content generation, we build solutions that plug directly into your workflows while maintaining security and trust.";

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
                Build secure, scalable, production-ready generative AI systems.
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
      {/* CARDS — NO SLIDEUP */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
  <SideBySideCard
    title="RAG & enterprise search systems"
    text="Enable accurate, context rich answers using retrieval-augmented generation tailored to your data."
    image="/pic/RAG & enterprise search systems.png"
    color="#ffffff"
  />

  <SideBySideCard
    title="Custom model development"
    text="Train or fine tune LLMs specifically for your workflows, industries, and proprietary datasets."
    image="/pic/Custom model development.png"
    color="#f9f9f9"
  />

  <SideBySideCard
    title="AI content automation"
    text="Automate content creation for marketing, operations, documentation, and customer engagement."
    image="/pic/AI content automation.png"
    color="#eaeaea"
  />

  <SideBySideCard
    title="Responsible AI & governance"
    text="Ensure model integrity, safety, bias control, and regulatory-ready governance frameworks."
    image="/pic/Responsible AI & governance.png"
    color="#d6d7d9"
  />
</div>

      <Footer />
    </div>
  );
}
