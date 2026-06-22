export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs text-cyber-muted uppercase tracking-widest mb-5 pb-2 border-b border-cyber-border">
      {children}
    </h2>
  );
}
