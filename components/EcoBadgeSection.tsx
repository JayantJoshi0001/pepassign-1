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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl text-[#333333] tracking-tight leading-tight">
          Recognizing Businesses That <span className="text-[#16a34a]">Make a Difference</span>
        </h2>
        <p className="mt-3 text-[15px] text-[#777777] max-w-2xl mx-auto leading-relaxed">
          At Pepagora, we recognize and promote businesses that are not just profit-driven, but also purpose-driven.
        </p>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#333333] mb-4">Eco Badge Tiers</h3>
          <p className="text-[14px] text-[#777777] max-w-3xl mx-auto mb-20 leading-relaxed">
            Our sustainability commitment is not one-size-fits-all. We offer multiple Eco Tags based on a business&apos;s contribution:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {badges.map((badge) => (
              <div key={badge.name} className="flex flex-col items-center">
                <div className="relative w-full max-w-[200px] aspect-square mb-6">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[18px] font-bold text-[#333333] mb-3">
                  {badge.name}
                </h4>
                <p className="text-[13px] text-[#777777] leading-relaxed max-w-[220px]">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-[11px] text-[#888888] font-medium italic">
          <span className="font-bold not-italic text-[#555555]">Note:</span> All eco badges are shown on your public profile and products, and filterable by buyers.
        </p>
      </div>
    </section>
  );
}
