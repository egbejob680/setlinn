export default function HeroSection() {
    return (
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBb3T8RkNplNSihbl1LOGbvpp5PrMmKHCrmlp2mJoHNGFlfrpMpQ2Upa64Pnib5Mm5J8trEzJs5cZ8m3WWLgHARUILPDvztXsvLV9gEnJJLoekZ4cq1oMS6pIRqiYnCg-qZPA-m0scXZN6cf2sV99o8uHVVsvPmDseuRJOhlrl3RTNg-zsaH85SHcAbCyUIeQ5Bl5BGcSDyRC2FX_zqWKDtL6RN9Y7-SZiP46q5TtviliyjeKtvwYncM1Uswk62lNyO09oC6F25o2A')",
          }}
        />
  
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
            Established 2024
          </span>
  
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-6">
            Connecting the World, <br />
            <span className="text-[#0d94af]">One Journey</span> at a Time.
          </h1>
  
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Empowering global citizens through seamless travel experiences and
            meaningful connections across borders.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold">
              Join our mission
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10">
              Watch our story
            </button>
          </div>
        </div>
      </section>
    )
  }
  