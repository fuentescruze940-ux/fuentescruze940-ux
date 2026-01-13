"use client"

import { useState, type FormEvent } from "react"
import { Mail } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toLocaleString("es-ES"),
    }

    const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || ""

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      setMessage({ text: "¡Mensaje enviado correctamente! Te responderé pronto.", type: "success" })
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Error:", error)
      setMessage({ text: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.", type: "error" })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(null), 5000)
    }
  }

  return (
    <section id="contacto" className="section contact-section">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-content">
        <p className="contact-intro">
          ¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en contactarme. Respondo todos los
          mensajes lo más pronto posible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Asunto
            </label>
            <input type="text" id="subject" name="subject" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea id="message" name="message" className="form-textarea" rows={6} required />
          </div>

          <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {message && <div className={`form-message ${message.type}`}>{message.text}</div>}
        </form>

        <div className="contact-info">
          <h3 className="contact-info-title">Información de Contacto</h3>
          <div className="contact-info-item">
            <Mail size={20} />
            <span>juan.fuentes@email.com</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-intro {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-input,
        .form-textarea {
          padding: 0.875rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: var(--font-sans);
          transition: var(--transition);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-submit {
          align-self: flex-start;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-message {
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
        }

        .form-message.success {
          background-color: rgba(100, 255, 218, 0.1);
          color: var(--accent);
          border: 1px solid var(--accent);
        }

        .form-message.error {
          background-color: rgba(255, 100, 100, 0.1);
          color: #ff6464;
          border: 1px solid #ff6464;
        }

        .contact-info {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .contact-info-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
        }

        .contact-info-item :global(svg) {
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}
