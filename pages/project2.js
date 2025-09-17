// pages/project2.js
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Project.module.css";

export default function Project2() {
  const images = [
    "/project2.png",
    "/project21.png",
    "/project22.png",
    "/project23.png",
    "/project24.png",
    "/project25.png",
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Текстовая карточка */}
        <div className={`${styles.card} ${styles.column}`}>
          <h1 className={styles.title}>Welcome to the world of space!</h1>

          <p className={styles.p}>
            This site is dedicated to the study of space and the planets of the solar system.
            It is designed to provide users with interesting and useful information about our galaxy,
            as well as interactive exploration of the planets through quizzes and characterization tables.
          </p>

          <h2 className={styles.h2}>Basic functionality</h2>
          <ul className={styles.list}>
            <li>
              <strong>Home page —</strong> user welcome and a brief introduction to the space theme.
            </li>
            <li>
              <strong>Planet pages —</strong> each planet has its own page with a description, a table of
              characteristics and an image.
            </li>
            <li>
              <strong>Interactive test —</strong> a form with questions about the order of planets in the
              solar system to test knowledge.
            </li>
            <li>
              <strong>Test results —</strong> dynamic checking with highlighting correct/incorrect answers.
            </li>
            <li>
              <strong>Styling and design —</strong> CSS gradients and interactive effects.
            </li>
          </ul>

          <h2 className={styles.h2}>Technology</h2>
          <ul className={styles.list}>
            <li><strong>HTML —</strong> structure.</li>
            <li><strong>CSS —</strong> styling, background and link animation.</li>
            <li><strong>JavaScript —</strong> quiz logic and validation.</li>
            <li><strong>Bootstrap —</strong> responsive layout and UI components.</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/space-site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoBtn}
          >
            GitHub repository
          </a>
        </div>

        {/* Слайдер изображений */}
        <div className={styles.slider}>
          <Image
            src={images[current]}
            alt={`Space project screenshot ${current + 1}`}
            width={800}
            height={500}
            className={styles.image}
            sizes="(max-width: 640px) 100vw, 1000px"
            priority
          />
          <button
            aria-label="Previous image"
            className={`${styles.arrow} ${styles.left}`}
            onClick={prevImage}
          >
            &#10094;
          </button>
          <button
            aria-label="Next image"
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
