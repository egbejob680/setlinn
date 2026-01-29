import {
  Compass,
  Globe,
  Share2,
  Link as LinkIcon,
  Send,
  Mail,
} from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#dbe4e6] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#0d94af]/10 rounded-lg p-2 text-white">
              <Image src={"/setlinn.png"} width={50} height={50} alt="setlinn"></Image>
              </div>
              <h2 className="text-[#111718] text-lg font-extrabold tracking-tight">
                Setlinn
              </h2>
            </div>

            <p className="text-[#618389] text-sm leading-relaxed mb-6 max-w-sm">
              Helping the next generation of global citizens find their place in
              the world.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#618389] hover:text-[#0d94af]"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="text-[#618389] hover:text-[#0d94af]"
                aria-label="Share"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="text-[#618389] hover:text-[#0d94af]"
                aria-label="Link"
              >
                <LinkIcon size={20} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#111718]">
              Platform
            </h4>
            <FooterLink text="About Us" />
            <FooterLink text="How it Works" />
            <FooterLink text="Scholarships" />
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#111718]">
              Support
            </h4>
            <FooterLink text="Contact" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms" />
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#111718]">
              Newsletter
            </h4>
            <p className="text-[#618389] text-sm">
              Get the latest migration guides.
            </p>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#618389]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#f6f8f8] border border-[#dbe4e6] rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d94af]/40"
                />
              </div>

              <button
                aria-label="Subscribe"
                className="bg-[#0d94af] text-white p-2 rounded-lg hover:opacity-90 transition"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#dbe4e6] text-center">
          <p className="text-[#618389] text-sm">
            © 2026 Setlinn. Designed for the global pathfinder.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* Helper */
function FooterLink({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="text-[#618389] text-sm hover:text-[#0d94af]"
    >
      {text}
    </a>
  )
}
