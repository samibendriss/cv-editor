import { CompetencesSection } from "@/types/cv";

interface Props {
  section: CompetencesSection;
}

export default function CompetencesSectionComponent({ section }: Props) {
  return (
    <section className="cv-competences">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
