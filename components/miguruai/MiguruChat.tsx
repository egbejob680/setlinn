"use client"

import { useState } from "react"
import MiguruHeader from "./MiguruHeader"
import MiguruMessages from "./MiguruMessages"
import MiguruInput from "./MiguruInput"
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
    }, 700)
  }

  return (
    <div
      className="
        fixed bottom-24 right-4 sm:right-8
        w-[92vw] sm:w-[360px]
        max-h-[75vh]
        bg-white rounded-3xl
        shadow-2xl border border-[#dbe4e6]
        flex flex-col z-50
        animate-in fade-in slide-in-from-bottom-4
      "
    >
      <MiguruHeader onClose={onClose} />
      <MiguruMessages messages={messages} />
      <MiguruInput onSend={sendMessage} />
    </div>
  )
}
