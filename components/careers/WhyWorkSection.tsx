import Image from "next/image";
import styles from "./WhyWorkSection.module.css";

const points = [
  {
    icon: "/careers/book-svgrepo-com 1.png",
    alt: "book icon",
    text: "Because we believe growth should be fair, global, and accessible to every genuine business.",
  },
  { icon: "/careers/book-03.png", alt: "books icon", text: "We're not here to follow playbooks." },
  {
    icon: "/careers/global-svgrepo-com 1.png",
    alt: "globe icon",
    text: "And 'We're building a platform designed to serve millions of SMEs globally.' around the world.",
  },
  { icon: "/careers/stars.png", alt: "sparkles icon", text: "We're here to create one — grounded in empathy, powered by AI, and scaled with purpose." },
];

export default function WhyWorkSection() {
  return (
    <section className={styles.section}>
        <div className={`container ${styles.inner}`}>
            <div className={`container ${styles.card}`}>
                <h2 className={styles.title}>
                Why Work at <span className={styles.brand}>Pepagora?</span>
                </h2>

                <div className={styles.grid}>
                {points.map((item) => (
                  <article key={item.text} className={styles.point}>
                    <div className={styles.iconWrap} aria-hidden>
                      <Image src={item.icon} alt={item.alt} width={64} height={64} className={styles.iconImg} />
                    </div>
                    <p className={styles.pointText}>{item.text}</p>
                  </article>
                ))}
                </div>

                <div className={styles.bgImage} aria-hidden>
                <Image
                    src="/goals%20bg.png"
                    alt="decorative goals background"
                    width={607}
                    height={558}
                    priority={false}
                />
                </div>
            </div>
        </div>
    </section>
  );
}
