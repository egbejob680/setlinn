export default function SocialAuthButtons() {
    return (
      <div className="flex flex-col gap-3 mb-8">
        {["Google", "LinkedIn"].map((provider) => (
          <button
            key={provider}
            className="h-12 rounded-xl bg-[#f0f4f4] hover:bg-[#e2e8e8] font-bold flex items-center justify-center gap-3"
          >
            <span>{provider}</span>
          </button>
        ))}
      </div>
    )
  }