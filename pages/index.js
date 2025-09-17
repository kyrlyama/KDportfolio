import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";


function FloatingBubble({ label, href, extraClass }) {
  const [burst, setBurst] = useState([]);

  function handleHover() {
    // генерим массив случайных пузырьков (каждый раз новые позиции)
    const newBurst = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      size: ["micro--xs", "micro--sm", "micro--md"][Math.floor(Math.random() * 3)],
      pos: `mb-${Math.floor(Math.random() * 12) + 1}`
    }));
    setBurst(newBurst);
  }

  return (
    <a
      href={href}
      className={`${styles.floatingCircle} ${extraClass}`}
      onMouseEnter={handleHover}
    >
      {label}
      <div className="microWrap">
        {burst.map(b => (
          <div key={b.id} className={`micro ${b.size} ${b.pos}`} />
        ))}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      {/* Центральное фото */}
<div className={styles.photoWrap}>
  <Image
    src="/me.jpg"
    alt="My photo"
    fill
    priority
    sizes="220px"
    className={styles.photoImg}
  />
</div>
<FloatingBubble label="Websites" href="/websites" extraClass={styles.websites} />
<FloatingBubble label="Figma" href="/figma" extraClass={styles.figma} />
<FloatingBubble label="Android" href="/android_studio" extraClass={styles.android_studio} />
<FloatingBubble label="Illustrator" href="/illustrator" extraClass={styles.illustrator} />




      {/* Слой с декоративными пузырями */}
<div className="bubblesLayer">
  <div className="decor bubbleLg pos-lg-1" />
  <div className="decor bubbleLg pos-lg-2" />

  <div className="decor bubbleMd pos-md-1" />
  <div className="decor bubbleMd pos-md-2" />
  <div className="decor bubbleMd pos-md-3" />
  <div className="decor bubbleMd pos-md-4" />
  <div className="decor bubbleMd pos-md-5" />

  {/* можно дублировать, чтобы заполнить экран */}
  <div className="decor bubbleSm pos-sm-1" />
  <div className="decor bubbleSm pos-sm-2" />
  <div className="decor bubbleSm pos-sm-3" />
  <div className="decor bubbleSm pos-sm-4" />
  <div className="decor bubbleSm pos-sm-5" />
  <div className="decor bubbleSm pos-sm-6" />
  <div className="decor bubbleSm pos-sm-7" />
  <div className="decor bubbleSm pos-sm-8" />
  <div className="decor bubbleSm pos-sm-9" />
  <div className="decor bubbleSm pos-sm-10" />
  <div className="decor bubbleSm pos-sm-11" />
  <div className="decor bubbleSm pos-sm-12" />
</div>
    </main>
  );
}
