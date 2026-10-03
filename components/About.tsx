"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Based in", value: "Your City, Country" },
  { label: "Focus", value: "Full-stack + Agentic AI" },
  { label: "Currently", value: "Open to new roles" },
  { label: "Ships on", value: "Web & Mobile" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-layer-backend">About</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            One engineer,
            <br />
            every layer.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-paper/70">
            I'm a full-stack developer with 3+ years of experience taking
            products from a blank database to a live app in someone's hand.
            I move comfortably between Python back ends (FastAPI, Django,
            Flask), modern front ends (React, Next.js), and mobile builds
            with Expo — and increasingly, between traditional software and
            agentic AI systems that make decisions on their own.
          </p>
          <p className="leading-relaxed text-paper/60">
            I like owning problems end to end: the schema, the API contract,
            the interface state, and the app store build. That's usually
            faster and more coherent than handing pieces across a team — and
            it's why clients and teams bring me in when they want one person
            who can actually finish the thing.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-white/10 pl-3">
                <div className="eyebrow text-paper/40">{f.label}</div>
                <div className="mt-1 font-medium text-paper/85">{f.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
