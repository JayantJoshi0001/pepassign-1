import Image from "next/image";

export default function EcoBadgeSection() {
  const badges = [
    {
      name: "EcoStarter",
      description: "Businesses supporting global reforestation through their Pepagora plan.",
      image: "/Badge/Badge Starter.png",
    },
    {
      name: "EcoSeller",
      description: "Businesses offering verifiably eco-friendly or recycled products.",
      image: "/Badge/Badge Seller.png",
    },
    {
      name: "EcoVerified",
      description: "Businesses holding official green certifications (e.g., FSC, GOTS, ISO 14001).",
      image: "/Badge/Badge Verified.png",
    },
    {
      name: "EcoChampion",
      description: "Companies with audited, significant commitments to sustainable operations.",
      image: "/Badge/Badge Champion.png",
    },
  ];

  return (
    <section className="eco-badge-section">
      <div className="eco-badge-inner">
        <h2 className="eco-badge-title">
          Recognizing Businesses That <span>Make a Difference</span>
        </h2>
        <p className="eco-badge-copy">
          At Pepagora, we recognize and promote businesses that are not just profit-driven, but also purpose-driven.
        </p>

        <div className="eco-badge-cta">
          <h3 className="eco-badge-cta-title">Eco Badge Tiers</h3>
          <p className="eco-badge-cta-copy">
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution:
          </p>

          <div className="eco-badge-grid">
            {badges.map((badge) => (
              <div key={badge.name} className="eco-badge-card">
                <div className="eco-badge-figure">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="eco-badge-title-small">{badge.name}</h4>
                <p className="eco-badge-description">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="eco-badge-note">
          <span className="eco-badge-note-strong">Note:</span> All eco badges are shown on your public profile and products, and filterable by buyers.
        </p>
      </div>
    </section>
  );
}
