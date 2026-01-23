type Props = {
  icon: string
  title: string
  description: string
  cta: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  cta,
}: Props) {
  return (
    <div className="group flex flex-col gap-6 rounded-2xl border border-[#dbe4e6] bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
      <div className="size-14 rounded-2xl bg-[#0d94af]/10 flex items-center justify-center text-[#0d94af] group-hover:bg-[#0d94af] group-hover:text-white transition">
        <span className="material-symbols-outlined text-[32px]!">
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-extrabold">{title}</h3>
        <p className="text-[#618389] mt-2">{description}</p>
      </div>

      <button className="mt-auto text-[#0d94af] text-sm font-bold underline-offset-4 hover:underline">
        {cta}
      </button>
    </div>
  )
}
