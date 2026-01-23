export function Input({ label, type, placeholder, icon }: any) {
    return (
    <div>
    <label className="block text-sm font-bold mb-2">{label}</label>
    <div className="relative">
    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#0d94af]">
    {icon}
    </span>
    <input
    type={type}
    placeholder={placeholder}
    className="w-full rounded-xl border py-3.5 pl-11 text-sm focus:border-primary focus:ring-primary"
    />
    </div>
    </div>
    )
    }