"use client";

import {
  Image,
  MapPin,
  Smile,
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function CommunityPage() {
  return (
    <main className=" mt-24 min-h-screen bg-[#f6f8f8] px-4 py-8">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ================= FEED ================= */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          {/* Composer */}
          <div className="bg-white rounded-xl border border-[#e5eaea] p-5">
            <div className="flex gap-4">
              <div className="size-11 rounded-full bg-gray-300" />
              <div className="flex-1">
                <textarea
                  placeholder="Share your latest global discovery..."
                  className="w-full bg-transparent resize-none text-lg placeholder:text-[#bacbce] focus:outline-none min-h-15"
                />

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                  <div className="flex gap-2 text-[#618389]">
                    <IconButton icon={<Image size={20} />} />
                    <IconButton icon={<MapPin size={20} />} />
                    <IconButton icon={<Smile size={20} />} />
                  </div>

                  <button className="bg-[#0d94af] text-white font-bold px-6 py-2 rounded-xl shadow-lg shadow-[#0d94af]/20">
                    Post Gist
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Post with Image */}
          <article className="bg-white rounded-xl border border-[#e5eaea] overflow-hidden">
            <div className="p-6">
              <PostHeader name="@ElenaTravels" role="Pathfinder • 2h ago" />

              <h3 className="text-xl font-extrabold text-[#111718] mt-4">
                Exploring the hidden alleys of Lisbon
              </h3>

              <p className="text-[#618389] mt-3 leading-relaxed">
                Found a tiny Fado house that isn't on maps. Any quiet co-working
                spaces near Alfama?
              </p>

              <div className="flex gap-2 mt-4 text-[#0d94af] font-bold text-sm">
                <span>#Lisbon</span>
                <span>#DigitalNomad</span>
                <span>#SoloTravel</span>
              </div>
            </div>

            <div className="relative aspect-video bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
                alt="Lisbon streets"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-2 text-white text-xs">
                <MapPin size={14} />
                Lisbon, Portugal
              </div>
            </div>

            <PostActions />
          </article>

          {/* Text-only Post */}
          <article className="bg-white rounded-xl border border-[#e5eaea] p-6 relative">
            <span className="absolute top-4 right-4 bg-[#F2A183]/20 text-[#F2A183] text-[10px] font-black px-2 py-1 rounded">
              Trending
            </span>

            <PostHeader name="@MarcusTheExpert" role="Expert • 5h ago" />

            <h3 className="text-xl font-extrabold text-[#111718] mt-4">
              Top 5 Visas for Remote Workers in 2024
            </h3>

            <p className="text-[#618389] mt-4 leading-relaxed">
              Spain and Greece are leading options. Speed or cost — which
              matters more to you?
            </p>

            <PostActions />
          </article>
        </section>

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:flex lg:col-span-4 flex-col gap-6">
          <div className="bg-white rounded-xl border border-[#e5eaea] p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-[#F2A183]" />
              <h2 className="font-extrabold text-lg text-[#111718]">
                Trending Topics
              </h2>
            </div>

            {[
              "#DigitalNomadLife",
              "#VisaHacks",
              "#HiddenGems",
              "#Relocation2024",
            ].map((tag) => (
              <div key={tag} className="mb-5 cursor-pointer">
                <p className="font-bold text-[#111718] hover:text-[#0d94af] transition">
                  {tag}
                </p>
                <span className="text-xs text-[#618389]">
                  Trending this week
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#0d94af] text-white rounded-xl p-5 relative overflow-hidden">
            <Sparkles className="mb-2" />
            <h4 className="font-bold mb-2 leading-tight">
              Unlock deeper relocation guides
            </h4>
            <button className="bg-white text-[#0d94af] text-xs font-black px-3 py-2 rounded-lg">
              Explore More
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}

/* ================= HELPERS ================= */

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
      {icon}
    </button>
  );
}

function PostHeader({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <img
          src="https://i.pravatar.cc/100?img=12"
          className="size-10 rounded-full object-cover"
        />

        <div>
          <h4 className="font-bold text-[#111718]">{name}</h4>
          <span className="text-xs text-[#618389] uppercase tracking-wide">
            {role}
          </span>
        </div>
      </div>
      <MoreHorizontal className="text-gray-400" />
    </div>
  );
}

function PostActions() {
  return (
    <div className="px-6 py-4 flex justify-between border-t border-gray-100">
      <div className="flex gap-6 text-[#618389]">
        <Action icon={<ThumbsUp size={18} />} count="124" />
        <Action icon={<MessageSquare size={18} />} count="42" />
        <Action icon={<Share2 size={18} />} count="15" />
      </div>

      <button className="bg-[#0d94af]/10 text-[#0d94af] font-bold px-5 py-2 rounded-xl hover:bg-[#0d94af] hover:text-white transition">
        View Discussion →
      </button>
    </div>
  );
}

function Action({ icon, count }: { icon: React.ReactNode; count: string }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-[#0d94af] transition">
      {icon}
      <span className="text-sm font-bold">{count}</span>
    </div>
  );
}
