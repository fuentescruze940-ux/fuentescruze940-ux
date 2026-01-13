import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Implementando Microservicios con Docker y Kubernetes",
      excerpt:
        "Aprende cómo diseñar, desarrollar y desplegar una arquitectura de microservicios escalable utilizando contenedores Docker y orquestación con Kubernetes.",
      date: "15 de Enero, 2026",
      readTime: "8 min",
      category: "DevOps",
      slug: "microservicios-docker-kubernetes",
    },
    {
      id: 2,
      title: "Optimización de Rendimiento en Aplicaciones React",
      excerpt:
        "Descubre técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React, incluyendo lazy loading, memoization y code splitting.",
      date: "8 de Enero, 2026",
      readTime: "6 min",
      category: "Frontend",
      slug: "optimizacion-react",
    },
    {
      id: 3,
      title: "Diseño de Redes Empresariales: Mejores Prácticas",
      excerpt:
        "Una guía completa sobre cómo planificar y configurar infraestructuras de red robustas para empresas, incluyendo segmentación con VLANs y redundancia.",
      date: "2 de Enero, 2026",
      readTime: "10 min",
      category: "Networking",
      slug: "diseno-redes-empresariales",
    },
    {
      id: 4,
      title: "Next.js 16: Nuevas Características y Mejoras",
      excerpt:
        "Explora las últimas características de Next.js 16, incluyendo mejoras en el rendimiento, nuevas APIs y cambios en el sistema de caché.",
      date: "28 de Diciembre, 2025",
      readTime: "7 min",
      category: "Web Development",
      slug: "nextjs-16-novedades",
    },
    {
      id: 5,
      title: "Seguridad en Aplicaciones Web: Guía Completa",
      excerpt:
        "Todo lo que necesitas saber sobre seguridad web, desde autenticación y autorización hasta protección contra vulnerabilidades comunes como XSS y CSRF.",
      date: "20 de Diciembre, 2025",
      readTime: "12 min",
      category: "Security",
      slug: "seguridad-aplicaciones-web",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="section-title">Blog</h1>

      <p className="text-lg text-muted-foreground mb-12">
        Comparto mis experiencias, aprendizajes y conocimientos sobre desarrollo web, ingeniería de software y
        tecnología.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="card-modern group hover:border-primary/50">
            <div className="flex items-start justify-between mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              Leer más
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
