"use client";

import {
  ChevronRight,
  Search,
  Bookmark,
  Share2,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Globe,
  AtSign,
} from "lucide-react";

export default function ArticleDetailsPage() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">

      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-[#0d94af] w-[45%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Insights</span>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-semibold">
            Digital Nomads in 2024
          </span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 max-w-4xl">
          The New Frontier: Navigating the Global Shift Towards Hybrid Nomadism
        </h1>

        {/* Author Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-y py-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full bg-gray-300" />
            <div>
              <p className="font-bold">Dr. Elena Rossi</p>
              <p className="text-sm text-gray-500">
                Oct 12, 2023 • 12 min read
              </p>
            </div>
            <button className="ml-4 px-4 py-1.5 border border-[#0d94af] text-[#0d94af] rounded-full text-sm font-bold hover:bg-[#0d94af] hover:text-white transition">
              Follow
            </button>
          </div>

          <div className="flex items-center gap-3">
            <IconBtn icon={<Share2 size={18} />} />
            <IconBtn icon={<MoreHorizontal size={18} />} />
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[21/9] rounded-2xl bg-gray-300 mb-16" />

        <div className="flex gap-16">

          {/* TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Table of Contents
              </p>

              <ul className="space-y-4 border-l text-sm">
                {[
                  "Introduction",
                  "Emerging Global Trends",
                  "Economic Impact on Regions",
                  "Technological Enablement",
                  "Conclusion",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`pl-4 ${
                      i === 0
                        ? "border-l-2 border-[#0d94af] text-[#0d94af] font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-12 p-6 bg-[#0d94af]/5 rounded-xl border border-[#0d94af]/20">
                <p className="font-bold text-sm mb-2">Get the Newsletter</p>
                <input
                  placeholder="Email address"
                  className="w-full text-sm rounded-lg border px-3 py-2 mb-2"
                />
                <button className="w-full bg-[#0d94af] text-white text-sm font-bold py-2 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="max-w-3xl">
            <p className="text-xl italic text-gray-600 mb-8">
              The landscape of professional migration is undergoing a radical
              transformation...
            </p>

            <Section title="Introduction">
              The traditional concept of the digital nomad is evolving rapidly.
            </Section>

            <blockquote className="border-l-4 border-[#0d94af] pl-6 italic text-lg text-gray-600 my-10">
              “The geography of work has been decoupled from the geography of
              home.”
            </blockquote>

            <Section title="Emerging Global Trends">
              Long-term visas and hybrid hubs are reshaping how professionals
              migrate.
            </Section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-16">
              {["Migration", "Remote Work", "Future of Work"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-white rounded-2xl border flex gap-8">
              <div className="size-24 rounded-full bg-gray-300" />
              <div>
                <p className="text-xs uppercase font-bold text-[#0d94af] mb-1">
                  About the Author
                </p>
                <h3 className="text-xl font-bold mb-2">Dr. Elena Rossi</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Sociopolitical researcher focusing on migration and the digital
                  economy.
                </p>
                <div className="flex gap-4 text-gray-400">
                  <Globe />
                  <AtSign />
                </div>
              </div>
            </div>

            {/* Comments */}
            <section className="mt-20">
              <h3 className="text-2xl font-bold mb-6">Comments (24)</h3>
              <textarea
                placeholder="Add your perspective..."
                className="w-full border rounded-xl p-4 mb-4"
              />
              <button className="bg-[#0d94af] text-white px-6 py-2 rounded-lg font-bold">
                Post Comment
              </button>
            </section>
          </article>
        </div>

        {/* Recommended */}
        <section className="mt-32">
          <h3 className="text-3xl font-black mb-10">Recommended Reading</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
              >
                <div className="aspect-video bg-gray-300" />
                <div className="p-6">
                  <span className="text-[10px] uppercase font-bold text-[#0d94af]">
                    Guides
                  </span>
                  <h4 className="text-xl font-bold mt-2">
                    Lisbon: The 2024 Remote Work Hub
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Residency laws, community, and lifestyle insights.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

/* ================= HELPERS ================= */

function IconBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="size-10 flex items-center justify-center rounded-full border hover:border-[#0d94af] text-gray-500 hover:text-[#0d94af] transition">
      {icon}
    </button>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-2xl font-bold mt-12 mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </>
  );
}
