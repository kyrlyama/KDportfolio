import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/Project.module.css";

const images = [
  "/project3.png",
  "/project32.png",
  "/project33.png",
  "/project34.png",
];

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, search UI, dynamic data flow",
  },
  {
    label: "Stack",
    value: "HTML, CSS, Bootstrap, JavaScript, PHP, AJAX",
  },
  {
    label: "Project type",
    value: "Music discovery web application",
  },
  {
    label: "Focus",
    value: "Filtering, artist details, login flow, API/database data",
  },
];

const features = [
  {
    title: "Musician search",
    text: "Users can search for musicians by year, genre, and region to discover relevant artists.",
  },
  {
    title: "Artist details",
    text: "The interface shows artist information such as biography, genre, country, albums, awards, and top tracks.",
  },
  {
    title: "Login system",
    text: "The project includes registration and login functionality for a more personalized user experience.",
  },
  {
    title: "Dynamic data",
    text: "Artist information is loaded dynamically through requests instead of being shown as only static content.",
  },
  {
    title: "Adaptive interface",
    text: "The layout is designed to work across different screen sizes and keep content readable.",
  },
  {
    title: "Music discovery flow",
    text: "The project helps users explore new artists and learn more about musicians they already like.",
  },
];

const technicalFocus = [
  "Built the frontend structure for a music discovery web application.",
  "Created search and filtering UI for year, genre, and region.",
  "Displayed dynamic artist data including biography, albums, awards, and tracks.",
  "Worked with PHP/database queries and AJAX-style data loading.",
  "Implemented responsive layout and Bootstrap-based UI components.",
  "Added registration/login flow for personalized functionality.",
];

const improvements = [
  "Improve search result states for empty and loading results.",
  "Add favorite artists or saved tracks for logged-in users.",
  "Improve accessibility for forms and interactive controls.",
  "Add stronger validation for registration and login forms.",
  "Refactor artist data into a clearer API structure.",
  "Improve mobile layout for long artist descriptions and tables.",
];

export default function Project3() {
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
            <p className={styles.projectEyebrow}>Frontend project</p>

            <h1 className={styles.projectHeroTitle}>
              Music Portal — Artist Discovery Website
            </h1>

            <p className={styles.projectHeroLead}>
              A music discovery web application that helps users find musicians
              by year, genre, and region. The project presents artist details,
              biographies, albums, awards, and top tracks in a structured and
              searchable interface.
            </p>

            <div className={styles.btnRow}>
              <a
                href="https://github.com/kyrlyama/music-site"
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
              src="/project3.png"
              alt="Music Portal project homepage preview"
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

        {/* OVERVIEW */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Overview</h2>

          <p className={styles.projectText}>
            The goal of this project was to build a music-focused web
            application where users can discover artists and explore structured
            information about them. The website combines search, filtering,
            dynamic data loading, artist detail pages, and account-related
            functionality.
          </p>
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

        {/* TECHNICAL IMPLEMENTATION */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>
            Technical implementation
          </h2>

          <p className={styles.projectText}>
            I focused on building the frontend interface and user flow for music
            discovery. The project includes dynamic data rendering, search and
            filtering controls, Bootstrap styling, and integration with backend
            logic through PHP/database queries.
          </p>

          <ul className={styles.projectList}>
            {technicalFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* SCREENSHOTS */}
        <section className={styles.projectSection}>
          <div className={styles.projectSectionHeader}>
            <div>
              <h2 className={styles.projectSectionTitle}>Screenshots</h2>
              <p className={styles.projectText}>
                Main screens showing the search interface, artist information,
                and music discovery flow.
              </p>
            </div>

            <span className={styles.projectCounter}>
              {current + 1} / {images.length}
            </span>
          </div>

          <div className={styles.projectSlider}>
            <Image
              src={images[current]}
              alt={`Music Portal screenshot ${current + 1}`}
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
                  alt={`Music Portal thumbnail ${index + 1}`}
                  width={320}
                  height={200}
                />
              </button>
            ))}
          </div>
        </section>

        {/* REFLECTION */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>
            What I would improve next
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