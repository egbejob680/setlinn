export default function CommunityVoices() {
    return (
      <section className="py-32 px-6 border-t border-gray-100 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-4xl font-black">Community Voices</h2>
  
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Solo Explorer, London",
                quote:
                  "Setlinn didn’t just help me travel — it helped me find my people."
              },
              {
                name: "Marc Chen",
                role: "Digital Nomad, Singapore",
                quote:
                  "It’s the first platform that truly feels human and honest."
              },
              {
                name: "Elena Rodriguez",
                role: "Photographer, Madrid",
                quote:
                  "I accessed stories and places no guidebook ever mentioned."
              }
            ].map((t) => (
              <div
                key={t.name}
                className="p-8 bg-white rounded-3xl border border-gray-100 flex flex-col gap-8"
              >
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
  
                <p className="text-xl italic font-medium">“{t.quote}”</p>
  
                <div className="flex text-[#0d94af]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined fill-1"
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  