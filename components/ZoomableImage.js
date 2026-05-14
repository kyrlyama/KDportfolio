import Image from "next/image";
import { useEffect, useState } from "react";

import fm from "@/styles/Figma.module.css";

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  sizes,
  style,
  priority = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`${fm.zoomImageButton} ${className}`}
        onClick={() => setIsOpen(true)}
        aria-label={`Open full-size ${alt}`}
      >
        <Image
          className={imageClassName}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          style={style}
          priority={priority}
        />
      </button>

      {isOpen ? (
        <div className={fm.imageLightbox} role="dialog" aria-modal="true" aria-label={alt}>
          <button
            type="button"
            className={fm.imageLightboxBackdrop}
            onClick={() => setIsOpen(false)}
            aria-label="Close image preview"
          />
          <div className={fm.imageLightboxPanel}>
            <button
              type="button"
              className={fm.imageLightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <div className={fm.imageLightboxImageWrap}>
              <Image src={src} alt={alt} width={width} height={height} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}