import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  { name: "Websites", href: "/websites" },
  { name: "Android", href: "/android_studio" },
  { name: "Figma", href: "/figma" },
  { name: "UI/UX", href: "/uiux" },
  { name: "Illustrator", href: "/illustrator" },
];

export default function ProjectOrbit() {
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
      {categories.map(({ name, href }, index) => {
        const angle = ((rotation + index * (360 / categories.length)) * Math.PI) / 180;
        const depth = (Math.cos(angle) + 1) / 2;
        const x = Math.sin(angle) * 42;
        const y = Math.sin(angle * 2) * 12;
        const dimmed = hovered && hovered !== name;

        return (
          <Link
            key={name}
            href={href}
            aria-label={`Open ${name} projects`}
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
              color: hovered === name ? "#111" : "#777",
              fontSize: "clamp(24px, 5vw, 56px)",
              fontWeight: hovered === name ? 900 : 800,
              letterSpacing: "-0.05em",
              cursor: "pointer",
              whiteSpace: "nowrap",
              textDecoration: "none",
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
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
