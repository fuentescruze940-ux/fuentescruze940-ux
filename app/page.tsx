import Hero from "@/components/hero"
import About from "@/components/about"
import Blog from "@/components/blog"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2026 Juan Eduardo Fuentes Cruz. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
