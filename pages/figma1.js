// pages/figma1.js
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Figma.module.css";

export default function FigmaTravelApp() {
  const images = [
    "/figma23.png","/figma24.png","/figma25.png",
    "/figma26.png","/figma27.png","/figma28.png","/figma29.png"
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
            <h1 className={styles.title}>Figma Travel App</h1>

            <p className={styles.p}>
              This prototype represents a travel planning application designed to help friends organize shared trips.
              The app supports features such as destination selection, expense planning, shared schedules, and real-time activity suggestions.
              It focuses on collaborative travel and decision-making with smooth UX.
            </p>

            <h2 className={styles.h2}>Main Features</h2>
            <ul className={styles.ul}>
              <li><strong>Trip planning interface:</strong> dates, destinations, shared plans.</li>
              <li><strong>Group chat & notes:</strong> collaborate with companions.</li>
              <li><strong>Swipe recommendations:</strong> vote on suggested places.</li>
              <li><strong>AI suggestions:</strong> tailored to group preferences.</li>
              <li><strong>Sync:</strong> real-time updates and shared calendars.</li>
            </ul>

            <h2 className={styles.h2}>Technology</h2>
            <ul className={styles.ul}>
              <li><strong>Design tools:</strong> Figma (prototype & UI).</li>
              <li><strong>Mobile-first layout:</strong> optimized for phones.</li>
              <li><strong>Interactions:</strong> animated transitions & flows.</li>
            </ul>
          </div>

          {/* медиаколонка справа */}
          <div className={styles.colMedia}>
            <a
              className={styles.figmaBtn}
              href="https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1"
              target="_blank" rel="noopener noreferrer"
            >
              Figma Prototype
            </a>

            <div className={styles.slider}>
              <Image
                src={images[current]}
                alt={`Figma Travel App ${current + 1}`}
                width={400}
                height={600}
                className={styles.img}
                priority
              />
              <button aria-label="Prev"  className={`${styles.arrow} ${styles.left}`}  onClick={prev}>&#10094;</button>
              <button aria-label="Next"  className={`${styles.arrow} ${styles.right}`} onClick={next}>&#10095;</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
