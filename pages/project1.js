import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Project.module.css";

export default function Project1() {
  const images = ["/project1.png", "/project12.png", "/project13.png"];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Текстовая карточка */}
        <div className={styles.card}>
          <h1 className={styles.title}>CleanseTeam — Cleaning Service Website</h1>

          <p className={styles.p}>
            CleanseTeam is a web service for cleaning services in Tallinn that allows users to order cleaning of apartments,
            offices, and other premises. The platform provides a convenient form for selecting the type of service,
            entering contact details, and calculating the cost of work.
          </p>

          <h2 className={styles.h2}>Basic functionality</h2>
          <ul className={styles.list}>
            <li><strong>Cleaning order form:</strong> select service, address, date, rooms, details.</li>
            <li><strong>Automatic cost calculation:</strong> price based on selected service.</li>
            <li><strong>Gallery of completed work:</strong> photos of results and customers.</li>
            <li><strong>Customer reviews:</strong> leave and sort reviews.</li>
            <li><strong>Interactive elements:</strong> modals, dynamic enlargements, confirmations.</li>
          </ul>

          <h2 className={styles.h2}>Technology</h2>
          <ul className={styles.list}>
            <li><strong>Frontend:</strong> HTML, CSS (Bootstrap), JavaScript.</li>
            <li><strong>Design:</strong> Gradient background, responsive layout, hover animations.</li>
            <li><strong>Functionality:</strong> Forms, cost calculation, reviews.</li>
            <li><strong>UI:</strong> Bootstrap components, dynamic lists.</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/lessons-cleanseteam"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoBtn}
          >
            GitHub repository
          </a>
        </div>

        {/* Слайдер */}
        <div className={styles.slider}>
          <Image
            src={images[current]}
            alt={`Project ${current + 1}`}
            width={800}
            height={500}
            className={styles.image}
            priority
          />
          <button aria-label="Previous image" className={`${styles.arrow} ${styles.left}`} onClick={prevImage}>
            &#10094;
          </button>
          <button aria-label="Next image" className={`${styles.arrow} ${styles.right}`} onClick={nextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
