import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home } from "lucide-react";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname; // например: /project1, /figma2, /androidstudio3

  // Вспомогалка: активность по кастомному матчу
  const isActive = (match: (p: string) => boolean) => match(path);

  const links: Array<{ href: string; label: string; match: (p: string) => boolean }> = [
    { href: "/about",           label: "About me",           match: p => p.startsWith("/about") },
    { href: "/skills",          label: "Soft and Hard skills", match: p => p.startsWith("/skills") },
    // Websites активен также на страницах проектов
    { href: "/websites",        label: "Websites",           match: p => p.startsWith("/websites") || p.startsWith("/project") },
    // Figma активен на figma, figma1, figma2, и т.п.
    { href: "/figma",           label: "Figma",              match: p => p.startsWith("/figma") },
    // Android Studio — разные варианты имён
    { href: "/android_studio",  label: "Android Studio",     match: p => p.startsWith("/android_studio") || p.startsWith("/androidstudio") || p.startsWith("/android") },
    { href: "/illustrator",     label: "Illustrator",        match: p => p.startsWith("/illustrator") },
    { href: "/contacts",        label: "Contacts",           match: p => p.startsWith("/contacts") },
  ];

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.row}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <Home size={24} strokeWidth={2.25} />
        </Link>

        <button
          className={styles.menuBtn}
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.match) ? styles.active : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
