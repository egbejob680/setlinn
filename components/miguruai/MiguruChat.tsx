"use client"

import MiguruHeader from "./MiguruHeader"
import MiguruMessages from "./MiguruMessages"
import MiguruInput from "./MiguruInput"
import { useState } from "react"
import { MiguruMessage } from "./types"

export default function MiguruChat({
  onClose,
}: {
  onClose: () => void
}) {
  const [messages, setMessages] = useState<MiguruMessage[]>([
    {
      id: "1",
      sender: "miguru",
      text: "Hi 👋 I’m Miguru. Where are you planning to move or study?",
    },
  ])

  function sendMessage(text: string) {
    const userMsg: MiguruMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
    }

    setMessages((prev) => [...prev, userMsg])

    // MOCK AI RESPONSE (replace later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "miguru",
          text:
            "Great choice! I can help with scholarships, visas, or housing.",
        },
      ])
    }, 800)
  }

  return (
    <div className="fixed bottom-28 right-8 w-90 max-h-130 bg-white rounded-3xl shadow-2xl border border-[#dbe4e6] flex flex-col z-70 animate-in fade-in slide-in-from-bottom-4">
      <MiguruHeader onClose={onClose} />
      <MiguruMessages messages={messages} />
      <MiguruInput onSend={sendMessage} />
    </div>
  )
}
