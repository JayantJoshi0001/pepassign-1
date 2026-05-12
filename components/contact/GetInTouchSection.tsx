import Image from "next/image";
import Link from "next/link";
import styles from "./ContactPage.module.css";

const contactMethods = [
  {
    icon: "/contact/envelope%20(1)%201.png",
    label: "support@pepagora.com",
    href: "mailto:support@pepagora.com",
  },
  {
    icon: "/contact/phone-call-01.png",
    label: "+971 56 600 0748",
    href: "tel:+971566000748",
  },
];

const officeLocations = [
  {
    icon: "/contact/map-pin-2-fill.png",
    title: "Registered Office",
    lines: ["66, Circular Road #03-01", "Singapore 049422"],
  },
  {
    icon: "/contact/map-pin-2-fill.png",
    title: "Head Office",
    lines: ["903, Intl Business Centre", "Post Box 12345", "Dubai, United Arab Emirates"],
  },
  {
    icon: "/contact/map-pin-2-fill.png",
    title: "India Office",
    lines: ["Door No. 71, Prasanna Enclave", "2nd Floor, Puyangam Road", "Coimbatore, Tamil Nadu 641 057, India"],
  },
];

export default function GetInTouchSection() {
  return (
    <section className={styles.contactSection} id="contact-form">
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfoCard}>
            <p className={styles.contactLead}>
              Have a question about how Pepagora works?
              <br />
              Need help getting started or want a demo?
            </p>

            <div className={styles.contactMethods}>
              {contactMethods.map((method) => (
                <Link key={method.label} href={method.href} className={styles.contactMethod}>
                  <span className={styles.methodIconWrap}>
                    <Image src={method.icon} alt="" width={18} height={18} className={styles.methodIcon} />
                  </span>
                  <span>{method.label}</span>
                </Link>
              ))}
            </div>

            <div className={styles.officeList}>
              {officeLocations.map((office) => (
                <div key={office.title} className={styles.officeRow}>
                  <span className={styles.officeIconWrap}>
                    <Image src={office.icon} alt="" width={18} height={18} className={styles.officeIcon} />
                  </span>
                  <div>
                    <p className={styles.officeTitle}>{office.title}</p>
                    <div className={styles.officeLines}>
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>
              Get in <span>touch</span>
            </h2>

            <form className={styles.form}>
              <label className={styles.field}>
                <span>Name</span>
                <input type="text" placeholder="Enter name" />
              </label>

              <label className={styles.field}>
                <span>Label</span>
                <input type="text" placeholder="Placeholder" />
                <small>This is a helper text.</small>
              </label>

              <label className={styles.field}>
                <span>E mail</span>
                <input type="email" placeholder="Enter a mail" />
              </label>

              <label className={styles.field}>
                <span>Phone Number</span>
                <input type="tel" placeholder="Enter phone number" />
              </label>

              <label className={styles.field}>
                <span>Query/Question/Inquiry</span>
                <textarea placeholder="enter here" rows={6} />
              </label>

              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
