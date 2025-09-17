// pages/androidstudio1.js
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/AndroidStudio.module.css";

export default function AndroidStudio1() {
  const images = ["/androidstudio1.png", "/androidstudio12.png", "/androidstudio13.png"];
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.cardRow}>
          {/* текст слева */}
          <div className={styles.colText}>
            <h1 className={styles.title}>Translator — Android Studio App</h1>

            <p className={styles.p}>
              Translator is an Android application that allows users to translate text between
              Russian, English, Estonian, and German. It features a simple Material Design interface,
              translation history, and cloud synchronization.
            </p>

            <h2 className={styles.h2}>Key Features</h2>
            <ul className={styles.ul}>
              <li><strong>Multilingual:</strong> translate between 4 languages.</li>
              <li><strong>History:</strong> view and clear past translations.</li>
              <li><strong>Cloud sync:</strong> settings and history synchronized across devices.</li>
              <li><strong>Material Design:</strong> clean and modern UI.</li>
              <li><strong>MVC architecture:</strong> structured project design.</li>
            </ul>

            <h2 className={styles.h2}>Technology Stack</h2>
            <ul className={styles.ul}>
              <li>Android Studio (Java)</li>
              <li>Material Design</li>
              <li>Lingva Translate API</li>
              <li>Cloud storage</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/Translate"
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
                  alt={`Translator screen ${current + 1}`}
                  fill
                  sizes="400px"
                  className={styles.img}
                  priority
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
