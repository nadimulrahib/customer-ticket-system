import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px 0 rgba(80,60,180,0.07)" : "none",
        transition: "box-shadow 0.25s, border-color 0.25s",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#18181b",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          CS{" "}
          <span style={{ color: "#7c3aed", fontWeight: 400 }}>—</span> Ticket
          System
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#52525b",
                  textDecoration: "none",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#7c3aed";
                  e.target.style.background = "#f5f3ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#52525b";
                  e.target.style.background = "transparent";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#7c3aed",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "8px 18px",
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: "0 2px 8px 0 rgba(124,58,237,0.18)",
              transition: "background 0.15s, box-shadow 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6d28d9";
              e.currentTarget.style.boxShadow =
                "0 4px 16px 0 rgba(124,58,237,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7c3aed";
              e.currentTarget.style.boxShadow =
                "0 2px 8px 0 rgba(124,58,237,0.18)";
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> New Ticket
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="hamburger-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              borderRadius: 8,
              color: "#52525b",
              transition: "background 0.15s",
            }}
          >
            {menuOpen ? (
              /* X icon */
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
              /* Hamburger icon */
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

      {/* Mobile Dropdown */}
      <div
        className="mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 400 : 0,
          transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
          background: "#fafafa",
          borderTop: menuOpen ? "1px solid #f0eeff" : "none",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "12px 16px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 14px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#3f3f46",
                  textDecoration: "none",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#7c3aed";
                  e.target.style.background = "#f5f3ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#3f3f46";
                  e.target.style.background = "transparent";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;