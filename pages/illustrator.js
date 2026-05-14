// pages/illustrator.js
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import styles from "@/styles/Illustrator.module.css";

const works = [
  {
  src: "/digitaldesign/poster9.png",
  title: "Like Store Advertising Poster",
  category: "Advertising poster for Like store",
  tools: "Adobe Illustrator / Photoshop",
  alt: "Advertising poster for Like store",
},
  {
    src: "/digitaldesign/poster1.png",
    title: "Poster Design",
    category: "Digital poster",
    tools: "Affinity",
    alt: "Digital poster design 1",
  },
  {
    src: "/digitaldesign/poster2.png",
    title: "Poster Design",
    category: "Visual composition",
    tools: "Affinity",
    alt: "Digital poster design 2",
  },
{
  src: "/digitaldesign/poster3.png",
  title: "Music Track Cover",
  category: "Cover artwork for a music track",
  tools: "Affinity",
  alt: "Cover artwork for a music track",
},
  {
    src: "/digitaldesign/poster4.png",
    title: "Poster Design",
    category: "Layout study",
    tools: "Adobe Illustrator / Photoshop",
    alt: "Digital poster design 4",
  },
  {
    src: "/digitaldesign/poster5.png",
    title: "Poster Design",
    category: "Color and contrast",
    tools: "Adobe Illustrator / Photoshop",
    alt: "Digital poster design 5",
  },
  {
    src: "/digitaldesign/poster6.png",
    title: "Poster Design",
    category: "Graphic composition",
    tools: "Adobe Illustrator / Photoshop",
    alt: "Digital poster design 6",
  },
  {
    src: "/digitaldesign/poster7.png",
    title: "Poster Design",
    category: "Poster exploration",
    tools: "Adobe Illustrator / Photoshop",
    alt: "Digital poster design 7",
  },
  {
    src: "/digitaldesign/poster8.png",
    title: "Poster Design",
    category: "Digital artwork",
    tools: "Adobe Illustrator / Photoshop",
    alt: "Digital poster design 8",
  },

];

const highlights = [
  "Poster composition",
  "Typography hierarchy",
  "Color contrast",
  "Visual balance",
];

export default function Illustrator() {
  const [openIndex, setOpenIndex] = useState(null);
  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };

    if (openIndex === null) return undefined;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Digital design</p>

          <h1 className={styles.heroTitle}>
            Illustrator / Photoshop / Affinity poster explorations
          </h1>

          <p className={styles.heroLead}>
            A collection of digital posters created while practicing visual
            composition, color contrast, typography hierarchy, and layout
            balance in Adobe Illustrator, Photoshop, and Affinity Designer.
          </p>

          <div className={styles.heroMeta}>
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className={styles.sectionHeader}>
          <div>
            <h2>Selected works</h2>
            <p>
              Each poster focuses on visual structure, spacing, contrast, and
              creating a clear focal point.
            </p>
          </div>
          <span>{works.length} posters</span>
        </section>

        <section className={styles.grid} aria-label="Digital design posters">
          {works.map((item, i) => (
            <article key={item.src} className={styles.card}>
              <button
                type="button"
                className={styles.previewButton}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${item.title}`}
              >
                <div className={styles.thumb}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className={styles.thumbImage}
                    priority={i < 2}
                  />
                </div>
              </button>

              <div className={styles.cardBody}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
                <span>{item.tools}</span>
              </div>
            </article>
          ))}
        </section>
      </div>

      {openIndex !== null && works[openIndex] && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={`${works[openIndex].title} preview`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close preview"
            type="button"
          >
            ×
          </button>

          <div className={styles.modalCard}>
            <div className={styles.modalBody}>
              <div className={styles.imgBox}>
                <Image
                  src={works[openIndex].src}
                  alt={works[openIndex].alt}
                  fill
                  sizes="96vw"
                  className={styles.modalImage}
                  priority
                />
              </div>

              <div className={styles.modalCaption}>
                <strong>{works[openIndex].title}</strong>
                <span>{works[openIndex].category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}