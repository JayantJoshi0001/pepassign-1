import Image from "next/image";
import ActionButton from "@/components/ui/ActionButton";
import styles from "./CareersHero.module.css";

export default function CareersHero() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copyCol}>
          <p className={styles.eyebrow}>Career</p>
          <h1 className={styles.title}>
            We&apos;re not just hiring. <span>We&apos;re building a revolution</span> in how small businesses grow.
          </h1>
          <p className={styles.subtitle}>
            Come join a team that&apos;s rewriting the future of B2B with heart, tech, and grit.
          </p>
          <ActionButton label="See Open Roles" href="#openings" size="hero" />
        </div>

        <div className={styles.illustrationCol}>
          <Image
            src="/careers/Child friendly area.png"
            alt="Pepagora team illustration"
            width={500}
            height={532}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
