// pages/project4.js — Stock Tracker (also /projects/stock-tracker).
// Шаблон кейса: Hero → Context → Constraints → Decisions → Solution →
// Result → Retrospective. Весь старый контент сохранён (см. REDESIGN-CHANGES.md).
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  CaseSection,
  DecisionCard,
  Placeholder,
  SnapshotBox,
  caseStyles as styles,
} from "@/components/case";

const images = [
  "/project40.png",
  "/project41.png",
  "/project42.png",
  "/project43.png",
];

const snapshot = [
  { label: "Role", value: "Solo: design, frontend, PHP backend, database" },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "PHP, MySQL, JavaScript" },
  { label: "Status", value: "In daily use" },
];

// Полный список из старого snapshot — ничего не потеряно
const snapshotDetails = [
  {
    label: "Project type",
    value: "Full-stack inventory & sales management system",
  },
  {
    label: "Full stack",
    value:
      "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, Claude API (vision), SheetJS",
  },
  {
    label: "Focus",
    value:
      "Duplicate-safe multi-store stock tracking, AI-assisted sales digitization (in progress)",
  },
];

const constraints = [
  {
    title: "Several users",
    text: "Multiple staff members add stock at the same time.",
  },
  {
    title: "Busy staff",
    text: <Placeholder>e.g. one screen, a few taps, no training</Placeholder>,
  },
  {
    title: "Budget",
    text: <Placeholder>e.g. free hosting and tools only</Placeholder>,
  },
];

const decisions = [
  {
    kind: "chose",
    chose: "MySQL",
    over: "flat files / localStorage",
    why: "multiple staff members add stock at the same time, so I chose a real database. MySQL's unique constraint enforces data integrity that would otherwise need to be checked manually in code.",
    cost: "needs a PHP + MySQL host and more setup.",
  },
  {
    kind: "fixed",
    chose: "Duplicate stock entries",
    why: "adding the same model to the same store was creating a new row instead of increasing quantity. Fixed with a unique key constraint and an ON DUPLICATE KEY UPDATE pattern, instead of checking for duplicates on every request in application code.",
  },
  {
    kind: "chose",
    chose: "AI-assisted sales entry",
    over: "manual retyping",
    why: "staff were retyping sales from handwritten sheets by hand. I'm building a digitization flow with Claude's vision model, with low-confidence fields flagged for manual review rather than trusting AI output blindly.",
    cost: "still in progress; every flagged field needs a human check.",
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
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className={`${styles.page} ${styles.narrow}`}>
      <Link href="/projects" className={styles.backLink}>
        ← All projects
      </Link>

      {/* 1. HERO */}
      <header>
        <p className={styles.eyebrow}>Commercial · Full-stack · Likefon</p>
        <h1 className={styles.h1}>
          Stock Tracker — inventory for a screen-protector store
        </h1>
        <p className={styles.lead}>
          A full-stack web application for tracking screen protector stock
          across two store locations, replacing a manual, paper-based process
          with a live, database-backed tool used daily by staff.
        </p>
        <div className={styles.btnRow}>
          <a
            href="https://github.com/kyrlyama/practice"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-pill ${styles.btn}`}
          >
            GitHub repository ↗
          </a>
        </div>
      </header>

      <div className={styles.spaceTop}>
        <SnapshotBox items={snapshot} />
      </div>

      <div className={`glass glass-rim ${styles.heroMedia}`}>
        <Image
          src="/project40.png"
          alt="Stock Tracker: stock list with filters"
          width={1200}
          height={614}
          sizes="(max-width: 880px) 100vw, 880px"
          priority
        />
      </div>

      {/* 2. CONTEXT */}
      <CaseSection id="problem" num="01" title="Context and problem">
        <div className={`glass-strong ${styles.textPanel}`}>
          <p className={styles.text}>
            The store needed a way to track screen protector stock across two
            locations instead of relying on a manual, paper-based process. An
            earlier, more general inventory tool didn&apos;t fit the team&apos;s
            actual workflow. After their feedback, I rebuilt it specifically
            around this task.
          </p>
        </div>
        <div className={`${styles.grid3} ${styles.spaceTopSm}`}>
          {snapshotDetails.map((d) => (
            <div key={d.label} className={`glass-strong ${styles.miniCard}`}>
              <h3>{d.label}</h3>
              <p>{d.value}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* 3. CONSTRAINTS */}
      <CaseSection id="constraints" num="02" title="Constraints">
        <div className={styles.grid3}>
          {constraints.map((c) => (
            <div key={c.title} className={`glass-strong ${styles.miniCard}`}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* 4. DECISIONS */}
      <CaseSection id="decisions" num="03" title="Key decisions">
        <div className={styles.decisions}>
          {decisions.map((d) => (
            <DecisionCard key={d.chose} {...d} />
          ))}
        </div>
      </CaseSection>

      {/* 5. SOLUTION */}
      <CaseSection id="solution" num="04" title="Solution">
        <div className={styles.grid2}>
          {features.map((f) => (
            <article
              key={f.title}
              className={`glass-strong ${styles.miniCard}`}
            >
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <h3 className={`${styles.cardTitle} ${styles.spaceTop}`}>
          Screenshots
        </h3>
        <p className={styles.text}>
          Main screens showing the stock management interface, the two-store
          view, and the inventory workflow.
        </p>

        <div className={`glass ${styles.slider}`}>
          <Image
            src={images[current]}
            alt={`Stock Tracker screenshot ${current + 1}`}
            width={1200}
            height={614}
            sizes="(max-width: 880px) 100vw, 880px"
          />
        </div>
        <div className={styles.sliderBar}>
          <button
            type="button"
            className={`glass-pill ${styles.arrow}`}
            onClick={prev}
            aria-label="Previous screenshot"
          >
            ←
          </button>
          <span className={styles.counter} aria-live="polite">
            {current + 1} / {images.length}
          </span>
          <button
            type="button"
            className={`glass-pill ${styles.arrow}`}
            onClick={next}
            aria-label="Next screenshot"
          >
            →
          </button>
        </div>
        <div className={styles.thumbs}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            >
              <Image src={src} alt="" width={320} height={164} />
            </button>
          ))}
        </div>
      </CaseSection>

      {/* 6. RESULT */}
      <section className={styles.result} aria-labelledby="result-title">
        <span className={styles.sectionNum}>05</span>
        <h2 id="result-title" className={styles.sectionTitle}>
          Result
        </h2>
        <p className={styles.text}>
          The system replaced the store&apos;s manual stock tracking and is used
          daily by staff across both locations. Fixing the duplicate-entry bug
          removed a recurring source of incorrect stock counts. The AI-assisted
          sales digitization is still in progress, but even the current version
          already saves staff from retyping every handwritten sales line by
          hand.
        </p>
        <p className={styles.text}>
          <Placeholder>
            A real number or a quote from staff, if you have one. No number?
            Delete this line.
          </Placeholder>
        </p>
      </section>

      {/* 7. RETROSPECTIVE */}
      <CaseSection id="next" num="06" title="What I'd do next">
        <div className={`glass-strong ${styles.textPanel}`}>
          <ul className={styles.list}>
            {improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CaseSection>

      <aside className={`glass ${styles.alsoFor}`}>
        <p>Also for Likefon: brand refresh, UX case study and website.</p>
        <Link href="/likefon" className={`glass-pill ${styles.btn}`}>
          See the Likefon project →
        </Link>
      </aside>
    </div>
  );
}
