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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl text-[#333333] tracking-tight">
          ESG & Environmental Impact
        </h2>
        <p className="mt-2 text-[15px] text-[#777777] max-w-2xl mx-auto leading-relaxed">
          We are committed to helping businesses become globally credible and environmentally responsible.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl text-[#333333] mb-4">Key ESG Initiatives</h3>
          <p className="text-[14px] text-[#777777] max-w-4xl mx-auto mb-4 leading-relaxed">
            These badges show that a business is who they say they are, with their identity and data secured by world-class technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#eeeeee] rounded-2xl px-8 py-10 flex flex-col min-h-[450px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h4 className="text-[20px] font-semibold text-[#333333] mb-6 leading-tight">
                  {item.title}
                </h4>

                <div className="flex-grow flex items-center justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-contain max-h-[160px]"
                  />
                </div>

                <p className="text-[13px] text-[#888888] leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
