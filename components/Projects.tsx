"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Agentic Support Desk",
    desc: "An AI agent that triages, researches, and drafts responses to customer tickets, escalating only what needs a human.",
    tags: ["Next.js", "FastAPI", "Agentic AI", "PostgreSQL"],
    color: "#FB7185",
    href: "#",
  },
  {
    title: "Field Ops Mobile App",
    desc: "Cross-platform field-reporting app with offline sync, built for teams working without reliable connectivity.",
    tags: ["Expo", "React Native", "Nest.js", "MongoDB"],
    color: "#F472B6",
    href: "#",
  },
  {
    title: "Realtime Analytics Dashboard",
    desc: "A data pipeline and dashboard turning raw event streams into live operational metrics for a logistics client.",
    tags: ["React.js", "Django", "Pandas", "MySQL"],
    color: "#F5A623",
    href: "#",
  },
  {
    title: "Marketplace Platform",
    desc: "Full marketplace build — auth, payments, search, and a Next.js storefront on top of a Flask API.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Bootstrap"],
    color: "#34D399",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow text-layer-frontend">Selected work</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Things I've shipped.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-inkraised p-7 transition-transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: p.color }}
              />
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <ArrowUpRight
                  size={20}
                  className="flex-shrink-0 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
                />
              </div>
              <p className="mt-3 leading-relaxed text-paper/60">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-paper/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
