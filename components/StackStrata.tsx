"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type Layer = {
  id: string;
  label: string;
  eyebrow: string;
  color: string;
  tools: string[];
};

export const layers: Layer[] = [
  {
    id: "frontend",
    label: "Interface",
    eyebrow: "What people touch",
    color: "#6C8EFF",
    tools: ["React.js", "Next.js", "HTML / CSS / JS", "Bootstrap", "jQuery"],
  },
  {
    id: "backend",
    label: "Services",
    eyebrow: "What runs the logic",
    color: "#34D399",
    tools: ["FastAPI", "Django", "Flask", "Nest.js"],
  },
  {
    id: "data",
    label: "Data & ML",
    eyebrow: "What stores & learns",
    color: "#F5A623",
    tools: ["MongoDB", "MySQL", "PostgreSQL", "NumPy", "Pandas", "ML / AI"],
  },
  {
    id: "agentic",
    label: "Agentic AI",
    eyebrow: "What decides & acts",
    color: "#FB7185",
    tools: ["Agent orchestration", "Tool-calling LLMs", "RAG pipelines"],
  },
  {
    id: "mobile",
    label: "Mobile",
    eyebrow: "What ships to a device",
    color: "#F472B6",
    tools: ["Expo", "Expo CLI", "React Native"],
  },
];

export default function StackStrata({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string | null>(compact ? null : layers[0].id);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-white/10">
        {layers.map((layer, i) => {
          const isActive = active === layer.id;
          return (
            <motion.button
              key={layer.id}
              onClick={() => setActive(isActive ? null : layer.id)}
              onMouseEnter={() => !compact && setActive(layer.id)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative w-full text-left"
              style={{
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-4 transition-all"
                style={{
                  background: isActive
                    ? `linear-gradient(90deg, ${layer.color}22, transparent)`
                    : "transparent",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full transition-transform"
                    style={{
                      backgroundColor: layer.color,
                      transform: isActive ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                  <div>
                    <div className="font-display text-base font-bold sm:text-lg">
                      {layer.label}
                    </div>
                    <div className="eyebrow text-paper/45">{layer.eyebrow}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-paper/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 px-5 pb-5 pl-[38px]">
                  {layer.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border px-3 py-1 font-mono text-xs"
                      style={{
                        borderColor: `${layer.color}55`,
                        color: layer.color,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
