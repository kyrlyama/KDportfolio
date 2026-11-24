// pages/android_studio.js — Android apps: each app is a glass card in the
// same order as the PROJECT PLAN, in short form (context → stack → link).
import Link from "next/link";

import Carousel from "@/components/Carousel";
import { ImagePlaceholder, Tag, caseStyles as styles } from "@/components/case";
import { androidApps } from "@/data/androidApps";

export default function AndroidStudio() {
  return (
    <div className={styles.page}>
      <Link href="/projects" className={styles.backLink}>
        ← All projects
      </Link>
      <header>
        <p className={styles.eyebrow}>Study · Android</p>
        <h1 className={styles.h1}>Android Studio</h1>
        <p className={styles.lead}>
          Three small Android apps built in Java and Kotlin while studying
          mobile development.
        </p>
      </header>

      <div className={styles.appList}>
        {androidApps.map((app) => (
          <article key={app.slug} className={`glass ${styles.appCard}`}>
            <div className={styles.appMedia}>
              {app.images.length > 0 ? (
                <Carousel
                  images={app.images}
                  alt={`${app.title} preview`}
                  aspect="phone"
                />
              ) : (
                <ImagePlaceholder>[ADD SCREENSHOT]</ImagePlaceholder>
              )}
            </div>
            <div className={styles.appBody}>
              <div className={styles.tags}>
                <Tag tone="accent">Study</Tag>
                <Tag>{app.language}</Tag>
              </div>
              <h2 className={styles.cardTitle}>{app.title}</h2>
              <p className={styles.cardText}>{app.short}</p>
              <p className={styles.cardMeta}>{app.stack.join(" · ")}</p>
              <Link href={app.href} className={`glass-pill ${styles.btn}`}>
                See more details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
