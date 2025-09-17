// pages/androidstudio2.js
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/AndroidStudio.module.css";

export default function AndroidStudio2() {
  const images = ["/androidstudio2.png", "/androidstudio22.png", "/androidstudio23.png", "/androidstudio24.png"];
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.cardRow}>
          {/* текст слева */}
          <div className={styles.colText}>
            <h1 className={styles.title}>Android Calculator — Mobile Calculator App</h1>

            <p className={styles.p}>
              A simple calculator built in Android Studio. It supports core arithmetic operations,
              a clean Material-inspired UI, and responsive layouts for different screen sizes.
            </p>

            <h2 className={styles.h2}>Basic Functionality</h2>
            <ul className={styles.ul}>
              <li><strong>Operations:</strong> addition, subtraction, multiplication, division.</li>
              <li><strong>Responsive UI:</strong> works correctly on different screen sizes.</li>
              <li><strong>Minimal design:</strong> large tap targets and readable typography.</li>
            </ul>

            <h2 className={styles.h2}>Technology</h2>
            <ul className={styles.ul}>
              <li>Java, Android Studio (SDK)</li>
              <li>XML Layouts</li>
              <li>Material Design principles</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/Calculator"
              target="_blank" rel="noopener noreferrer"
              className={styles.repoBtn}
            >
              GitHub repository
            </a>
          </div>

          {/* слайдер справа */}
          <div className={styles.colMedia}>
            <div className={styles.sliderFrame}>
              <div className={styles.imgWrap}>
                <Image
                  src={images[current]}
                  alt={`Calculator screen ${current + 1}`}
                  fill
                  sizes="400px"
                  className={styles.img}
                />
              </div>
              {images.length > 1 && (
                <>
                  <button aria-label="Prev" className={`${styles.arrow} ${styles.left}`} onClick={prev}>&#10094;</button>
                  <button aria-label="Next" className={`${styles.arrow} ${styles.right}`} onClick={next}>&#10095;</button>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
