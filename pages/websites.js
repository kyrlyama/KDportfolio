import Link from "next/link";

import Carousel from "@/components/Carousel";
import styles from "@/styles/Project.module.css";

export default function Websites() {
  return (
    <main className={`${styles.page} ${styles.websitesPage}`}>
      <h1 className="pageTitle">Websites</h1>

      <div className={`${styles.container} ${styles.cardsGrid}`}>
        {projects.map((p, i) => (
          <ProjectBlock key={i} {...p} reverse={i % 2 !== 0} />
        ))}
      </div>
    </main>
  );
}

const projects = [
  {
    title: "CleanseTeam",
    slug: "project1",
    label: "Freelance",
    description:"Trial website template for a cleaning company, with a booking flow, pricing clarity, and conversion-focused structure.",
    images: ["/project1.png", "/project12.png", "/project13.png"],
  },
    {
    title: "Practical experience",
    slug: "project4",
    label: "Commercial project · Likefon",
    description:
    "Inventory management web app designed and built for Likefon's daily store workflow as part of my Product Designer & Frontend Developer role.",
    images: ["/project40.png", "/project41.png", "/project42.png" , "/project43.png"],
  },
  {
    title: "Choose your musician",
    slug: "project3",
    label: "Freelance",
    description:
"Experimental, music-themed creative project — an interactive quiz experience that selects a musician from a library based on user answers.",
    images: ["/project3.png", "/project31.png", "/project32.png"],
  },
  {
    title: "Welcome to the world space!",
    slug: "project2",
    label: "Freelance",
    description:
      "Experimental, space-themed creative project — an educational site with playful quiz interactions.",
      images: [
      "/project2.png",
      "/project21.png",
      "/project22.png",
      "/project23.png",
      "/project24.png",
    ],
  },
];

function ProjectBlock({ title, label, description, images, reverse, slug }) {
  const hasImages = images && images.length > 0;

  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      {hasImages && (
        <div className={styles.media}>
          <div className={styles.frame}>
            <Carousel images={images} alt={`${title} preview`} tight />
          </div>
        </div>
      )}

      <div className={styles.text}>
        <span style={{ fontSize: 12, fontWeight: 800, color: "#6b7280", letterSpacing: ".08em", textTransform: "uppercase" }}>
          {label}
        </span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.p}>{description}</p>
        <Link
          href={`/${slug}`}
          className={styles.btn}
          aria-label={`${title} — details`}
        >
          See more details
        </Link>
      </div>
    </section>
  );
}
