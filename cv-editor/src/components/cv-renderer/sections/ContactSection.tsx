import { CVContact } from "@/types/cv";

interface Props {
  contact: CVContact;
}

export default function ContactSection({ contact }: Props) {
  return (
    <section className="cv-coordonnees" style={{ textAlign: "center" }}>
      <h2>Coordonnées</h2>

      {/* Date de naissance */}
      <div className="cv-contact-item">
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </svg>
        <span>{contact.birthDate}</span>
      </div>

      {/* Téléphone */}
      <div className="cv-contact-item">
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>
          <a href={`tel:${contact.phone.replace(/\./g, "")}`}>{contact.phone}</a>
        </span>
      </div>

      {/* Email */}
      <div className="cv-contact-item">
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </span>
      </div>

      {/* Localisation */}
      <div className="cv-contact-item">
        <svg
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{contact.location}</span>
      </div>

      {/* LinkedIn */}
      <div className="cv-contact-item">
        <svg
          viewBox="0 0 72 72" className="cv-linkedin-icon"
          preserveAspectRatio="xMidYMid meet" aria-hidden="true"
        >
          <path
            fill="#0061ff"
            d="M8,72h56c4.42,0,8-3.58,8-8V8c0-4.42-3.58-8-8-8H8C3.58,0,0,3.58,0,8v56c0,4.42,3.58,8,8,8Z"
          />
          <path
            fill="#fff"
            d="M62,62h-10.68v-18.2c0-4.99-1.9-7.78-5.84-7.78-4.3,0-6.54,2.9-6.54,7.78v18.2h-10.3V27.33h10.3v4.67s3.1-5.73,10.45-5.73,12.62,4.49,12.62,13.78v21.95ZM16.35,22.79c-3.51,0-6.35-2.86-6.35-6.4s2.84-6.4,6.35-6.4,6.35,2.86,6.35,6.4-2.84,6.4-6.35,6.4ZM11.03,62h10.74V27.33h-10.74v34.67Z"
          />
        </svg>
        <a href={contact.linkedin.url}>{contact.linkedin.label}</a>
      </div>
    </section>
  );
}
