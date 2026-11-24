// components/case/index.js
// Общие блоки редизайна. Один источник стиля для всех страниц-кейсов.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CaseNav from "@/components/CaseNav";
import ZoomableImage from "@/components/ZoomableImage";
import { sizeOf } from "@/data/imageSizes";
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

/* =====================================================================
   PROJECT PLAN — один порядок секций для КАЖДОГО проекта.
   Страница передаёт объект { context, problem, goal, ... } с JSX,
   а CasePlan сам расставляет секции в правильном порядке, нумерует их
   и строит меню Contents. Поэтому research никогда не окажется после result.
   ===================================================================== */
export const PLAN = [
  { key: "context", title: "Context and my role" },
  { key: "problem", title: "The problem" },
  { key: "goal", title: "Goal" },
  { key: "research", title: "Research and insights" },
  { key: "decisions", title: "Key decisions" },
  { key: "design", title: "Design" },
  { key: "development", title: "Development" },
  { key: "testing", title: "Testing and iterations" },
  { key: "result", title: "Result" },
  { key: "hardest", title: "The hardest problem" },
  { key: "learned", title: "What I learned / what I'd improve" },
];

/**
 * sections: { context: <JSX>, problem: <JSX>, ... } — пропущенные ключи
 * (например development у Figma-проектов) просто не выводятся.
 * nav: true → липкое меню Contents слева (для длинных кейсов).
 * deepDive: { title, items: [строки] } — свёрнутый список этапов в конце.
 */
export function CasePlan({ sections, nav = true, deepDive, after }) {
  const shown = PLAN.filter((p) => sections[p.key]);
  const items = shown.map((p) => ({ id: p.key, label: p.title }));

  const body = (
    <div className={styles.planBody}>
      {shown.map((p, i) => {
        const num = String(i + 1).padStart(2, "0");
        if (p.key === "result") {
          return (
            <section
              key={p.key}
              id={p.key}
              className={styles.result}
              aria-labelledby={`${p.key}-title`}
            >
              <span className={styles.sectionNum}>{num}</span>
              <h2 id={`${p.key}-title`} className={styles.sectionTitle}>
                {p.title}
              </h2>
              {sections[p.key]}
            </section>
          );
        }
        return (
          <CaseSection key={p.key} id={p.key} num={num} title={p.title}>
            {sections[p.key]}
          </CaseSection>
        );
      })}

      {deepDive && (
        <details className={`glass-strong ${styles.deepDive}`}>
          <summary>{deepDive.title ?? "Deep dive: all project stages"}</summary>
          <ol className={styles.list}>
            {deepDive.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </details>
      )}
      {after}
    </div>
  );

  if (!nav) return body;

  return (
    <div className={styles.planLayout}>
      <aside className={styles.planNav}>
        <p className={styles.planNavTitle}>Contents</p>
        <CaseNav items={items} />
      </aside>
      {body}
    </div>
  );
}

/** Шапка кейса: eyebrow, заголовок, результат в одну строку, snapshot, ссылки, картинка */
export function CaseHero({
  eyebrow,
  title,
  result,
  snapshot,
  links = [],
  media,
  back = { href: "/projects", label: "← All projects" },
  fontClass = "",
}) {
  return (
    <>
      {back && (
        <Link href={back.href} className={styles.backLink}>
          {back.label}
        </Link>
      )}
      <header className={`${styles.caseHero} ${fontClass}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.h1}>{title}</h1>
        {result && <p className={styles.lead}>{result}</p>}
        {links.length > 0 && (
          <div className={styles.btnRow}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`glass-pill ${styles.btn}`}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
      {snapshot && (
        <div className={styles.spaceTop}>
          <SnapshotBox items={snapshot} />
        </div>
      )}
      {media && <div className={`glass ${styles.heroMedia}`}>{media}</div>}
    </>
  );
}

/** Абзацы на плотном стекле (контраст AA) */
export function TextPanel({ children }) {
  return (
    <div className={`glass-strong ${styles.textPanel}`}>
      {typeof children === "string" ? (
        <p className={styles.text}>{children}</p>
      ) : (
        children
      )}
    </div>
  );
}

export function P({ children }) {
  return <p className={styles.text}>{children}</p>;
}

export function H3({ children }) {
  return <h3 className={styles.subTitle}>{children}</h3>;
}

export function BulletList({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={styles.list}>
      {items.map((item, i) => (
        <li key={typeof item === "string" ? item : i}>{item}</li>
      ))}
    </Tag>
  );
}

/** Сетка мини-карточек: [{title, text}] или [{title, items:[...]}] */
export function Cards({ items, cols = 3 }) {
  return (
    <div className={cols === 2 ? styles.grid2 : styles.grid3}>
      {items.map((c) => (
        <article key={c.title} className={`glass-strong ${styles.miniCard}`}>
          {c.label && <span className={styles.miniLabel}>{c.label}</span>}
          <h3>{c.title}</h3>
          {c.text && <p>{c.text}</p>}
          {c.items && (
            <ul className={styles.miniList}>
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

/** Цифры: [{label, value}] */
export function Facts({ items }) {
  return (
    <div className={styles.facts}>
      {items.map((f) => (
        <div key={f.label} className={`glass-strong ${styles.fact}`}>
          <strong>{f.value}</strong>
          <span>{f.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Шаги процесса: ["Research", "Personas", ...] */
export function Steps({ items }) {
  return (
    <ol className={styles.steps}>
      {items.map((s, i) => (
        <li key={s} className="glass-pill">
          <span>{i + 1}</span>
          {s}
        </li>
      ))}
    </ol>
  );
}

/** Акцентная плашка-вывод */
export function Callout({ title, children }) {
  return (
    <div className={`glass-strong ${styles.callout}`}>
      {title && <h3>{title}</h3>}
      {typeof children === "string" ? <p>{children}</p> : children}
    </div>
  );
}

/**
 * Галерея с увеличением. images: [{src, alt, title?, text?, w?, h?}]
 * cols: 1 | 2 | 3
 */
export function Gallery({ images, cols = 2, title, text, link }) {
  return (
    <div className={styles.galleryBlock}>
      {(title || text || link) && (
        <div className={styles.galleryHead}>
          {title && <h3 className={styles.subTitle}>{title}</h3>}
          {text && <p className={styles.text}>{text}</p>}
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              {link.label} ↗
            </a>
          )}
        </div>
      )}
      <div className={`${styles.gallery} ${styles[`cols${cols}`]}`}>
        {images.map((img) => (
          <figure key={img.src} className={`glass ${styles.figure}`}>
            <ZoomableImage
              src={img.src}
              alt={img.alt ?? img.title ?? ""}
              width={sizeOf(img.src)[0]}
              height={sizeOf(img.src)[1]}
              sizes={
                cols === 1
                  ? "(max-width: 980px) 100vw, 900px"
                  : "(max-width: 760px) 100vw, 480px"
              }
              imageClassName={styles.figureImg}
            />
            {(img.title || img.text) && (
              <figcaption>
                {img.title && <strong>{img.title}</strong>}
                {img.text && <span>{img.text}</span>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

/** Слайдер скриншотов с миниатюрами (общий для всех проектов) */
export function Screens({ images, label, phone = false }) {
  const [current, setCurrent] = useState(0);
  const len = images.length;
  const go = (d) => setCurrent((c) => (c + d + len) % len);

  return (
    <div className={styles.screens}>
      <div
        className={`glass ${styles.slider} ${phone ? styles.sliderPhone : ""}`}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
      >
        <ZoomableImage
          src={images[current].src}
          alt={images[current].alt}
          width={sizeOf(images[current].src)[0]}
          height={sizeOf(images[current].src)[1]}
          sizes="(max-width: 980px) 100vw, 900px"
          imageClassName={styles.figureImg}
        />
      </div>
      {len > 1 && (
        <>
          <div className={styles.sliderBar}>
            <button
              type="button"
              className={`glass-pill ${styles.arrow}`}
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
            >
              ←
            </button>
            <span className={styles.counter} aria-live="polite">
              {current + 1} / {len}
            </span>
            <button
              type="button"
              className={`glass-pill ${styles.arrow}`}
              onClick={() => go(1)}
              aria-label="Next screenshot"
            >
              →
            </button>
          </div>
          <div className={styles.thumbs}>
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Show screenshot ${i + 1}: ${img.alt}`}
                aria-current={i === current ? "true" : undefined}
              >
                <Image src={img.src} alt="" width={320} height={200} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Палитра проекта: маленькие стеклянные карточки
 * (квадрат цвета + имя + hex + usage). Цвет проекта — только внутри свотча.
 */
export function Swatches({ colors }) {
  return (
    <div className={styles.swatches}>
      {colors.map((c) => (
        <div key={`${c.name}-${c.hex}`} className={`glass ${styles.swatch}`}>
          <span
            className={styles.swatchColor}
            style={{ backgroundColor: c.hex }}
            aria-hidden="true"
          />
          <div className={styles.swatchMeta}>
            <strong>{c.name}</strong>
            <code>{c.hex}</code>
            {c.usage && <span>{c.usage}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Группы токенов: [{title, description, tokens:[{name, value, usage?}]}] */
export function TokenGroups({ groups }) {
  return (
    <div className={styles.tokenGroups}>
      {groups.map((g) => (
        <div key={g.title} className={styles.tokenGroup}>
          <h4>{g.title}</h4>
          {g.description && <p className={styles.text}>{g.description}</p>}
          <Swatches
            colors={g.tokens.map((t) => ({
              name: t.name,
              hex: t.value,
              usage: t.usage,
            }))}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Шкала типографики проекта. items: [{label, size, lineHeight?, weight?, usage}]
 * fontClass — класс шрифта проекта (например Manrope у Likefon).
 */
export function TypeScale({
  title = "Typography",
  intro,
  items,
  fontClass = "",
}) {
  return (
    <div className={`glass-strong ${styles.typePanel}`}>
      <h4>{title}</h4>
      {intro && <p className={styles.text}>{intro}</p>}
      <div className={styles.typeList}>
        {items.map((t) => (
          <div key={t.label} className={styles.typeRow}>
            <span className={styles.typeLabel}>
              {t.label}
              {t.size ? ` · ${t.size}px` : ""}
              {t.lineHeight ? ` / ${t.lineHeight}` : ""}
            </span>
            <span
              className={`${styles.typeSample} ${fontClass}`}
              style={{
                fontSize:
                  (t.previewSize ?? t.size)
                    ? `${t.previewSize ?? t.size}px`
                    : undefined,
                lineHeight: t.lineHeight ? `${t.lineHeight}px` : undefined,
                fontWeight: t.weight,
              }}
            >
              {t.sample ?? t.label}
            </span>
            <span className={styles.typeUsage}>{t.usage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Таблица (конкуренты, journey map) */
export function Table({ head, rows, caption }) {
  return (
    <div className={`glass-strong ${styles.tableWrap}`}>
      <table className={styles.table}>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={j}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Свернуть/развернуть кусок контента (ничего не удаляем — только прячем) */
export function More({ label, children }) {
  return (
    <details className={styles.more}>
      <summary className="glass-pill">{label}</summary>
      <div className={styles.moreBody}>{children}</div>
    </details>
  );
}

/** Обёртка страницы кейса */
export function CasePage({ children, wide = true, className = "" }) {
  return (
    <div className={`${styles.page} ${wide ? "" : styles.narrow} ${className}`}>
      {children}
    </div>
  );
}

/** Пустая секция: видимая метка, что сюда нужен факт от Кристины */
export function Todo({ children }) {
  return (
    <div className={`glass-strong ${styles.textPanel}`}>
      <p className={styles.text}>
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  );
}

export { styles as caseStyles };
