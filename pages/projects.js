import { Globe, Frame, PenTool, Smartphone, Palette } from "lucide-react";
import Link from "next/link";

import styles from "@/styles/ProjectsPage.module.css";

const categories = [
  {
    title: "Websites",
    href: "/websites",
    icon: Globe,
    size: "large",
    description:
      "Responsive websites and a full-stack inventory system built for a real store workflow.",
    meta: "Stock Tracker · CleanseTeam",
  },
  {
    title: "UI/UX",
    href: "/uiux",
    icon: Frame,
    size: "large",
    description:
      "Research, personas, user flows, information architecture and tested prototypes.",
    meta: "4 case studies",
  },
  {
    title: "Figma",
    href: "/figma",
    icon: PenTool,
    size: "small",
    description: "Interactive prototypes, components and design systems.",
  },
  {
    title: "Android",
    href: "/android_studio",
    icon: Smartphone,
    size: "small",
    description: "Mobile apps from development studies: Kotlin and Java.",
  },
  {
    title: "Illustrator",
    href: "/illustrator",
    icon: Palette,
    size: "small",
    description: "Posters, branding materials and visual design work.",
  },
];

export default function Projects() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Explore my work</p>
        <h1 className="pageTitle">Projects</h1>
        <p className={styles.lead}>
          Five directions, one goal — interfaces that are clear, tested and
          shipped. Start with the big two.
        </p>
      </header>

      <section aria-label="Project categories" className={styles.grid}>
        {categories.map(({ icon: Icon, ...category }) => (
          <Link
            key={category.href}
            href={category.href}
            className={`${styles.card} ${styles[category.size]}`}
          >
            <span className={styles.iconWrap}>
              <Icon size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <p className={styles.cardText}>{category.description}</p>
            {category.meta && <p className={styles.cardMeta}>{category.meta}</p>}
            <span className={styles.cardLink}>Open →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}