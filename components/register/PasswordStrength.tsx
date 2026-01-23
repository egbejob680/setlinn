export default function PasswordStrength() {
    return (
      <>
        <div className="flex gap-1 h-1.5 w-full bg-[#f0f4f4] rounded-full overflow-hidden">
          <div className="w-1/3 bg-[#0d94af]" />
          <div className="w-1/3 bg-[#dbe4e6]" />
          <div className="w-1/3 bg-[#dbe4e6]" />
        </div>
        <p className="text-[11px] text-[#618389] mt-1.5">
          Use at least 8 characters with letters, numbers, and symbols.
        </p>
      </>
    )
  }
  