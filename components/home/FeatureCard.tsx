import { LucideIcon } from "lucide-react"

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  cta,
}: {
  icon: LucideIcon
  title: string
  description: string
  cta: string
}) {
  return (
    <div className="p-8 rounded-3xl border border-[#dbe4e6] hover:border-[#0d94af]/40 transition group">
      <div className="mb-6 flex items-center justify-center h-14 w-14 rounded-2xl bg-[#0d94af]/10 text-[#0d94af]">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-[#618389] mb-6 leading-relaxed">
        {description}
      </p>

      <button className="text-[#0d94af] font-semibold group-hover:underline">
        {cta} →
      </button>
    </div>
  )
}
