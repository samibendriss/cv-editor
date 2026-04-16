import { LogicielsSection } from "@/types/cv";

interface Props {
  section: LogicielsSection;
}

export default function LogicielsSectionComponent({ section }: Props) {
  return (
    <section className="cv-logiciels">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
