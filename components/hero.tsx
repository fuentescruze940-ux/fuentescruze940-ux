"use client"

export default function Hero() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="hero-content">
        <p className="hero-intro">Hola, soy Juan Eduardo</p>
        <h2 className="hero-title">Desarrollador apasionado por crear experiencias digitales excepcionales</h2>
        <p className="hero-description">
          Construyo aplicaciones web modernas y soluciones tecnológicas que combinan diseño elegante con código limpio y
          eficiente. Mi enfoque está en crear productos que no solo funcionen bien, sino que también sean un placer de
          usar.
        </p>
        <div className="hero-cta">
          <a href="#contacto" className="btn btn-primary">
            Contactar
          </a>
          <a href="#proyectos" className="btn btn-secondary">
            Ver Proyectos
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero-intro {
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-cta {
            flex-direction: column;
          }

          .hero-cta :global(.btn) {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}
