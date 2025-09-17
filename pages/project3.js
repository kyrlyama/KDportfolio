import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Project.module.css";

export default function Project3() {
  const images = ["/project3.png", "/project32.png", "/project33.png", "/project34.png"];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Choose Your Musician</h1>

          <p className={styles.p}>
            “Music Portal” is a web application that allows users to find information about musicians,
            including their biography, genre, albums and best tracks.
            The project was created for music lovers who want to learn more about their favorite artists and discover new ones.
          </p>

          <h2 className={styles.h2}>Basic functionality</h2>
          <ul className={styles.list}>
            <li><strong>Musician Search —</strong> users can select year, genre and region to search.</li>
            <li><strong>Artist details —</strong> name, genre, country, albums, awards and top tracks.</li>
            <li><strong>Login system —</strong> register and log in for a personalized experience.</li>
            <li><strong>Dynamic data —</strong> info is loaded via API requests.</li>
            <li><strong>Adaptive interface —</strong> works correctly on different devices.</li>
          </ul>

          <h2 className={styles.h2}>Technologies used</h2>
          <ul className={styles.list}>
            <li><strong>Frontend:</strong> HTML, CSS (Bootstrap), JavaScript.</li>
            <li><strong>Backend:</strong> PHP (database queries).</li>
            <li><strong>Optional:</strong> React (registration), AJAX.</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/music-site"
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
