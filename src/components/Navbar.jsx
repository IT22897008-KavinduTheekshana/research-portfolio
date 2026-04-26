"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">AspireAI</a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#domain" className={activeSection === "domain" ? "active" : ""} onClick={() => setMenuOpen(false)}>Domain</a></li>
          <li><a href="#milestones" className={activeSection === "milestones" ? "active" : ""} onClick={() => setMenuOpen(false)}>Milestones</a></li>
          <li><a href="#documents" className={activeSection === "documents" ? "active" : ""} onClick={() => setMenuOpen(false)}>Documents</a></li>
          <li><a href="#slides" className={activeSection === "slides" ? "active" : ""} onClick={() => setMenuOpen(false)}>Slides</a></li>
          <li><a href="#team" className={activeSection === "team" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-socials">
          <a href="#" title="LinkedIn">
            <svg className="icon-social" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="#" title="GitHub">
            <svg className="icon-social" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="#" title="Instagram">
            <svg className="icon-social" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
        </div>

        <button className="hamburger" id="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
