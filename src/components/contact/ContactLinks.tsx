import { useState } from "react";
import { Github, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/contact";

export default function ContactLinks() {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CONTACT.whatsappE164}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopyStatus("E-mail copiado!");
      window.setTimeout(() => setCopyStatus(null), 2500);
    } catch {
      setCopyStatus("Não foi possível copiar.");
      window.setTimeout(() => setCopyStatus(null), 2500);
    }
  };

  const handleGithub = () => {
    window.open(CONTACT.github, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-links">
      <button type="button" onClick={handleWhatsApp}>
        <MessageCircle className="contact-links-icon" strokeWidth={2} aria-hidden />
        <span>WhatsApp</span>
      </button>
      <button type="button" onClick={handleCopyEmail}>
        <Mail className="contact-links-icon" strokeWidth={2} aria-hidden />
        <span>Copiar E-mail</span>
      </button>
      <button type="button" onClick={handleGithub}>
        <Github className="contact-links-icon" strokeWidth={2} aria-hidden />
        <span>SoftwareHouse</span>
      </button>
      {copyStatus ? (
        <p className="contact-links-hint" role="status" aria-live="polite">
          {copyStatus}
        </p>
      ) : null}
    </div>
  );
}
