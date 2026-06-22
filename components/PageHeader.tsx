type PageHeaderProps = {
  label: string;
  title: string;
  subtitle: string;
};

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-cyber-accent font-mono text-sm mb-3 tracking-widest uppercase">
        {label}
      </p>
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      <p className="text-cyber-muted text-lg">{subtitle}</p>
    </div>
  );
}
