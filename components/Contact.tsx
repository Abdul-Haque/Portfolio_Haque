"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-layer-data">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            Have something to build?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-paper/60">
            Whether it's a web app, a mobile build, or an agentic AI
            feature — I'd like to hear about it.
          </p>

          <a
            href="mailto:you@email.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={18} />
            you@email.com
          </a>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/yourhandle"
              aria-label="GitHub"
              className="text-paper/40 transition-colors hover:text-paper"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              aria-label="LinkedIn"
              className="text-paper/40 transition-colors hover:text-paper"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
