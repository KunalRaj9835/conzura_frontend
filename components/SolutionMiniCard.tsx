"use client";

import SlideUp from "@/components/SlideUp";

interface SolutionMiniCardProps {
  title: string;
  img?: string;
  href: string;
}

export default function SolutionMiniCard({
  title,
  img,
  href,
}: SolutionMiniCardProps) {
  return (
    <a
      href={href}
      className="block bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition cursor-pointer"
    >
      {img && (
        <div className="w-full h-36 rounded-lg overflow-hidden mb-4">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <h3 className="text-lg font-extralight hover:text-red-600">
        {title}
      </h3>
    </a>
  );
}
