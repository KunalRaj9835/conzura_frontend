import Link from "next/link";

interface ChargingButtonProps {
  text: string;
  href: string;
}

export default function ChargingButton({ text, href }: ChargingButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative inline-flex items-center justify-center 
        px-8 py-4 mt-6
        border-2 border-red-600
        text-red-600 font-semibold
        rounded-none
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      <span
        className="
          absolute inset-0 
          bg-red-600
          -translate-x-full
          transition-transform duration-500
          group-hover:translate-x-0
        "
      />

      <span
        className="
          relative z-10 
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {text}
      </span>
    </Link>
  );
}
