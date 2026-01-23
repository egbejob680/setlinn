import { Globe } from "lucide-react"

export default function RegisterHero() {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-center p-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBihvEDdjs_Ub4Z3jYFPzsSsvgI14dKT2_0_SqlXJ0IvzVGufFhRcDKnceniQFjFHgbsyOerBLnLnCpKXq5r-7b9qQ48kwWImM2JgETMaBe2BFhQsOE0hkeP0-EIbVjx9InywEWxHKtFY_cOjgqnCgUAB_HTxAdkuJI_Lte9JCwLyn7_DMATFywNYKhsiJmuaxm1Bu68DgUmaiB8iPS3HW8DrW5zEOSwtZjmgUqSK5ArobwRmB0vHpAogUqbju1vOWVVJK11xoh1hY')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-[#0d94af] p-2 rounded-lg">
            <Globe className="text-white w-7 h-7" />
          </div>
          <span className="text-white text-2xl font-extrabold tracking-tight">
            Setlinn
          </span>
        </div>

        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
          Join 50,000+ members on their journey abroad.
        </h1>

        <p className="text-white/90 text-lg leading-relaxed">
          Connect with professionals networking globally. Get expert guidance,
          find housing, and secure jobs in your new destination.
        </p>

        {/* Avatars */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB00FItI6a8MPcU0tKDBZypcIgBuEhD_KT4mKRNVGOgC2efLt9q6k1QlVY0hza4q7_NMuNp94rlrf5YohVV5WLYUwbzy588rmCLMfFGrQwT1Rs-v20EaqXMe7cy59gBkUJ23klwcHGfZ81g-LahQl6EQpSL14QxqVEiPe1-0XpPjrThQJLVttQx3g0N8jnnMTSxkJtACBe-FVErBPjQ5oXqHUFwQ6CEN1ZrXFTycIa0myvr2BK2HR2_Cx8CdMMy9uOP-bOSWTgDBio",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCoizCqDlebZgxi6KYVVSOQiB_JmtOYpy-jcySNwgiGt-9VWnT7s5G10QGQZEu1CKjP-UfHbsuVXOVgLnjxqTp_b-7qGB22UZ1X1XR_gN3tFTubp2mVNSwXuyXGgboZCbr1-_Bc-SypvdF3v0wVZMDC5nS4_D2J7DfpWdHr1uhHBcla7bmBPepgHkIbodXnuJVC7MfajOqsY5WUQ00hF1KGDBAdW1MVWu6RxIrfBpL-QjDBug_T7XwgyrWmu09HfZc8S8hWBYM9p1Y",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB26hsiq6rIfanO-NUtAJZQyAJnNwLyrce1TcWUNX_2Uz_pnj0i_XOhn9X_YtRTM9IXWMl6AtjHT6ikjH9U0S9Xr51QGCayeS5kcDhqi78zyrETlSE5EUL5DDMJWDHzAUIVB1OK6qTOAoRyyIPMKw_yol1Zs0pmdOTKEA027egICxYTbf127L-xeE4zQpMsXxNFW2ooux6f5wbBNiMA6sCM9nS9n7tZKIiZJB-dcndN62lU8po0-zyAuFDg6aVfwpDI1oaiBuOPx1g",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-10 w-10 rounded-full border-2 border-white"
              />
            ))}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0d94af] text-xs font-bold text-white">
              +50k
            </div>
          </div>

          <p className="text-white text-sm font-medium">
            Trusted by expats worldwide
          </p>
        </div>
      </div>
    </div>
  )
}
