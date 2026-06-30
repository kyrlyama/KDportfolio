import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { getUiuxCase, uiuxCases } from "@/data/uiuxCases";
import styles from "@/styles/UiuxCase.module.css";

const cleaningScreens = [
  { src: "/project1.png", alt: "Cleaning website home screen" },
  { src: "/project12.png", alt: "Cleaning website services screen" },
  { src: "/project13.png", alt: "Cleaning website booking screen" },
  { src: "/project14.png", alt: "Cleaning website order confirmation screen" },
  { src: "/project15.png", alt: "Cleaning website reviews screen" },
  { src: "/project16.png", alt: "Cleaning website gallery screen" },
  { src: "/project17.png", alt: "Cleaning website contact screen" },
];

const heroCarouselStyle = {
  position: "relative",
  height: 320,
  borderRadius: 22,
  overflow: "hidden",
  background: "#fff",
};

const heroButtonStyle = {
  position: "relative",
  display: "block",
  width: "100%",
  height: "100%",
  border: 0,
  padding: 0,
  background: "transparent",
  cursor: "zoom-in",
};

const zoomHintStyle = {
  position: "absolute",
  right: 14,
  bottom: 14,
  padding: "8px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,.88)",
  color: "#111827",
  fontSize: 12,
  fontWeight: 800,
  boxShadow: "0 10px 24px rgba(0,0,0,.12)",
};

const arrowBaseStyle = {
  position: "absolute",
  top: "50%",
  width: 42,
  height: 42,
  borderRadius: "50%",
  border: 0,
  background: "rgba(255,255,255,.9)",
  color: "#111827",
  fontSize: 28,
  lineHeight: 1,
  boxShadow: "0 10px 24px rgba(0,0,0,.14)",
  cursor: "pointer",
  transform: "translateY(-50%)",
  zIndex: 2,
};

function ImageGrid({ images, onSelect, variant }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={`${styles.imageGrid} ${variant ? styles[variant] : ""}`}>
      {images.map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          className={styles.imageButton}
          onClick={() => onSelect(index)}
        >
          <Image
            src={image.src}
            alt={image.alt || "Case visual"}
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </button>
      ))}
    </div>
  );
}

function HeroCarousel({ images, onOpen }) {
  const [current, setCurrent] = useState(0);
  const image = images[current];

  return (
    <div style={heroCarouselStyle}>
      <button
        type="button"
        style={heroButtonStyle}
        onClick={() => onOpen(images, current, "Cleaning website screens")}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 420px"
          className={styles.heroImage}
          priority
        />
        <span style={zoomHintStyle}>Zoom</span>
      </button>

      <button
        type="button"
        style={{ ...arrowBaseStyle, left: 14 }}
        onClick={() => setCurrent((value) => (value - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        type="button"
        style={{ ...arrowBaseStyle, right: 14 }}
        onClick={() => setCurrent((value) => (value + 1) % images.length)}
        aria-label="Next image"
      >
        ›
      </button>

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 14,
          display: "flex",
          gap: 8,
          padding: "7px 10px",
          borderRadius: 999,
          background: "rgba(255,255,255,.82)",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            style={{
              width: index === current ? 24 : 8,
              height: 8,
              border: 0,
              borderRadius: 999,
              padding: 0,
              background: index === current ? "#111827" : "#94a3b8",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SectionContent({ section, onSelect }) {
  if (section.type === "research") {
    return (
      <>
        <div className={styles.sectionSplit}>
          <div className={styles.sectionText}>
            <p className={styles.sectionParagraph}>{section.text}</p>
          </div>
          <div className={styles.sectionCards}>
            {(section.cards || []).map((card) => (
              <div key={card.title} className={styles.miniCard}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <ImageGrid images={section.images} onSelect={onSelect} />
      </>
    );
  }

  if (section.type === "palette") {
    return (
      <>
        <p className={styles.sectionParagraph}>{section.text}</p>
        {section.colors?.length ? (
          <div className={styles.paletteGrid}>
            {section.colors.map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <span className={styles.swatch} style={{ backgroundColor: c.hex }} />
                <div className={styles.colorMeta}>
                  <div className={styles.colorTop}>
                    <strong className={styles.colorName}>{c.name}</strong>
                    <code className={styles.colorHex}>{c.hex}</code>
                  </div>
                  <div className={styles.colorUsage}>{c.usage}</div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        <ImageGrid images={section.images} onSelect={onSelect} />
      </>
    );
  }

  return (
    <>
      <p className={styles.sectionParagraph}>{section.text}</p>
      <ImageGrid images={section.images} onSelect={onSelect} />
    </>
  );
}

function ModalCarousel({ images, index, onClose, title }) {
  const [current, setCurrent] = useState(index ?? 0);
  const [zoom, setZoom] = useState(1);
  const total = images?.length ?? 0;

  useEffect(() => setCurrent(index ?? 0), [index]);
  useEffect(() => setZoom(1), [current]);

  useEffect(() => {
    if (!total) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setCurrent((value) => (value - 1 + total) % total);
      if (event.key === "ArrowRight") setCurrent((value) => (value + 1) % total);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, total]);

  if (!total) return null;
  const image = images[current];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Image preview"}
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(96vw, 1440px)",
          height: "min(88vh, 920px)",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gap: 12,
          background: "#fff",
          borderRadius: 24,
          padding: 16,
          boxShadow: "0 28px 90px rgba(0,0,0,.35)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 8 }}>
          <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))}>−</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))}>+</button>
          <button type="button" onClick={onClose} aria-label="Close preview">✕</button>
        </div>

        <div className={styles.modalBody}>
          {total > 1 ? (
            <button type="button" onClick={() => setCurrent((value) => (value - 1 + total) % total)} aria-label="Previous image" className={styles.modalArrow}>‹</button>
          ) : null}

          <div style={{ width: "100%", height: "100%", overflow: "auto", borderRadius: 18, background: "#f8fafc" }}>
            <div style={{ width: `${zoom * 100}%`, minWidth: "100%", margin: "0 auto" }}>
              <Image src={image.src} alt={image.alt || "Selected image"} width={2200} height={1500} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>

          {total > 1 ? (
            <button type="button" onClick={() => setCurrent((value) => (value + 1) % total)} aria-label="Next image" className={styles.modalArrow}>›</button>
          ) : null}
        </div>

        <div className={styles.modalFooter}><span className={styles.modalCounter}>{current + 1} / {total}</span></div>
      </div>
    </div>
  );
}

export default function UiuxCasePage({ uiuxCase }) {
  const [modalIndex, setModalIndex] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const sections = useMemo(() => uiuxCase?.sections || [], [uiuxCase]);

  const openModal = (images, index, title) => {
    setModalImages(images || []);
    setModalIndex(index ?? 0);
    setModalTitle(title || "");
  };

  const closeModal = () => {
    setModalIndex(null);
    setModalImages([]);
    setModalTitle("");
  };

  if (!uiuxCase) return <main className={styles.page}><p>Case not found.</p><Link href="/uiux" className={styles.btn}>← Back</Link></main>;

  const toc = sections.filter((s) => s?.id && s?.title).map((s) => ({ id: s.id, label: s.title }));
  const isCleaning = uiuxCase.slug === "cleaning-website";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.heroCard}>
          {isCleaning ? (
            <HeroCarousel images={cleaningScreens} onOpen={openModal} />
          ) : uiuxCase.heroImage?.src ? (
            <div className={styles.heroMedia}>
              <Image src={uiuxCase.heroImage.src} alt={uiuxCase.heroImage.alt || uiuxCase.title} fill sizes="(max-width: 900px) 100vw, 420px" className={styles.heroImage} priority />
            </div>
          ) : null}
          <div className={styles.heroText}>
            {uiuxCase.label ? <p className={styles.kicker}>{uiuxCase.label}</p> : null}
            <h1 className={styles.title}>{uiuxCase.title}</h1>
            {uiuxCase.subtitle ? <p className={styles.lead}>{uiuxCase.subtitle}</p> : null}
            {uiuxCase.buttons?.length ? <div className={styles.actionsRow}>{uiuxCase.buttons.map((b) => <Link key={b.href} href={b.href} className={styles.btn}>{b.label}</Link>)}</div> : null}
          </div>
        </section>

        <div className={styles.body}>
          <aside className={styles.toc}>
            <h3>Contents</h3>
            <ul>{toc.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
            <div className={styles.tocActions}><Link href="/uiux" className={styles.btn}>← Back</Link></div>
          </aside>
          <div className={styles.sections}>
            {uiuxCase.summary ? <section className={styles.section}><h2>Overview</h2><p className={styles.sectionParagraph}>{uiuxCase.summary}</p></section> : null}
            {sections.map((section) => <section key={section.id || section.title} id={section.id} className={styles.section}><h2 className={styles.sectionTitle}>{section.title}</h2><SectionContent section={section} onSelect={(index) => openModal(section.images, index, section.title)} /></section>)}
          </div>
        </div>
        {modalIndex !== null ? <ModalCarousel images={modalImages} index={modalIndex} onClose={closeModal} title={modalTitle} /> : null}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = (uiuxCases || []).filter((item) => !item.href).map((item) => ({ params: { slug: item.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const uiuxCase = getUiuxCase(params.slug) || null;
  return { props: { uiuxCase } };
}
