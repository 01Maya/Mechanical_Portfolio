"use client"

import { motion } from "framer-motion"
import { Cog, Zap } from "lucide-react"

const projects = [
  {
    title: "DATARN Automatic Transmission (1500 HP)",
    description: "Worked on high-precision assembly, integration, and diagnostic testing for heavy-duty power systems.",
    highlight: "Precision Engineering",
    icon: <Cog className="w-8 h-8" />,
  },
  {
    title: "600 HP Integrated Power Pack",
    description: "Handled assembly, operation, and testing as per stringent quality and safety compliance standards.",
    highlight: "System Integration",
    icon: <Zap className="w-8 h-8" />,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-primary">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block">
              High-Impact Engineering
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Strategic Projects</h2>
            <div className="w-16 h-1 bg-amber-accent mt-6" />
          </div>
          <p className="text-background max-w-md text-lg italic">
            "Directing the assembly and rigorous testing of mission-critical defense and industrial systems."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-white/[0.02] p-12 md:p-16 rounded-2xl border border-white/5 hover:bg-white/[0.04] hover:border-industrial-blue/20 transition-all duration-700 shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 text-industrial-blue rounded-xl mb-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500">
                {project.icon}
              </div>
              <span className="text-xs font-black text-industrial-blue uppercase tracking-[0.3em] mb-4 block">
                {project.highlight}
              </span>
              <h3 className="text-3xl font-black mb-6 leading-[1.1] text-white group-hover:text-glow transition-all">
                {project.title}
              </h3>
              <p className="text-background text-lg leading-relaxed mb-10">{project.description}</p>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">L&T Defence Division</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1 h-1 bg-industrial-blue/40 rounded-full" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
