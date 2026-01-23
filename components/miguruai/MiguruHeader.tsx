import { X } from "lucide-react"

export default function MiguruHeader({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#dbe4e6]">
      <div>
        <h4 className="font-bold text-[#111718]">Miguru AI</h4>
        <p className="text-xs text-[#618389]">
          Your global move assistant
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-black/5"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
