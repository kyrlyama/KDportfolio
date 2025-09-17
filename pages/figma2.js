// pages/figma2.js
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Figma.module.css";

export default function FigmaGiftHelperApp() {
  const images = [
    "/figma1.png","/figma12.png","/figma13.png","/figma14.png","/figma15.png",
    "/figma16.png","/figma17.png"
  ];
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.cardRow}>
          {/* текст слева */}
          <div className={styles.colText}>
            <h1 className={styles.title}>Figma Gift Helper — gift finder app</h1>

            <p className={styles.p}>
              <strong>Gift Helper</strong> is a mobile concept that helps you pick the right gift for anyone — fast and confidently.
              Filter by <em>age, budget, hobbies, occasion</em>, save important dates to a smart calendar,
              and store people’s preferences in a handy <em>People</em> section.
            </p>

            <h2 className={styles.h2}>Core features</h2>
            <ul className={styles.ul}>
              <li><strong>Smart filtering:</strong> age ranges, budget brackets, hobbies, holiday type.</li>
              <li><strong>Women/Men flows:</strong> dedicated lists with quick favorites.</li>
              <li><strong>Calendar:</strong> upcoming dates & reminders.</li>
              <li><strong>People profiles:</strong> names, dates, preferences, suggested gifts.</li>
              <li><strong>Micro-interactions:</strong> confirmations, badges, subtle motion.</li>
            </ul>

            <h2 className={styles.h2}>Design & UX</h2>
            <ul className={styles.ul}>
              <li>Calm pastel palette, high legibility, large tap targets.</li>
              <li>Chips & segmented controls for fast filtering.</li>
              <li>Bottom-home action for one-hand nav.</li>
              <li>Consistent empty states and success toasts.</li>
            </ul>
          </div>

          {/* медиаколонка справа */}
          <div className={styles.colMedia}>
            <a
              className={styles.figmaBtn}
              href="https://www.figma.com/design/joVwSJGnBQUslG8eSYn2iB/Untitled?node-id=0-1"
              target="_blank" rel="noopener noreferrer"
            >
              Figma Prototype
            </a>

            <div className={styles.slider}>
              <Image
                src={images[current]}
                alt={`Gift Helper screen ${current + 1}`}
                width={400}
                height={600}
                className={styles.img}
              />
              {images.length > 1 && (
                <>
                  <button aria-label="Prev"  className={`${styles.arrow} ${styles.left}`}  onClick={prev}>&#10094;</button>
                  <button aria-label="Next"  className={`${styles.arrow} ${styles.right}`} onClick={next}>&#10095;</button>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
