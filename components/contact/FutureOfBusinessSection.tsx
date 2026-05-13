import Image from "next/image";
import Link from "next/link";
import styles from "./ContactPage.module.css";
import { ChevronRight } from "lucide-react";

const quickActions = [
  {
    label: "Create Your Free Profile",
    icon: "/contact/cursor-05.png",
    href: "#contact-form",
  },
  {
    label: "Talk To Us",
    icon: "/contact/message-text-01.png",
    href: "mailto:support@pepagora.com",
  },
  {
    label: "Talk to Sales",
    icon: "/contact/phone-call-01.png",
    href: "tel:+971566000748",
  },
];

export default function FutureOfBusinessSection() {
  return (
    <section className={styles.bottomSection}>
      <div className={styles.container}>
        <div className={styles.bottomGrid}>
          <div className={styles.bottomCopy}>
            <h2>
              Let&apos;s build <span>the future</span> of business, together.
            </h2>
            <p>
              Join thousands of verified SMEs using Pepagora to connect with new buyers, trusted suppliers, and powerful growth tools - all in one place.
            </p>
          </div>

          <div className={styles.quickActions}>
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href} className={styles.quickAction}>
                <span className={styles.quickActionLeft}>
                  <span className={styles.quickActionIconWrap}>
                    <Image src={action.icon} alt="" width={18} height={18} className={styles.quickActionIcon} />
                  </span>
                  <span>{action.label}</span>
                </span>
                <ChevronRight className={styles.quickActionArrow} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
