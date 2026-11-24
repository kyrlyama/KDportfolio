import Image from "next/image";

import styles from "@/styles/BrowserMock.module.css";

export default function BrowserMock({ src, alt, caption }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <div className={styles.bar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.url}>project preview</span>
        </div>
        <div className={styles.viewport}>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={760}
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}