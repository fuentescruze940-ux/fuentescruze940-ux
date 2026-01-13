import { Code2, Server, Network, Wrench, Terminal } from "lucide-react"

export default function Habilidades() {
  const skills = {
    "Desarrollo WEB": {
      icon: Code2,
      items: [
        { name: "HTML", color: "bg-orange-500/20 text-orange-500 border-orange-500/30" },
        { name: "CSS", color: "bg-blue-500/20 text-blue-500 border-blue-500/30" },
        { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30" },
        { name: "React", color: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30" },
        { name: "Next.js", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
        { name: "TailwindCSS", color: "bg-teal-500/20 text-teal-500 border-teal-500/30" },
      ],
    },
    Programación: {
      icon: Terminal,
      items: [
        { name: "Python", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "C/C++", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        { name: "Bash", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "SQL", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      ],
    },
    "DevOps & Herramientas": {
      icon: Wrench,
      items: [
        { name: "Git", color: "bg-orange-600/20 text-orange-500 border-orange-600/30" },
        { name: "Docker", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Nginx", color: "bg-green-600/20 text-green-500 border-green-600/30" },
        { name: "Linux", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      ],
    },
    "Sistemas Operativos": {
      icon: Server,
      items: [
        { name: "Linux", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "Debian", color: "bg-red-500/20 text-red-400 border-red-500/30" },
        { name: "Windows", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
        { name: "Ubuntu", color: "bg-orange-600/20 text-orange-500 border-orange-600/30" },
      ],
    },
    Networking: {
      icon: Network,
      items: [
        { name: "Cisco Packet Tracer", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "VLANs", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        { name: "Routing & Switching", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
        { name: "Network Design", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      ],
    },
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="animate-fade-in">
        <h1 className="section-title">Habilidades Técnicas</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Tecnologías y herramientas con las que trabajo para crear soluciones innovadoras y eficientes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, data], index) => {
          const Icon = data.icon
          return (
            <div key={category} className="card-modern group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{category}</h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {data.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
