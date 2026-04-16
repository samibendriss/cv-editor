import { CentresInteretSection } from "@/types/cv";

interface Props {
  section: CentresInteretSection;
}

export default function CentresInteretSectionComponent({ section }: Props) {
  return (
    <section className="cv-centres-interet">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
