"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface Props {
  tabs: Tab[];
  onSelect: (id: string) => void;
}

export default function ServiceTabs({ tabs, onSelect }: Props) {
  const [active, setActive] = useState(tabs[0].id);

  const handle = (id: string) => {
    setActive(id);
    onSelect(id);
  };

  return (
   <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-14 py-10 text-[#0e355d]">
  {tabs.map((t) => (
    <button
      key={t.id}
      onClick={() => handle(t.id)}
      className={`flex items-center gap-2 text-base md:text-lg font-light transition ${
        active === t.id ? "font-medium opacity-100" : "opacity-50"
      }`}
    >
      <img src={t.icon} className="w-5 md:w-6" />
      {t.label}
    </button>
  ))}
</div>

  );
}
