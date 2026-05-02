import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17.1429V0H15V17.1429L10.7143 30H4.28571L8.57143 17.1429H0ZM25 17.1429V0H40V17.1429L35.7143 30H29.2857L33.5714 17.1429H25Z" fill="#E5E7EB" />
          </svg>
        </div>

        <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 italic leading-relaxed mb-12">
          "Pep-assign is not just a platform; it's a movement to create a more sustainable and inclusive global trade."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-sm">
            <Image
              src="/founder.png"
              alt="Niladri Mazumder"
              width={80}
              height={80}
              className="object-cover grayscale"
            />
          </div>
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-900">NILADRI MAZUMDER</h4>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
