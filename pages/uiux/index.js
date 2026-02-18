import Link from "next/link";
import Image from "next/image";
import { uiuxCases } from "@/data/uiuxCases";
import styles from "@/styles/Uiux.module.css";

export default function Uiux() {
  return (
    <main className={styles.page}>
      {/* как в figma.js: глобальный заголовок */}
      <h1 className="pageTitle">UI/UX Case studies</h1>

      <section className={styles.cards}>
        {uiuxCases.map((item) => (
          <article key={item.slug} className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>{item.label}</p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>

              <ul className={styles.cardHighlights}>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <Link href={`/uiux/${item.slug}`} className={styles.cardLink}>
                Open case
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
