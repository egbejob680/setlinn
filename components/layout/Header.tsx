import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#dbe4e6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-[#0d94af] rounded-lg p-1.5 text-white">
            <span className="material-symbols-outlined text-[24px]!">
              explore
            </span>
          </div>
          <h2 className="text-[#111718] text-xl font-extrabold tracking-tight">
            Setlinn
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/community"
            className="text-sm font-semibold hover:text-[#0d94af]"
          >
            Community
          </Link>

          <Link
            href="/articles"
            className="text-sm font-semibold hover:text-[#0d94af]"
          >
            Articles & Guides
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold hover:text-[#0d94af]"
          >
           About
          </Link>
          <Link
            href="/migration"
            className="text-sm font-semibold hover:text-[#0d94af]"
          >
           Migration Form
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:flex text-sm font-bold px-4 py-2 hover:bg-black/5 rounded-lg"
          >
            Log In
          </Link>

          <Link
            href="/register"
            className="bg-[#0d94af] text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-[#0d94af]/20"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
