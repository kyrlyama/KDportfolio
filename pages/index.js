// pages/index.js
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  return (
    <>

      {/* отступ под fixed-навбар */}
      <div className={styles.container} style={{ paddingTop: 100 }}>
        <div className={styles.centerPhoto}>
          <Image
            src="/me.jpg"
            alt="Моё фото"
            width={200}
            height={200}
            className={styles.centerPhoto}
          />
        </div>

        <Link href="/websites">
          <div
            className={`${styles.floatingCircle} ${styles.websites}`}
            onMouseEnter={() => setHovered("websites")}
            onMouseLeave={() => setHovered(null)}
          >
            Websites
            {hovered === "websites" && <BubblesAround />}
          </div>
        </Link>

        <Link href="/figma">
          <div
            className={`${styles.floatingCircle} ${styles.figma}`}
            onMouseEnter={() => setHovered("figma")}
            onMouseLeave={() => setHovered(null)}
          >
            Figma
            {hovered === "figma" && <BubblesAround />}
          </div>
        </Link>

        <Link href="/android_studio">
          <div
            className={`${styles.floatingCircle} ${styles.android_studio}`}
            onMouseEnter={() => setHovered("android_studio")}
            onMouseLeave={() => setHovered(null)}
          >
            Android Studio
            {hovered === "android_studio" && <BubblesAround />}
          </div>
        </Link>

        <Link href="/illustrator">
          <div
            className={`${styles.floatingCircle} ${styles.illustrator}`}
            onMouseEnter={() => setHovered("illustrator")}
            onMouseLeave={() => setHovered(null)}
          >
            Illustrator
            {hovered === "illustrator" && <BubblesAround />}
          </div>
        </Link>
{/* ===== DECOR ONLY (no text). Safe positions away from the four main circles ===== */}
{/* 2 большие */}
{/* 2 больших — мягко в углах */}
<div className={`${styles.decor} ${styles.bubbleLg}`} style={{ top: "1%",  left: "2%" }} />
<div className={`${styles.decor} ${styles.bubbleLg}`} style={{ bottom: "20%", right: "2%" }} />

{/* 5 средних — по периметру, не лезут к центру */}
<div className={`${styles.decor} ${styles.bubbleMd}`} style={{ top: "10%",  right: "7%" }} />
<div className={`${styles.decor} ${styles.bubbleMd}`} style={{ top: "42%",  left: "3%" }} />
<div className={`${styles.decor} ${styles.bubbleMd}`} style={{ bottom: "14%", left: "10%" }} />
<div className={`${styles.decor} ${styles.bubbleMd}`} style={{ bottom: "70%", right: "14%" }} />
<div className={`${styles.decor} ${styles.bubbleMd}`} style={{ top: "60%",  right: "8%" }} />

{/* 12 маленьких — лёгкое равномерное рассеивание по границам экрана */}
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "18%", left: "38%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "26%", right: "22%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "62%", left: "5%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "72%", left: "28%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ bottom: "10%", right: "28%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ bottom: "12%", left: "4%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "36%", right: "12%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "22%", left: "18%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ bottom: "26%", right: "6%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ bottom: "34%", left: "24%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "12%", right: "16%" }} />
<div className={`${styles.decor} ${styles.bubbleSm}`} style={{ top: "64%", right: "5%" }} />

      </div>
    </>
  );
}

function BubblesAround() {
  const bubbles = Array.from({ length: 25 }, (_, i) => i);

  return (
    <>
      {bubbles.map((_, index) => {
        const size = Math.floor(Math.random() * 12) + 10;
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50 + 60; // дальше от центра
        const left = 50 + Math.cos(angle) * radius;
        const top = 50 + Math.sin(angle) * radius;
        const delay = Math.random() * 0.3;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background: `radial-gradient(
                circle at center,
                #f9fbff 0%,
                #edf4fd 40%,
                #f6ecfc 80%,
                #fef3f9 100%
              )`,
              backdropFilter: "blur(6px)",
              top: `${top}%`,
              left: `${left}%`,
              transform: "translate(-50%, -50%)",
              animation: `fade 1.5s ease-out ${delay}s forwards`,
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        );
      })}
    </>
  );
}
