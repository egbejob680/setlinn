export default function SearchBox() {
    return (
      <div>
        <h4 className="text-xs font-black uppercase text-gray-400 mb-3">Search</h4>
        <input
          className="w-full h-12 px-4 rounded-lg border border-[#e8eef2] focus:ring-2 focus:ring-[#0d94af]/30"
          placeholder="Search articles..."
        />
      </div>
    );
  }
  