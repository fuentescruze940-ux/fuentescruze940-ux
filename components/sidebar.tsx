"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Moon, Sun, Menu } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsLightTheme(true)
      document.documentElement.classList.add("light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isLightTheme
    setIsLightTheme(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    }
  }

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre Mí" },
    { href: "/habilidades", label: "Habilidades" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <>
      <button
        className="fixed top-6 left-6 z-[101] lg:hidden bg-card border border-border rounded-lg p-3 hover:bg-accent transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[99] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border z-[100] flex flex-col transition-transform lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          <div className="mb-8 pb-6 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-sidebar-foreground mb-1">
              Juan Eduardo
              <br />
              Fuentes Cruz
            </h1>
            <p className="text-sm text-sidebar-foreground/60">Desarrollador Full Stack</p>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-sidebar-primary rounded-r" />
                  )}
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-sidebar-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-sidebar-foreground/60">Tema</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-sidebar-accent hover:bg-sidebar-accent/70 transition-colors"
                aria-label="Cambiar tema"
              >
                {isLightTheme ? (
                  <Moon className="w-4 h-4 text-sidebar-foreground" />
                ) : (
                  <Sun className="w-4 h-4 text-sidebar-foreground" />
                )}
              </button>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/juaneduardo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/juaneduardo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
