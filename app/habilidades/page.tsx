export default function Habilidades() {
  const skills = {
    "Desarrollo WEB": [
      { name: "HTML", color: "bg-orange-500/20 text-orange-500" },
      { name: "CSS", color: "bg-blue-500/20 text-blue-500" },
      { name: "JavaScript", color: "bg-yellow-500/20 text-yellow-500" },
      { name: "React", color: "bg-cyan-500/20 text-cyan-500" },
      { name: "Next.js", color: "bg-gray-500/20 text-gray-300" },
      { name: "TailwindCSS", color: "bg-teal-500/20 text-teal-500" },
    ],
    Programación: [
      { name: "Python", color: "bg-blue-600/20 text-blue-400" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-400" },
      { name: "C/C++", color: "bg-purple-500/20 text-purple-400" },
      { name: "Bash", color: "bg-green-500/20 text-green-400" },
      { name: "SQL", color: "bg-orange-500/20 text-orange-400" },
    ],
    "DevOps & Herramientas": [
      { name: "Git", color: "bg-orange-600/20 text-orange-500" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-400" },
      { name: "Nginx", color: "bg-green-600/20 text-green-500" },
      { name: "Linux", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    "Sistemas Operativos": [
      { name: "Linux", color: "bg-yellow-500/20 text-yellow-400" },
      { name: "Debian", color: "bg-red-500/20 text-red-400" },
      { name: "Windows", color: "bg-blue-600/20 text-blue-400" },
      { name: "Ubuntu", color: "bg-orange-600/20 text-orange-500" },
    ],
    Networking: [
      { name: "Cisco Packet Tracer", color: "bg-blue-500/20 text-blue-400" },
      { name: "VLANs", color: "bg-purple-500/20 text-purple-400" },
      { name: "Routing & Switching", color: "bg-cyan-500/20 text-cyan-400" },
      { name: "Network Design", color: "bg-green-500/20 text-green-400" },
    ],
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="section-title">Habilidades</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card-modern">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill.name} className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
