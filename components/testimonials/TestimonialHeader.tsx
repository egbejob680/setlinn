export default function TestimonialHeader() {
    return (
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-4xl font-black tracking-tight">
          Community Voices
        </h2>
  
        <div className="flex gap-4">
          <button className="size-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">
              chevron_left
            </span>
          </button>
  
          <button className="size-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    )
  }
  