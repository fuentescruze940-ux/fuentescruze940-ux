"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Server, Network } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Estudiante",
    description: "7° Semestre de Ing. en Sistemas Computacionales",
  },
  {
    icon: Code,
    title: "Desarrollador Web",
    description: "HTML, CSS, JavaScript, Python, Flask",
  },
  {
    icon: Server,
    title: "Administración de Sistemas",
    description: "Windows, Linux (Debian, Fedora)",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Diseño de redes, VLANs, Cisco Packet Tracer",
  },
]

export function AboutSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Sobre Mí</h1>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <p className="text-lg text-muted leading-relaxed mb-6">
                Soy estudiante de Ingeniería en Sistemas Computacionales, actualmente cursando el séptimo semestre. Me
                caracterizo por aplicar de manera práctica todos los conocimientos adquiridos durante mi formación,
                desarrollando soluciones eficientes y seguras en entornos reales.
              </p>

              <p className="text-lg text-muted leading-relaxed mb-6">
                Tengo experiencia trabajando con entornos Windows y Linux (Debian), así como en el diseño y simulación
                de redes mediante Cisco Packet Tracer. Además, poseo conocimientos en programación web y bases
                fundamentales en Python, lo que complementa mi perfil técnico y me permite abordar problemas desde un
                punto de vista integral.
              </p>

              <p className="text-lg text-muted leading-relaxed">
                Mi objetivo es seguir creciendo profesionalmente, contribuyendo a proyectos que generen impacto positivo
                y me permitan aplicar mis habilidades técnicas de manera innovadora.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Información Rápida</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <div>
                      <p className="font-medium text-foreground">Carrera</p>
                      <p className="text-sm text-muted">Ing. en Sistemas Computacionales</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <div>
                      <p className="font-medium text-foreground">Semestre</p>
                      <p className="text-sm text-muted">7° Semestre</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <div>
                      <p className="font-medium text-foreground">Enfoque</p>
                      <p className="text-sm text-muted">Desarrollo Web & DevOps</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <div>
                      <p className="font-medium text-foreground">Ubicación</p>
                      <p className="text-sm text-muted">México</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Áreas de Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
