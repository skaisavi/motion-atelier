type SectionLabelProps = {
  eyebrow: string;
  index: string;
};

export function SectionLabel({ eyebrow, index }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-4 font-sans text-xs uppercase tracking-editorial text-atelier-champagne">
      <span>{index}</span>
      <span className="h-px w-10 bg-atelier-champagne/50" />
      <span>{eyebrow}</span>
    </div>
  );
}
