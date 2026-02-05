"use client";

import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { mockArticles, Article } from "@/data/articles";

interface Props {
  activeCategory: string;
  search: string;
}

const PER_PAGE = 4;

export default function ArticleGrid({ activeCategory, search }: Props) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // reset page when category or search changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory, search]);

  // 🔥 COMBINED FILTER
  const filtered = articles.filter(article => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const current = filtered.slice(start, start + PER_PAGE);

  // Skeleton loading
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-xl"
            />
          ))}
      </div>
    );
  }

  return (
    <>
      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {current.map(article => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-full font-bold transition ${
                page === i + 1
                  ? "bg-[#0d94af] text-white"
                  : "border border-[#e8eef2] hover:border-[#0d94af]"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
