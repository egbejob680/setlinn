export default function ValuesSection() {
    return (
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h4 className="text-[#0d94af] font-bold uppercase tracking-widest text-sm mb-3">
                Our DNA
              </h4>
              <h2 className="text-4xl md:text-5xl font-black">
                Built on Foundational Beliefs
              </h2>
            </div>
  
            <p className="text-gray-600 max-w-md text-lg">
              Our values shape the platform, the community, and the code we write.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: "diversity_3",
                title: "Community First",
                desc: "Every feature begins with how it helps people connect."
              },
              {
                icon: "language",
                title: "Global Inclusivity",
                desc: "Travel is for everyone — accessible, respectful, inclusive."
              },
              {
                icon: "visibility",
                title: "Radical Transparency",
                desc: "No hidden fees. No obscured data. Trust above all."
              },
              {
                icon: "explore",
                title: "Boundless Discovery",
                desc: "Helping travelers find experiences beyond the obvious."
              }
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-6">
                <div className="border-b-2 border-[#0d94af] w-fit pb-2 text-[#0d94af]">
                  <span className="material-symbols-outlined text-4xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  