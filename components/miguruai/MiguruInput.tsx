"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function MiguruInput({
  onSend,
}: {
  onSend: (text: string) => void
}) {
  const [value, setValue] = useState("")

  function handleSend() {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="p-3 border-t border-[#dbe4e6] flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask Miguru..."
        className="flex-1 h-11 rounded-xl border border-[#dbe4e6] px-3 text-sm focus:border-[#0d94af] focus:ring-1 focus:ring-[#0d94af] outline-none"
      />
      <button
        onClick={handleSend}
        className="size-11 rounded-xl bg-[#0d94af] text-white flex items-center justify-center"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  )
}
