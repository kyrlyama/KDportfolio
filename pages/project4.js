import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/Project.module.css";

const images = ["/project40.png", "/project41.png", "/project42.png" , "/project43.png"];

const snapshot = [
  {
    label: "Role",
    value: "Full-stack development, solo — frontend, PHP backend, database design",
  },
  {
    label: "Stack",
    value: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, Claude API (vision), SheetJS",
  },
  {
    label: "Project type",
    value: "Full-stack inventory & sales management system",
  },
  {
    label: "Focus",
    value: "Duplicate-safe multi-store stock tracking, AI-assisted sales digitization (in progress)",
  },
];

const decisions = [
  {
    title: "Storage: MySQL vs. flat files",
    text: "Multiple staff members add stock at the same time, so I chose a real database over localStorage/flat files. MySQL's unique constraint enforces data integrity that would otherwise need to be checked manually in code.",
  },
  {
    title: "Duplicate stock entries",
    text: "Adding the same model to the same store was creating a new row instead of increasing quantity. Fixed with a unique key constraint and an ON DUPLICATE KEY UPDATE pattern, instead of checking for duplicates on every request in application code.",
  },
  {
    title: "Sales entry: manual vs. AI-assisted",
    text: "Staff were retyping sales from handwritten sheets by hand. I'm building an AI-assisted digitization flow with Claude's vision model instead, with low-confidence fields flagged for manual review rather than trusting AI output blindly. Still in progress.",
  },
];

const features = [
  {
    title: "Duplicate-safe stock updates",
    text: "Adding an existing model to the same store increases its quantity instead of creating a new row.",
  },
  {
    title: "Two-store inventory tracking",
    text: "Stock is tracked separately for two store locations, with color-coded badges to tell them apart at a glance.",
  },
  {
    title: "Search and filtering",
    text: "Inventory can be searched and filtered by brand, model, type, and availability, with model suggestions pulled live from existing stock.",
  },
  {
    title: "AI-assisted sales digitization (in development)",
    text: "A photo of a handwritten sales sheet can be uploaded and processed to extract each row into an editable table, flagging low-confidence fields for review.",
  },
  {
    title: "Excel export",
    text: "Reviewed sales data can be exported to a formatted .xlsx file matching the store's existing paperwork, generated client-side.",
  },
  {
    title: "Live deployment",
    text: "The system runs on a live PHP and MySQL host and is used by store staff for day-to-day stock management.",
  },
];

const improvements = [
  "Finish and polish the AI-assisted sales digitization flow, including better handling of low-confidence fields.",
  "Add user roles for admin and staff accounts.",
  "Add edit/delete actions for existing inventory entries.",
  "Improve form validation and empty states.",
  "Add a simple reporting view for stock trends across both stores.",
];

export default function Project4() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.projectHero}>
          <div className={styles.projectHeroText}>
            <p className={styles.projectEyebrow}>Full-stack project</p>

            <h1 className={styles.projectHeroTitle}>
              Stock Tracker — Screen Protector Inventory
            </h1>

            <p className={styles.projectHeroLead}>
              A full-stack web application for tracking screen protector stock
              across two store locations — replacing a manual, paper-based
              process with a live, database-backed tool used daily by staff.
            </p>

            <div className={styles.btnRow}>
              <a
                href="https://github.com/kyrlyama/practice"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoBtn}
              >
                GitHub repository
              </a>
            </div>
          </div>

          <div className={styles.projectHeroMedia}>
            <Image
              src="/project40.png"
              alt="Stock Tracker project preview"
              width={1200}
              height={760}
              className={styles.projectHeroImage}
              priority
            />
          </div>
        </section>

        {/* SNAPSHOT */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Project snapshot</h2>

          <div className={styles.projectSnapshotGrid}>
            {snapshot.map((item) => (
              <article key={item.label} className={styles.projectSnapshotCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>The problem</h2>

          <p className={styles.projectText}>
            The store needed a way to track screen protector stock across two
            locations instead of relying on a manual, paper-based process. An
            earlier, more general inventory tool didn&apos;t fit the team&apos;s actual
            workflow — after their feedback, I rebuilt it specifically around
            this task.
          </p>
        </section>

        {/* KEY DECISIONS */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Key decisions</h2>

          <div className={styles.projectFeatureGrid}>
            {decisions.map((decision) => (
              <article key={decision.title} className={styles.projectFeatureCard}>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Key features</h2>

          <div className={styles.projectFeatureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.projectFeatureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className={styles.projectSection}>
          <div className={styles.projectSectionHeader}>
            <div>
              <h2 className={styles.projectSectionTitle}>Screenshots</h2>
              <p className={styles.projectText}>
                Main screens showing the stock management interface, the
                two-store view, and the inventory workflow.
              </p>
            </div>

            <span className={styles.projectCounter}>
              {current + 1} / {images.length}
            </span>
          </div>

          <div className={styles.projectSlider}>
            <Image
              src={images[current]}
              alt={`Stock Tracker screenshot ${current + 1}`}
              width={1200}
              height={760}
              className={styles.projectSliderImage}
              sizes="(max-width: 640px) 100vw, 1200px"
            />

            <button
              type="button"
              aria-label="Previous screenshot"
              className={`${styles.arrow} ${styles.left}`}
              onClick={prevImage}
            >
              &#10094;
            </button>

            <button
              type="button"
              aria-label="Next screenshot"
              className={`${styles.arrow} ${styles.right}`}
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>

          <div className={styles.projectThumbGrid}>
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`${styles.projectThumb} ${
                  index === current ? styles.projectThumbActive : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Show screenshot ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Stock Tracker thumbnail ${index + 1}`}
                  width={320}
                  height={200}
                />
              </button>
            ))}
          </div>
        </section>

        {/* RESULT */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Result</h2>

          <p className={styles.projectText}>
            The system replaced the store&apos;s manual stock tracking and is used
            daily by staff across both locations. Fixing the duplicate-entry
            bug removed a recurring source of incorrect stock counts. The
            AI-assisted sales digitization is still in progress, but even the
            current version already saves staff from retyping every
            handwritten sales line by hand.
          </p>
        </section>

        {/* RETROSPECTIVE */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>
            Retrospective — what&apos;s next
          </h2>

          <ul className={styles.projectList}>
            {improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}