"use client";

import { motion } from "framer-motion";
import StackStrata from "./StackStrata";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="eyebrow text-layer-data">The stack</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Every layer, cross-sectioned.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-paper/60">
            Tap a layer to see what I actually build with. Top is what users
            see, bottom is what makes it real.
          </p>
        </motion.div>

        <StackStrata compact />
      </div>
    </section>
  );
}
