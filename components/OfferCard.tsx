import Link from "next/link";

interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function OfferCard({ icon, title, description, href }: OfferCardProps) {
  return (
    <Link href={href}>
      <div
        className="
          cursor-pointer transition-transform duration-300 
          hover:scale-105
        "
      >
        <div className="bg-white border border-black rounded-t-2xl flex justify-center py-8">
          <img src={icon} alt={title} className="w-16 h-16 opacity-80" />
        </div>

        <div className="bg-[#0e355d] rounded-b-2xl p-6 text-center">
          <h3 className="text-red-500 text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
