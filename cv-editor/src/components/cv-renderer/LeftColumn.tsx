import { CVDocument, SectionBlock } from "@/types/cv";
import Image from "next/image";
import ContactSection from "./sections/ContactSection";
import QualitesSectionComponent from "./sections/QualitesSection";
import LogicielsSectionComponent from "./sections/LogicielsSection";
import LanguesSectionComponent from "./sections/LanguesSection";
import CentresInteretSectionComponent from "./sections/CentresInteretSection";
import PortfolioSectionComponent from "./sections/PortfolioSection";

interface Props {
  data: CVDocument;
}

function renderSection(section: SectionBlock, data: CVDocument) {
  switch (section.type) {
    case "qualites":
      return <QualitesSectionComponent key={section.id} section={section} />;
    case "logiciels":
      return <LogicielsSectionComponent key={section.id} section={section} />;
    case "langues":
      return <LanguesSectionComponent key={section.id} section={section} />;
    case "centres-interet":
      return <CentresInteretSectionComponent key={section.id} section={section} />;
    case "portfolio":
      return <PortfolioSectionComponent key={section.id} contact={data.contact} />;
    default:
      return null;
  }
}

export default function LeftColumn({ data }: Props) {
  return (
    <aside className="cv-left-column">
      {/* Photo de profil */}
      <div className="cv-photo-container">
        <Image
          src={data.header.profilePhoto}
          alt={`Photo de ${data.header.fullName}`}
          width={217}
          height={217}
          unoptimized
          priority
        />
      </div>

      {/* Coordonnées */}
      <ContactSection contact={data.contact} />

      {/* Sections dynamiques */}
      {data.leftSections.map((section) => renderSection(section, data))}
    </aside>
  );
}
