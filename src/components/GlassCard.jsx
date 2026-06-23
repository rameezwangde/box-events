export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-white/70 bg-white/62 p-6 shadow-glow backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  );
}
