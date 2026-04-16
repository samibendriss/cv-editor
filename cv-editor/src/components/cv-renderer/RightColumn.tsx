import { CVDocument, SectionBlock } from "@/types/cv";
import ExperienceSectionComponent from "./sections/ExperienceSection";
import CompetencesSectionComponent from "./sections/CompetencesSection";
import FormationsSectionComponent from "./sections/FormationsSection";

interface Props {
  data: CVDocument;
}

function renderSection(section: SectionBlock) {
  switch (section.type) {
    case "experiences":
      return <ExperienceSectionComponent key={section.id} section={section} />;
    case "competences":
      return <CompetencesSectionComponent key={section.id} section={section} />;
    case "formations":
      return <FormationsSectionComponent key={section.id} section={section} />;
    default:
      return null;
  }
}

export default function RightColumn({ data }: Props) {
  return (
    <div className="cv-right-column">
      {/* En-tête : Nom + Sous-titre */}
      <header>
        <h1>{data.header.fullName}</h1>
        <p className="cv-subtitle">{data.header.subtitle}</p>
      </header>

      {/* Profil */}
      <section className="cv-profil">
        <p style={{ fontSize: `${data.header.profileFontSize ?? 11}pt` }}>
          {data.header.profileSummary}
        </p>
      </section>

      {/* Sections dynamiques */}
      {data.rightSections.map((section) => renderSection(section))}
    </div>
  );
}
