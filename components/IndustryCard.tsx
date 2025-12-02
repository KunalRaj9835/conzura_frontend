"use client";

import Link from "next/link";
import SlideUp from "@/components/SlideUp";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  dark?: boolean;
}

export default function IndustryCard({
  title,
  description,
  icon,
  href,
  dark = false,
}: IndustryCardProps) {
  return (
    <div
      className="
        relative rounded-2xl p-6 pt-12 
        transition-all duration-300
        hover:scale-[1.03]
        cursor-pointer shadow-sm
      "
      style={{
        backgroundColor: dark ? "#0e355d" : "#e8edf1",
        color: dark ? "white" : "#0e355d",
      }}
    >

      {/* Circle Icon */}
      <div
        className={`
          absolute -top-6 left-4 
          w-14 h-14 rounded-full 
          flex items-center justify-center
          shadow-md
          ${dark ? "bg-black" : "bg-red-500"}
          ${dark ? "border-4 border-red-500" : "border-4 border-black"}
        `}
      >
        <img src={icon} alt={title} className="w-8 h-8 invert" />
      </div>

      {/* Title */}
      <SlideUp>
        <h3
          className={`
            text-lg font-bold mt-4
            ${dark ? "text-white" : "text-[#0e355d]"}
          `}
        >
          {title}
        </h3>
      </SlideUp>

      {/* Description */}
      <SlideUp>
        <p
          className={`
            mt-2 text-sm leading-relaxed 
            ${dark ? "text-gray-200" : "text-gray-700"}
          `}
        >
          {description}
        </p>
      </SlideUp>

      {/* Know More */}
      <SlideUp>
        <Link href={href}>
          <div
            className="
              mt-4 text-sm font-semibold underline
              transition-all duration-200
            "
          >
            Know More
          </div>
        </Link>
      </SlideUp>

    </div>
  );
}
