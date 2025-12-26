"use client"

import { motion } from "framer-motion"
import { Settings, ShieldCheck, Cog, Ruler, ClipboardList, Package } from "lucide-react"

const experiences = [
  {
    company: "Larsen & Toubro (L&T Defence)",
    location: "Hazira, Surat",
    role: "Mechanical Supervisor",
    period: "June 2024 – Present",
    description: "Supervising precision engineering & heavy systems integration.",
    tasks: [
      {
        icon: <Settings className="w-5 h-5" />,
        text: "Supervised assembly and integration of mechanical systems ensuring accuracy.",
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        text: "Operated and maintained heavy machinery in compliance with safety regulations.",
      },
      {
        icon: <Cog className="w-5 h-5" />,
        text: "Executed hydraulic pressure testing, leak testing, and flushing as per standards.",
      },
      {
        icon: <ClipboardList className="w-5 h-5" />,
        text: "Prepared detailed test reports and coordinated with QA/QC teams for approvals.",
      },
      { icon: <Ruler className="w-5 h-5" />, text: "Ensured precision alignment using laser tracker technology." },
      {
        icon: <Package className="w-5 h-5" />,
        text: "Managed inventory levels to optimize material usage and reduce waste.",
      },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block"
          >
            Track Record
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">Industrial Journey</h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-6" />
        </div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-16 rounded-xl border border-white/5 relative group hover:border-industrial-blue/30 transition-all duration-500"
            >
              <span className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] pointer-events-none leading-none">
                01
              </span>

              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-black text-foreground mb-2 group-hover:text-industrial-blue transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-industrial-blue font-bold tracking-widest text-sm uppercase">{exp.role}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-black text-foreground/90 bg-white/5 px-4 py-2 inline-block border border-white/5">
                    {exp.period}
                  </p>
                  <p className="text-xs text-secondary mt-2 tracking-widest uppercase">{exp.location}</p>
                </div>
              </div>

              <p className="text-secondary text-lg mb-12 max-w-3xl leading-relaxed">{exp.description}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exp.tasks.map((task, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4 p-6 bg-white/5 border border-white/5 rounded-lg group/task hover:bg-industrial-blue/5 hover:border-industrial-blue/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-industrial-blue text-dark-navy rounded-sm group-hover/task:rotate-12 transition-transform">
                      {task.icon}
                    </div>
                    <p className="text-sm text-secondary/90 leading-relaxed font-medium">{task.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
