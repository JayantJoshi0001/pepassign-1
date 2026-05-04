import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background-text">
        <span>impact</span>
      </div>

      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-label">Impact at Pepagora</span>

            <h1 className="hero-title">
              Empowering Global Trade with Purpose, <span>Sustainability</span>, and Inclusion
            </h1>

            <div className="hero-text-block">
              <p className="hero-text">
                Pepagora is not just a B2B marketplace—we are a catalyst for impact. Our vision is rooted in building a future where growth is ethical, trade is inclusive, and every business, no matter how small, contributes to a better world.
              </p>
              <p className="hero-text-small">
                We embed Environmental, Social, and Governance (ESG) values and inclusive economic principles directly into our platform—supporting climate action, diverse entrepreneurship, and social equity across global supply chains.
              </p>
            </div>

            <div className="hero-cta">
              <button className="hero-button" type="button">
                <Leaf className="hero-button-icon" />
                <span>Download Our Full Impact Overview</span>
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              <Image
                src="/Hero image.png"
                alt="Impact Illustration"
                width={1200}
                height={1000}
                className="hero-image object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
