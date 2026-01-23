import FeaturedArticle from "@/components/articles/FeaturedArticles";
import CategoryTabs from "@/components/articles/CategoryTabs";
import ArticleGrid from "@/components/articles/ArticleGrid";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ArticlesPage() {
  return (
    <main className="bg-[#f6f8f8] min-h-screen px-4 md:px-10 lg:px-20 py-10">
      <FeaturedArticle />
      <section className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <CategoryTabs />
          <ArticleGrid />
        </div>
        <Sidebar />
      </section>
    </main>
  );
}
