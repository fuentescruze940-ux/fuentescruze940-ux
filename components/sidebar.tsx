"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsLightTheme(true)
      document.body.classList.add("light-theme")
    }
  }, [])

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
    document.body.classList.toggle("light-theme")
    localStorage.setItem("theme", isLightTheme ? "dark" : "light")
  }

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <aside className={`sidebar ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h1 className="name">
              Juan Eduardo
              <br />
              Fuentes Cruz
            </h1>
            <p className="tagline">Desarrollador & Creador</p>
          </div>

          <nav className="navigation">
            <a
              href="#inicio"
              className={`nav-link ${activeSection === "inicio" ? "active" : ""}`}
              onClick={() => handleNavClick("inicio")}
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className={`nav-link ${activeSection === "sobre-mi" ? "active" : ""}`}
              onClick={() => handleNavClick("sobre-mi")}
            >
              Sobre Mí
            </a>
            <a
              href="#blog"
              className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
              onClick={() => handleNavClick("blog")}
            >
              Blog
            </a>
            <a
              href="#proyectos"
              className={`nav-link ${activeSection === "proyectos" ? "active" : ""}`}
              onClick={() => handleNavClick("proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className={`nav-link ${activeSection === "contacto" ? "active" : ""}`}
              onClick={() => handleNavClick("contacto")}
            >
              Contacto
            </a>
          </nav>

          <div className="social-links">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
          </div>

          <div className="theme-toggle">
            <button onClick={toggleTheme} aria-label="Cambiar tema">
              {isLightTheme ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        <style jsx>{`
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 280px;
            height: 100vh;
            background-color: var(--bg-secondary);
            border-right: 1px solid var(--border);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            z-index: 100;
            transition: var(--transition);
          }

          .sidebar-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
          }

          .sidebar-header {
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border);
          }

          .name {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
          }

          .tagline {
            font-size: 0.95rem;
            color: var(--text-secondary);
            font-weight: 300;
          }

          .navigation {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          .nav-link {
            padding: 0.75rem 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 0.5rem;
            transition: var(--transition);
            font-weight: 400;
            position: relative;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 0;
            background-color: var(--accent);
            transition: var(--transition);
            border-radius: 0 2px 2px 0;
          }

          .nav-link:hover,
          .nav-link.active {
            color: var(--text-primary);
            background-color: var(--bg-card);
          }

          .nav-link.active::before {
            height: 60%;
          }

          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: auto;
          }

          .social-links :global(a) {
            color: var(--text-muted);
            transition: var(--transition);
            padding: 0.5rem;
            display: flex;
          }

          .social-links :global(a:hover) {
            color: var(--accent);
            transform: translateY(-2px);
          }

          .theme-toggle {
            padding-top: 1rem;
            border-top: 1px solid var(--border);
          }

          .theme-toggle button {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .theme-toggle button:hover {
            color: var(--accent);
          }

          .mobile-menu-toggle {
            display: none;
          }

          @media (max-width: 768px) {
            .sidebar {
              left: -280px;
            }

            .sidebar.active {
              left: 0;
            }

            .mobile-menu-toggle {
              display: flex;
              position: fixed;
              top: 1rem;
              left: 1rem;
              z-index: 1001;
              background-color: var(--bg-card);
              border: 1px solid var(--border);
              color: var(--text-primary);
              padding: 0.75rem;
              border-radius: 0.5rem;
              cursor: pointer;
              transition: var(--transition);
            }

            .mobile-menu-toggle:hover {
              background-color: var(--bg-secondary);
              border-color: var(--accent);
            }
          }
        `}</style>
      </aside>
    </>
  )
}
