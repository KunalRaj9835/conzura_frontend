"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Executive Search & Board Room Hiring";
  const bg = "/bg5.jpg";

  const introLeft =
    "We enable organizations to build high-impact leadership by identifying, evaluating, and placing exceptional executives and board members who shape long-term success.";

  const introRight =
    "A strong and future-ready Board and Executive team determines the strategic direction and stability of every organisation—across Start-Ups, Mid-Size enterprises, and global corporations. conzura’s deep functional expertise, industry insights, and global leadership network empower us to identify high-performing executives with the right skill sets, governance mindset, and cultural alignment. Our specialised Executive Search experts assess leadership behaviours, strategic thinking, and boardroom capabilities to match organisations with leaders who accelerate transformation, innovation, and sustainable performance.";

  const bottomText =
    "Our sector-specific leadership intelligence enables us to identify executives who align seamlessly with organisational culture, strategic priorities, and growth vision.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Executive Search", icon: "/icon/shield.svg" },
    { id: "flexi", label: "CXO Mapping", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Director/ Board Member Hiring",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT
  const sections: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "Executive Search",
      image: "/executive/e1f.jpeg",
      text:
        "conzura partners closely with Founders, CXOs, and Leadership Teams to understand organisational vision, strategic goals, and role expectations. Our structured leadership assessment framework—covering Role Mapping, Competency Scoring, and Behavioural Evaluation—enables us to identify executives who bring strategic clarity, innovation, and execution excellence. We ensure organisations gain leaders who not only fit the position but elevate long-term business performance.",
    },
    flexi: {
      title: "CXO Mapping",
      image: "/executive/e2f.jpeg",
      text:
        "We support organisations in evaluating, benchmarking, and restructuring their leadership through comprehensive CXO Mapping. Our approach assesses experience depth, competency maturity, decision-making style, and transformation readiness for CXO-level roles. This enables companies to build strong leadership pipelines, restructure existing hierarchies, and identify future-ready executives capable of driving business expansion and operational excellence.",
    },
    strategic: {
      title: "Director/ Board Member Hiring",
      image: "/executive/e3.webp",
      text:
        "Board members play a pivotal role in governance, strategic oversight, innovation enablement, and organisational stewardship. conzura’s Board Search practice identifies leaders with proven expertise in advisory leadership, mentoring, compliance, corporate governance, and inclusive decision-making. We ensure our clients build diverse, dynamic, and strategically aligned boardrooms capable of guiding long-term vision and enterprise transformation.",
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

        {/* RIGHT TEXT */}
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
