import { useEffect, useRef, useState } from "react";

const categoryNames = ["Websites", "Android", "Figma", "UI/UX", "Illustrator"];

export default function ProjectOrbit({ active, onChange }) {
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
      onMouseLeave={() => {
        setHovered(null);
        setPaused(false);
      }}
      aria-label="Project categories"
      style={{
        position: "relative",
        width: "min(920px, 100%)",
        height: "220px",
        margin: "26px auto 10px",
        overflow: "hidden",
      }}
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
            style={{
              position: "absolute",
              left: `${50 + x}%`,
              top: `${50 + y}%`,
              transform: `translate(-50%, -50%) scale(${0.72 + depth * 0.34})`,
              zIndex: Math.round(depth * 100),
              opacity: dimmed ? 0.22 : 0.3 + depth * 0.7,
              filter: dimmed ? "grayscale(1)" : `blur(${(1 - depth) * 0.45}px)`,
              border: "none",
              background: "transparent",
              color: selected || hovered === name ? "#111" : "#777",
              fontSize: "clamp(24px, 5vw, 56px)",
              fontWeight: selected || hovered === name ? 900 : 800,
              letterSpacing: "-0.05em",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "opacity .2s ease, color .2s ease, filter .2s ease",
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
