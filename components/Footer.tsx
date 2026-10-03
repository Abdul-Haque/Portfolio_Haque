export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-paper/35 sm:flex-row">
        <span>© {new Date().getFullYear()} Your Name. Built with Next.js.</span>
        <span>Web · Mobile · Agentic AI</span>
      </div>
    </footer>
  );
}
