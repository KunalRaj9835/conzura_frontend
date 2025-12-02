"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Talent Acquisition";
  const bg = "/bg2.webp";

  const introLeft =
    "We strengthen your organisation’s capability by enabling you to hire talent that elevates performance, culture, and long-term competitiveness.";

  const introRight =
    "conzura’s Talent Acquisition solutions are designed to streamline and optimise recruitment workflows for speed, accuracy, and consistency. Our structured methodology ensures that organisations not only discover the right talent but also experience a seamless, efficient hiring journey. With industry-aligned tools, behavioural assessments, and domain-focused screening, we evaluate competence, cultural fit, and potential to deliver long-term value. Our team continually fine-tunes the talent acquisition framework to match evolving business needs, ensuring every hire strengthens operational excellence and organisational growth.";

  const bottomText =
    "Enhance your hiring success with our integrated sourcing framework that ensures consistency, quality, and measurable recruitment outcomes.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Full-Time Staffing", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Flexi Staffing", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Strategic or Critical Hiring",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "Full-Time Staffing",
      image: "/talent/t1.webp",
      text:
        "Building a strong organisation begins with securing high-calibre, domain-ready professionals who contribute meaningfully from day one. conzura bridges the gap between employers and top-tier talent through our dedicated full-time staffing model. Our consultants work round the clock to source, evaluate, and deliver candidates who match the technical, behavioural, and cultural expectations of your business. The result is a reliable, scalable, and quality-driven hiring process aligned with long-term workforce planning.",
    },
    flexi: {
      title: "Flexi Staffing",
      image: "/talent/t2.webp",
      text:
        "Our Flexi Staffing model empowers organisations to stay agile during periods of rapid growth, seasonal fluctuations, or project-based requirements. conzura provides skilled, on-demand professionals who support short-term assignments without compromising on efficiency or capability. This approach ensures talent availability, operational flexibility, and optimised workforce costs.",
    },
    strategic: {
      title: "Strategic or Critical Hiring",
      image: "/talent/t3.webp",
      text:
        "Strategic hiring demands precision, industry insight, and an in-depth understanding of the role’s long-term business impact. conzura specialises in critical talent acquisition for niche, senior, or highly specialised positions. Our framework focuses on capability mapping, leadership assessment, and value alignment to ensure that each hire contributes strategically to business objectives. With our expertise, organisations accelerate decision-making and secure talent that drives transformation.",
    },
  };

  const [currentTab, setCurrentTab] = useState<
    "fulltime" | "flexi" | "strategic"
  >("fulltime");

  return (
    <div>
      {/* HERO */}
      <FullHero title={title} bg={bg} />

      {/* INTRO SECTION */}
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
          <p className="text-gray-700 font-light leading-relaxed whitespace-pre-line text-left text-justify">
            {introRight}
          </p>
        </SlideUp>
      </div>

      {/* TABS */}
      <ServiceTabs
        tabs={tabs}
        onSelect={(id: string) =>
          setCurrentTab(id as "fulltime" | "flexi" | "strategic")
        }
      />

      {/* ACTIVE SECTION */}
      <ServiceSection
        index={0}
        title={sections[currentTab].title}
        image={sections[currentTab].image}
        text={sections[currentTab].text}
      />

      <Footer />
    </div>
  );
}
