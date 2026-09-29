const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-2.5 ${centered ? "items-center text-center gap-3.5" : ""}`}
    >
      <div className="font-mono text-xs uppercase tracking-[0.08em] text-emerald-300">
        {eyebrow}
      </div>
      <h2
        className={`m-0 font-display font-semibold tracking-[-0.03em] text-balance capitalize ${centered ? "text-[clamp(30px,5vw,56px)] leading-[1.08]" : "text-[clamp(30px,4.4vw,48px)] leading-[1.1]"}`}
      >
        {title}
      </h2>
      {description && (
        <p className="m-0 max-w-[60ch] text-base leading-relaxed text-neutral-400 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
