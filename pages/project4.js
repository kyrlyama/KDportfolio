import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/Project.module.css";

const images = ["/project4.png", "/project41.png", "/project42.png"];

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, JavaScript logic, data handling",
  },
  {
    label: "Stack",
    value: "HTML, CSS, Bootstrap, JavaScript, JSON",
  },
  {
    label: "Project type",
    value: "Inventory management web app",
  },
  {
    label: "Focus",
    value: "Adding products, filtering, search, availability control",
  },
];

const features = [
  {
    title: "Add products",
    text: "Users can add new case models with brand, model, color, price, quantity, type, and other product details.",
  },
  {
    title: "Automatic data storage",
    text: "Product data is saved in localStorage and restored when the page is opened again.",
  },
  {
    title: "Filtering and search",
    text: "The interface supports filtering and searching by brand, model, type, gender, price, and quantity.",
  },
  {
    title: "Availability status",
    text: "The system shows whether products are in stock or out of stock based on quantity.",
  },
  {
    title: "JSON data structure",
    text: "Product and model data is organized through JSON files to make the interface easier to manage.",
  },
  {
    title: "Practical business flow",
    text: "The project is based on a real store workflow: tracking phone accessories and managing warehouse items.",
  },
];

const technicalFocus = [
  "Built the frontend layout for product accounting and warehouse management.",
  "Implemented JavaScript logic for adding, filtering, searching, and displaying products.",
  "Used localStorage to keep product data after page reload.",
  "Worked with JSON data files for models and case information.",
  "Created availability logic for in-stock and out-of-stock states.",
];

const improvements = [
  "Connect the app to a real database instead of localStorage.",
  "Add user roles for admin and staff accounts.",
  "Add edit/delete actions for existing products.",
  "Improve validation for product forms and empty states.",
  "Add export/import functionality for warehouse data.",
];

export default function Project4() {
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
              Case Management System
            </h1>

            <p className={styles.projectHeroLead}>
              A web application for managing phone case inventory in a phone
              accessories store. The system helps add new products, search and
              filter items, control stock availability, and organize product
              data in a practical warehouse workflow.
            </p>

            <div className={styles.btnRow}>
              <a
                href="https://github.com/kyrlyama/practice"
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
              src="/project4.png"
              alt="Case Management System project preview"
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
            The goal of this project was to create a practical tool for
            accounting and managing phone case inventory. The interface is built
            around common warehouse tasks: adding new products, checking
            availability, filtering by product properties, and keeping data
            accessible after the page is reopened.
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
            I focused on building the frontend structure and JavaScript logic
            needed for a small inventory management system. The project uses
            dynamic data, localStorage, and filtering logic to simulate a
            practical business tool for a store.
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
                Main screens showing the product management interface, data
                structure, and inventory workflow.
              </p>
            </div>

            <span className={styles.projectCounter}>
              {current + 1} / {images.length}
            </span>
          </div>

          <div className={styles.projectSlider}>
            <Image
              src={images[current]}
              alt={`Case Management System screenshot ${current + 1}`}
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
                  alt={`Case Management System thumbnail ${index + 1}`}
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