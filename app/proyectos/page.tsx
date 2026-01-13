import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function Proyectos() {
  const projects = [
    {
      title: "Sistema de Consultoría en Construcción",
      description:
        "Plataforma web completa para gestión de proyectos de construcción con seguimiento en tiempo real, control de presupuestos y generación de reportes automatizados. Sistema integral con módulos de planificación, gestión de recursos y análisis predictivo.",
      image: "construction+management+system+dashboard+blue+interface",
      tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Sistema de Seguimiento de Egresados",
      description:
        "Aplicación para universidades que permite rastrear la trayectoria profesional de egresados universitarios, con análisis de datos, métricas de inserción laboral y panel administrativo completo para gestión de registros académicos.",
      image: "graduate+tracking+system+data+table+interface",
      tags: ["Next.js", "MongoDB", "Chart.js", "TypeScript", "Express"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Traslaciones de Figuras Geométricas",
      description:
        "Herramienta interactiva educativa para visualizar transformaciones y traslaciones de figuras geométricas en planos cartesianos. Incluye cálculos matemáticos precisos, visualización en tiempo real y múltiples tipos de transformaciones.",
      image: "geometric+transformation+graph+coordinate+system",
      tags: ["JavaScript", "Canvas API", "D3.js", "HTML5"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="animate-fade-in">
        <h1 className="section-title">Proyectos</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Estos son algunos de los proyectos más destacados en los que he trabajado, aplicando tecnologías modernas y
          mejores prácticas de desarrollo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="card-modern group relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-muted to-muted/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src={`/.jpg?height=400&width=600&query=${project.image}`}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
                  Destacado
                </div>
              )}
            </div>

            <div className="relative">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.demoUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  Código
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
