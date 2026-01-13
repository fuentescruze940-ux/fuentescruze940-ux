import Image from "next/image"

export default function SobreMi() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="section-title">Sobre Mí</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <Image src="/professional-developer-portrait.png" alt="Juan Eduardo Fuentes Cruz" fill className="object-cover" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg leading-relaxed">
              Soy <strong>Juan Eduardo Fuentes Cruz</strong>, estudiante de Ingeniería en Sistemas Computacionales
              actualmente cursando el séptimo semestre. Me caracterizo por aplicar de manera práctica todos los
              conocimientos adquiridos durante mi formación, desarrollando soluciones eficientes y seguras en entornos
              reales.
            </p>

            <p className="text-lg leading-relaxed">
              Tengo experiencia trabajando con entornos <strong>Windows</strong> y <strong>Linux (Debian)</strong>, así
              como en el diseño y simulación de redes mediante <strong>Cisco Packet Tracer</strong>. Además, poseo
              conocimientos fundamentales en <strong>programación web</strong> y bases de datos en
              <strong> Python</strong>, lo que complementa mi perfil técnico y me permite abordar problemas desde un
              punto de vista integral.
            </p>

            <p className="text-lg leading-relaxed">
              Me apasiona el desarrollo de software, la arquitectura de sistemas y estar siempre actualizado con las
              últimas tecnologías del sector.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Experiencia</h2>

        <div className="space-y-6">
          <div className="card-modern">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Desarrollador Full Stack</h3>
              <span className="text-sm text-muted-foreground">2024 - Presente</span>
            </div>
            <p className="text-muted-foreground mb-2">Freelance</p>
            <p className="leading-relaxed">
              Desarrollo de aplicaciones web modernas utilizando React, Next.js y Node.js. Implementación de soluciones
              escalables y mantenibles.
            </p>
          </div>

          <div className="card-modern">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Ingeniero de Redes Junior</h3>
              <span className="text-sm text-muted-foreground">2023 - 2024</span>
            </div>
            <p className="text-muted-foreground mb-2">TechCorp Solutions</p>
            <p className="leading-relaxed">
              Diseño y configuración de infraestructuras de red. Implementación de VLANs, configuración de routers y
              switches Cisco.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
