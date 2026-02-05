"use client"

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const tabs = ["All", "Visa Tips", "Scholarships", "Housing", "Careers"];

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveCategory(tab)}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
            activeCategory === tab
              ? "bg-[#0d94af] text-white"
              : "bg-white border border-[#e8eef2] hover:border-[#0d94af]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
