import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { uiuxCases, getUiuxCase } from "@/data/uiuxCases";
import styles from "@/styles/UiuxCase.module.css";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
          <img src={image.src} alt={image.alt || "Case visual"} />
        </button>
      ))}
    </div>
  );
}

function SectionContent({ section, onSelect }) {
  if (section.type === "research") {
    return (
      <>
        <div className={styles.sectionSplit}>
          <div className={styles.sectionText}>
            <p>{section.text}</p>
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
        <ImageGrid
          images={section.images}
          onSelect={(index) => onSelect(index, section.images)}
        />
      </>
    );
  }

  if (section.type === "personas") {
    return (
      <>
        <div className={styles.sectionText}>
          <p>{section.text}</p>
        </div>
        <ImageGrid
          images={section.images}
          onSelect={(index) => onSelect(index, section.images)}
          variant="personaGrid"
        />
      </>
    );
  }

  if (section.type === "flow") {
    const image = section.image;
    return (
      <div className={styles.flowBlock}>
        {image && (
          <button
            type="button"
            className={styles.flowImageButton}
            onClick={() => onSelect(0, [image])}
          >
            <img src={image.src} alt={image.alt || "Flow visual"} />
          </button>
        )}
        <p className={styles.flowText}>{section.text}</p>
        {image?.caption && (
          <p className={styles.flowCaption}>{image.caption}</p>
        )}
      </div>
    );
  }

  if (section.type === "palette") {
    return (
      <>
        <div className={styles.sectionText}>
          <p>{section.text}</p>
        </div>
        <div className={styles.paletteGrid}>
          {section.colors.map((color) => (
            <div key={color.hex} className={styles.paletteCard}>
              <div
                className={styles.paletteSwatch}
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <div className={styles.paletteMeta}>
                <h3>{color.name}</h3>
                <p>{color.hex}</p>
                <span>{color.usage}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.paletteNotes}>
          <ul>
            {section.scheme.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.paletteInfo}>
            <p>
              <strong>Typography:</strong> {section.typography}
            </p>
            <p>
              <strong>Tools:</strong> {section.tools}
            </p>
          </div>
        </div>
        <div className={styles.emotionGrid}>
          {section.emotions.map((emotion) => (
            <div key={emotion.title} className={styles.emotionCard}>
              <h3>{emotion.title}</h3>
              <ul>
                {emotion.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (section.type === "wireframes") {
    return (
      <>
        <div className={styles.sectionText}>
          <p>{section.text}</p>
        </div>
        <ImageGrid
          images={section.images}
          onSelect={(index) => onSelect(index, section.images)}
        />
      </>
    );
  }

  return section.text ? <p>{section.text}</p> : null;
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (!images || images.length === 0) return null;
  const current = images[index];

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true">
      <button
        type="button"
        className={styles.lightboxBackdrop}
        onClick={onClose}
      />
      <div className={styles.lightboxContent}>
        <button
          type="button"
          className={styles.lightboxClose}
          onClick={onClose}
        >
          Close
        </button>
        <div className={styles.lightboxImageWrap}>
          <img src={current.src} alt={current.alt || "Case visual"} />
        </div>
        {current.caption && (
          <p className={styles.lightboxCaption}>{current.caption}</p>
        )}
        <div className={styles.lightboxControls}>
          <button type="button" onClick={onPrev} aria-label="Previous image">
            ◀
          </button>
          <button type="button" onClick={onNext} aria-label="Next image">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UiuxCase({ caseData }) {
  const [lightboxState, setLightboxState] = useState(null);

  const sections = useMemo(() => {
    if (!caseData) return [];
    return caseData.sections.map((section) => ({
      ...section,
      id: section.id || slugify(section.title),
    }));
  }, [caseData]);

  if (!caseData) {
    return (
      <main className={styles.page}>
        <p className={styles.notFound}>Case not found.</p>
        <Link className={styles.backLink} href="/uiux">
          Back to cases
        </Link>
      </main>
    );
  }

  const openLightbox = (index, images) => {
    setLightboxState({ images, index });
  };

  const closeLightbox = () => setLightboxState(null);
  const showPrev = () =>
    setLightboxState((prev) => {
      if (!prev) return prev;
      const nextIndex =
        (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: nextIndex };
    });
  const showNext = () =>
    setLightboxState((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index + 1) % prev.images.length;
      return { ...prev, index: nextIndex };
    });

  return (
    <main className={styles.page}>
      <section className={styles.hero} id="overview">
        <div className={styles.heroCover}>
          <Image
            src={caseData.cover}
            alt={`${caseData.title} cover`}
            fill
            className={styles.heroImage}
            sizes="(max-width: 768px) 100vw, 680px"
          />
        </div>
<div className={styles.heroContent}>
  {caseData.label ? <p className={styles.heroLabel}>{caseData.label}</p> : null}

  <h1>{caseData.title}</h1>

  {caseData.lead ? <p className={styles.heroLead}>{caseData.lead}</p> : null}

  {Array.isArray(caseData.tags) && caseData.tags.length > 0 ? (
    <div className={styles.tagRow}>
      {caseData.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  ) : null}

  {Array.isArray(caseData.buttons) && caseData.buttons.length > 0 ? (
    <div className={styles.buttonRow}>
      {caseData.buttons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          className={styles.heroButton}
        >
          {button.label}
        </a>
      ))}
    </div>
  ) : null}

  {caseData.note ? <p className={styles.heroNote}>{caseData.note}</p> : null}
</div>

      </section>

      <section className={styles.snapshot}>
        <div>
          <h2>Project Snapshot</h2>
          <div className={styles.snapshotGrid}>
            <div>
              <h3>Problem</h3>
              <p>{caseData.snapshot.problem}</p>
            </div>
            <div>
              <h3>Goal</h3>
              <p>{caseData.snapshot.goal}</p>
            </div>
          </div>
        </div>
        <div className={styles.snapshotGrid}>
          <div>
            <h3>Responsibilities</h3>
            <ul>
              {caseData.snapshot.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Deliverables</h3>
            <ul>
              {caseData.snapshot.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <aside className={styles.toc}>
          <h3>Contents</h3>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.tocMobile}>
            <label htmlFor="toc-select">Jump to</label>
            <select
              id="toc-select"
              onChange={(event) => {
                const sectionId = event.target.value;
                const el = document.getElementById(sectionId);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
        </aside>

        <div className={styles.sections}>
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className={styles.section}
            >
              <h2>{section.title}</h2>
              <SectionContent
                section={section}
                onSelect={(index, images = section.images) =>
                  openLightbox(index, images)
                }
              />
            </article>
          ))}
        </div>
      </section>

      {lightboxState && (
        <Lightbox
          images={lightboxState.images}
          index={lightboxState.index}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: uiuxCases.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseData = getUiuxCase(params.slug);
  return { props: { caseData } };
}
