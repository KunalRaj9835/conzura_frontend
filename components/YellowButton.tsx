import Link from "next/link";

interface YellowButtonProps {
  text: string;
  href: string;
}

export default function YellowButton({ text, href }: YellowButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-block
        bg-red-600 text-white font-semibold rounded-full 
        px-6 py-3 mt-6
        border-2 border-red-400
        transition-all duration-300
        hover:bg-transparent hover:text-red-600
      "
    >
      {text}
    </Link>
  );
}
