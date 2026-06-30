import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { getUiuxCase, uiuxCases } from "@/data/uiuxCases";
import styles from "@/styles/UiuxCase.module.css";

const cleaningScreens = [
  { src: "/project1.png", alt: "Cleaning website home screen" },
  { src: "/project12.png", alt: "Cleaning website services screen" },
  { src: "/project13.png", alt: "Cleaning website booking screen" },
];

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
    <div className={styles.caseHeroCarousel}>
      <button
        type="button"
        className={styles.caseHeroImageButton}
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
        <span className={styles.zoomHint}>Zoom</span>
      </button>

      <button
        type="button"
        className={`${styles.caseHeroArrow} ${styles.caseHeroPrev}`}
        onClick={() => setCurrent((value) => (value - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.caseHeroArrow} ${styles.caseHeroNext}`}
        onClick={() => setCurrent((value) => (value + 1) % images.length)}
        aria-label="Next image"
      >
        ›
      </button>

      <div className={styles.caseHeroDots}>
        {images.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={index === current ? styles.caseHeroDotActive : styles.caseHeroDot}
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

  useEffect(() => {
    setCurrent(index ?? 0);
  }, [index]);

  useEffect(() => {
    setZoom(1);
  }, [current]);

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
        className={styles.zoomModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.zoomToolbar}>
          <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))}>−</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))}>+</button>
          <button type="button" onClick={onClose} aria-label="Close preview">✕</button>
        </div>

        <div className={styles.modalBody}>
          {total > 1 ? (
            <button type="button" onClick={() => setCurrent((value) => (value - 1 + total) % total)} aria-label="Previous image" className={styles.modalArrow}>‹</button>
          ) : null}

          <div className={styles.zoomModalImage}>
            <div className={styles.zoomCanvas} style={{ width: `${zoom * 100}%` }}>
              <Image
                src={image.src}
                alt={image.alt || "Selected image"}
                width={2200}
                height={1500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {total > 1 ? (
            <button type="button" onClick={() => setCurrent((value) => (value + 1) % total)} aria-label="Next image" className={styles.modalArrow}>›</button>
          ) : null}
        </div>

        <div className={styles.modalFooter}>
          <span className={styles.modalCounter}>{current + 1} / {total}</span>
        </div>
      </div>
    </div>
  );
}

export default function UiuxCasePage({ uiuxCase }) {
  const [modalIndex, setModalIndex] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

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

  const sections = useMemo(() => uiuxCase?.sections || [], [uiuxCase]);

  if (!uiuxCase) {
    return (
      <main className={styles.page}>
        <p>Case not found.</p>
        <Link href="/uiux" className={styles.btn}>← Back</Link>
      </main>
    );
  }

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
            {uiuxCase.buttons?.length ? (
              <div className={styles.actionsRow}>{uiuxCase.buttons.map((b) => <Link key={b.href} href={b.href} className={styles.btn}>{b.label}</Link>)}</div>
            ) : null}
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
            {sections.map((section) => (
              <section key={section.id || section.title} id={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <SectionContent section={section} onSelect={(index) => openModal(section.images, index, section.title)} />
              </section>
            ))}
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
