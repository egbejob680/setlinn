"use client";

import { useState } from "react";
import CategoryTabs from "@/components/articles/CategoryTabs";
import FeaturedArticle from "@/components/articles/FeaturedArticles";
import ArticleGrid from "@/components/articles/ArticleGrid";
import { mockArticles } from "@/data/articles";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured =
    activeCategory === "All"
      ? mockArticles[0]
      : mockArticles.find(a => a.category === activeCategory) ?? mockArticles[0];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
      
        {/* MAIN CONTENT */}
        <main className="lg:col-span-9">
          <FeaturedArticle article={featured} />

          {/* SEARCH */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#e8eef2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0d94af]"
            />
          </div>

          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <ArticleGrid
            activeCategory={activeCategory}
            search={search}
          />
        </main>
          {/* SIDEBAR */}
          <aside className=" mt-30 lg:col-span-3">
          <Sidebar />
        </aside>

      </div>
    </section>
  );
}
