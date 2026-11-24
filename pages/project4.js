// pages/project4.js — Stock Tracker (also /projects/stock-tracker).
// PROJECT PLAN order: Context → Problem → Goal → Research → Decisions →
// Design → Development → Testing → Result → Hardest → Learned.
// Every old feature, decision and all 4 screenshots are kept.
import Image from "next/image";
import Link from "next/link";

import {
  BulletList,
  CaseHero,
  CasePage,
  CasePlan,
  Cards,
  DecisionCard,
  H3,
  P,
  Placeholder,
  Screens,
  TextPanel,
  Todo,
  caseStyles as styles,
} from "@/components/case";

const screens = [
  { src: "/project40.png", alt: "Stock Tracker: stock list with filters" },
  { src: "/project41.png", alt: "Stock Tracker screenshot 2" },
  { src: "/project42.png", alt: "Stock Tracker screenshot 3" },
  { src: "/project43.png", alt: "Stock Tracker screenshot 4" },
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
  const sections = {
    context: (
      <>
        <Cards
          items={snapshotDetails.map((d) => ({
            label: d.label,
            title: d.value,
          }))}
        />
        <H3>Constraints</H3>
        <Cards items={constraints} />
      </>
    ),

    problem: (
      <TextPanel>
        The store needed a way to track screen protector stock across two
        locations instead of relying on a manual, paper-based process.
      </TextPanel>
    ),

    goal: (
      <TextPanel>
        Replace the manual, paper-based process with a live, database-backed
        tool that store staff use every day.
      </TextPanel>
    ),

    research: (
      <>
        <TextPanel>
          <P>
            An earlier, more general inventory tool didn&apos;t fit the
            team&apos;s actual workflow. After their feedback, I rebuilt it
            specifically around this task.
          </P>
        </TextPanel>
        <Todo>What did staff say? How did you watch them work?</Todo>
      </>
    ),

    decisions: (
      <div className={styles.decisions}>
        {decisions.map((d) => (
          <DecisionCard key={d.chose} {...d} />
        ))}
      </div>
    ),

    design: (
      <Todo>
        Screens / wireframes / layout decisions (e.g. color-coded store badges).
      </Todo>
    ),

    development: (
      <>
        <H3>Key features</H3>
        <Cards cols={2} items={features} />
        <H3>Screenshots</H3>
        <P>
          Main screens showing the stock management interface, the two-store
          view, and the inventory workflow.
        </P>
        <Screens images={screens} label="Stock Tracker screenshots" />
      </>
    ),

    testing: (
      <>
        <Cards
          cols={2}
          items={[
            {
              label: "Version 1",
              title: "General inventory tool",
              text: "Didn’t fit the team’s actual workflow.",
            },
            {
              label: "Version 2",
              title: "Rebuilt around stock tracking",
              text: "Rebuilt specifically around this task after staff feedback.",
            },
          ]}
        />
        <Todo>What exactly changed between version 1 and 2?</Todo>
      </>
    ),

    result: (
      <>
        <p>
          The system replaced the store&apos;s manual stock tracking and is used
          daily by staff across both locations. Fixing the duplicate-entry bug
          removed a recurring source of incorrect stock counts. The AI-assisted
          sales digitization is still in progress, but even the current version
          already saves staff from retyping every handwritten sales line by
          hand.
        </p>
        <p>
          <Placeholder>
            A real number or a quote from staff, if you have one. No number?
            Delete this line.
          </Placeholder>
        </p>
      </>
    ),

    hardest: (
      <Todo>
        The hardest problem and how you solved it (the duplicate-entry bug?).
      </Todo>
    ),

    learned: (
      <TextPanel>
        <P>What I&apos;d do next:</P>
        <BulletList items={improvements} />
      </TextPanel>
    ),
  };

  return (
    <CasePage>
      <CaseHero
        eyebrow="Commercial · Full-stack · Likefon"
        title="Stock Tracker — inventory for a screen-protector store"
        result="A full-stack web application for tracking screen protector stock across two store locations, replacing a manual, paper-based process with a live, database-backed tool used daily by staff."
        snapshot={snapshot}
        links={[
          {
            href: "https://github.com/kyrlyama/practice",
            label: "GitHub repository ↗",
          },
        ]}
        media={
          <Image
            src="/project40.png"
            alt="Stock Tracker: stock list with filters"
            width={3837}
            height={1962}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan
        sections={sections}
        after={
          <aside className={`glass ${styles.alsoFor}`}>
            <p>Also for Likefon: brand refresh, UX case study and website.</p>
            <Link
              href="/projects/likefon"
              className={`glass-pill ${styles.btn}`}
            >
              See the Likefon project →
            </Link>
          </aside>
        }
      />
    </CasePage>
  );
}
