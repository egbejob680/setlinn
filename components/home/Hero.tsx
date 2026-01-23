import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="px-6 lg:px-12 py-12 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-[#101f22]">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWKRFIpxJdSZ4NjLHrb5wHgrmhJJkGNpGIRLdTaQE63DDi5LKIs2ZF_1CYKZ2hsjQguNJn0UpDBqbbJ25Wdd6sKafaRlNdbhZxRXpk8HCTI2YPOiYJVjTqCwOBfSwu2xicBwPCJLR-1TRZcQH0qWnVbmGC8p1jcfwWSupZdQhNh4rZIiOudKAnKhtDEVU-TF4HcjC-dMac5Hk4HL5Mx0YSOLo8SNJjbS6KssxyZ57fjzXWbW4kLCl-95QWj0OjNMKrDinQ47HIkp8"
            alt="Global collaboration"
            className="h-full w-full object-cover opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex min-h-130 sm:min-h-150 lg:min-h-170 flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24 max-w-3xl">

          <span className="text-[#0d94af] font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
            Start your journey today
          </span>

          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Global Journey <br className="hidden sm:block" />
            Starts Here
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-medium max-w-xl mb-10">
            Connect with a global community, find scholarships, and navigate your
            work-study abroad journey with expert guides.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0d94af] text-white px-8 sm:px-10 py-4 rounded-xl font-extrabold shadow-xl shadow-[#0d94af]/30 flex items-center justify-center gap-2 hover:opacity-90 transition">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="bg-white/10 border border-white/20 text-white px-8 sm:px-10 py-4 rounded-xl font-bold backdrop-blur-md flex items-center justify-center gap-2 hover:bg-white/20 transition">
              <PlayCircle size={22} />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
