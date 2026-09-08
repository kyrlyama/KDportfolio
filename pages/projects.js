import Image from "next/image";
import Link from "next/link";

import ProjectOrbit from "@/components/ProjectOrbit";
import styles from "@/styles/Project.module.css";

export const featuredProjects = [
  {
    title: "Stock Tracker",
    label: "Commercial project",
    description:
      "Inventory management system for a real two-store workflow.",
    image: "/project40.png",
    href: "/projects/stock-tracker",
  },
  {
    title: "Like store redesign",
    label: "Commercial UX/UI",
    description:
      "Visual identity and store experience redesign for Likefon.",
    image: "/uiux/redesign/redesign.png",
    href: "/uiux/shop-redesign",
  },
  {
    title: "Travel Planning App",
    label: "University project",
    description:
      "Research-driven Figma concept for planning trips with friends.",
    image: "/figma23.png",
    href: "/uiux/travel-app",
  },
];

export default function Projects() {
  return (
    <main className={styles.page}>

      {/* HERO */}
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
          Choose a category. The orbit below is navigation, while the cards
          give a quick overview of what you will find in each section.
        </p>

        <ProjectOrbit />
      </section>


      {/* FEATURED PROJECTS */}
      <section
        aria-labelledby="featured-work-title"
        style={{
          width: "min(1120px, calc(100% - 32px))",
          margin: "0 auto",
          padding: "50px 0 80px",
        }}
      >
        <div style={{ marginBottom: 22 }}>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Selected work
          </p>

          <h2
            id="featured-work-title"
            style={{
              margin: "6px 0 0",
              color: "#111827",
              fontSize: "clamp(26px, 4vw, 38px)",
              lineHeight: 1.08,
              letterSpacing: "-.04em",
            }}
          >
            A few projects worth opening first
          </h2>
        </div>


        {/* THREE PROJECT CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              style={{
                display: "block",
                overflow: "hidden",
                borderRadius: 24,
                background: "rgba(255,255,255,.78)",
                color: "inherit",
                textDecoration: "none",
                boxShadow: "0 14px 40px rgba(17,24,39,.08)",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  position: "relative",
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ padding: 18 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: ".09em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                  }}
                >
                  {project.label}
                </p>

                <h3
                  style={{
                    margin: "7px 0 6px",
                    fontSize: 20,
                    lineHeight: 1.15,
                    color: "#111827",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#4b5563",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}