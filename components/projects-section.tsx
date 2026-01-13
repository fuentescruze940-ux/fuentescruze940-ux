"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Sistema de Consultoría en Construcción",
    description:
      "Sistema completo para gestión de consultoría en construcción con módulos de contratos, clientes, mantenimiento, servicios y terrenos.",
    image: "/images/proyecto-construccion.png",
    tags: ["Web App", "Base de Datos", "Gestión"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Sistema de seguimiento de egresados",
    description:
      "Plataforma para la Universidad Mexiquense del Bicentenario para el registro y seguimiento de egresados con gestión de datos completa.",
    image: "/images/proyecto-egresados.jpg",
    tags: ["Sistema", "Base de Datos", "Universidad"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Traslaciones de figuras",
    description:
      "Aplicación matemática para visualización y cálculo de traslaciones geométricas con historial de operaciones.",
    image: "/images/proyecto-traslaciones.jpg",
    tags: ["Matemáticas", "Gráficos", "Educativo"],
    codeUrl: "#",
    demoUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Proyectos</h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo y solución
              de problemas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{project.title}</h3>

                  <p className="text-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
