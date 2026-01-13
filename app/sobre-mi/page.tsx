import Image from "next/image"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function SobreMi() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="animate-fade-in">
        <h1 className="section-title">Sobre Mí</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-16 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1 shadow-xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/professional-developer-portrait.png"
                  alt="Juan Eduardo Fuentes Cruz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Estudiante</p>
                  <p className="font-semibold text-sm">7mo Semestre</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <Briefcase className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Experiencia</p>
                  <p className="font-semibold text-sm">2+ años</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Proyectos</p>
                  <p className="font-semibold text-sm">15+ completados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="space-y-6 text-base leading-relaxed">
            <p className="text-lg">
              Soy <strong className="text-primary">Juan Eduardo Fuentes Cruz</strong>, estudiante de Ingeniería en
              Sistemas Computacionales actualmente cursando el séptimo semestre. Me caracterizo por aplicar de manera
              práctica todos los conocimientos adquiridos durante mi formación, desarrollando soluciones eficientes y
              seguras en entornos reales.
            </p>

            <p>
              Tengo experiencia trabajando con entornos <strong>Windows</strong> y <strong>Linux (Debian)</strong>, así
              como en el diseño y simulación de redes mediante <strong>Cisco Packet Tracer</strong>. Además, poseo
              conocimientos fundamentales en <strong>programación web</strong> y bases de datos en
              <strong> Python</strong>, lo que complementa mi perfil técnico y me permite abordar problemas desde un
              punto de vista integral.
            </p>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-primary font-medium">
                Me apasiona el desarrollo de software, la arquitectura de sistemas y estar siempre actualizado con las
                últimas tecnologías del sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-primary" />
          Experiencia Profesional
        </h2>

        <div className="space-y-6">
          <div className="card-modern group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  Desarrollador Full Stack
                </h3>
                <p className="text-primary font-medium">Freelance</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                2024 - Presente
              </span>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Desarrollo de aplicaciones web modernas utilizando React, Next.js y Node.js. Implementación de soluciones
              escalables y mantenibles con enfoque en UX/UI y rendimiento óptimo.
            </p>
          </div>

          <div className="card-modern group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  Ingeniero de Redes Junior
                </h3>
                <p className="text-primary font-medium">TechCorp Solutions</p>
              </div>
              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                2023 - 2024
              </span>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Diseño y configuración de infraestructuras de red empresariales. Implementación de VLANs, configuración de
              routers y switches Cisco, y gestión de seguridad perimetral.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
