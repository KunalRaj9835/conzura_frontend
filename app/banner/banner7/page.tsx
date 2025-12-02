"use client";

import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import SolutionMiniCard from "@/components/SolutionMiniCard";
import ExlCard from "@/components/ExlCard";
import Link from "next/link";
export default function DataAIPage() {
  const blogData = [
    {
      id: 1,
      title: "Industrial Automation",
      text: "Powering smart manufacturing with robotics, IoT, and intelligent automation systems.",
      bg: "/top/autommation.jpeg",
      href: "/banner/banner4",
    },
    {
      id: 2,
      title: "Healthcare Digital Transformation",
      text: "Enabling patient-centric, data-driven care with AI, telemedicine, and cloud technologies.",
      bg: "/top/healthcare.jpeg",
      href: "/banner/banner3",
    },
    {
      id: 3,
      title: "IT Services & Digital Engineering",
      text: "Accelerating enterprise transformation through cloud, AI/ML, and scalable digital platforms.",
      bg: "/top/server.jpeg",
      href: "/banner/banner1",
    },
    {
      id: 4,
      title: "IoT & Embedded Systems",
      text: "Driving renewable energy, smart infrastructure, and edge intelligence through embedded innovation.",
      bg: "/top/windmill.jpeg",
      href: "/banner/banner2",
    },
    {
      id: 5,
      title: "Aerospace & Defence",
      text: "Engineering mission-critical avionics, autonomous systems, and next-generation defense technologies.",
      bg: "/top/aerospace.jpeg",
      href: "/banner/banner6",
    },
    {
      id: 6,
      title: "Automotive Engineering",
      text: "Shaping electric, autonomous, and software-defined vehicles with advanced automotive innovation.",
      bg: "/top/car.jpeg",
      href: "/banner/banner5",
    },
  ];

  const miniCardLinks = [
    { label: "Cloud & Analytics", href: "/tech/cloud-analytics", img: "/mini/cloud.jpeg" },
    { label: "Frameworks", href: "/tech/frameworks", img: "/mini/framework.jpeg" },
    { label: "Infrastructure", href: "/tech/infrastructure", img: "/mini/infrastructure.jpeg" },
    { label: "Orchestration Platforms", href: "/tech/orchestration", img: "/mini/orchestration.jpeg" },
    { label: "Backend Engineering", href: "/tech/backend-engineering", img: "/mini/backend.jpeg" },
    { label: "Storage & Databases", href: "/tech/storage-databases", img: "/mini/storage.jpeg" },
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-black text-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="w-[300px]">
            <img src="/ball.gif" className="w-full h-auto object-contain" alt="Ball animation" />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-extralight leading-tight">
              Introduce to conzura
            </h1>

            <p className="text-lg mt-6 opacity-80 font-light">
              Transforming enterprises through AI-driven insights, advanced data engineering, and intelligent automation powered by unified, high-quality data.
            </p>

            
<Link href="/contact-us">
  <button className="mt-8 px-6 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-black transition">
    Request a demo →
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* ================= TRUE CAPABILITY ================= */}
      <section className="w-full py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    <div>
      <h2 className="text-4xl font-extralight mb-6">
        Unlock the true potential of your enterprise data
      </h2>

      <p className="text-gray-600 leading-relaxed font-light">
        Most organizations face silos, unstructured information, and slow data workflows. 
        A modern AI-native foundation enables seamless insights, automation, and faster decision-making 
        across the enterprise.
      </p>
    </div>

    <div className="rounded-xl overflow-hidden shadow-lg w-full h-64 md:h-80">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/VIDEO_ID_HERE"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</section>


      {/* ================= MODULAR APPROACH ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            
            <div>
              <p className="text-sm font-medium text-[#e5170f] mb-3">Our solutions</p>

              <h2 className="text-4xl font-extralight leading-tight">
                Orchestrating data, AI and human expertise in enterprise workflows
              </h2>
            </div>

            {blogData.map((item) => (
              <ExlCard
                key={item.id}
                title={item.title}
                desc={item.text}
                image={item.bg}
                href={item.href}
              />
            ))}

            <div></div>
          </div>

        </div>
      </section>

      {/* ================= SEAMLESS INTEGRATION ================= */}
      <section className="w-full bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="md:max-w-md">
            <h2 className="text-4xl font-extralight mb-6">
              Seamless integration, maximum impact
            </h2>

            <p className="text-gray-300 leading-relaxed font-light">
              Our AI-native ecosystem integrates smoothly with modern data platforms,
              enhancing your existing investments while delivering faster outcomes.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <video
              src="/carousel/liquid.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

        </div>
      </section>

      {/* ================= SOLUTION MINI CARDS ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-extralight mb-12">Solution modules</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {miniCardLinks.map((item, index) => (
              <SolutionMiniCard
                key={index}
                title={item.label}
                img={item.img}
                href={item.href}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
