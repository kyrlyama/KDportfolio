import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home } from "lucide-react";
import styles from "@/styles/NavBar.module.css";

/** Монтируем порталом внутрь #app-root (если есть), иначе в <body> */
function usePortal(targetSelector = "#app-root", id = "nav-portal") {
  const ref = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const target =
      (document.querySelector(targetSelector) as HTMLElement | null) ??
      document.body;
    let el = document.getElementById(id) as HTMLElement | null;
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      target.appendChild(el);
    } else if (el.parentElement !== target) {
      target.appendChild(el);
    }
    ref.current = el;
    setReady(true);
  }, [targetSelector, id]);

  return { target: ref.current, ready };
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { target, ready } = usePortal("#app-root");

  const links: Array<{
    href: string;
    label: string;
    active: (p: string) => boolean;
  }> = [
    {
      href: "/about",
      label: "About me",
      active: (p) => p.startsWith("/about"),
    },
    {
      href: "/skills",
      label: "Soft and Hard skills",
      active: (p) => p.startsWith("/skills"),
    },
    {
      href: "/websites",
      label: "Websites",
      active: (p) => p.startsWith("/websites") || p.startsWith("/project"),
    },
    {
      href: "/android_studio",
      label: "Android",
      active: (p) => p.startsWith("/android_studio"),
    },
    { href: "/figma", label: "Figma", active: (p) => p.startsWith("/figma") },
    { href: "/uiux", label: "UI/UX", active: (p) => p.startsWith("/uiux") },
    {
      href: "/illustrator",
      label: "Illustrator",
      active: (p) => p.startsWith("/illustrator"),
    },
    {
      href: "/contacts",
      label: "Contacts",
      active: (p) => p.startsWith("/contacts"),
    },
  ];

  // Закрывать меню после перехода
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => router.events.off("routeChangeComplete", close);
  }, [router.events]);

  // Esc закрывает меню
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Блокируем скролл страницы при открытом меню
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const path = router.pathname;

  return (
    <>
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={`container ${styles.row}`}>
          <Link href="/" className={styles.logo} aria-label="Home">
            <Home size={24} strokeWidth={2.25} />
          </Link>

          {/* Десктопное меню (рядом) */}
          <div className={styles.linksDesktop} role="navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.navLink} ${l.active(path) ? styles.active : ""}`}
                aria-current={l.active(path) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Бургер */}
          <button
            type="button"
            className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Отступ под фикс-шапку на мобиле */}
      <div className={styles.navSpacer} aria-hidden />

      {/* Мобильное меню ВСЕГДА смонтировано (без matchMedia).
          Видимость и компоновка управляются ТОЛЬКО CSS медиа-правилом. */}
      {ready &&
        target &&
        createPortal(
          <div
            id="mobile-menu"
            className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${styles.item} ${l.active(path) ? styles.itemActive : ""}`}
                  aria-current={l.active(path) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>,
          target,
        )}
    </>
  );
}
