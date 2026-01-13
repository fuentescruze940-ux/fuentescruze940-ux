"use client"

import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión",
      description:
        "Aplicación web full-stack para gestión empresarial con dashboard interactivo y reportes en tiempo real.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico con sistema de pagos integrado y gestión de inventario.",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Task Manager",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
      tags: ["TypeScript", "Firebase", "PWA"],
    },
  ]

  return (
    <section id="proyectos" className="section projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a href="#" className="project-link" aria-label="Ver proyecto">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          gap: 1.5rem;
        }

        .project-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 1.75rem;
          transition: var(--transition);
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .project-link {
          color: var(--text-muted);
          transition: var(--transition);
          display: flex;
        }

        .project-link:hover {
          color: var(--accent);
        }

        .project-description {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          padding: 0.375rem 0.75rem;
          background-color: var(--bg-secondary);
          color: var(--accent);
          border-radius: 0.25rem;
          font-size: 0.8125rem;
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  )
}
