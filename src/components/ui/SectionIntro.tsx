import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionIntroProps) {
  const isDark = tone === "dark";
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`${alignment} ${className}`}>
      <p className={`eyebrow ${isDark ? "text-white" : "text-brand"}`}>{eyebrow}</p>
      <h2 id={titleId} className={`heading-2 mt-4 ${isDark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`lead mt-4 ${isDark ? "text-white" : "text-muted"}`}>{description}</p>
      )}
    </div>
  );
}
