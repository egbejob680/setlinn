import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function CommunityVoices() {
  return (
    <section className="py-20 sm:py-28 px-6 border-t border-gray-100 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black">
            Community Voices
          </h2>

          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black/5 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black/5 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              role: "Solo Explorer, London",
              quote:
                "Setlinn didn’t just help me travel — it helped me find my people.",
            },
            {
              name: "Marc Chen",
              role: "Digital Nomad, Singapore",
              quote:
                "It’s the first platform that truly feels human and honest.",
            },
            {
              name: "Elena Rodriguez",
              role: "Photographer, Madrid",
              quote:
                "I accessed stories and places no guidebook ever mentioned.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="p-8 bg-white rounded-3xl border border-gray-100 flex flex-col gap-8 hover:shadow-lg transition"
            >
              <div>
                <h4 className="font-bold text-lg text-[#111718]">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>

              <p className="text-lg sm:text-xl italic font-medium text-[#111718] leading-relaxed">
                “{t.quote}”
              </p>

              <div className="flex gap-1 text-[#0d94af]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
