import { PlaneTakeoff } from "lucide-react";

export default function FinalCTA() {
    return (
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-[#0d94af]/10 flex items-center justify-center text-[#0d94af]">
            <span className="material-symbols-outlined text-4xl">
            <PlaneTakeoff size={24} />
            </span>
          </div>
  
          <h2 className="text-4xl md:text-5xl font-black">
            Ready to see the world differently?
          </h2>
  
          <p className="text-lg text-gray-600">
            Join over 500,000 travelers building the future of global connection.
          </p>
  
          <button className="bg-[#0d94af] text-white px-12 py-5 rounded-2xl font-extrabold text-xl">
            Start Your Journey Now
          </button>
        </div>
      </section>
    )
  }
  