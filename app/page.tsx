import Link from "next/link"
import { BookOpen, Briefcase, Mail, Github, Linkedin, Sparkles, Code2, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              Disponible para proyectos
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient">
                Juan Eduardo
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80">
              Desarrollador Full Stack & Ingeniero de Software
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Transformo ideas en experiencias digitales excepcionales. Especializado en desarrollo web moderno,
              arquitectura de sistemas escalables y tecnologías de vanguardia.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Proyectos
            </Link>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border-2 border-border text-foreground rounded-xl font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Leer Blog
            </Link>

            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border-2 border-border text-foreground rounded-xl font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contactar
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Código limpio y mantenible</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-2 rounded-lg bg-primary/10">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimización y velocidad</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Modern Stack</h3>
                <p className="text-sm text-muted-foreground">Últimas tecnologías</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/juaneduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/juaneduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
