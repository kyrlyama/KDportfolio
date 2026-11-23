// components/case/index.js
// Общие блоки редизайна. Один источник стиля для всех страниц-кейсов.
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Case.module.css";

const TAG_TONE = {
  accent: styles.tagAccent,
  live: styles.tagLive,
  progress: styles.tagProgress,
};

/** Тег-пилюля. tone: "accent" | "live" | "progress" | undefined */
export function Tag({ children, tone }) {
  return (
    <span className={`${styles.tag} ${TAG_TONE[tone] ?? ""}`}>{children}</span>
  );
}

/**
 * Карточка проекта для /projects.
 * size: "large" | "medium" | "small"
 */
export function ProjectCard({
  href,
  size = "medium",
  image,
  imageAlt,
  tags = [],
  title,
  text,
  meta,
  cta = "View project →",
  priority = false,
  placeholder,
}) {
  return (
    <Link href={href} className={`glass ${styles.card} ${styles[size]}`}>
      <div className={styles.cardMedia}>
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? `${title} preview`}
            fill
            sizes={
              size === "large"
                ? "(max-width: 900px) 100vw, 720px"
                : "(max-width: 900px) 100vw, 360px"
            }
            className={styles.cardImg}
            priority={priority}
          />
        )}
        {!image && placeholder && (
          <span className={styles.mediaPlaceholder}>{placeholder}</span>
        )}
      </div>
      <div className={styles.cardBody}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((t) => (
              <Tag key={t.label} tone={t.tone}>
                {t.label}
              </Tag>
            ))}
          </div>
        )}
        <h3 className={styles.cardTitle}>{title}</h3>
        {text && <p className={styles.cardText}>{text}</p>}
        {meta && <p className={styles.cardMeta}>{meta}</p>}
        {size !== "small" && <span className={styles.cardCta}>{cta}</span>}
      </div>
    </Link>
  );
}

/** Snapshot: role / timeline / stack / status. items = [{label, value}] */
export function SnapshotBox({ items, side = false }) {
  return (
    <dl
      className={`glass-strong ${styles.snapshot} ${side ? styles.snapshotSide : ""}`}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * «Chose X over Y». kind: "chose" | "fixed"
 * why / cost — строки или JSX.
 */
export function DecisionCard({
  kind = "chose",
  chose,
  over,
  why,
  cost,
  children,
}) {
  return (
    <article className={`glass-strong ${styles.decision}`}>
      <h3 className={styles.decisionHead}>
        <span className={styles.badge}>
          {kind === "fixed" ? "Fixed" : "Chose"}
        </span>
        {chose}
        {over && (
          <>
            <span className={styles.over}>over</span>
            <span className={styles.alt}>{over}</span>
          </>
        )}
      </h3>
      {why && (
        <p>
          <strong>Why:</strong> {why}
        </p>
      )}
      {cost && (
        <p>
          <strong>Cost:</strong> {cost}
        </p>
      )}
      {children}
    </article>
  );
}

/** Нумерованная секция кейса: 01 + заголовок */
export function CaseSection({ id, num, title, children }) {
  return (
    <section
      id={id}
      className={styles.section}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {num && <span className={styles.sectionNum}>{num}</span>}
      <h2 id={id ? `${id}-title` : undefined} className={styles.sectionTitle}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Рамка для картинки, которой ещё нет */
export function ImagePlaceholder({ children, className = "" }) {
  return (
    <div
      className={`${styles.imagePlaceholder} ${className}`}
      role="img"
      aria-label={String(children)}
    >
      <span>{children}</span>
    </div>
  );
}

/** Видимая метка для фактов, которые нужно вписать */
export function Placeholder({ children }) {
  return <span className="placeholder">[{children}]</span>;
}

export { styles as caseStyles };
