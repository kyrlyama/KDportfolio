// pages/index.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

// сколько микро-пузырьков показывать вокруг каждого круга
const MICRO_COUNTS = { xs: 8, sm: 8, md: 6 }; // поменяй, если нужно

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
    <main className={styles.homeContainer}>
      {/* фоновые большие/средние/малые пузыри */}
      <div className={styles.bubblesLayer} aria-hidden="true">
        {/* ← оставляем количество КАК БЫЛО (просто пример ниже; если у тебя их больше — добавь все) */}
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

      {/* 4 главных круга */}
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
      <FloatingBubble label="UI/UX" href="uiux" extraClass={styles.uiux} />
      <FloatingBubble
        label="Illustrator"
        href="/illustrator"
        extraClass={styles.illustrator}
      />
    </main>
  );
}
