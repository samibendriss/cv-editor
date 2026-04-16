import { FormationsSection } from "@/types/cv";

interface Props {
  section: FormationsSection;
}

export default function FormationsSectionComponent({ section }: Props) {
  return (
    <section className="cv-formations">
      <h2>{section.title}</h2>
      {section.items.map((formation) => (
        <article key={formation.id} className="cv-formation">
          <p>
            <span className={`cv-formation-title ${formation.isTitleRed ? "cv-formation-red" : ""}`}>
              {formation.isTitleRed ? (
                <span className="cv-formation-red">{formation.title}</span>
              ) : (
                formation.title
              )}
            </span>
            {formation.detail && (
              <>
                {" "}
                <span className={formation.isDetailRed ? "cv-formation-red" : ""}>
                  {formation.detail}
                </span>
                {" :"}
              </>
            )}
          </p>
          <p>{formation.institution}</p>
        </article>
      ))}
    </section>
  );
}
