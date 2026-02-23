import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { getUiuxCase, uiuxCases } from "@/data/uiuxCases";
import styles from "@/styles/UiuxCase.module.css";

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

function SectionContent({ section, onSelect }) {
  // RESEARCH (с карточками справа)
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

  // PALETTE (цвета квадратиками + типографика + эмоции)
  if (section.type === "palette") {
    return (
      <>
        <p className={styles.sectionParagraph}>{section.text}</p>

        {section.colors?.length ? (
          <div className={styles.paletteGrid}>
            {section.colors.map((c) => (
              <div key={c.hex} className={styles.colorCard}>
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: c.hex }}
                />
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

        {section.scheme?.length ? (
          <>
            <h3 className={styles.uxH3}>Scheme</h3>
            <ul className={styles.uxList}>
              {section.scheme.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </>
        ) : null}

        {(section.typography || section.tools) && (
          <div className={styles.metaGrid}>
            {section.typography ? (
              <div className={styles.metaCard}>
                <h3 className={styles.metaTitle}>Typography</h3>
                <p className={styles.metaText}>{section.typography}</p>
              </div>
            ) : null}

            {section.tools ? (
              <div className={styles.metaCard}>
                <h3 className={styles.metaTitle}>Tools</h3>
                <p className={styles.metaText}>{section.tools}</p>
              </div>
            ) : null}
          </div>
        )}

        {section.emotions?.length ? (
          <>
            <h3 className={styles.uxH3}>Emotional intent</h3>
            <div className={styles.emotionsGrid}>
              {section.emotions.map((b) => (
                <div key={b.title} className={styles.emotionCard}>
                  <h4 className={styles.emotionTitle}>{b.title}</h4>
                  <ul className={styles.emotionList}>
                    {b.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <ImageGrid images={section.images} onSelect={onSelect} />
      </>
    );
  }

  // DEFAULT
  return (
    <>
      <p className={styles.sectionParagraph}>{section.text}</p>
      <ImageGrid images={section.images} onSelect={onSelect} />
    </>
  );
}

function ModalCarousel({ images, index, onClose, title }) {
  const [current, setCurrent] = useState(index ?? 0);
  const total = images?.length ?? 0;

  useEffect(() => {
    setCurrent(index ?? 0);
  }, [index]);

  useEffect(() => {
    if (!total) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft")
        setCurrent((value) => (value - 1 + total) % total);
      if (event.key === "ArrowRight")
        setCurrent((value) => (value + 1) % total);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, total]);

  if (!total) return null;

  const image = images[current];

  const goPrevious = () => setCurrent((value) => (value - 1 + total) % total);
  const goNext = () => setCurrent((value) => (value + 1) % total);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Image preview"}
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className={styles.modalClose}
        >
          ✕
        </button>

        <div className={styles.modalBody}>
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous image"
            className={styles.modalArrow}
          >
            ‹
          </button>

          <div className={styles.modalImage}>
            <Image
              src={image.src}
              alt={image.alt || "Selected image"}
              width={1800}
              height={1100}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className={styles.modalArrow}
          >
            ›
          </button>
        </div>

        <div className={styles.modalFooter}>
          <span className={styles.modalCounter}>
            {current + 1} / {total}
          </span>
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
        <Link href="/uiux" className={styles.btn}>
          ← Back
        </Link>
      </main>
    );
  }

  const toc = sections
    .filter((s) => s?.id && s?.title)
    .map((s) => ({ id: s.id, label: s.title }));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.heroCard}>
          {uiuxCase.heroImage?.src ? (
            <div className={styles.heroMedia}>
              <Image
                src={uiuxCase.heroImage.src}
                alt={uiuxCase.heroImage.alt || uiuxCase.title}
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className={styles.heroImage}
                priority
              />
            </div>
          ) : null}

          <div className={styles.heroText}>
            {uiuxCase.label ? (
              <p className={styles.kicker}>{uiuxCase.label}</p>
            ) : null}

            <h1 className={styles.title}>{uiuxCase.title}</h1>

            {uiuxCase.subtitle ? (
              <p className={styles.lead}>{uiuxCase.subtitle}</p>
            ) : null}

            {/* RESULT — остаётся “где стоял”, но как кнопка Open case */}
            {uiuxCase.buttons?.length ? (
              <div className={styles.actionsRow}>
                {uiuxCase.buttons.map((b) => (
                  <Link key={b.href} href={b.href} className={styles.btn}>
                    {b.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* BODY */}
        <div className={styles.body}>
          <aside className={styles.toc}>
            <h3>Contents</h3>

            <ul>
              {toc.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>

            {/* mobile dropdown */}
            <div className={styles.tocMobile}>
              <label htmlFor="tocSelect">Jump to</label>
              <select
                id="tocSelect"
                defaultValue=""
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) return;
                  const el = document.getElementById(value);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <option value="" disabled>
                  Select section
                </option>
                {toc.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BACK — в aside, самый последний, стиль как Open case */}
            <div className={styles.tocActions}>
              <Link href="/uiux" className={styles.btn}>
                ← Back
              </Link>
            </div>
          </aside>

          <div className={styles.sections}>
            {uiuxCase.summary ? (
              <section className={styles.section}>
                <h2>Overview</h2>
                <p className={styles.sectionParagraph}>{uiuxCase.summary}</p>
              </section>
            ) : null}

            {sections.map((section) => (
              <section
                key={section.id || section.title}
                id={section.id}
                className={styles.section}
              >
                <h2 className={styles.sectionTitle}>{section.title}</h2>

                <SectionContent
                  section={section}
                  onSelect={(index) => openModal(section.images, index, section.title)}
                />
              </section>
            ))}
          </div>
        </div>

        {modalIndex !== null ? (
          <ModalCarousel
            images={modalImages}
            index={modalIndex}
            onClose={closeModal}
            title={modalTitle}
          />
        ) : null}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = (uiuxCases || [])
    .filter((item) => !item.href) // страницы с href (например /uiux/shop-redesign) НЕ идут в [slug]
    .map((item) => ({ params: { slug: item.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const uiuxCase = getUiuxCase(params.slug) || null;
  return { props: { uiuxCase } };
}