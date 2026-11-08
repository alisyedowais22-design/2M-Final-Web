export default function SectionLabel({
  index,
  children,
  tone = "light",
}: {
  index?: string;
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-3">
      {index && (
        <span className="font-mono text-[11px] text-bronze">{index}</span>
      )}
      <span
        className={`font-mono text-[11px] uppercase tracking-label ${
          tone === "light" ? "text-mist" : "text-bronze"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
