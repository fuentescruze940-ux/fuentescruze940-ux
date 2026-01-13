"use client"

import { motion } from "framer-motion"
import { Code2, Settings, Monitor, Network, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Desarrollo WEB",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Astro"],
  },
  {
    title: "Programación",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    skills: ["Python", "Flask", "Godot", "Bash"],
  },
  {
    title: "DevOps & Herramientas",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
    skills: ["Git", "Docker", "Nginx"],
  },
  {
    title: "Sistemas Operativos",
    icon: Monitor,
    color: "from-orange-500 to-red-500",
    skills: ["Linux", "Debian", "Windows", "Fedora"],
  },
  {
    title: "Networking",
    icon: Network,
    color: "from-cyan-500 to-blue-500",
    skills: ["Diseño y configuración de redes", "VLANs", "Cisco Packet Tracer"],
  },
]

export function SkillsSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills</h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo para crear soluciones eficientes y profesionales.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted text-lg">Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
