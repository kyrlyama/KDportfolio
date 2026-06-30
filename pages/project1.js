import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/Project.module.css";

const images = ["/project1.png", "/project12.png", "/project13.png, /project14.png", "/project15.png", "/project16.png", "/project17.png"];

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, responsive UI, JavaScript logic",
  },
  {
    label: "Stack",
    value: "HTML, CSS, Bootstrap, JavaScript",
  },
  {
    label: "Project type",
    value: "Cleaning service website",
  },
  {
    label: "Focus",
    value: "Order flow, calculator, reviews, gallery",
  },
];

const features = [
  {
    title: "Cleaning order form",
    text: "Users can select a service type, enter address, date, number of rooms, and additional details.",
  },
  {
    title: "Automatic cost calculation",
    text: "The interface calculates price based on the selected cleaning service and user input.",
  },
  {
    title: "Gallery of completed work",
    text: "A visual section shows cleaning results and supports trust before ordering.",
  },
  {
    title: "Customer reviews",
    text: "Users can view, leave, and sort reviews to evaluate service quality.",
  },
  {
    title: "Interactive UI",
    text: "Modals, confirmations, hover states, and dynamic elements make the website feel more responsive.",
  },
  {
    title: "Responsive layout",
    text: "The page adapts to different screen sizes and keeps the ordering experience accessible.",
  },
];

const technicalFocus = [
  "Structured semantic HTML for clear page hierarchy.",
  "Bootstrap components customized with additional CSS.",
  "JavaScript logic for forms, price calculation, modals, and dynamic UI behavior.",
  "Responsive layout with attention to mobile readability and interaction states.",
];

const improvements = [
  "Connect the order form to a real backend or email service.",
  "Add validation messages and better error states.",
  "Improve accessibility for keyboard navigation and screen readers.",
  "Add real service data and admin management for reviews/orders.",
];

export default function Project1() {
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
              CleanseTeam — Cleaning Service Website
            </h1>

            <p className={styles.projectHeroLead}>
              CleanseTeam is a cleaning service website for Tallinn. It helps
              users choose a cleaning service, enter order details, calculate
              the estimated cost, view completed work, and check customer
              reviews before submitting a request.
            </p>

            <div className={styles.btnRow}>
              <Link
                href="https://github.com/kyrlyama/lessons-cleanseteam"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoBtn}
              >
                GitHub repository
              </Link>

              <Link href="/uiux/cleaning-website" className={styles.repoBtn}>
                UI/UX case
              </Link>
            </div>
          </div>

          <div className={styles.projectHeroMedia}>
            <Image
              src="/project1.png"
              alt="CleanseTeam website homepage preview"
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
            The goal of the project was to create a clear and practical website
            for ordering cleaning services. The interface focuses on simple
            navigation, understandable service selection, transparent price
            calculation, and trust-building content such as completed work and
            customer reviews.
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
            I built the frontend structure, responsive layout, interactive
            behavior, and visual UI states. The project combines Bootstrap with
            custom CSS and JavaScript to create a more complete user flow.
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
                Main screens showing the website structure, content sections,
                and ordering experience.
              </p>
            </div>

            <span className={styles.projectCounter}>
              {current + 1} / {images.length}
            </span>
          </div>

          <div className={styles.projectSlider}>
            <Image
              src={images[current]}
              alt={`CleanseTeam project screenshot ${current + 1}`}
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
                  alt={`CleanseTeam thumbnail ${index + 1}`}
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