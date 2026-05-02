import Image from "next/image";

export default function InclusionSection() {
  const empowermentCards = [
    {
      title: "Women-Led Businesses",
      icon: "/icons/icon 1.png", // Red woman icon in screenshot
    },
    {
      title: "Differently-Abled Entrepreneurs",
      icon: "/icons/icon 2.png", // Red wheelchair icon in screenshot
    },
    {
      title: "Rural & Underserved SMEs",
      icon: "/icons/icon  3.png", // Red mountain/rural icon in screenshot
    },
    {
      title: "First-Time Digital Businesses with Regional Language Needs",
      icon: "/icons/icon 4.png", // Red megaphone icon in screenshot
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl text-[#333333] tracking-tight leading-tight">
          Inclusive <span className="text-[#16a34a]">Business Empowerment</span>
        </h2>
        <p className="mt-8 text-[15px] text-[#777777] max-w-2xl mx-auto leading-relaxed">
          We believe in leveling the playing field for entrepreneurs who are often left out of global trade. Our platform empowers:
        </p>

        {/* Empowerment Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {empowermentCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#fcfcfc] border border-[#f5f5f5] rounded-xl p-10 flex flex-col items-center justify-center min-h-[180px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6 h-12 flex items-center justify-center">
                <Image src={card.icon} alt={card.title} width={48} height={48} className="object-contain" />
              </div>
              <span className="text-[14px] font-bold text-[#444444] leading-tight max-w-[180px]">
                {card.title}
              </span>
            </div>
          ))}
        </div>

        {/*Social Impact Badges */}
        <div className="mt-18">
          <h3 className="text-2xl font-bold text-[#333333] mb-4">Social Impact Badges</h3>
          <p className="text-[14px] text-[#777777] max-w-3xl mx-auto mb-20 leading-relaxed">
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution:
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
            {socialBadges.map((badge) => (
              <div key={badge.name} className="flex flex-col items-center max-w-[280px]">
                <div className="relative w-[240px] h-[240px] mb-6">
                  <Image src={badge.image} alt={badge.name} fill className="object-contain" />
                </div>
                <h4 className="text-[18px] font-bold text-[#333333] mb-3">{badge.name}</h4>
                <p className="text-[13px] text-[#777777] leading-relaxed">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-[20px] font-bold text-[#333333] mb-12">Both Come With</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 px-4">
            {[
              { id: 5, text: "Verified trust badge (visible on profile, listings, RFQs)", rotate: "-rotate-2" },
              { id: 6, text: "Up to 25% discount on annual Grow, Scale, and Global plans", rotate: "-rotate-6 lg:-mt-4" },
              { id: 7, text: "Priority in search results and RFQ highlights", rotate: "rotate-0 lg:mt-4" },
              { id: 8, text: "Feature spotlights and private communities", rotate: "rotate-6 lg:-mt-4" },
              { id: 9, text: "Access to \"Social Impact Discount\" programs", rotate: "rotate-2" },
            ].map((card) => (
              <div
                key={card.id}
                className={`bg-white border border-[#eeeeee] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[220px] ${card.rotate}`}
              >
                <div className="mb-6 h-12 flex items-center justify-center">
                  <Image
                    src={`/icons/icon ${card.id}.png`}
                    alt="Benefit Icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-[13px] font-bold text-[#444444] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
