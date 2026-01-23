"use client"

import { useState } from "react"
import MiguruChat from "./MiguruChat"
import { Bot } from "lucide-react"

export default function MiguruFAB() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <MiguruChat onClose={() => setOpen(false)} />}

      <div className="fixed bottom-8 right-8 z-60 group">
        <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-[#0d94af]/20 opacity-0 group-hover:opacity-100 mb-2 transition">
          <p className="text-sm font-semibold">
            Hi, I’m Miguru! Need help?
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="size-16 rounded-full bg-[#0d94af] text-white shadow-2xl shadow-[#0d94af]/40 hover:scale-110 transition flex items-center justify-center"
        >
          <Bot className="w-8 h-8" />
        </button>
      </div>
    </>
  )
}
