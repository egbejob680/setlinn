// components/community/CommunityFeed.tsx
"use client";

import { useEffect, useState } from "react";
import FeedPostImage from "./FeedPostImage";
import FeedPostText from "./FeedPostText";
import SkeletonPost from "./skeletonPost";
import { feedPosts } from "@/data/communityMock";

export default function CommunityFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetch delay
  useEffect(() => {
    setTimeout(() => {
      setPosts(feedPosts);
      setLoading(false);
    }, 1500); // 1.5s delay
  }, []);

  return (
    <>
      {loading
        ? Array.from({ length: 2 }).map((_, i) => <SkeletonPost key={i} />)
        : posts.map((post) =>
            post.type === "image" ? (
              <FeedPostImage key={post.id} post={post} />
            ) : (
              <FeedPostText key={post.id} post={post} />
            )
          )}
    </>
  );
}
