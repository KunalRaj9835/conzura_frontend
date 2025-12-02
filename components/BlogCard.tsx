import Link from "next/link";

interface BlogCardProps {
  image: string;
  title: string;
  href: string;
}

export default function BlogCard({ image, title, href }: BlogCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img 
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#0e355d] leading-relaxed">
        {title}
      </h3>

      {/* Read more link */}
      <Link href={href}>
        <div className="mt-3 text-sm font-light text-[#3173ea] underline flex items-center gap-1">
          Read more →
        </div>
      </Link>

    </div>
  );
}
