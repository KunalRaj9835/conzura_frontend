"use client";

import SlideUp from "@/components/SlideUp";

export default function FullHero({
  title,
  bg,
}: {
  title: string;
  bg: string;
}) {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[500px] mb-5">
      {/* Background Image */}
      <img
        src={bg}
        alt={title}
        className="w-full h-full object-cover brightness-75"
      />

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
          <h1
            className="text-[#e5170f] text-3xl md:text-5xl font-medium tracking-wide text-center"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "#ffffffff",
            }}
          >
            {title}
          </h1>
      </div>
    </div>
  );
}
