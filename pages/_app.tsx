// pages/_app.tsx
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

export type NextPageWithOptions<P = Record<string, unknown>, IP = P> =
  NextPage<P, IP> & { noGradient?: boolean };

type AppPropsWithOptions = AppProps & {
  Component: NextPageWithOptions;
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function GlobalImageLightbox() {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const img = target?.closest("img") as HTMLImageElement | null;

      if (!img) return;
      if (img.closest(".globalImageLightbox")) return;
      if (img.closest("a")) return;
      if (img.dataset.noZoom === "true") return;

      const src = img.currentSrc || img.src;
      if (!src) return;

      event.preventDefault();
      setZoom(1);
      setImage({ src, alt: img.alt || "Project image" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!image) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setImage(null);
      if (event.key === "+" || event.key === "=") {
        setZoom((value) => Math.min(3, value + 0.25));
      }
      if (event.key === "-") {
        setZoom((value) => Math.max(1, value - 0.25));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image]);

  if (!image) return null;

  return (
    <div className="globalImageLightbox" role="dialog" aria-modal="true" aria-label={image.alt}>
      <button
        type="button"
        className="globalImageLightboxBackdrop"
        onClick={() => setImage(null)}
        aria-label="Close image preview"
      />

      <div className="globalImageToolbar">
        <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out">
          −
        </button>
        <span>{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} aria-label="Zoom in">
          +
        </button>
        <button type="button" onClick={() => setImage(null)} aria-label="Close image preview">
          ×
        </button>
      </div>

      <div className="globalImageViewport" onClick={(event) => event.stopPropagation()}>
        <div className="globalImageCanvas" style={{ width: `${zoom * 100}%` }}>
          <img src={image.src} alt={image.alt} />
        </div>
      </div>

      <div className="globalImageCaption">{image.alt}</div>
    </div>
  );
}

export default function MyApp({ Component, pageProps }: AppPropsWithOptions) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <title>KD Portfolio</title>
      </Head>

      {/* ВАЖНО: id="app-root" — сюда будем порталом монтировать мобильное меню */}
      <div id="app-root" className={jakarta.className}>
        <a href="#main" className="skipLink">Skip to content</a>

        <NavBar />

        <div className="site-bg" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <main id="main" role="main" className="pageContainer">
          <Component {...pageProps} />
        </main>

        <GlobalImageLightbox />
      </div>
    </>
  );
}
