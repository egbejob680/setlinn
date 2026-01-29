import { MiguruMessage } from "./types"

export default function MiguruMessages({
  messages,
}: {
  messages: MiguruMessage[]
}) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-[85%] sm:max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
            msg.sender === "user"
              ? "ml-auto bg-[#0d94af] text-white"
              : "bg-[#f0f4f4] text-[#111718]"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  )
}
