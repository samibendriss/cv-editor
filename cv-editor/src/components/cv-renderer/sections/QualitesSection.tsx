import { QualitesSection } from "@/types/cv";

interface Props {
  section: QualitesSection;
}

export default function QualitesSectionComponent({ section }: Props) {
  return (
    <section className="cv-qualites">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
