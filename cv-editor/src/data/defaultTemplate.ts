import { CVDocument } from "@/types/cv";

// =====================================================================
// TEMPLATE PAR DÉFAUT — CV Sami BENDRISS
// =====================================================================
// Ce fichier contient toutes les données du CV.
// Modifie directement les valeurs ici pour personnaliser le rendu.
// =====================================================================

export const defaultTemplate: CVDocument = {
  id: "default",
  name: "CV Sami BENDRISS - Alternance Communication",

  // -------------------------------------------------------------------
  // THÈME (couleurs, polices, layout)
  // -------------------------------------------------------------------
  theme: {
    colors: {
      primary: "#ff3131",       // Rouge accents (titres jobs, formations)
      secondary: "#0061ff",     // Bleu liens
      leftColumnBg: "#d9d9d9",  // Fond colonne gauche
      rightTitleBg: "#dfdfdf",  // Fond rectangles titres colonne droite
      leftTitleBg: "#ffffff",   // Fond rectangles titres colonne gauche
      text: "#000000",
      background: "#ffffff",
    },
    fonts: {
      heading: "Giaza",
      body: "Zen Maru Gothic",
    },
    layout: {
      leftColumnWidth: "7.69cm",
      pageFormat: "A4",
    },
  },

  // -------------------------------------------------------------------
  // EN-TÊTE (nom, sous-titre, photo, profil)
  // -------------------------------------------------------------------
  header: {
    fullName: "Sami BENDRISS",
    subtitle: "ALTERNANCE - Communication",
    profilePhoto: "/assets/Photo-profil-cadre.png",
    profileFontSize: 11, // Taille en pt (10, 11, 12...)
    profileSummary: [
      "Étudiant en 3ème année de BUT Information-Communication,",
      "mon objectif est de contribuer au développement de la réputation",
      "et de la visibilité de votre organisation.",
      "Mes expériences en stage et projets universitaires m’ont permis",
      "de développer des compétences solides en communication stratégique,",
      "création de contenus et gestion des réseaux sociaux.",
      "Je recherche une alternance de 12 mois à partir de septembre 2026.",
    ].join(" "),
  },

  // -------------------------------------------------------------------
  // COORDONNÉES
  // -------------------------------------------------------------------
  contact: {
    birthDate: "11/12/2005 (20 ans)",
    phone: "+33.7.82.37.43.22",
    email: "samibendriss93@gmail.com",
    location: "Drancy, Île-de-France",
    linkedin: {
      url: "https://www.linkedin.com/in/sami-bendriss/",
      label: "linkedin.com/in/sami-bendriss/",
    },
    portfolio: {
      url: "https://samibendriss.netlify.app/?utm_source=cv&utm_medium=pdf&utm_campaign=portfolio_alternance_2026",
      label: "https://samibendriss.netlify.app/",
      qrCode: "/assets/qrcode-1775288610768.png",
    },
  },

  // -------------------------------------------------------------------
  // SECTIONS COLONNE GAUCHE
  // (ordre = ordre d'affichage, déplaçable librement)
  // -------------------------------------------------------------------
  leftSections: [
    // ========== Qualités ==========
    {
      id: "qualites",
      type: "qualites",
      title: "Qualités",
      items: [
        "Curieux",
        "Ambitieux",
        "Rigoureux",
        "Créatif",
        "Esprit d’équipe",
      ],
    },

    // ========== Logiciels ==========
    {
      id: "logiciels",
      type: "logiciels",
      title: "Logiciels",
      items: [
        "Google Workspace / Pack Office",
        "Canva",
        "Premiere Pro",
        "Adobe Creative Suite",
        "WordPress",
        "Figma",
      ],
    },

    // ========== Langues ==========
    {
      id: "langues",
      type: "langues",
      title: "Langues",
      items: [
        { name: "Français :",  level: "Langue maternelle" },
        { name: "Anglais :",   level: "Niveau B2 - Intermédiaire" },
        { name: "Espagnol :",  level: "Niveau B1 - Intermédiaire" },
        { name: "Arabe :",     level: "Niveau A2 - Débutant" },
      ],
    },

    // ========== Centres d'intérêt ==========
    {
      id: "centres-interet",
      type: "centres-interet",
      title: "Centres d’intérêt",
      items: [
        "Sport (Football, Formule 1, NBA)",
        "Outils numériques (intelligence artificielle liée à la communication)",
        "Culture générale",
      ],
    },

    // ========== Portfolio ==========
    {
      id: "portfolio",
      type: "portfolio",
      title: "Portfolio",
    },
  ],

  // -------------------------------------------------------------------
  // SECTIONS COLONNE DROITE
  // (ordre = ordre d'affichage, déplaçable librement)
  // -------------------------------------------------------------------
  rightSections: [
    // ========== Expériences professionnelles ==========
    {
      id: "experiences",
      type: "experiences",
      title: "Expériences professionnelles",
      items: [
        // ----- Expérience 1 : Akteos -----
        {
          id: "exp-1",
          jobTitle: "Chargé de marketing et communication",
          company: "Akteos",
          dateLine: "Avril 2026 - Août 2026 | Paris (Stage : 4 mois).",
          bullets: [
            {
              text:
                "Optimisation des processus marketing via l’intelligence " +
                "artificielle et l’automatisation, pour un organisme de " +
                "formation interculturelle.",
              keywords: ["organisme de formation interculturelle"],
            },
            {
              text:
                "Qualification et enrichissement de la base de données " +
                "leads et clients.",
            },
            {
              text:
                "Community management LinkedIn et création de contenus " +
                "(articles SEO et montage vidéo pour supports internes " +
                "et promotionnels).",
            },
            {
              text:
                "Appui à l’élaboration et la création de propositions " +
                "commerciales.",
            },
          ],
        },

        // ----- Expérience 2 : Paris SO Cœur -----
        {
          id: "exp-2",
          jobTitle: "Assistant Chargé de communication",
          company: "Paris SO Cœur (ex-GPSO 92 Issy)",
          dateLine:
            "Mai 2025 - Juin 2025 | Issy-les-Moulineaux (Stage : 2 mois).",
          bullets: [
            {
              text:
                "Veille concurrentielle, gestion des réseaux sociaux et " +
                "création de contenus digitaux et presse, pour un club " +
                "de football 100% féminin.",
              keywords: ["club de football 100% féminin"],
            },
            {
              text:
                "Accompagnement du rebranding du club vers “Paris SO Cœur” " +
                "et adaptation de la stratégie de communication.",
            },
          ],
        },

        // ----- Expérience 3 : Expotentiel 3V -----
        {
          id: "exp-3",
          jobTitle: "Chargé de communication",
          company: "Expotentiel 3V",
          dateLine: "Juin 2024 | Drancy (Stage : 1 mois).",
          bullets: [
            {
              text:
                "Community management et veille stratégique des réseaux " +
                "sociaux.",
            },
            {
              text:
                "Production de contenus pour une association d’insertion " +
                "sociale.",
              keywords: ["association d’insertion sociale"],
            },
          ],
        },
      ],
    },

    // ========== Compétences ==========
    {
      id: "competences",
      type: "competences",
      title: "Compétences",
      items: [
        "Stratégie de communication : digital, social media, événementiel, audiovisuel.",
        "Veille stratégique et concurrentielle, analyse de marché.",
        "Création de contenus multimédia et rédaction (web, print, réseaux sociaux).",
        "Gestion de projet, pitch client, intelligence artificielle générative.",
      ],
    },

    // ========== Formations ==========
    {
      id: "formations",
      type: "formations",
      title: "Formations",
      items: [
        // ----- BUT Information-Communication -----
        {
          id: "form-1",
          title: "BUT information-communication",
          detail: "(Communication des organisations)",
          institution: "IUT de Montreuil - Université Paris 8 (2023-2026)",
          isDetailRed: true,
          isTitleRed: false,
        },

        // ----- Baccalauréat -----
        {
          id: "form-2",
          title: "Baccalauréat général :",
          detail: "",
          institution: "Lycée Polyvalent Paul le Rolland - Drancy (2020-2023)",
          isDetailRed: false,
          isTitleRed: true,
        },
      ],
    },
  ],
};
