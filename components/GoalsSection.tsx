import Image from "next/image";
import { Sprout, User, Globe, FileText } from "lucide-react";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Sprout className="goal-icon" />,
      number: "1 Million",
      label: "Trees Planted",
    },
    {
      icon: <User className="goal-icon" />,
      number: "100,000",
      label: "Inclusive SMEs Onboarded",
    },
    {
      icon: <Globe className="goal-icon" />,
      number: "10,000",
      label: "Global Buyers Aligned with ESG-Ready SMEs",
    },
    {
      icon: <FileText className="goal-icon" />,
      number: "500+",
      label: "Impact Case Studies Showcased",
    },
  ];

  return (
    <section className="goals-section">
      <div className="goals-bg-layer">
        <Image
          src="/goals bg.png"
          alt="Background Pattern"
          fill
          className="object-cover goals-bg-image"
        />
      </div>

      <div className="goals-inner">
        <div className="goals-grid">
          <div className="goals-heading">
            <h2 className="goals-title">
              Our 2028 <span>Goals</span>
            </h2>
          </div>

          <div className="goals-stats">
            <div className="goals-list">
              {goals.map((goal, index) => (
                <div key={index} className="goal-item">
                  <div className="goal-icon-row">{goal.icon}</div>
                  <div className="goal-copy">
                    <div className="goal-number">{goal.number}</div>
                    <div className="goal-label">{goal.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
