"use client";

import { useEffect, useRef, useState } from "react";

interface AnimationFadeUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimationFadeUp({
  children,
  className = "",
}: AnimationFadeUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "animate-fadeUp" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
