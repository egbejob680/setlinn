"use client"

import { useState } from "react"
import MiguruChat from "./MiguruChat"
import { Bot } from "lucide-react"

export default function MiguruFAB() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <MiguruChat onClose={() => setOpen(false)} />}

      <div className="fixed bottom-6 right-4 sm:right-8 z-50 group">
        {/* Tooltip */}
        <div className="hidden sm:block bg-white px-4 py-2 rounded-xl shadow-xl border border-[#0d94af]/20 opacity-0 group-hover:opacity-100 mb-2 transition">
          <p className="text-sm font-semibold">
            Hi, I’m Miguru! Need help?
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            h-14 w-14 sm:h-16 sm:w-16
            rounded-full bg-[#0d94af] text-white
            shadow-2xl shadow-[#0d94af]/40
            hover:scale-110 transition
            flex items-center justify-center
          "
        >
          <Bot className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>
    </>
  )
}
