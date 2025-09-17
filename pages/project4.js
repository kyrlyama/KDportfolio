import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Project.module.css";

export default function Project4() {
  const images = ["/project4.png", "/project41.png", "/project42.png"]; 
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.column}`}>
          <h1 className={styles.title}>Practice</h1>

          <p className={styles.p}>
            “Case Management System” is a web application for accounting and management of goods
            in the warehouse of the phone accessories store. The project is designed for convenient
            adding, filtering and searching of cases by various criteria, as well as for controlling availability.
          </p>

          <h2 className={styles.h2}>Basic functionality</h2>
          <ul className={styles.list}>
            <li><strong>Add products —</strong> new models with brand, model, color, price and quantity.</li>
            <li><strong>Automatic data storage —</strong> localStorage, loaded on page open.</li>
            <li><strong>Filtering and search —</strong> by brand, model, type, gender, price, quantity.</li>
            <li><strong>Availability —</strong> “In stock” / “Out of stock”.</li>
          </ul>

          <h2 className={styles.h2}>Technology</h2>
          <ul className={styles.list}>
            <li><strong>Frontend:</strong> HTML, CSS (Bootstrap).</li>
            <li><strong>Dynamic:</strong> JavaScript (Fetch API, localStorage).</li>
            <li><strong>Data:</strong> JSON (models.json, cases.json).</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/practice"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoBtn}
          >
            GitHub repository
          </a>
        </div>

        <div className={styles.slider}>
          <Image
            src={images[current]}
            alt={`Project ${current + 1}`}
            width={800}
            height={500}
            className={styles.image}
            sizes="(max-width: 640px) 100vw, 1000px"
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
