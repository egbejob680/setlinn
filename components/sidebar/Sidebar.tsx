import SearchBox from "./SearchBox";
import RegionFilter from "./RegionFilter";
import TrendingGuides from "./TrendingGuides";
import NewsletterCard from "./NewsLetterCard";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-10">
      <SearchBox />
      <RegionFilter />
      <TrendingGuides />
      <NewsletterCard />
    </aside>
  );
}
