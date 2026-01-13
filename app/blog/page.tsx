import Link from "next/link"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

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
      featured: true,
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
      featured: true,
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
      featured: false,
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
      featured: false,
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
      featured: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="animate-fade-in">
        <h1 className="section-title">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Comparto mis experiencias, aprendizajes y conocimientos sobre desarrollo web, ingeniería de software y
          tecnología moderna.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="card-modern group relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {post.featured && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}

            <div className="relative">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-semibold border border-primary/20">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="flex items-center gap-1 px-3 py-1.5 bg-accent border border-border rounded-lg text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-muted-foreground mb-5 leading-relaxed">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-primary/20"
              >
                Leer artículo completo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
