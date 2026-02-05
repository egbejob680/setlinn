// components/community/Actions.tsx

"use client";
import { MapPin, ThumbsUp, MessageSquare, Share2, MoreHorizontal, ArrowRight } from "lucide-react";

export default function Actions({ post }: { post: any }) {
  return (
    <div className="px-6 py-4 flex items-center justify-between border-t border-gray-50 dark:border-gray-800">
      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-[#618389] cursor-pointer hover:text-primary transition-colors">
          <ThumbsUp/>
          <span className="text-sm font-bold">{post.likes}</span>
        </div>
        <div className="flex items-center gap-2 text-[#618389] cursor-pointer hover:text-primary transition-colors">
          <MessageSquare/>
          <span className="text-sm font-bold">{post.comments}</span>
        </div>
        {post.shares && (
          <div className="flex items-center gap-2 text-[#618389] cursor-pointer hover:text-primary transition-colors">
            <Share2/>
            <span className="text-sm font-bold">{post.shares}</span>
          </div>
        )}
      </div>

      <button className="bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-5 rounded-xl transition-all text-sm flex items-center gap-2">
        View Discussion
       <ArrowRight/>
      </button>
    </div>
  );
}
