import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-inner">
        <div className="founder-photo">
          <Image
            src="/founder.png"
            alt="Murugesan Dhanapal"
            width={80}
            height={80}
            className="founder-photo-image"
          />
        </div>

        <blockquote className="founder-quote">
          We are not just growing businesses. We are growing forests, opportunities, and a better tomorrow.
        </blockquote>

        <div className="founder-profile">
          <h3 className="founder-name">Murugesan Dhanapal</h3>
          <p className="founder-role">Founder & CEO</p>
        </div>

        <div className="founder-divider"></div>

        <div className="disclaimer-section">
          <h4 className="disclaimer-title">Disclaimer</h4>
          <p className="disclaimer-text">
            Pepagora provides AI-enabled business growth tools and services designed to support small and medium enterprises (SMEs). All outcomes are influenced by user behavior, market conditions, and industry context. Access to features, pricing, and performance may vary and is subject to change without notice or prior obligation. Third-party services including sustainability initiatives, certifications, and integrations are independently operated and subject to their respective terms. Pepagora conducts verification based on documentation and third-party validation where applicable; however, users are solely responsible for conducting their own due diligence before initiating commercial engagements. Data usage is governed by our <a href="#" className="disclaimer-link">[Privacy Policy]</a>, and access to this platform implies agreement with our <a href="#" className="disclaimer-link">[Terms of Use]</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
