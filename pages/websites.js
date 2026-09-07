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
    title: "Stock Tracker",
    slug: "projects/stock-tracker",
    label: "Commercial project",
    description:

      "Website for cleaning services in Tallinn. Built during 3rd year of study.",
    images: ["/project1.png", "/project12.png", "/project13.png"],
  },

    {
    title: "Practical experience",
    slug: "project4",
    label: "Internship project",
    description:

    "Inventory management web app built around a real Likefon store workflow.",
    images: ["/project40.png", "/project41.png", "/project42.png" , "/project43.png"],
  },
  {
    title: "CleanseTeam",
    slug: "uiux/cleaning-website",
    label: "University project · Year 3",
    description:
      "Cleaning service website with a booking flow, pricing clarity, and conversion-focused structure.",
    images: ["/project1.png", "/project12.png", "/project13.png"],
  },
  {
    title: "Choose your musician",
    slug: "project3",
    label: "University project · Year 2",
    description:
      "Interactive quiz experience that selects a musician from a library based on user answers.",
    images: ["/project3.png", "/project31.png", "/project32.png"],
  },
  {
    title: "Welcome to the world space!",
    slug: "project2",
    label: "University project · Year 1",
    description:
      "My first university web project — an educational space site with quiz interactions.",
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
