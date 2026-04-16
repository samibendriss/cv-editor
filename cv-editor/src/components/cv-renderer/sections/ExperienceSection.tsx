import { ExperiencesSection } from "@/types/cv";

interface Props {
  section: ExperiencesSection;
}

function highlightKeywords(text: string, keywords?: string[]) {
  if (!keywords || keywords.length === 0) return text;

  const parts: (string | { keyword: string; key: number })[] = [];
  let remaining = text;
  let keyIndex = 0;

  for (const keyword of keywords) {
    const idx = remaining.indexOf(keyword);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push({ keyword, key: keyIndex++ });
    remaining = remaining.slice(idx + keyword.length);
  }
  if (remaining) parts.push(remaining);

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <span key={part.key} className="cv-keyword">
            {part.keyword}
          </span>
        )
      )}
    </>
  );
}

export default function ExperienceSectionComponent({ section }: Props) {
  return (
    <section className="cv-experiences">
      <h2>{section.title}</h2>
      {section.items.map((exp) => (
        <article key={exp.id} className="cv-experience">
          <p>
            <span className="cv-job-title">{exp.jobTitle}</span> |{" "}
            <span className="cv-company">{exp.company}</span>.
          </p>
          <p className="cv-date-line">{exp.dateLine}</p>
          <ul>
            {exp.bullets.map((bullet, i) => (
              <li key={i}>{highlightKeywords(bullet.text, bullet.keywords)}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
