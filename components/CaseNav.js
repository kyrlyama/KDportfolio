import { useEffect, useState } from "react";
import styles from "@/styles/CaseNav.module.css";

export default function CaseNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className={styles.caseNav} aria-label="Case sections">
      {items.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={active === id ? styles.active : ""}>
          {label}
        </a>
      ))}
    </nav>
  );
}