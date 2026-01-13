import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function Proyectos() {
  const projects = [
    {
      title: "Sistema de Consultoría en Construcción",
      description:
        "Plataforma web completa para gestión de proyectos de construcción con seguimiento en tiempo real, control de presupuestos y generación de reportes automatizados.",
      image: "construction+management+system+dashboard",
      tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistema de Seguimiento de Egresados",
      description:
        "Aplicación para universidades que permite rastrear la trayectoria profesional de egresados, con análisis de datos y métricas de inserción laboral.",
      image: "graduate+tracking+system+interface",
      tags: ["Next.js", "MongoDB", "Chart.js", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Simulador de Transformaciones Geométricas",
      description:
        "Herramienta interactiva para visualizar transformaciones de figuras en 2D y 3D, ideal para estudiantes de matemáticas y física.",
      image: "geometric+transformation+visualization",
      tags: ["JavaScript", "Canvas API", "Three.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistema de Gestión de Redes",
      description:
        "Dashboard administrativo para monitoreo y configuración de infraestructuras de red, con alertas en tiempo real y visualización de topología.",
      image: "network+monitoring+dashboard",
      tags: ["Python", "Flask", "SNMP", "React"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Tienda en línea completa con carrito de compras, procesamiento de pagos, gestión de inventario y panel de administración.",
      image: "ecommerce+platform+interface",
      tags: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Personal CMS",
      description:
        "Sistema de gestión de contenidos personalizado con editor Markdown, optimización SEO y analíticas integradas.",
      image: "blog+cms+dashboard",
      tags: ["Next.js", "MDX", "Supabase"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="section-title">Proyectos</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="card-modern group">
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-muted">
              <Image
                src={`/.jpg?height=300&width=500&query=${project.image}`}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href={project.demoUrl} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Link>
              <Link
                href={project.githubUrl}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="w-4 h-4" />
                Código
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
