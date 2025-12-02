
"use client";

interface SideBySideCardProps {
  title: string;
  text: string;
  image: string;
  color: string;
  href?: string;
}

export default function SideBySideCard({
  title,
  text,
  image,
  color,
  href,
}: SideBySideCardProps) {
  return (
    <div className="flex flex-col h-full">
      
      {/* IMAGE */}
      <div className="h-60 w-full shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT AREA - Now uses flexbox to push button to bottom */}
      <div
        className="p-10 flex flex-col flex-1"
        style={{ backgroundColor: color }}
      >
       <h3 className="text-2xl font-light mb-4 text-[#e5170f] mt-4 h-auto md:h-20 md:flex md:items-start">
          {title}
        </h3>


        {/* Text now grows to fill available space */}
        <p className="text-base leading-relaxed flex-1 mt-4 text-justify hyphens-auto">
          {text}
        </p>

        {/* Link stays at bottom with consistent spacing */}
        {href && (
          <a
            href={href}
            className="mt-8 inline-flex items-center font-medium text-[#3478e6] self-start"
          >
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}
