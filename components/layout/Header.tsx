"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-[#dbe4e6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-[#0d94af] rounded-lg p-1.5 text-white">
            <Compass size={22} />
          </div>
          <h2 className="text-[#111718] text-xl font-extrabold tracking-tight">
            Setlinn
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/community">Community</NavLink>
          <NavLink href="/articles">Articles & Guides</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/migration">Migration Form</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-bold px-4 py-2 hover:bg-black/5 rounded-lg"
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="md:hidden fixed inset-x-0 top-20 bottom-0 z-50 bg-[#0d94af] text-white flex flex-col px-6 pt-6 gap-6 overflow-y-auto transition-transform duration-300">
            <MobileLink href="/community" onClick={() => setOpen(false)}>
              Community
            </MobileLink>
            <MobileLink href="/articles" onClick={() => setOpen(false)}>
              Articles & Guides
            </MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="/migration" onClick={() => setOpen(false)}>
              Migration Form
            </MobileLink>

            <div className="border-t border-white/40 pt-6 flex flex-col gap-4">
              <MobileLink href="/login" onClick={() => setOpen(false)}>
                Log In
              </MobileLink>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="bg-white text-[#0d94af] font-bold text-center py-3 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

/* ================= HELPERS ================= */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm font-semibold hover:text-[#0d94af]">
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-semibold text-white"
    >
      {children}
    </Link>
  );
}
