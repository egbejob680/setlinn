import Image from "next/image";

interface ArticleCardProps {
  title: string;
  category: string;
  description: string;
  author: string;
  readTime: string;
  image: string;
}

export default function ArticleCard({
  title,
  category,
  description,
  author,
  readTime,
  image,
}: ArticleCardProps) {
  return (
    <article
      className="bg-white rounded-xl border border-[#e8eef2] overflow-hidden
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-semibold text-[#0d94af]">
          {category}
        </span>

        <h3 className="text-lg font-bold mt-2 mb-2">{title}</h3>

        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-between text-xs text-gray-500">
          <span>{author}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}
