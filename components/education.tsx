"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

const education = [
  {
    type: "Diploma in Mechanical Engineering",
    institution: "Vallabh Budhi Polytechnic, Navsari",
    period: "2021 – 2024",
    result: "5.40 GPA",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    type: "Secondary Education",
    institution: "SSSPSB English Medium School, Aat",
    period: "2018 – 2019",
    result: "65%",
    icon: <School className="w-6 h-6" />,
  },
]

export function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block">
              Foundations
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 tracking-tight">
              Academic Background
            </h2>
            <div className="space-y-10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-industrial-blue group-hover:bg-industrial-blue group-hover:text-dark-navy transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground leading-tight mb-2 tracking-tight">
                      {item.type}
                    </h3>
                    <p className="text-secondary mb-3 font-medium">{item.institution}</p>
                    <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
                      <span className="font-bold text-white/40">{item.period}</span>
                      <span className="text-amber-accent font-bold px-2 py-1 bg-amber-accent/10 rounded-sm">
                        Score: {item.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 rounded-2xl border border-white/5"
          >
            <h3 className="text-2xl font-black text-foreground mb-12 tracking-tight">Personal Drive</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Mechanical Instrumentation", icon: "⚙️" },
                { label: "Fitness & Training", icon: "💪" },
                { label: "Manufacturing Systems", icon: "🏭" },
                { label: "Cricket", icon: "🏏" },
              ].map((h, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl transition-all"
                >
                  <span className="text-3xl">{h.icon}</span>
                  <span className="text-sm font-black text-foreground/80 tracking-tight leading-tight">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
