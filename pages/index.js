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
    image: "/project4.png",
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
            top: "21%",
            left: "13%",
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
          click a bubble ↖
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
          <p className={styles.eyebrow}>Portfolio</p>
          <h1>Kristina Dunajeva</h1>
          <p>Frontend Developer &amp; UI/UX Designer</p>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
              pointerEvents: "auto",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "10px 15px",
                borderRadius: 999,
                background: "rgba(255,255,255,.88)",
                color: "#111827",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(17,24,39,.08)",
              }}
            >
              View projects ↓
            </Link>
            <Link
              href="/contacts"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "10px 15px",
                borderRadius: 999,
                background: "rgba(17,24,39,.92)",
                color: "#fff",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 8px 24px rgba(17,24,39,.12)",
              }}
            >
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


      <div className={styles.introText}>
  <p className={styles.eyebrow}>Portfolio</p>
  <h1>Kristina Dunajeva</h1>
  <p>Frontend Developer &amp; UI/UX Designer</p>
  <p>I design and build web interfaces — Narva, Estonia, open to work</p>
  <a href="/cv.pdf" download className={styles.cvBtn}>
  Download CV
</a>
</div>
      <section
        aria-labelledby="featured-work-title"
        style={{
          width: "min(1120px, calc(100% - 32px))",
          margin: "0 auto",
          padding: "18px 0 80px",
        }}
      >
        <div style={{ marginBottom: 22 }}>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Selected work
          </p>
          <h2
            id="featured-work-title"
            style={{
              margin: "6px 0 0",
              color: "#111827",
              fontSize: "clamp(26px, 4vw, 38px)",
              lineHeight: 1.08,
              letterSpacing: "-.04em",
            }}
          >
            A few projects worth opening first
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              style={{
                display: "block",
                overflow: "hidden",
                borderRadius: 24,
                background: "rgba(255,255,255,.78)",
                color: "inherit",
                textDecoration: "none",
                boxShadow: "0 14px 40px rgba(17,24,39,.08)",
              }}
            >
              <div style={{ aspectRatio: "16 / 10", position: "relative" }}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 18 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: ".09em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                  }}
                >
                  {project.label}
                </p>
                <h3
                  style={{
                    margin: "7px 0 6px",
                    fontSize: 20,
                    lineHeight: 1.15,
                    color: "#111827",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#4b5563",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
