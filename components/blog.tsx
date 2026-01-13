"use client"

export default function Blog() {
  const posts = [
    {
      date: "15 Enero 2026",
      title: "Cómo construir aplicaciones web modernas",
      excerpt:
        "Una guía completa sobre las mejores prácticas para desarrollar aplicaciones web escalables y mantenibles en 2026.",
    },
    {
      date: "10 Enero 2026",
      title: "Mi experiencia con TypeScript",
      excerpt: "Por qué TypeScript se ha convertido en mi herramienta favorita para desarrollo frontend y backend.",
    },
    {
      date: "5 Enero 2026",
      title: "Optimización de rendimiento en React",
      excerpt: "Técnicas y estrategias para mejorar el rendimiento de tus aplicaciones React.",
    },
  ]

  return (
    <section id="blog" className="section blog-section">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-card-header">
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <a href="#" className="blog-card-link">
              Leer más →
            </a>
          </article>
        ))}
      </div>

      <style jsx>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .blog-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: var(--transition);
        }

        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .blog-card-header {
          margin-bottom: 1rem;
        }

        .blog-date {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .blog-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .blog-card-excerpt {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .blog-card-link {
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9375rem;
          transition: var(--transition);
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
