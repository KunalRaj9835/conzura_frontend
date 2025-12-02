"use client";

import FullHero from "@/components/FullHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";
import SlideUp from "@/components/SlideUp";

export default function Page() {
  // 1) PAGE DATA
  const title = "Global PEO Services";
  const bg = "/bg4.jpg";

  const introLeft =
    "Global PEO Services designed to redefine international hiring, onboarding, and workforce management for modern enterprises.";

  const introRight =
    "conzura delivers agile and innovative workforce solutions tailored to fast-evolving global business environments. Our Professional Employer Organisation (PEO) and Employer of Record (EOR) services are built on deep industry foresight and operational expertise. Through our Global PEO framework, organisations gain seamless access to India’s dynamic talent ecosystem while leveraging our in-house Recruitment, HR, Payroll, and Legal capabilities. Our EOR model eliminates the complexities of entity setup, statutory compliance, payroll administration, and employee lifecycle management across borders. We empower organisations to scale globally with confidence—supported by strong legal governance, efficient payroll systems, and compliant onboarding processes.";

  const bottomText =
    "Hassle-free global hiring with assured compliance, seamless onboarding, and complete workforce governance—without setting up an entity in any country.";

  // TAB SET 1
  const tabs1 = [
    { id: "fulltime", label: "Hiring, Benefits & Payroll", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Legal & Financial Guidance", icon: "/icon/laptop.svg" },
    { id: "strategic", label: "Human Resources", icon: "/icon/server.svg" },
  ];

  const sections1: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "Hiring, Benefits & Payroll",
      image: "/global/g3.webp",
      text:
        "We manage complete hiring, compensation planning, and payroll administration aligned with local regulations and global best practices. Our compliant payroll systems, structured benefits programs, and transparent processes ensure accuracy, timeliness, and seamless employee experiences—enabling organisations to focus entirely on business growth while we handle end-to-end workforce operations.",
    },
    flexi: {
      title: "Legal & Financial Guidance",
      image: "/global/g4.webp",
      text:
        "We deliver comprehensive legal and financial governance for all in-country operations. Our specialised compliance teams monitor labour laws, taxation updates, and regulatory changes to ensure full adherence to local requirements. This enables organisations to operate globally without legal exposure, administrative burden, or compliance-related risks.",
    },
    strategic: {
      title: "Human Resources",
      image: "/global/g5.webp",
      text:
        "Our HR support spans the entire employee lifecycle—from hiring and contracts to performance management, benefits, handbooks, advisory on employment law, and managed offboarding when required. We ensure every employee—from onboarding to retirement—receives consistent, compliant, and structured HR support across geographies.",
    },
  };

  const [currentTab1, setCurrentTab1] = useState<"fulltime" | "flexi" | "strategic">(
    "fulltime"
  );

  // TAB SET 2
  const tabs2 = [
    { id: "alpha", label: "International Expansion", icon: "/icon/shield.svg" },
    { id: "beta", label: "International Recruitment", icon: "/icon/laptop.svg" },
    { id: "gamma", label: "EOR", icon: "/icon/server.svg" },
  ];

  const sections2: Record<string, { title: string; image: string; text: string }> = {
    alpha: {
      title: "International Expansion",
      image: "/global/g6.webp",
      text:
        "We support organisations as they transition from PEO-led operations to establishing their own legal entities. While clients scale internationally, conzura continues to manage HR, payroll, compliance, taxation, and operational frameworks—enabling a smooth and compliant expansion journey.",
    },
    beta: {
      title: "International Recruitment",
      image: "/global/g7.webp",
      text:
        "Build global teams without navigating complex international hiring constraints. conzura manages recruitment, onboarding, local compliance, and employee administration across geographies—allowing organisations to deploy talent anywhere, quickly and efficiently.",
    },
    gamma: {
      title: "EOR",
      image: "/global/g8.webp",
      text:
        "Our Employer of Record (EOR) model reduces global employment risks by assuming legal responsibility for employee contracts, payroll, benefits, taxation, and statutory contributions as per local laws. conzura becomes the official employer while you retain full control of day-to-day work and performance.",
    },
  };

  const [currentTab2, setCurrentTab2] = useState<"alpha" | "beta" | "gamma">(
    "alpha"
  );

  // --------------------------------------------------------------------

  return (
    <div>
      {/* HERO */}
      <FullHero title={title} bg={bg} />

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
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

        <SlideUp>
          <p className="text-gray-700 font-light leading-relaxed whitespace-pre-line text-left text-justify">
            {introRight}
          </p>
        </SlideUp>
      </div>

      {/* TAB SET 1 */}
      <ServiceTabs
        tabs={tabs1}
        onSelect={(id: string) =>
          setCurrentTab1(id as "fulltime" | "flexi" | "strategic")
        }
      />

      <ServiceSection
        index={0}
        title={sections1[currentTab1].title}
        image={sections1[currentTab1].image}
        text={sections1[currentTab1].text}
      />

      {/* TAB SET 2 */}
      <div className="mt-20" />

      <ServiceTabs
        tabs={tabs2}
        onSelect={(id: string) => setCurrentTab2(id as "alpha" | "beta" | "gamma")}
      />

      <ServiceSection
        index={1}
        title={sections2[currentTab2].title}
        image={sections2[currentTab2].image}
        text={sections2[currentTab2].text}
      />

      <Footer />
    </div>
  );
}
