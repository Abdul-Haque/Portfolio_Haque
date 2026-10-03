"use client";

import { motion } from "framer-motion";

const roles = [
  {
    period: "2024 — Present",
    title: "Senior Full-Stack Engineer",
    org: "Company Name",
    desc: "Leading development of web and mobile products end to end — FastAPI/Django services, Next.js front ends, and Expo mobile apps, with agentic AI features layered in for automation.",
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    org: "Company Name",
    desc: "Built and maintained REST APIs, relational and document databases, and React/Next.js interfaces for client products across web and mobile.",
  },
  {
    period: "2021 — 2022",
    title: "Junior Web Developer",
    org: "Company Name",
    desc: "Started in front-end development with HTML, CSS, JS, Bootstrap, and jQuery before expanding into full-stack and Python back ends.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="eyebrow text-layer-mobile">Experience</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            The path so far.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid gap-2 border-t border-white/10 py-8 sm:grid-cols-[140px_1fr]"
            >
              <div className="font-mono text-sm text-paper/40">{r.period}</div>
              <div>
                <h3 className="font-display text-xl font-bold">{r.title}</h3>
                <p className="eyebrow mt-1 text-paper/45">{r.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-paper/60">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
