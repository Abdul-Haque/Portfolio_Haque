"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileDown } from "lucide-react";
import StackStrata from "./StackStrata";

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "20+", label: "Projects built" },
  { value: "5", label: "Layers of the stack" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-5 text-layer-frontend">
            Full-Stack &amp; AI Engineer — Web · Mobile · Agentic Systems
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            I build the whole
            <br />
            stack, not just
            <br />
            <span className="text-layer-frontend">a slice of it.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/60">
            Three years designing interfaces, writing the APIs behind them,
            modeling the data underneath, and shipping the mobile apps on
            top — with agentic AI woven through where it earns its place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition-colors hover:border-layer-frontend hover:text-layer-frontend"
            >
              <FileDown size={18} />
              Resume
            </a>
          </div>

          <div className="mt-14 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold sm:text-3xl">
                  {s.value}
                </div>
                <div className="eyebrow mt-1 text-paper/45">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="eyebrow mb-3 text-paper/40">
            Hover a layer — this is the actual stack
          </p>
          <StackStrata />
        </motion.div>
      </div>
    </section>
  );
}
