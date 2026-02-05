"use client";

import { Article } from "@/data/articles";
import Image from "next/image";

interface Props {
  article: Article;
}

export default function FeaturedArticle({ article }: Props) {
  return (
    <section className="mb-14 mt-24">
      <div className="bg-white border border-[#e8eef2] rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-105">
        <div className="lg:w-3/5 min-h-70 relative">
        <Image
    src={article.image}
    alt={article.title}
    fill
    className="object-cover rounded-xl"
    sizes="(max-width: 1024px) 100vw, 60vw"
    priority
  />
</div>
          <div className="lg:w-2/5 p-8 flex flex-col">
            <span className="mb-4 px-3 py-1 rounded-full bg-[#0d94af]/10 text-[#0d94af] text-xs font-bold uppercase w-fit">
              Featured Article
            </span>

            <h1 className="text-3xl font-extrabold mb-4">
              {article.title}
            </h1>

            <p className="text-[#618389] mb-8">
              {article.description}
            </p>

            <button className="mt-auto bg-[#0d94af] text-white px-6 py-3 rounded-lg font-bold w-fit">
              Read Full Guide →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
