const tabs = ["All", "Visa Tips", "Scholarships", "Housing", "Careers"];

export default function CategoryTabs() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
            i === 0
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
