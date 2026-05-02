import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Be Part of the Movement</h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Join thousands of businesses worldwide that are already making a difference through responsible trade. 
          Whether you are a buyer or a supplier, your journey towards positive impact starts here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
          >
            Join as a Supplier
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto px-10 py-4 bg-[#ef4444] text-white font-bold rounded-full hover:bg-[#dc2626] transition-colors"
          >
            Join as a Buyer
          </Link>
        </div>
      </div>
    </section>
  );
}
