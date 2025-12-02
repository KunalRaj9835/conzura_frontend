"use client";

import ExlTallCard from "./ExlCard";
import SlideUp from "@/components/SlideUp";

export default function OurSolutions() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* LEFT TITLE SECTION */}
        <div className="col-span-1 flex flex-col justify-start">
          <SlideUp>
            <p className="text-lg font-medium text-[#e5170f]">
              Our solutions
            </p>
          </SlideUp>

          <SlideUp>
            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Unifying data, AI, and human expertise <br /> to power enterprise workflows
            </h2>
          </SlideUp>
        </div>

        {/* RIGHT CONTENT GRID */}
        <div className="col-span-3 space-y-14">

          {/* TOP ROW — 3 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <SlideUp>
              <ExlTallCard
                title="Data Modernization"
                desc="Modernize legacy systems, migrate to scalable architectures, and enable faster, cleaner, and  accessible enterprise data."
                image="datam.webp"
                href="/data/data-modernization"
              />
            </SlideUp>

            <SlideUp>
              <ExlTallCard
                title="Artifical Intelligence"
                desc="Deploy machine learning, generative AI, and  automation to accelerate decisions and elevate business performance."
                image="aia.jpg"
                href="/data/aritifical-intelligence"
              />
            </SlideUp>

            <SlideUp>
              <ExlTallCard
                title="AI-Powered Operation"
                desc="Integrate AI into workflows to automate processes, enhance accuracy, and deliver real-time operational intelligence."
                image="pro.png"
                href="/data/ai-powered-operations"
              />
            </SlideUp>

          </div>

        </div>

      </div>
    </section>
  );
}
