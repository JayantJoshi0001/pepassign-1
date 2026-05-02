import Image from "next/image";
import { Sprout, User, Globe, FileText } from "lucide-react";

export default function GoalsSection() {
  const goals = [
    {
      icon: <Sprout className="w-5 h-5 text-[#333333]" />,
      number: "1 Million",
      label: "Trees Planted",
    },
    {
      icon: <User className="w-5 h-5 text-[#333333]" />,
      number: "100,000",
      label: "Inclusive SMEs Onboarded",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#333333]" />,
      number: "10,000",
      label: "Global Buyers Aligned with ESG-Ready SMEs",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#333333]" />,
      number: "500+",
      label: "Impact Case Studies Showcased",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/goals bg.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Heading */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <h2 className="text-[48px] font-medium text-[#333333] tracking-tight">
              Our 2028 <span className="text-[#ef4444]">Goals</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {goals.map((goal, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    {goal.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[42px] font-bold text-[#ef4444] leading-none tracking-tight">
                      {goal.number}
                    </div>
                    <div className="text-[14px] text-[#777777] font-medium leading-relaxed max-w-[200px]">
                      {goal.label}
                    </div>
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
