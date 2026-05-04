import Image from "next/image";

export default function ESGSection() {
  const initiatives = [
    {
      id: 1,
      title: "One Client, One Tree (with Evertreen)",
      description: "We are not just another marketplace — we are a full-stack SME growth platform",
      image: "/Initiative/Intiative 1.png",
    },
    {
      id: 2,
      title: "1% Revenue to Stripe Climate",
      description: "Supporting cutting-edge carbon removal innovation through every subscription.",
      image: "/Initiative/initiative 2.png",
    },
    {
      id: 3,
      title: "Eco Business Tag",
      description: "Awarded to all paid clients under Grow, Scale, Global, and Enterprise plans.",
      image: "/Initiative/initiative 3.png",
    },
    {
      id: 4,
      title: "DIY ESG Framework for SMEs (Coming Soon)",
      description: "Industry-specific toolkits to help businesses self-assess and report ESG compliance easily.",
      image: "/Initiative/initiative 4.png",
    },
  ];

  return (
    <section className="esg-section">
      <div className="esg-inner">
        <h2 className="esg-title">ESG & Environmental Impact</h2>
        <p className="esg-copy">
          We are committed to helping businesses become globally credible and environmentally responsible.
        </p>

        <div className="esg-highlights">
          <h3 className="esg-subtitle">Key ESG Initiatives</h3>
          <p className="esg-subcopy">
            These badges show that a business is who they say they are, with their identity and data secured by world-class technology.
          </p>

          <div className="esg-card-grid">
            {initiatives.map((item) => (
              <div key={item.id} className="esg-card">
                <h4 className="esg-card-title">{item.title}</h4>
                <div className="esg-card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <p className="esg-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
