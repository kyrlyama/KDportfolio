// pages/index.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/Home.module.css";

// сколько микро-пузырьков показывать вокруг каждого круга
const MICRO_COUNTS = { xs: 8, sm: 8, md: 6 };

const featuredProjects = [
  {
    title: "Stock Tracker",
    label: "Commercial project",
    description: "Inventory management system for a real two-store workflow.",
    image: "/project40.png",
    href: "/projects/stock-tracker",
  },
  {
    title: "Like store redesign",
    label: "Commercial UX/UI",
    description: "Visual identity and store experience redesign for Likefon.",
    image: "/uiux/redesign/redesign.png",
    href: "/uiux/shop-redesign",
  },
  {
    title: "Travel Planning App",
    label: "University project",
    description: "Research-driven Figma concept for planning trips with friends.",
    image: "/figma23.png",
    href: "/uiux/travel-app",
  },
];

function FloatingBubble({ label, href, extraClass }) {
  const [burst, setBurst] = useState([]);

  function spawnBurst() {
    const arr = [];
    const pushRand = (kind, n) => {
      for (let i = 0; i < n; i++) {
        arr.push({
          id: `${kind}-${Date.now()}-${i}`,
          kind,
          top: Math.random() * 100,
          left: Math.random() * 100,
        });
      }
    };
    pushRand("xs", MICRO_COUNTS.xs);
    pushRand("sm", MICRO_COUNTS.sm);
    pushRand("md", MICRO_COUNTS.md);
    setBurst(arr);
  }

  return (
    <Link
      href={href}
      aria-label={`${label} section`}
      className={`${styles.floatingCircle} ${extraClass}`}
      onMouseEnter={spawnBurst}
      onFocus={spawnBurst}
      onTouchStart={() => {
        spawnBurst();
        setTimeout(() => setBurst([]), 700);
      }}
    >
      {label}
      <div className={styles.microWrap}>
        {burst.map((b) => (
          <span
            key={b.id}
            className={`${styles.micro} ${styles[`micro--${b.kind}`]}`}
            style={{ top: `${b.top}%`, left: `${b.left}%` }}
          />
        ))}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <section className={styles.homeContainer} aria-label="Portfolio introduction">
        {/* фоновые большие/средние/малые пузыри */}
        <div className={styles.bubblesLayer} aria-hidden="true">
          <span className="decor bubbleLg pos-lg-1" />
          <span className="decor bubbleLg pos-lg-2" />

          <span className="decor bubbleMd pos-md-1" />
          <span className="decor bubbleMd pos-md-2" />
          <span className="decor bubbleMd pos-md-3" />
          <span className="decor bubbleMd pos-md-4" />
          <span className="decor bubbleMd pos-md-5" />

          <span className="decor bubbleSm pos-sm-1" />
          <span className="decor bubbleSm pos-sm-2" />
          <span className="decor bubbleSm pos-sm-3" />
          <span className="decor bubbleSm pos-sm-4" />
          <span className="decor bubbleSm pos-sm-5" />
          <span className="decor bubbleSm pos-sm-6" />
          <span className="decor bubbleSm pos-sm-7" />
          <span className="decor bubbleSm pos-sm-8" />
          <span className="decor bubbleSm pos-sm-9" />
          <span className="decor bubbleSm pos-sm-10" />
          <span className="decor bubbleSm pos-sm-11" />
          <span className="decor bubbleSm pos-sm-12" />
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            zIndex: 6,
            fontFamily: '"Segoe Print", "Comic Sans MS", cursive',
            fontSize: "clamp(15px, 1.6vw, 21px)",
            fontWeight: 700,
            color: "#4b5563",
            transform: "rotate(-7deg)",
            pointerEvents: "none",
          }}
        >
          pop a bubble to explore ↘
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "58%",
            right: "13%",
            zIndex: 6,
            fontFamily: '"Segoe Print", "Comic Sans MS", cursive',
            fontSize: "clamp(15px, 1.6vw, 21px)",
            fontWeight: 700,
            color: "#4b5563",
            transform: "rotate(6deg)",
            pointerEvents: "none",
          }}
        >
          click a bubble
        </div>

        {/* центральное фото */}
        <div className={styles.photoWrap}>
          <Image
            src="/me.jpg"
            alt="My photo"
            fill
            priority
            sizes="(max-width: 540px) 180px, (max-width: 1024px) 200px, 220px"
            className={styles.photoImg}
          />
        </div>

<div className={styles.introText}>
  <h1>Kristina Dunajeva</h1>
  <p>Frontend Developer &amp; UI/UX Designer</p>
  <p className={styles.tagline}>
    Narva, Estonia · open to work
  </p>

  <div className={styles.ctaRow}>
    <Link href="/projects" className={`${styles.ctaBtn} ${styles.ctaLight}`}>
      View projects ↓
    </Link>
    <Link href="/contacts" className={`${styles.ctaBtn} ${styles.ctaDark}`}>
      Contact me →
    </Link>
  </div>
</div>

        {/* 5 кликабельных пузырей */}
        <FloatingBubble
          label="Websites"
          href="/websites"
          extraClass={styles.websites}
        />
        <FloatingBubble label="Figma" href="/figma" extraClass={styles.figma} />
        <FloatingBubble
          label="Android"
          href="/android_studio"
          extraClass={styles.android_studio}
        />
        <FloatingBubble
          label="UI/UX"
          href="/uiux"
          extraClass={styles.uiux}
        />
        <FloatingBubble
          label="Illustrator"
          href="/illustrator"
          extraClass={styles.illustrator}
        />
      </section>

<section aria-labelledby="featured-work-title" className={styles.featured}>
  <div className={styles.featuredHeader}>
    <p className={styles.eyebrow}>Selected work</p>
    <h2 id="featured-work-title" className={styles.featuredTitle}>
      A few projects worth opening first
    </h2>
  </div>

  <div className={styles.featuredGrid}>
    {featuredProjects.map((project) => (
      <Link key={project.href} href={project.href} className={styles.card}>
        <div className={styles.cardMedia}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 720px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardLabel}>{project.label}</p>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardText}>{project.description}</p>
        </div>
      </Link>
    ))}
  </div>
</section>
</div>
  );
}