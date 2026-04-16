// ==================== CV DATA MODEL ====================

export interface CVDocument {
  id: string;
  name: string;
  theme: CVTheme;
  header: CVHeader;
  contact: CVContact;
  leftSections: SectionBlock[];
  rightSections: SectionBlock[];
}

export interface CVTheme {
  colors: {
    primary: string;       // #ff3131 (rouge accents)
    secondary: string;     // #0061ff (liens)
    leftColumnBg: string;  // #d9d9d9
    rightTitleBg: string;  // #dfdfdf
    leftTitleBg: string;   // #ffffff
    text: string;          // #000000
    background: string;    // #ffffff
  };
  fonts: {
    heading: string;       // "Giaza"
    body: string;          // "Zen Maru Gothic"
  };
  layout: {
    leftColumnWidth: string; // "7.69cm"
    pageFormat: "A4";
  };
}

export interface CVHeader {
  fullName: string;
  subtitle: string;
  profilePhoto: string;
  profileSummary: string;
  profileFontSize?: number; // taille en pt (ex: 11, 12), défaut 11
}

export interface CVContact {
  birthDate: string;
  phone: string;
  email: string;
  location: string;
  linkedin: { url: string; label: string };
  portfolio: { url: string; label: string; qrCode: string };
}

// Section discriminated union
export type SectionBlock =
  | ExperiencesSection
  | CompetencesSection
  | FormationsSection
  | QualitesSection
  | LogicielsSection
  | LanguesSection
  | CentresInteretSection
  | PortfolioSection;

interface BaseSectionBlock {
  id: string;
  title: string;
}

export interface ExperiencesSection extends BaseSectionBlock {
  type: "experiences";
  items: ExperienceItem[];
}

export interface CompetencesSection extends BaseSectionBlock {
  type: "competences";
  items: string[];
}

export interface FormationsSection extends BaseSectionBlock {
  type: "formations";
  items: FormationItem[];
}

export interface QualitesSection extends BaseSectionBlock {
  type: "qualites";
  items: string[];
}

export interface LogicielsSection extends BaseSectionBlock {
  type: "logiciels";
  items: string[];
}

export interface LanguesSection extends BaseSectionBlock {
  type: "langues";
  items: LangueItem[];
}

export interface CentresInteretSection extends BaseSectionBlock {
  type: "centres-interet";
  items: string[];
}

export interface PortfolioSection extends BaseSectionBlock {
  type: "portfolio";
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  dateLine: string;
  bullets: BulletItem[];
}

export interface BulletItem {
  text: string;
  keywords?: string[]; // mots soulignés en gras dans le texte
}

export interface FormationItem {
  id: string;
  title: string;
  detail: string;      // ex: "(parcours Communication des organisations)"
  institution: string;
  isDetailRed: boolean; // le detail s'affiche en rouge
  isTitleRed: boolean;  // le titre s'affiche en rouge
}

export interface LangueItem {
  name: string;
  level: string;
}
