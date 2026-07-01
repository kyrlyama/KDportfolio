import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "@/styles/UiuxCase.module.css";

const toc = [
  { id: "background", label: "Project background" },
  { id: "goal", label: "Goal" },
  { id: "audit", label: "UX / Visual audit" },
  { id: "final", label: "Final result" },
  { id: "logo", label: "Logo design" },
  { id: "mockups", label: "Mockups" },
  { id: "outcome", label: "Outcome & learnings" },
];

const likeImages = {
  hero: [{ src: "/uiux/redesign/like-store-final.webp", alt: "Like store after the logo redesign" }],
  compare: [
    { src: "/uiux/redesign/beforeredesign.jpg", alt: "Before redesign" },
    { src: "/uiux/redesign/like-store-final.webp", alt: "Like store after redesign" },
  ],
  logo: [
    { src: "/uiux/redesign/Logo_likefon_1.png", alt: "Logo Likefon concept 1" },
    { src: "/uiux/redesign/Logo_likefon_2.png", alt: "Logo Likefon concept 2" },
    { src: "/uiux/redesign/logo_likefon_3.png", alt: "Logo Likefon concept 3" },
  ],
  mockups: [
    { src: "/uiux/redesign/like-brand-mockup.webp", alt: "Like brand identity mockup" },
    { src: "/uiux/redesign/mockup1.jpg", alt: "Store signage" },
    { src: "/uiux/redesign/mockup2.jpg", alt: "Packaging" },
    { src: "/uiux/redesign/mockup3.jpg", alt: "Brand visual application" },
  ],
};

function ZoomModal({ images, index, onClose }) {
  const [current, setCurrent] = useState(index ?? 0);
  const [zoom, setZoom] = useState(1);
  const total = images?.length ?? 0;

  useEffect(() => setCurrent(index ?? 0), [index]);
  useEffect(() => setZoom(1), [current]);
  useEffect(() => {
    if (!total) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setCurrent((value) => (value - 1 + total) % total);
      if (event.key === "ArrowRight") setCurrent((value) => (value + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  if (!total) return null;
  const image = images[current];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.zoomModal} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <div className={styles.zoomToolbar}>
          <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))}>−</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))}>+</button>
          <button type="button" onClick={onClose}>✕</button>
        </div>
        <div className={styles.modalBody}>
          {total > 1 ? <button type="button" className={styles.modalArrow} onClick={() => setCurrent((value) => (value - 1 + total) % total)}>‹</button> : null}
          <div className={styles.zoomModalImage}>
            <div className={styles.zoomCanvas} style={{ width: `${zoom * 100}%` }}>
              <Image src={image.src} alt={image.alt} width={2200} height={1500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
          {total > 1 ? <button type="button" className={styles.modalArrow} onClick={() => setCurrent((value) => (value + 1) % total)}>›</button> : null}
        </div>
        <div className={styles.modalFooter}><span className={styles.modalCounter}>{current + 1} / {total}</span></div>
      </div>
    </div>
  );
}

export default function ShopRedesign() {
  const [modal, setModal] = useState(null);
  const openModal = (images, index = 0) => setModal({ images, index });

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.heroCard}>
          <button type="button" className={`${styles.heroMedia} ${styles.zoomImageButton}`} onClick={() => openModal(likeImages.hero, 0)}>
            <Image src={likeImages.hero[0].src} alt={likeImages.hero[0].alt} fill sizes="(max-width: 900px) 100vw, 420px" className={styles.heroImage} priority />
            <span className={styles.zoomHint}>Zoom</span>
          </button>
          <div className={styles.heroText}>
            <p className={styles.kicker}>VISUAL IDENTITY UPDATE · AFFINITY DESIGNER</p>
            <h1 className={styles.title}>Logo Redesign for Like</h1>
            <p className={styles.lead}>Refreshing a local phone accessories retailer’s identity to improve clarity, trust, and visibility in a competitive mall environment.</p>
          </div>
        </section>

        <div className={styles.body}>
          <aside className={styles.toc}>
            <h3>Contents</h3>
            <ul>{toc.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
            <div className={styles.tocActions}><Link href="/uiux" className={styles.btn}>← Back</Link></div>
          </aside>

          <div className={styles.sections}>
            <section id="background" className={styles.section}><h2>Project background</h2><ul><li><strong>Store type:</strong> local retail shop.</li><li><strong>What it sells:</strong> phone accessories and headsets.</li><li><strong>Competitive context:</strong> strong competition with Click, Evelatus, and OnOff.</li></ul></section>
            <section id="goal" className={styles.section}><h2>Goal</h2><p className={styles.p}>Create a clearer and more recognisable brand mark that is readable at distance, scalable for print and digital use, and visually connected to the store’s category.</p></section>
            <section id="audit" className={styles.section}><h2>UX / Visual audit</h2><p className={styles.p}>The original mark was too abstract and didn’t communicate the store’s category well. It also lost clarity at small sizes, reducing memorability and trust.</p></section>

            <section id="final" className={styles.section}>
              <h2>Final result</h2>
              <div className={styles.compareGrid}>
                {likeImages.compare.map((image, index) => (
                  <div className={styles.compareCard} key={image.src}>
                    <button type="button" className={`${styles.compareImageWrapper} ${styles.zoomImageButton}`} onClick={() => openModal(likeImages.compare, index)}>
                      <Image src={image.src} alt={image.alt} width={1200} height={800} className={styles.compareImage} />
                      <span className={styles.zoomHint}>Zoom</span>
                    </button>
                    <h3 className={styles.h3}>{index === 0 ? "Before" : "After"}</h3>
                    <p className={styles.p}>{index === 0 ? "Abstract mark with low association to the store’s products and weak scalability." : "The redesigned identity is now visible in the real retail environment and works clearly at storefront scale."}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="logo" className={styles.section}>
              <h2>Logo design</h2>
              <div className={styles.mediaGrid}>{likeImages.logo.map((image, index) => <button type="button" key={image.src} className={`${styles.mediaCard} ${styles.zoomImageButton}`} onClick={() => openModal(likeImages.logo, index)}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" /><span className={styles.zoomHint}>Zoom</span></button>)}</div>
            </section>

            <section id="mockups" className={styles.section}>
              <h2>Mockups</h2>
              <div className={styles.mockupGrid}>{likeImages.mockups.map((image, index) => <div className={styles.mockupItem} key={image.src}><button type="button" className={`${styles.mockupMedia} ${styles.zoomImageButton}`} onClick={() => openModal(likeImages.mockups, index)}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 50vw" className={styles.mockupImage} /><span className={styles.zoomHint}>Zoom</span></button><h3 className={styles.mockupTitle}>{image.alt}</h3></div>)}</div>
            </section>

            <section id="outcome" className={styles.section}><h2>Outcome & learnings</h2><ul className={styles.list}><li>A more readable mark increased clarity and category association.</li><li>Testing at small sizes helped keep the logo scalable and consistent.</li><li>Mockups validated how the identity performs in real retail contexts.</li></ul></section>
          </div>
        </div>
      </div>
      {modal ? <ZoomModal images={modal.images} index={modal.index} onClose={() => setModal(null)} /> : null}
    </main>
  );
}
