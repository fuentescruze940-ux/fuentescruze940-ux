"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Aquí irá la integración con Google Sheets
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="section-title">Contacto</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card-modern text-center">
          <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground text-sm">juan.fuentes@email.com</p>
        </div>

        <div className="card-modern text-center">
          <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Teléfono</h3>
          <p className="text-muted-foreground text-sm">+52 123 456 7890</p>
        </div>

        <div className="card-modern text-center">
          <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Ubicación</h3>
          <p className="text-muted-foreground text-sm">Ciudad de México, MX</p>
        </div>
      </div>

      <div className="card-modern max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="asunto" className="block text-sm font-medium mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              value={formData.asunto}
              onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="¿En qué puedo ayudarte?"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </>
            )}
          </button>

          {status === "success" && <p className="text-green-500 text-center">¡Mensaje enviado con éxito!</p>}
          {status === "error" && (
            <p className="text-red-500 text-center">Error al enviar el mensaje. Intenta de nuevo.</p>
          )}
        </form>
      </div>
    </div>
  )
}
