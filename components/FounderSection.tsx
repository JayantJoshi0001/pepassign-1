import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-inner">
        <div className="founder-quote-icon">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17.1429V0H15V17.1429L10.7143 30H4.28571L8.57143 17.1429H0ZM25 17.1429V0H40V17.1429L35.7143 30H29.2857L33.5714 17.1429H25Z" fill="#E5E7EB" />
          </svg>
        </div>

        <blockquote className="founder-quote">
          "Pep-assign is not just a platform; it's a movement to create a more sustainable and inclusive global trade."
        </blockquote>

        <div className="founder-profile">
          <div className="founder-photo">
            <Image
              src="/founder.png"
              alt="Niladri Mazumder"
              width={80}
              height={80}
              className="founder-photo-image"
            />
          </div>
          <div>
            <h4 className="founder-name">NILADRI MAZUMDER</h4>
            <p className="founder-role">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
