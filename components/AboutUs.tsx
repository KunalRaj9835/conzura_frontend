"use client";

import YellowButton from "./YellowButton";
import Lottie from "lottie-react";
import officeAnimation from "./lottie/Office.json";
import SlideUp from "@/components/SlideUp";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <SlideUp>
          <h2 className="text-[2.5rem] font-extralight text-[#0e355d]">
            About Us
          </h2>
        </SlideUp>

        <SlideUp>
          <div className="h-1 w-20 bg-[#25b1c1] mx-auto mt-3 rounded-full"></div>
        </SlideUp>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animation */}
        <div className="flex justify-center md:justify-start">
          <Lottie
            animationData={officeAnimation}
            loop
            className="w-[450px] md:w-[600px]"
          />
        </div>

        {/* Text */}
        <div>
          <SlideUp>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-justify">
              Conzura Soft Solutions is a team of creative designers and
              passionate developers committed to building digital experiences
              that help businesses grow and evolve into strong, competitive
              brands. We focus on understanding business goals deeply and
              translating them into scalable, user-focused, and future-ready
              solutions.
            </p>
          </SlideUp>

          <SlideUp>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-justify">
              With experience across diverse industries and technologies, we
              combine design thinking, engineering excellence, and strategic
              execution to deliver measurable results. From concept to
              deployment, our solutions are crafted to perform, adapt, and scale
              as businesses grow in an ever-changing digital landscape.
            </p>
          </SlideUp>

          <SlideUp>
            <YellowButton text="Know More" href="/about" />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
