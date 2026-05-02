import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#eef7f2] overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-48">
      {/* Ghosted "impact" text background */}
      <div className="absolute inset-0 flex items-end justify-start pointer-events-none opacity-[0.05] select-none pl-10">
        <span className="text-[18rem] font-black tracking-tighter leading-none">impact</span>
      </div>

      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <span className="text-[13px] text-gray-500 font-medium tracking-tight block mb-6">
              Impact at Pepagora
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[48px] tracking-tight text-[#333333] leading-[1.1] mb-8">
              Empowering Global Trade with Purpose, <span className="text-[#16a34a]">Sustainability</span>, and Inclusion
            </h1>

            <div className="space-y-6 max-w-2xl">
              <p className="text-[17px] text-[#555555] leading-relaxed font-medium">
                Pepagora is not just a B2B marketplace—we are a catalyst for impact. Our vision is rooted in building a future where growth is ethical, trade is inclusive, and every business, no matter how small, contributes to a better world.
              </p>
              <p className="text-[13px] text-[#777777] leading-relaxed max-w-lg">
                We embed Environmental, Social, and Governance (ESG) values and inclusive economic principles directly into our platform—supporting climate action, diverse entrepreneurship, and social equity across global supply chains.
              </p>
            </div>

            <div className="mt-12">
              <button className="flex items-center space-x-3 bg-[#c2e7cf] hover:bg-[#b0dbc0] text-[#16a34a] px-5 py-3 rounded-full transition-all duration-200">
                <Leaf className="w-4 h-4 fill-[#16a34a]" />
                <span className="text-[13px] font-bold">Download Our Full Impact Overview</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-16 lg:mt-0 flex justify-end items-end h-full min-h-[500px]">
            <div className="relative z-10 w-full max-w-[120%] lg:-mr-[10%]">
              <Image
                src="/Hero image.png"
                alt="Impact Illustration"
                width={1200}
                height={1000}
                className="w-full h-auto object-contain scale-110 origin-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
