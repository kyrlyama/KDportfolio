import { useEffect, useRef, useState } from "react";

const categoryNames = ["Websites", "Android", "Figma", "UI/UX", "Illustrator"];

export default function ProjectOrbit({ active, onChange, styles }) {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);
  const frame = useRef(null);
  const previous = useRef(0);

  useEffect(() => {
    if (paused) return undefined;

    const animate = (time) => {
      if (!previous.current) previous.current = time;
      const delta = Math.min(time - previous.current, 40);
      previous.current = time;
      setRotation((value) => (value + delta * 0.012) % 360);
      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
      previous.current = 0;
    };
  }, [paused]);

  return (
    <div
      className={styles.orbit}
      onMouseLeave={() => {
        setHovered(null);
        setPaused(false);
      }}
      aria-label="Project categories"
    >
      {categoryNames.map((name, index) => {
        const angle = ((rotation + index * (360 / categoryNames.length)) * Math.PI) / 180;
        const depth = (Math.cos(angle) + 1) / 2;
        const x = Math.sin(angle) * 42;
        const y = Math.sin(angle * 2) * 12;
        const selected = active === name;
        const dimmed = hovered && hovered !== name;

        return (
          <button
            key={name}
            type="button"
            className={`${styles.orbitItem} ${selected ? styles.activeItem : ""} ${dimmed ? styles.dimmed : ""}`}
            style={{
              left: `${50 + x}%`,
              top: `${50 + y}%`,
              opacity: dimmed ? 0.2 : 0.25 + depth * 0.75,
              transform: `translate(-50%, -50%) scale(${0.72 + depth * 0.34})`,
              zIndex: Math.round(depth * 100),
            }}
            onMouseEnter={() => {
              setHovered(name);
              setPaused(true);
            }}
            onFocus={() => {
              setHovered(name);
              setPaused(true);
            }}
            onBlur={() => {
              setHovered(null);
              setPaused(false);
            }}
            onClick={() => onChange(name)}
            aria-pressed={selected}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
