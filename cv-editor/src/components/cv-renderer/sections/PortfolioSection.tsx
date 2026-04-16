import { CVContact } from "@/types/cv";
import Image from "next/image";

interface Props {
  contact: CVContact;
}

export default function PortfolioSectionComponent({ contact }: Props) {
  return (
    <section className="cv-portfolio">
      <div className="cv-portfolio-content">
        <Image
          src={contact.portfolio.qrCode}
          alt="QR Code du portfolio de Sami Bendriss"
          className="cv-qr-code"
          width={96}
          height={96}
          unoptimized
        />
        <div className="cv-portfolio-right">
          <span className="cv-portfolio-label">PORTFOLIO :</span>
          <a href={contact.portfolio.url} className="cv-portfolio-url">
            {contact.portfolio.label}
          </a>
          <Image
            src="/assets/Fleche-portfolio.png"
            alt=""
            className="cv-arrow"
            width={76}
            height={30}
            aria-hidden="true"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
