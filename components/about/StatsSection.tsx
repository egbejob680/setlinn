export default function StatsSection() {
    return (
      <section className="py-24 px-6 bg-[#f0f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#0d94af] font-bold uppercase tracking-widest text-sm mb-3">
              Impact in Data
            </h4>
            <h2 className="text-4xl font-black">Numbers that Matter</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="md:col-span-2 bg-white p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#0d94af]/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#0d94af] text-3xl">
                  public
                </span>
              </div>
              <h3 className="text-5xl font-black mb-2">150+</h3>
              <p className="text-gray-500 uppercase text-sm font-semibold">
                Countries Covered
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-[#0d94af] p-10 rounded-3xl text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl">
                  groups
                </span>
              </div>
              <h3 className="text-5xl font-black mb-2">500k+</h3>
              <p className="uppercase text-sm font-semibold text-white/80">
                Active Travelers
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#0d94af]/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[#0d94af] text-3xl">
                  stars
                </span>
              </div>
              <h3 className="text-5xl font-black mb-2">4.9/5</h3>
              <p className="text-gray-500 uppercase text-sm font-semibold">
                User Rating
              </p>
            </div>
  
            {/* Wide CTA */}
            <div className="md:col-span-4 bg-[#111718] text-white p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-4xl font-black mb-4">
                  10 Million+ Miles Shared
                </h3>
                <p className="text-gray-400 text-lg max-w-xl">
                  Every mile represents a connection made and a boundary blurred.
                </p>
              </div>
  
              <button className="bg-[#0d94af] px-10 py-5 rounded-2xl font-bold text-lg">
                Start Your Miles
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  