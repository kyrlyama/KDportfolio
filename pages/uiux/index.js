import Image from "next/image";
import Link from "next/link";

import { uiuxCases } from "@/data/uiuxCases";
import styles from "@/styles/Uiux.module.css";

export default function Uiux() {
  return (
    <main className={styles.page}>
      <h1 className="pageTitle">UI/UX Case studies</h1>

      <section className={styles.cards}>
        {uiuxCases.map((item) => {
const href = item.href || `/uiux/${item.slug}`;
<Link href={href} className={styles.cardLink}>Open case</Link>

          return (
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
                  {(item.highlights || []).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {/* ✅ теперь href реально используется */}
                <Link href={href} className={styles.cardLink}>
                  Open case
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
