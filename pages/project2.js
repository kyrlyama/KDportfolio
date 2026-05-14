import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/Project.module.css";

const images = [
  "/project2.png",
  "/project21.png",
  "/project22.png",
  "/project23.png",
  "/project24.png",
  "/project25.png",
];

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, responsive layout, JavaScript quiz logic",
  },
  {
    label: "Stack",
    value: "HTML, CSS, Bootstrap, JavaScript",
  },
  {
    label: "Project type",
    value: "Educational interactive website",
  },
  {
    label: "Focus",
    value: "Planet pages, quiz validation, tables, visual learning",
  },
];

const features = [
  {
    title: "Home page",
    text: "Introduces users to the space theme and guides them toward learning about planets.",
  },
  {
    title: "Planet pages",
    text: "Each planet has its own page with a description, image, and characteristics table.",
  },
  {
    title: "Interactive quiz",
    text: "Users can test their knowledge about the order of planets in the Solar System.",
  },
  {
    title: "Dynamic results",
    text: "JavaScript checks answers and highlights correct and incorrect responses.",
  },
  {
    title: "Structured tables",
    text: "Planet information is presented in clear tables to make comparison easier.",
  },
  {
    title: "Responsive design",
    text: "The layout adapts to different screen sizes and keeps educational content readable.",
  },
];

const technicalFocus = [
  "Built a multi-page educational website structure with semantic HTML.",
  "Created responsive layouts with CSS and Bootstrap.",
  "Implemented JavaScript quiz logic with answer checking and visual feedback.",
  "Designed planet information pages with images, tables, and readable content blocks.",
  "Used gradients, hover states, and interactive effects to support the space theme.",
];

const improvements = [
  "Add more advanced quiz questions and score history.",
  "Improve accessibility for keyboard navigation and screen readers.",
  "Add animations for planet transitions and page sections.",
  "Use structured JSON data for planets instead of static content.",
  "Add a search or filter feature for planet facts.",
];

export default function Project2() {
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
              Space Website — Educational Planet Explorer
            </h1>

            <p className={styles.projectHeroLead}>
              An educational website about space and the planets of the Solar
              System. The project combines informational pages, planet
              characteristics, visual content, and an interactive quiz to help
              users learn in a more engaging way.
            </p>

            <div className={styles.btnRow}>
              <a
                href="https://github.com/kyrlyama/space-site"
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
              src="/project2.png"
              alt="Space website homepage preview"
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
            The goal of this project was to create a simple but engaging
            educational website where users can explore information about the
            Solar System. The website combines static informational content with
            interactive quiz functionality, making the learning experience more
            active and memorable.
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
            I focused on building a clear frontend structure, responsive
            educational pages, and JavaScript logic for the interactive quiz.
            The design uses a space-themed visual style with gradients,
            readable tables, and interactive states.
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
                Main screens showing the homepage, planet pages, quiz flow, and
                educational content structure.
              </p>
            </div>

            <span className={styles.projectCounter}>
              {current + 1} / {images.length}
            </span>
          </div>

          <div className={styles.projectSlider}>
            <Image
              src={images[current]}
              alt={`Space website screenshot ${current + 1}`}
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
                  alt={`Space website thumbnail ${index + 1}`}
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