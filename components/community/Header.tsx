// components/community/Header.tsx
"use client";

import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
export default function Header({ post }: { post: any }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
      <Image
          src={post.avatar}
          alt="User avatar"
          width={18}
          height={6}
          className="size-10 rounded-full border border-blue-500/20 bg-center bg-cover"
        />
        <div>
          <h4 className="font-bold text-[#111718]  leading-none">
            {post.author}
          </h4>
          <span className="text-xs text-[#618389] font-medium uppercase tracking-wider">
            {post.role}
          </span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-primary transition-colors">
       <MoreHorizontal/>
      </button>
    </div>
  );
}
