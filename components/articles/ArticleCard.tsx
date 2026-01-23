interface Props {
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
  }: Props) {
    return (
      <div className="bg-white border border-[#e8eef2] rounded-xl overflow-hidden hover:shadow-lg transition">
        <div
          className="aspect-16/10 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
  
        <div className="p-6 flex flex-col h-full">
          <span className="text-xs font-bold text-[#0d94af] uppercase">
            {category}
          </span>
  
          <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
  
          <p className="text-sm text-[#618389] mb-6">{description}</p>
  
          <div className="mt-auto flex justify-between text-xs font-bold text-gray-400">
            <span>{author}</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    );
  }
  