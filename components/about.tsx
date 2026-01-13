"use client"

export default function About() {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Git"]

  return (
    <section id="sobre-mi" className="section about-section">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <p className="about-text">
          Soy desarrollador de software con experiencia en desarrollo web full-stack. Me especializo en crear
          aplicaciones modernas utilizando tecnologías como React, Node.js, y bases de datos relacionales y no
          relacionales.
        </p>
        <p className="about-text">
          A lo largo de mi carrera, he trabajado en proyectos diversos que van desde aplicaciones empresariales hasta
          productos digitales innovadores. Mi pasión por la tecnología me impulsa a estar siempre aprendiendo y
          experimentando con nuevas herramientas y metodologías.
        </p>
        <p className="about-text">
          Cuando no estoy programando, disfruto de compartir conocimientos a través de mi blog, contribuir a proyectos
          de código abierto, y explorar nuevas tendencias en desarrollo de software.
        </p>

        <div className="skills">
          <h3 className="skills-title">Habilidades</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-text {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .skills {
          margin-top: 2rem;
        }

        .skills-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background-color: var(--bg-card);
          color: var(--accent);
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  )
}
