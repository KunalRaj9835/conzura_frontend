"use client";

import YellowButton from "./YellowButton";
import Lottie from "lottie-react";
import officeAnimation from "./lottie/Office.json";
import SlideUp from "@/components/SlideUp";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <SlideUp>
          <h2 className="text-[2.5rem] font-extralight text-[#0e355d]">About Us</h2>
        </SlideUp>

        <SlideUp>
          <div className="h-1 w-20 bg-red-400 mx-auto mt-3 rounded-full"></div>
        </SlideUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <Lottie
            animationData={officeAnimation}
            loop
            className="w-[450px] md:w-[600px]"
          />
        </div>

        <div>
          <SlideUp>
            <p className="text-gray-500 font-light leading-relaxed mb-6 text-justify">
              conzura was established with a clear purpose: to understand diverse
              organizational needs and connect them with the right talent
              through precise, insight-driven mapping. With strong domain
              expertise across IT Services, Automotive, Aerospace, Automation,
              and emerging technologies, we specialize in identifying
              professionals who integrate seamlessly into business environments
              and deliver immediate value. Our processes are guided by deep
              market intelligence, technical leadership, and ISO-certified
              quality systems, enabling us to provide dependable staffing and
              engineering support tailored to specific industry challenges.
            </p>
          </SlideUp>

          <SlideUp>
            <p className="text-gray-500 font-light leading-relaxed mb-6 text-justify">
              Backed by extensive research on skill availability, talent
              landscapes, and technology trends, conzura consistently delivers
              human capital solutions that accelerate business outcomes. Our
              commitment to effective “Talent Mobility” ensures organizations
              gain access to agile, capable, and job-ready professionals who
              strengthen execution and drive growth. As a trusted partner,
              conzura continues to bridge the gap between opportunity and
              talent—empowering companies to scale with confidence and stay
              competitive in a rapidly evolving market.
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
