// components/community/FeedPostText.tsx
"use client";
import Actions from "./Actions";
import Header from "./Header";

export default function FeedPostText({ post }: { post: any }) {
  return (
    <article className="bg-white  rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#e5eaea]  p-6 relative">
      {post.trending && (
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-accent-coral/20 text-accent-coral text-[10px] font-black uppercase px-2 py-1 rounded-md">
            Trending
          </div>
        </div>
      )}

      <Header post={post} />

      <h3 className="text-xl font-extrabold text-[#111718] mb-3 tracking-tight">
        {post.title}
      </h3>
      <p className="text-[#618389]  text-base leading-relaxed mb-6">
        {post.content}
      </p>

      <Actions post={post} />
    </article>
  );
}
