"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp"; // ADDED

export default function Page() {
  // 1) PAGE DATA
  const title = "Talent Intelligence";
  const bg = "/intelligence/bg.jpeg";

  const introLeft =
    "Access strategic talent insights that empower your organisation to scale with precision. Our intelligence framework evaluates skills, locations, industries, and emerging workforce trends.";

  const introRight =
    "conzura delivers talent intelligence backed by deep research, structured assessment frameworks, and comprehensive market data. Our approach helps organisations identify the right talent fit by evaluating competencies across industry relevance, skills, experience, compensation benchmarks, and career pathways. Talent intelligence accelerates decision-making, supports strategic workforce planning, and ensures alignment between business goals and talent availability. With every engagement, we enable our clients to forecast talent needs, reduce recruitment risks, and build stronger, insight-backed hiring strategies.";

  const bottomText =
    "A research-driven blueprint that identifies, evaluates, and delivers the right talent through structured market intelligence.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Role Mapping", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Talent Advisory", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Compensation Benchmarking Services",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "Role Mapping",
      image: "/intelligence/a1.png",
      text:
        "conzura defines competitive talent landscapes by proactively identifying and profiling potential candidates across targeted markets. Through exhaustive role mapping, we analyse technical expertise, behavioural competencies, industry exposure, and organisational alignment. This enables businesses to understand market availability, talent readiness, and the most strategic sourcing pathways—leading to informed hiring decisions and structured workforce planning.",
    },
    flexi: {
      title: "Talent Advisory",
      image: "/intelligence/a2.webp",
      text:
        "Our Talent Advisory solutions bring timely, intelligence-led insights to optimise recruitment efficiency and cost. As specialists, we deliver market trends, skill insights, and evaluations of rare and niche talent pools, enabling clients to accelerate hiring decisions. Our experts collaborate with client hiring managers to share data on experience, expertise, knowledge depth, and behavioural traits—ensuring hires are aligned to evolving industry standards. The advisory framework also strengthens diversity hiring and supports organisations in meeting their inclusivity goals.",
    },
    strategic: {
      title: "Compensation Benchmarking Services",
      image: "/intelligence/a3.png",
      text:
        "Compensation benchmarking provides actionable insights that align organisational pay structures with market realities—critical for attracting and retaining high-value talent. With rising demand-supply gaps in skilled talent pools, accurate compensation intelligence has become a strategic differentiator. conzura analyses role-specific compensation trends across industries and domains, delivering data-backed recommendations for salary structures, benefits, and performance-based components. Our transparent and analytical approach supports rational, competitive, and uniform compensation policies across the organisation.",
    },
  };

  const [currentTab, setCurrentTab] = useState<
    "fulltime" | "flexi" | "strategic"
  >("fulltime");

  return (
    <div>
      {/* Hero */}
      <FullHero title={title} bg={bg} />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* LEFT TEXT */}
        <div>
          <SlideUp>
            <p className="text-3xl font-extralight leading-snug mb-10 text-left text-justify">
              {introLeft}
            </p>
          </SlideUp>

          <SlideUp>
            <p className="text-gray-600 font-light text-left text-justify max-w-sm">
              {bottomText}
            </p>
          </SlideUp>
        </div>

        {/* RIGHT PARAGRAPH */}
        <SlideUp>
          <p className="text-gray-700 font-light leading-relaxed text-left text-justify whitespace-pre-line">
            {introRight}
          </p>
        </SlideUp>
      </div>

      {/* Tabs */}
      <ServiceTabs
        tabs={tabs}
        onSelect={(id: string) =>
          setCurrentTab(id as "fulltime" | "flexi" | "strategic")
        }
      />

      {/* Active Section */}
      <ServiceSection
        index={0}
        title={sections[currentTab].title}
        image={sections[currentTab].image}
        text={sections[currentTab].text}
      />

      {/* Final Diagram */}
      <div className="py-16 text-center">
        <SlideUp>
          <h2 className="text-3xl font-extralight">
            Talent Intelligence Process Flow
          </h2>
        </SlideUp>

        <SlideUp>
          <img
            src="/intelligence/a4.webp"
            className="w-[980px] mx-auto mt-4"
          />
        </SlideUp>
      </div>

      <Footer />
    </div>
  );
}
