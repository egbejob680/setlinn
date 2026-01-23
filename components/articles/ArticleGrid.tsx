import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "Top 5 Fully Funded Scholarships in Canada",
    category: "Scholarships",
    description:
      "Discover the most prestigious funding opportunities for international students.",
    author: "Dr. Sarah Chen",
    readTime: "8 MIN READ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Gpx3FTCLQJcpUeh5De-3F1H-vPC0-Uy2N1bpKUt9m5hMGcArAnQrMr5pLnuM90lBby41BFaUgVzsbOXnySWPEFo29swxqWBOLiJ0keVvs1TgjFedXCaMm_TMtlicZLFH-Ng5NOKuVvc53lw0vNmZXddFpD8jEDShnq_EHSwVBwnZOvfjFD2oa49M7rCEjwd8WYdW0VzdKwaYjquuy2uCRgngvb5re6AGM3wlEMekHL_Cx7QkdtdO7BpGu0KoHZARMrtQ0K8B6fA",
  },
  {
    title: "Navigating the UK Rental Market",
    category: "Housing",
    description:
      "Learn how to secure accommodation in London, Manchester, and beyond.",
    author: "James Wilson",
    readTime: "10 MIN READ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPtzGagW2tFJxYYh91MsAPYwpBm9F-ZTVeKwogz2t86nrvs4ep1C4U3hPXmPKsXE5BpdwGPG21vVGB1784kbNLOIh2OPNZOqvJDpoGlO5xOJMD6feMyqNdVx3-OjsR2tZz8LvcGsOmSKHc6Dj-tkqMw4waKZtUIlIYDCJbqDrmFpTPDJOEpTc0M29U4wGEp9f5VCvo-C4BqHIM1L8AeuquNmF0cNJxkpGE1-zOL3uwgvp0SF7bIZ2Gbapu3_pqR2gkAAJpB0Hnweo",
  },
];

export default function ArticleGrid() {
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-8">Latest Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="border-2 border-[#0d94af] text-[#0d94af] px-8 py-3 rounded-lg font-bold hover:bg-[#0d94af] hover:text-white transition">
          Load More Articles
        </button>
      </div>
    </>
  );
}
