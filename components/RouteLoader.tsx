"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 400); // smooth fade

    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <Image
        src="/loading.gif"
        width={360}
        height={360}
        alt="Loading..."
      />
    </div>
  );
}
