

export default function Section({
  title,
  icon: Icon,
  children,
  className = '',
}) {
  return (
    <section className={className}>
      <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 uppercase tracking-wider flex items-center gap-2 break-after-avoid">
        {Icon && <Icon size={20} className="text-slate-600" />} {title}
      </h2>
      {children}
    </section>
  )
}
