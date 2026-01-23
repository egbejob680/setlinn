const regions = ["Africa", "Europe", "North America", "Asia", "Oceania"];

export default function RegionFilter() {
  return (
    <div>
      <h4 className="text-xs font-black uppercase text-gray-400 mb-3">
        Filter by Region
      </h4>
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region}
            className="px-4 py-2 bg-white border border-[#e8eef2] rounded-lg text-sm font-semibold hover:border-[#0d94af]"
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
