export default function FeaturedArticle() {
    return (
      <section className="mb-14 mt-24">
        <div className="bg-white border border-[#e8eef2] rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-105">
            <div
              className="lg:w-3/5 min-h-70 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGgsx_rAfrOlMHzZubhVGAM6gxfT3-cdDa-jJMzumulqjFqvKd7zBqnJzYGtyCtXGvd2sk28N_Nc-JEwytLgY4e8-8pZFzMkf2Yn3Qaz7e68EkLhnrUClLl1c_GAwHIclK3mTrSmgfJKS9i9WZZKQad1DA58-Hjl7XKuIO-XWDbx7yB2q362tOFknvAGKnMl_LSM3M7QeLUAlQTA1DjHeLIFaTnI5IVTCViCvaj71oz9uaW84J9oKeRwO6ftCR9YYBlPSutERydKI')",
              }}
            />
  
            <div className="lg:w-2/5 p-8 flex flex-col">
              <span className="mb-4 px-3 py-1 rounded-full bg-[#0d94af]/10 text-[#0d94af] text-xs font-bold uppercase w-fit">
                Featured Article
              </span>
  
              <h1 className="text-3xl font-extrabold mb-4">
                Moving to Germany: The Ultimate 2024 Relocation Guide
              </h1>
  
              <p className="text-[#618389] mb-8">
                A complete guide covering visas, blocked accounts, housing,
                healthcare, and settling into life in Germany.
              </p>
  
              <button className="mt-auto bg-[#0d94af] text-white px-6 py-3 rounded-lg font-bold w-fit">
                Read Full Guide →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  