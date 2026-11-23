// pages/projects/likefon.js — хаб Likefon (/likefon редиректит сюда).
// Живёт под /projects/, чтобы в шапке подсвечивался пункт «Projects»
// без изменений в NavBar.tsx.
import Image from "next/image";
import Link from "next/link";

import { ImagePlaceholder, SnapshotBox, Tag } from "@/components/case";
import {
  LIKEFON_LIVE_URL,
  LIKEFON_WEBSITE_ALT,
  LIKEFON_WEBSITE_IMAGE,
} from "@/data/likefon";
import styles from "@/styles/Case.module.css";

const snapshot = [
  { label: "Role", value: "Designer + developer" },
  { label: "Team", value: "Solo" },
  { label: "Tools", value: "Figma, Affinity" },
  { label: "Stack", value: "Next.js, TS, Tailwind" },
];

const parts = [
  {
    num: "01 · Brand",
    title: "Brand refresh",
    text: "Logo, posters and business cards, based on competitor and customer research. Approved by management and used in both stores.",
    href: "/uiux/shop-redesign",
    cta: "See the brand →",
  },
  {
    num: "02 · UX",
    title: "UX case study",
    text: "Interviews, personas and journey maps turned into a high-fidelity Figma prototype for a showroom website.",
    href: "/uiux/likefon-prototype",
    cta: "Read the case study →",
  },
  {
    num: "03 · Code",
    title: "Website",
    text: "Building the design in Next.js, TypeScript and Tailwind, with an admin panel for products.",
    href: LIKEFON_LIVE_URL,
    cta: "Open the website →",
  },
];

export default function LikefonHub() {
  return (
    <div className={styles.page}>
      <Link href="/projects" className={styles.backLink}>
        ← All projects
      </Link>

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Client project · 2024–2026</p>
          <h1 className={styles.h1}>Likefon</h1>
          <p className={styles.lead}>
            Likefon is a family-run phone-accessories shop with two stores in
            Narva. I took it from a new visual identity to a researched UX
            design to a working website.
          </p>
        </div>
        <SnapshotBox items={snapshot} side />
      </header>

      <div className={`glass glass-rim ${styles.heroMedia}`}>
        {LIKEFON_WEBSITE_IMAGE ? (
          <Image
            src={LIKEFON_WEBSITE_IMAGE}
            alt={LIKEFON_WEBSITE_ALT}
            width={1600}
            height={900}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        ) : (
          <ImagePlaceholder>
            [Likefon website: desktop + phone screenshot — coming soon]
          </ImagePlaceholder>
        )}
      </div>

      <section className={styles.section} aria-labelledby="parts-title">
        <h2 id="parts-title" className={styles.sectionTitle}>
          Three parts, one client
        </h2>
        <p className={styles.text}>
          Each part built on the one before it: the brand set the look, the
          research set the structure, the code made it real.
        </p>

        <div className={styles.grid3}>
          {parts.map((p) =>
            p.href ? (
              <Link
                key={p.title}
                href={p.href}
                className={`glass-strong ${styles.partCard}`}
              >
                <PartContent {...p} />
                <span className={styles.partCta}>{p.cta}</span>
              </Link>
            ) : (
              <article
                key={p.title}
                className={`glass ${styles.partCard} ${styles.partDashed}`}
              >
                <PartContent {...p} />
                <span className={styles.partStatus}>
                  <Tag tone="progress">In progress</Tag>
                </span>
              </article>
            ),
          )}
        </div>
      </section>

      <section className={styles.connect} aria-labelledby="connect-title">
        <h2 id="connect-title">What connects the three parts</h2>
        <ul>
          <li>
            The logo and colors from the brand refresh are reused in the Figma
            design and in the code.
          </li>
          <li>
            The site is a showroom, not a shop: customers see what&apos;s
            available, then call or visit one of the two stores.
          </li>
          <li>
            Also for Likefon: the{" "}
            <Link href="/projects/stock-tracker">Stock Tracker</Link>, an
            inventory tool the store staff use every day.
          </li>
        </ul>
      </section>
    </div>
  );
}

function PartContent({ num, title, text }) {
  return (
    <>
      <span className={styles.partNum}>{num}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </>
  );
}
