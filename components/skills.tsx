"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Core Expertise",
    skills: [
      "Mechanical Assembly",
      "System Integration",
      "Hydraulics & Power Packs",
      "Precision Testing",
      "Diagnostic Tools",
    ],
  },
  {
    title: "Precision & Quality",
    skills: ["Laser Tracker Alignment", "QA/QC Documentation", "Blueprint Reading", "Pressure Testing", "Leak Testing"],
  },
  {
    title: "Industrial Standards",
    skills: ["Lean Manufacturing", "5S Practices", "Kaizen", "Six Sigma", "Safety Compliance"],
  },
  {
    title: "Machinery & Systems",
    skills: [
      "Heavy Machinery Operation",
      "Automatic Transmissions",
      "Gear Assembly",
      "Welding (TIG/MIG)",
      "Fabrication",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <span className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">Specialized Expertise</h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-10 rounded-xl hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] hover:-translate-y-2 transition-all duration-500 border border-white/5 group"
            >
              <h3 className="font-black text-foreground mb-8 text-sm tracking-[0.2em] uppercase border-b border-white/5 pb-4 group-hover:text-industrial-blue transition-colors">
                {group.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 marker:text-industrial-blue marker:opacity-90">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm font-medium text-secondary hover:text-foreground transition-all">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
