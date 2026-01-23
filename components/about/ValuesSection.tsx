import {
  Users,
  Globe,
  Eye,
  Compass
} from "lucide-react"

export default function ValuesSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h4 className="text-[#0d94af] font-bold uppercase tracking-widest text-sm mb-3">
              Our DNA
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#111718]">
              Built on Foundational Beliefs
            </h2>
          </div>

          <p className="text-gray-600 max-w-md text-lg">
            Our values shape the platform, the community, and the code we write.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: Users,
              title: "Community First",
              desc: "Every feature begins with how it helps people connect."
            },
            {
              icon: Globe,
              title: "Global Inclusivity",
              desc: "Travel is for everyone — accessible, respectful, inclusive."
            },
            {
              icon: Eye,
              title: "Radical Transparency",
              desc: "No hidden fees. No obscured data. Trust above all."
            },
            {
              icon: Compass,
              title: "Boundless Discovery",
              desc: "Helping travelers find experiences beyond the obvious."
            }
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-6 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#0d94af]/10 flex items-center justify-center">
                <Icon size={30} className="text-[#0d94af]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#111718]">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {desc}
              </p>

              {/* Accent line */}
              <div className="w-10 h-0.75 bg-[#0d94af] rounded-full mt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
