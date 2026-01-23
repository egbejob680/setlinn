export default function OurStorySection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-275 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div
              className="aspect-4/5 rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden group"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrqbLM8rgKTf8ZgwEewDTzS9k5UufTGYta-YQM344wHoJFUnRcrqqRAV_uVbQN2CRUZ9WSTzwnq7YNWFOVLluucE4RccWCPoaEM9DS95HbtUJth6hKZHjxEeyUBewDb0Lg2mvtlMR65mV_bd5GX6nRZLcd0mh4254DB0IloU00Q5Ea1grAeJDyaDx5FIwmHm2BiE0VizjBnq3-uMnx--Tz7Zql-U3edyZYubkcRVKjM5Brs4kOWQvFB8MYs5gJaIB1GvXqfQxvuqQ')"
              }}
            >
              <div className="absolute inset-0 bg-[#0d94af]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl bg-[#0d94af] flex items-center justify-center p-8 text-white md:flex shadow-xl">
              <p className="text-lg font-bold leading-tight">
                10+ Years of Shared Discovery
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h4 className="text-[#0d94af] font-bold uppercase tracking-widest text-sm mb-4">
                Our Genesis
              </h4>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                A Journey of a Thousand Miles
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Setlinn began with a simple observation: that travel should be
                more than just visiting places—it should be about the people we
                meet and the shared humanity we discover. Our founders, avid
                travelers themselves, realized that the most impactful moments
                weren't the monuments, but the conversations in local cafes and
                the unexpected kindness of strangers.
              </p>

              <p>
                Our platform was built to bridge the gap between discovery and
                community. We don't just provide a tool for travel; we provide a
                conduit for empathy. By connecting travelers with local insights
                and a global network of peers, we're making the world a smaller,
                friendlier place.
              </p>
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center gap-2 text-[#0d94af] font-bold text-lg group">
                Read the full manifesto
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
