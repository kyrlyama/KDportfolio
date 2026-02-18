// pages/illustrator.js
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "@/styles/Illustrator.module.css";

export default function Illustrator() {
  // Положи реальные файлы в /public/images/...
  const works = [
  { src: "/digitaldesign/poster1.png", alt: "Poster 1" },
  { src: "/digitaldesign/poster2.png", alt: "Poster 2" },
  { src: "/digitaldesign/poster3.png", alt: "Poster 3" },
    { src: "/digitaldesign/poster4.png", alt: "Poster 4" },
  { src: "/digitaldesign/poster5.png", alt: "Poster 5" },
  { src: "/digitaldesign/poster6.png", alt: "Poster 6" },
  { src: "/digitaldesign/poster7.png", alt: "Poster 7" },
  { src: "/digitaldesign/poster8.png", alt: "Poster 8" },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const close = useCallback(() => setOpenIndex(null), []);

  // Закрытие по Esc + блокировка прокрутки фона
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    if (openIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [openIndex, close]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className="pageTitle">Digital Design</h1>
          <p className={styles.lead}>
            I keep studying Adobe Illustrator and Photoshop and will continue to expand this portfolio.
          </p>
        </header>

        <section className={styles.grid}>
          {works.map((item, i) => (
            <button
              key={i}
              type="button"
              className={styles.card}
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${item.alt}`}
            >
              <div className={styles.thumb}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  priority={i < 2}
                />
              </div>
            </button>
          ))}
        </section>
      </div>

      {openIndex !== null && works[openIndex] && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* крестик фиксированный, всегда поверх и ниже navbar */}
          <button className={styles.closeBtn} onClick={close} aria-label="Close preview">×</button>

          <div className={styles.modalCard}>
            <div className={styles.modalBody}>
              {/* внутри — «воздух» сверху/снизу + вписывание без обрезки */}
              <div className={styles.imgBox}>
                <Image
                  src={works[openIndex].src}
                  alt={works[openIndex].alt}
                  fill
                  sizes="96vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
