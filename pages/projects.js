import Link from "next/link";

import ProjectOrbit from "@/components/ProjectOrbit";
import styles from "@/styles/Project.module.css";

const categories = [
  {
    title: "Websites",
    href: "/websites",
    description: "Responsive websites and practical frontend projects.",
  },
  {
    title: "UI/UX",
    href: "/uiux",
    description: "Research, user flows, visual design, and case studies.",
  },
  {
    title: "Figma",
    href: "/figma",
    description: "Interactive prototypes, design systems, and product concepts.",
  },
  {
    title: "Android",
    href: "/android_studio",
    description: "Mobile application projects from my development studies.",
  },
  {
    title: "Illustrator",
    href: "/illustrator",
    description: "Posters, branding materials, and visual design work.",
  },
];

export default function Projects() {
  return (
    <main className={styles.page}>
      <section
        style={{
          textAlign: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            margin: "0 0 10px",
            color: "#6b7280",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: ".14em",
            textTransform: "uppercase",
          }}
        >
          Explore my work
        </p>
        <h1 className="pageTitle">Projects</h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 680,
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          Choose a category. The orbit below is navigation, while the cards give a
          quick overview of what you will find in each section.
        </p>

        <ProjectOrbit />
      </section>

      <section
        aria-label="Project categories"
        className={styles.container}
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            style={{
              display: "block",
              padding: 22,
              borderRadius: 24,
              background: "rgba(255,255,255,.78)",
              color: "inherit",
              textDecoration: "none",
              boxShadow: "0 14px 40px rgba(17,24,39,.06)",
            }}
          >
            <h2
              style={{
                margin: "0 0 8px",
                color: "#111827",
                fontSize: 21,
              }}
            >
              {category.title}
            </h2>
            <p
              style={{
                margin: 0,
                color: "#6b7280",
                lineHeight: 1.55,
                fontSize: 14,
              }}
            >
              {category.description}
            </p>
            <span
              style={{
                display: "inline-block",
                marginTop: 16,
                color: "#1f52c9",
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              Open category →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
