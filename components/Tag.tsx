type TagProps = {
  children: React.ReactNode;
  muted?: boolean;
};

export default function Tag({ children, muted = false }: TagProps) {
  return (
    <span
      className={`font-mono text-xs px-2 py-0.5 rounded border border-cyber-border ${
        muted ? "text-cyber-muted" : "text-cyber-text"
      }`}
    >
      {children}
    </span>
  );
}
