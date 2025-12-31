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
        bg-[#2399b1] text-white font-semibold rounded-full 
        px-6 py-3 mt-6
        border-2 border-[#2399b1]
        transition-all duration-300
        hover:bg-transparent hover:text-[#2399b1]
      "
    >
      {text}
    </Link>
  );
}
