// components/community/SkeletonPost.tsx
export default function SkeletonPost() {
    return (
      <div className="animate-pulse bg-white  rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e5eaea] p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 " />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300  rounded w-1/3" />
            <div className="h-3 bg-gray-300 rounded w-1/4" />
          </div>
        </div>
  
        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3" />
        <div className="h-3 bg-gray-300 rounded w-full mb-4" />
  
        {/* Image placeholder */}
        <div className="w-full h-48 bg-gray-300 rounded mb-4" />
  
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <div className="h-5 w-16 bg-gray-300 rounded" />
          <div className="h-5 w-20 bg-gray-300 rounded" />
        </div>
  
        {/* Engagement bar */}
        <div className="h-8 bg-gray-300  rounded w-full" />
      </div>
    );
  }
  