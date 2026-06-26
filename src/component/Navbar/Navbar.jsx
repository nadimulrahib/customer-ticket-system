import { useState, useEffect } from "react";

const navLinks = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[18px] font-bold text-zinc-900 tracking-tight no-underline shrink-0"
        >
          CS <span className="text-violet-600 font-normal">—</span> Ticket
          System
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block px-3.5 py-1.5 rounded-lg text-sm font-medium text-zinc-500 no-underline
                           transition-all duration-150 hover:text-violet-600 hover:bg-violet-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700
                       text-white text-sm font-semibold px-4 py-2 rounded-lg no-underline
                       shadow-[0_2px_8px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_16px_rgba(124,58,237,0.35)]
                       transition-all duration-150 whitespace-nowrap"
          >
            <span className="text-base leading-none">+</span>
            New Ticket
          </a>

          {/* Hamburger Button — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-zinc-500
                       hover:bg-violet-50 hover:text-violet-600 transition-colors duration-150
                       border-none bg-transparent cursor-pointer"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-50
                    ${menuOpen ? "max-h-96 border-t border-violet-100" : "max-h-0"}`}
      >
        <ul className="list-none m-0 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-lg text-[15px] font-medium text-zinc-700
                           no-underline transition-all duration-150 hover:text-violet-600 hover:bg-violet-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
