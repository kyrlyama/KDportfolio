// pages/projects.js — Commercial work first, then Personal & study work.
// Пять старых категорий остались: фильтр-чипсы сверху + ссылка на страницу категории.
import Link from "next/link";
import { useState } from "react";

import { ProjectCard } from "@/components/case";
import { LIKEFON_WEBSITE_ALT, LIKEFON_WEBSITE_IMAGE } from "@/data/likefon";
import styles from "@/styles/Case.module.css";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites", href: "/websites" },
  { id: "uiux", label: "UI/UX", href: "/uiux" },
  { id: "figma", label: "Figma", href: "/figma" },
  { id: "android", label: "Android", href: "/android_studio" },
  { id: "illustrator", label: "Illustrator", href: "/illustrator" },
];

const commercial = [
  {
    href: "/likefon",
    size: "large",
    image: LIKEFON_WEBSITE_IMAGE,
    imageAlt: LIKEFON_WEBSITE_ALT,
    placeholder: "[Likefon website screenshot — coming soon]",
    tags: [
      { label: "Client project", tone: "accent" },
      { label: "Brand" },
      { label: "UX research" },
      { label: "Next.js" },
    ],
    title: "Likefon",
    text: "A phone-accessories shop with two stores in Narva. I took it from a new visual identity to a researched UX design to a working website.",
    meta: "3 parts · Brand refresh · UX case study · Website",
    cta: "View project →",
    categories: ["uiux", "figma", "websites"],
  },
  {
    href: "/projects/stock-tracker",
    size: "large",
    image: "/project40.png",
    imageAlt: "Stock Tracker inventory dashboard",
    tags: [
      { label: "In daily use", tone: "live" },
      { label: "PHP" },
      { label: "MySQL" },
    ],
    title: "Stock Tracker",
    text: "A full-stack stock tool for a screen-protector store, rebuilt after staff feedback. Used daily by store staff.",
    cta: "Read case study →",
    categories: ["websites"],
  },
];

const personal = [
  {
    href: "/uiux/travel-app",
    image: "/figma23.png",
    tags: [{ label: "University", tone: "accent" }],
    title: "Travel Planning App",
    text: "Helps friends plan group trips: joint budgets, AI suggestions, swipe decisions.",
    meta: "Figma · UX research",
    categories: ["uiux", "figma"],
  },
  {
    href: "/uiux/gift-helper",
    image: "/figma1.png",
    tags: [{ label: "Figma concept", tone: "accent" }],
    title: "Gift Helper",
    text: "Finds a gift by age, budget, hobbies and occasion, with reminders.",
    meta: "Figma · UX research",
    categories: ["uiux", "figma"],
  },
  {
    href: "/project1",
    image: "/project1.png",
    tags: [{ label: "Freelance", tone: "accent" }],
    title: "CleanseTeam",
    text: "A cleaning-service landing page built around one goal: a booking.",
    meta: "Website · UX case",
    categories: ["websites", "uiux"],
  },
  {
    href: "/project3",
    image: "/project3.png",
    tags: [{ label: "Freelance", tone: "accent" }],
    title: "Choose your musician",
    text: "A music portal: find artists by year, genre and region.",
    meta: "Website",
    categories: ["websites"],
  },
  {
    href: "/project2",
    image: "/project2.png",
    tags: [{ label: "Freelance", tone: "accent" }],
    title: "Welcome to the world space!",
    text: "An educational Solar System site with planet pages and a quiz.",
    meta: "HTML · CSS · JavaScript",
    categories: ["websites"],
  },
  {
    href: "/android_studio",
    size: "small",
    image: "/androidstudio1.png",
    tags: [{ label: "Study" }],
    title: "Android apps (3)",
    text: "Translator, Calculator, Currency Converter.",
    meta: "Java · Kotlin",
    categories: ["android"],
  },
  {
    href: "/illustrator",
    size: "small",
    image: "/digitaldesign/poster1.png",
    tags: [{ label: "Graphic design" }],
    title: "Illustrations (9)",
    text: "Posters, a track cover and store advertising.",
    meta: "Illustrator · Photoshop",
    categories: ["illustrator"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const active = FILTERS.find((f) => f.id === filter);
  const match = (p) => filter === "all" || p.categories.includes(filter);

  const shownCommercial = commercial.filter(match);
  const shownPersonal = personal.filter(match);

  return (
    <div className={styles.page}>
      <header>
        <p className={styles.eyebrow}>Projects</p>
        <h1 className={styles.h1}>Design and code for real businesses</h1>
        <p className={styles.lead}>
          I research, design and build products end to end, from the first
          interview to working code.
        </p>

        <div
          className={styles.chips}
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`glass-pill ${styles.chip}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        {active?.href && (
          <Link href={active.href} className={styles.categoryLink}>
            Open the full {active.label} page →
          </Link>
        )}
      </header>

      {shownCommercial.length > 0 && (
        <section aria-labelledby="commercial-title">
          <div className={styles.groupHead}>
            <h2 id="commercial-title" className={styles.groupTitle}>
              Commercial work
            </h2>
            <p className={styles.groupNote}>Real clients, real users</p>
          </div>
          <div className={styles.gridCommercial}>
            {shownCommercial.map(({ categories, ...p }, i) => (
              <ProjectCard key={p.href} {...p} priority={i === 0} />
            ))}
          </div>
        </section>
      )}

      {shownPersonal.length > 0 && (
        <section aria-labelledby="personal-title">
          <div className={styles.groupHead}>
            <h2 id="personal-title" className={styles.groupTitle}>
              Personal &amp; study work
            </h2>
            <p className={styles.groupNote}>Experiments and new skills</p>
          </div>
          <div className={styles.gridPersonal}>
            {shownPersonal.map(({ categories, size = "medium", ...p }) => (
              <ProjectCard key={p.href} size={size} {...p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
