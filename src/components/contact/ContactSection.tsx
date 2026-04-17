import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  return (
    <section
      className="contact scroll-mt-28"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-header">
        <span className="contact-header-label is-reveal wes-reveal-s1">
          VAMOS CONVERSAR!
        </span>
        <h2 id="contact-title" className="is-reveal wes-reveal-s2">
          Entre em contato
        </h2>
        <p className="is-reveal wes-reveal-s3">
          Se você deseja discutir um projeto, fazer uma parceria ou apenas bater
          um papo...
        </p>
      </div>

      <div className="contact-content is-reveal wes-reveal-s4">
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
}
