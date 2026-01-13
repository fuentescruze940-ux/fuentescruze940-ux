"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Disponible para proyectos
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Hola, soy <span className="text-primary">Eduardo Fuentes</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-muted font-medium mb-6">
              Desarrollador Web & Ingeniero en Sistemas
            </h2>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Estudiante de Ingeniería en Sistemas Computacionales apasionado por crear soluciones tecnológicas
              eficientes y seguras. Especializado en desarrollo web y administración de sistemas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="group">
                <Link href="/proyectos">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">Sígueme:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/eduardo-fuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/eduardo-fuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="mailto:eduardo@example.com"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                {/* Placeholder - Reemplaza con tu foto */}
                <Image src="/professional-portrait-photo-of-young-hispanic-male.jpg" alt="Eduardo Fuentes" fill className="object-cover" priority />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="absolute -bottom-2 -right-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-sm font-medium text-foreground">7° Semestre</p>
                <p className="text-xs text-muted">Ing. en Sistemas</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
