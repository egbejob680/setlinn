import Image from "next/image";
import { MapPin, ThumbsUp, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import Actions from "./Actions";
import Header from "./Header";
export default function FeedPostImage({ post }: any) {
  return (
    <article className="bg-white rounded-xl border border-[#e5eaea] overflow-hidden">
      <div className="p-6">
        <Header post={post} />
        <h3 className="text-xl font-extrabold mt-4">{post.title}</h3>
        <p className="text-[#618389] mt-3">{post.content}</p>

        <div className="flex gap-2 mt-4 text-[#0d94af] font-bold text-sm">
          {post.tags.map((t: string) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="relative aspect-video">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          loading="lazy"
        />

        <div className="absolute bottom-4 left-4 bg-black/40 text-white text-xs px-3 py-1 rounded-lg flex gap-2">
          <MapPin size={14} />
          {post.location}
        </div>
      </div>

      <Actions post={post} />
    </article>
  );
}
