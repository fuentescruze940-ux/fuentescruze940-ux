import Link from "next/link"
import { BookOpen, Briefcase, Mail, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Juan Eduardo
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Desarrollador Full Stack & Creador de Contenido
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Apasionado por crear experiencias digitales excepcionales. Especializado en desarrollo web, arquitectura
              de software y tecnologías modernas.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/proyectos" className="btn-primary">
              <Briefcase className="w-5 h-5" />
              Ver Proyectos
            </Link>
            <Link href="/blog" className="btn-secondary">
              <BookOpen className="w-5 h-5" />
              Leer Blog
            </Link>
            <Link href="/contacto" className="btn-secondary">
              <Mail className="w-5 h-5" />
              Contactar
            </Link>
          </div>

          <div className="flex gap-6 pt-8">
            <a
              href="https://github.com/juaneduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/juaneduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
