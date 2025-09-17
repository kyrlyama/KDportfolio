import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

/**
 * Универсальная карусель.
 *  • Клавиши ← →, фокус по Tab
 *  • Свайп на тач-устройствах
 *  • Без SSR-мисматчей (детекция pointer:coarse — в useEffect)
 *
 * props:
 *  - images: string[]              список путей к картинкам (обяз.)
 *  - alt: string                   alt для изображений
 *  - aspect: "landscape" | "phone" способ кадрирования
 *  - tight?: boolean               для landscape: высота по самой картинке (без паддинга)
 *  - ariaLabel?: string            подпись карусели для SR
 */
export default function Carousel({
  images = [],
  alt = "",
  aspect = "landscape",
  tight = false,
  ariaLabel = "Image carousel",
}) {
  const len = images?.length ?? 0;
  const [idx, setIdx] = useState(0);
  const [coarse, setCoarse] = useState(false);
  const boxRef = useRef(null);
  const touchRef = useRef({ x: 0, y: 0 });

  // если список картинок поменялся → возвращаемся на первый кадр
  const imagesKey = useMemo(() => (Array.isArray(images) ? images.join("|") : ""), [images]);
  useEffect(() => setIdx(0), [imagesKey]);

  useEffect(() => {
    // избегаем SSR mismatch: определяем тип курсора только на клиенте
    if (typeof window !== "undefined" && typeof matchMedia === "function") {
      try {
        setCoarse(matchMedia("(pointer:coarse)").matches);
      } catch {}
    }
  }, []);

  if (!len) return null;

  const prev = () => setIdx((i) => (i - 1 + len) % len);
  const next = () => setIdx((i) => (i + 1) % len);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // свайп
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
      dx > 0 ? prev() : next();
    }
  };

  // рамка (оставим инлайн — она простая и без классов)
  const frame = {
    position: "relative",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,.06)",
    background: "#fff",
  };

  // phone — паддинг-хак; landscape+tight — без паддинга
  const usePad = aspect === "phone" || !tight;
  const ratio = aspect === "phone" ? 19.5 / 9 : 10 / 16;

  const pad = { width: "100%", paddingTop: `${ratio * 100}%` };
  const fill = { position: "absolute", inset: 0, objectFit: "contain", display: "block" };

  const btnSize = coarse ? 44 : 34;
  const btnFont = coarse ? 22 : 18;
  const btn = (side) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: 10,
    width: btnSize,
    height: btnSize,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    border: "none",
    cursor: "pointer",
    background: "rgba(0,0,0,.48)",
    color: "#fff",
    fontSize: btnFont,
    lineHeight: 1,
    zIndex: 2,
  });

  const hasArrows = len > 1;

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={frame}
    >
      {/* живой регион для скринридеров: «Image 2 of 5» */}
      <span
        aria-live="polite"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(1px, 1px, 1px, 1px)",
        }}
      >
        Image {idx + 1} of {len}
      </span>

      {hasArrows && (
        <>
          <button aria-label="Previous image" onClick={prev} style={btn("left")}>
            ‹
          </button>
          <button aria-label="Next image" onClick={next} style={btn("right")}>
            ›
          </button>
        </>
      )}

      {usePad ? (
        <>
          <div style={pad} />
          <Image
            src={images[idx]}
            alt={alt}
            fill
sizes="(max-width: 480px) 100vw, (max-width: 880px) 90vw, 720px"
            style={fill}
            priority={false}
          />
        </>
      ) : (
        <Image
          src={images[idx]}
          alt={alt}
          width={1600}
          height={900}
          style={{ width: "100%", height: "auto", display: "block" }}
sizes="(max-width: 480px) 100vw, (max-width: 880px) 90vw, 720px"
          priority={false}
        />
      )}
    </div>
  );
}
