import Image from "next/image";
export default function MigrationPage() {
    return (
      <main className="bg-[#f8fafc] min-h-screen pb-24">
        {/* Hero */}
        <section className="relative h-56 md:h-72 w-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKwG7cMZ_bsRx3Mm6ZlhUJhIGGOg0GK7uqPxl8f20XaakhVbgt05MbIEy8NK1ymffIlgmrK0cNZM4kCz-rXUe4e5Z1aoCJ6Pa9U1Ep9Mpr8O03DbOYEXgCAgEFDy4RLOFyOfhcBn_1C7mlk9zy6QYtXbsfMNAjShjplTGtGLTK1kPSkXQAeMccjwkalzoTZZrcEGC74RhGbnZ1rMtLONUanfPSdmCt8RgLNEMp9tiPCpze5KtEVEMoH3jrawZdK7g2zDknDKbLK7E"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#f8fafc]" />
        </section>
  
        {/* Card */}
        <section className="-mt-24 relative max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0d94af]/10 flex items-center justify-center mb-6">
              <Image src={"/setlinn.png"} width={60} height={60} alt="setlinn"></Image>
              </div>
  
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Migration Interest Form
              </h1>
  
              <p className="mt-4 text-slate-500 max-w-md mx-auto">
                Share your goals and background to help us guide your migration journey.
              </p>
            </div>
  
            {/* Form */}
            <form className="space-y-14">
              {/* Personal Info */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                  <Input label="Email Address" placeholder="john@example.com" />
                  <Input label="Phone Number" placeholder="+234 800 000 0000" />
                </div>
              </section>
  
              {/* Aspirations */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  
                  <h2 className="text-xl font-semibold">Migration Aspirations</h2>
                </div>
  
                <div className="space-y-6">
                  <Select label="Preferred Destination">
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>Australia</option>
                  </Select>
  
                  <Select label="Migration Purpose">
                    <option>Work</option>
                    <option>Study</option>
                    <option>Business</option>
                    <option>Family</option>
                  </Select>
                </div>
              </section>
  
              {/* Background */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  
                  <h2 className="text-xl font-semibold">Background</h2>
                </div>
  
                <div className="space-y-6">
                  <Input label="Current Profession" placeholder="Software Developer" />
                  <Textarea
                    label="Tell us about your experience"
                    placeholder="Briefly describe your education and work background..."
                  />
                </div>
              </section>
  
              {/* Submit */}
              <div className="pt-6 flex flex-col items-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-[#0d94af] text-white rounded-xl font-bold text-lg hover:shadow-lg transition"
                >
                  Submit Interest
                </button>
  
                <p className="mt-4 text-xs text-slate-400 text-center max-w-sm">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    )
  }
  
  /* Small inline helpers (kept in same file on purpose) */
  
  function Input({ label, placeholder }: { label: string; placeholder: string }) {
    return (
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <input
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0d94af] focus:border-[#0d94af] outline-none"
        />
      </div>
    )
  }
  
  function Select({
    label,
    children,
  }: {
    label: string
    children: React.ReactNode
  }) {
    return (
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0d94af] focus:border-[#0d94af] outline-none bg-white">
          {children}
        </select>
      </div>
    )
  }
  
  function Textarea({
    label,
    placeholder,
  }: {
    label: string
    placeholder: string
  }) {
    return (
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0d94af] focus:border-[#0d94af] outline-none resize-none"
        />
      </div>
    )
  }
  