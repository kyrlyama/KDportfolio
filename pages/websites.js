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
  { title: "CleanseTeam",          slug: "project1",
    description: "Website for cleaning services in Tallinn. Built during 3rd year of study.",
    images: ["/project1.png", "/project12.png", "/project13.png"] },
  { title: "Welcome to the world space!", slug: "project2",
    description: "The very first project in year 1 — educational space site with quiz.",
    images: ["/project2.png", "/project21.png", "/project22.png", "/project23.png", "/project24.png"] },
  { title: "Choose your musician", slug: "project3",
    description: "Year 2 project. Based on your answers, a musician is selected from the library.",
    images: ["/project3.png", "/project31.png", "/project32.png"] },
  { title: "Practical experience", slug: "project4",
    description: "Store inventory management web app for Likefon internship.",
    images: ["/project4.png", "/project41.png", "/project42.png"] },
];

function ProjectBlock({ title, description, images, reverse, slug }) {
  const hasImages = images && images.length > 0;

  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      {hasImages && (
        <div className={styles.media}>
          <div className={styles.frame}>
            {/* ВАЖНО: без aspect="landscape" */}
            <Carousel images={images} alt={`${title} preview`} tight />
          </div>
        </div>
      )}

      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.p}>{description}</p>
        <Link href={`/${slug}`} className={styles.btn} aria-label={`${title} — details`}>
          See more details
        </Link>
      </div>
    </section>
  );
}
