import { ImageIcon, MapPin, Smile } from "lucide-react";
import Image from "next/image";

export default function ComposerCard() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5 border border-[#e5eaea]">
      <div className="flex gap-4">
        <Image
          src="/avatar/Ellipse 2.svg"
          alt="User avatar"
          width={18}
          height={6}
          className="size-10 rounded-full border border-blue-500/20 bg-center bg-cover"
        />

        <div className="flex-1">
          <textarea
            placeholder="Share your latest global discovery..."
            className="w-full bg-transparent resize-none text-lg placeholder:text-[#bacbce] focus:outline-none min-h-15"
          />

          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <div className="flex gap-2 text-[#618389]">
              <IconBtn icon={<ImageIcon size={20} />} />
              <IconBtn icon={<MapPin size={20} />} />
              <IconBtn icon={<Smile size={20} />} />
            </div>

            <button className="bg-[#0d94af] text-white font-bold py-2 px-6 rounded-xl shadow-lg shadow-[#0d94af]/20">
              Post Gist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 hover:bg-gray-50 rounded-lg transition">
      {icon}
    </button>
  );
}
