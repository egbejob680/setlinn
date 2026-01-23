export default function StarRating({ count = 5 }: { count?: number }) {
    return (
      <div className="flex text-[#0d94af]">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined fill-1 text-[22px]"
          >
            star
          </span>
        ))}
      </div>
    )
  }
  