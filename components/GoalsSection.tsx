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
    <section className="goals-section" aria-labelledby="goals-heading">
      <div className="goals-inner">
        <article className="goals-card">
          <div className="goals-card-content">
            <header className="goals-heading">
              <h2 id="goals-heading" className="goals-title">
                Our 2028 <span>Goals</span>
              </h2>
            </header>

            <div className="goals-list">
              {goals.map((goal, index) => (
                <article key={index} className="goal-item">
                  <div> {goal.icon} </div>
                  <div className="goal-copy">
                    <p className="goal-number">{goal.number}</p>
                    <p className="goal-label">{goal.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="goals-card-image">
            <Image
              src="/goals bg.png"
              alt="Goals background pattern"
              fill
              className="goals-panel-graphic"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
