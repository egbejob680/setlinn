// components/community/Sidebar.tsx
"use client";

import { TrendingUp } from "lucide-react";

export default function Sidebar() {
  const trending = [
    { title: "DigitalNomadLife", count: "2.4k gists" },
    { title: "VisaHacks", count: "1.8k gists" },
    { title: "HiddenGems", count: "950 gists" },
    { title: "Relocation2024", count: "720 gists" },
  ];

  return (
    <aside className="hidden lg:flex flex-col gap-6 lg:col-span-4">
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e5eaea]  p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp/>
          <h2 className="text-lg font-extrabold text-[#111718]  tracking-tight">
            Trending Topics
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {trending.map((t) => (
            <div key={t.title} className="group cursor-pointer">
              <p className="text-[#111718] font-bold text-sm mb-1 group-hover:text-blue-500 transition-colors">
                {t.title}
              </p>
              <p className="text-[#618389] text-xs">{t.count} this week</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
