import Link from "next/link";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-title">Be Part of the Movement</h2>
        <p className="cta-text">
          Join thousands of businesses worldwide that are already making a difference through responsible trade. Whether you are a buyer or a supplier, your journey towards positive impact starts here.
        </p>
        <div className="cta-button-group">
          <Link href="#" className="cta-button primary">
            Join as a Supplier
          </Link>
          <Link href="#" className="cta-button secondary">
            Join as a Buyer
          </Link>
        </div>
      </div>
    </section>
  );
}
