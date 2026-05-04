import Image from "next/image";

export default function InclusionSection() {
  const empowermentCards = [
    {
      title: "Women-Led Businesses",
      icon: "/icons/icon 1.png",
    },
    {
      title: "Differently-Abled Entrepreneurs",
      icon: "/icons/icon 2.png",
    },
    {
      title: "Rural & Underserved SMEs",
      icon: "/icons/icon  3.png",
    },
    {
      title: "First-Time Digital Businesses with Regional Language Needs",
      icon: "/icons/icon 4.png",
    },
  ];

  const socialBadges = [
    {
      name: "SheLeads Certified",
      description: "Awarded to women-founded or women-led businesses.",
      image: "/Social Badge/Social Badge 1.png",
    },
    {
      name: "AbilityFirst Verified",
      description: "Recognizes businesses owned or led by differently-abled entrepreneurs.",
      image: "/Social Badge/Social Badge 2.png",
    },
  ];

  const benefitCards = [
    { id: 5, text: "Verified trust badge (visible on profile, listings, RFQs)", rotateClass: "rotate-neg-2" },
    { id: 6, text: "Up to 25% discount on annual Grow, Scale, and Global plans", rotateClass: "rotate-neg-6" },
    { id: 7, text: "Priority in search results and RFQ highlights", rotateClass: "rotate-zero" },
    { id: 8, text: "Feature spotlights and private communities", rotateClass: "rotate-6" },
    { id: 9, text: "Access to \"Social Impact Discount\" programs", rotateClass: "rotate-2" },
  ];

  return (
    <section className="inclusion-section">
      <div className="inclusion-inner">
        <h2 className="inclusion-title">
          Inclusive <span>Business Empowerment</span>
        </h2>
        <p className="inclusion-copy">
          We believe in leveling the playing field for entrepreneurs who are often left out of global trade. Our platform empowers:
        </p>

        <div className="empowerment-grid">
          {empowermentCards.map((card) => (
            <div key={card.title} className="empowerment-card">
              <div className="empowerment-icon">
                <Image src={card.icon} alt={card.title} width={48} height={48} className="object-contain" />
              </div>
              <span className="empowerment-title">{card.title}</span>
            </div>
          ))}
        </div>

        <div className="social-impact-section">
          <h3 className="social-impact-title">Social Impact Badges</h3>
          <p className="social-impact-copy">
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution:
          </p>

          <div className="social-badges">
            {socialBadges.map((badge) => (
              <div key={badge.name} className="badge-card">
                <div className="badge-image-frame">
                  <Image src={badge.image} alt={badge.name} fill className="object-contain" />
                </div>
                <h4 className="badge-title">{badge.name}</h4>
                <p className="badge-description">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="both-come-with">
          <h3 className="benefit-heading">Both Come With</h3>

          <div className="benefit-grid">
            {benefitCards.map((card) => (
              <div key={card.id} className={`benefit-card ${card.rotateClass}`}>
                <div className="benefit-icon">
                  <Image
                    src={`/icons/icon ${card.id}.png`}
                    alt="Benefit Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="benefit-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
