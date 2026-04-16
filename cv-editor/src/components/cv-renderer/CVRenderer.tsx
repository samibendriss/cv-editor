import { CVDocument } from "@/types/cv";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import "@/styles/cv.css";

interface Props {
  data: CVDocument;
}

export default function CVRenderer({ data }: Props) {
  return (
    <main className="cv-page">
      {/* Colonne droite en premier dans le DOM (pour les robots ATS) */}
      <RightColumn data={data} />
      {/* Colonne gauche (repositionnée via CSS Grid) */}
      <LeftColumn data={data} />
    </main>
  );
}
