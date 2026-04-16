import { LanguesSection } from "@/types/cv";

interface Props {
  section: LanguesSection;
}

export default function LanguesSectionComponent({ section }: Props) {
  return (
    <section className="cv-langues">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>
            <span className="cv-lang-name">{item.name}</span> {item.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
