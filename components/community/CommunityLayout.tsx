import ComposerCard from "./ComposerCard";
import CommunityFeed from "./CommunityFeed";
import Sidebar from "./Sidebar";

export default function CommunityLayout() {
  return (
    <main className="max-w-300 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-8 bg-[#f6f8f8]">
      {/* LEFT FEED */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        <ComposerCard />
        <CommunityFeed />
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden lg:col-span-4 lg:flex">
        <Sidebar />
      </aside>
    </main>
  );
}
