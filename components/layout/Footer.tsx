export default function Footer() {
    return (
      <footer className="bg-white border-t border-[#dbe4e6] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#0d94af] rounded-lg p-1.5 text-white">
                  <span className="material-symbols-outlined text-[20px]!">
                    explore
                  </span>
                </div>
                <h2 className="text-[#111718] text-lg font-extrabold tracking-tight">
                  Setlinn
                </h2>
              </div>
  
              <p className="text-[#618389] text-sm leading-relaxed mb-6">
                Helping the next generation of global citizens find their place in
                the world.
              </p>
  
              <div className="flex gap-4">
                <a className="text-[#618389] hover:text-[#0d94af]" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="text-[#618389] hover:text-[#0d94af]" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="text-[#618389] hover:text-[#0d94af]" href="#">
                  <span className="material-symbols-outlined">link</span>
                </a>
              </div>
            </div>
  
            {/* Platform */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#111718]">
                Platform
              </h4>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                About Us
              </a>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                How it Works
              </a>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                Scholarships
              </a>
            </div>
  
            {/* Support */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#111718]">
                Support
              </h4>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                Contact
              </a>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                Privacy Policy
              </a>
              <a className="text-[#618389] text-sm hover:text-[#0d94af]" href="#">
                Terms
              </a>
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
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#f6f8f8] border border-[#dbe4e6] rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#0d94af]/40"
                />
                <button className="bg-[#0d94af] text-white p-2 rounded-lg">
                  <span className="material-symbols-outlined">send</span>
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
  
  