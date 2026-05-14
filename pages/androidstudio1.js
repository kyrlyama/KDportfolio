import Link from "next/link";

import Carousel from "@/components/Carousel";
import a from "@/styles/AndroidStudio.module.css";
import pm from "@/styles/Project.module.css";


export default function AndroidStudio1() {
  return (
<main className={a.page}>
  <div className={a.container}>
    <section className={a.cardRow}>
      <div className={a.colText}>
            <h1 className={pm.title}>Translator — Android Studio App</h1>

            <p className={pm.p}>
              Translator is an Android application that allows users to
              translate text between Russian, English, Estonian, and German. It
              features a clean Material Design interface, translation history,
              and simple cloud synchronization.
            </p>

            <h2 className={pm.h2}>Key Features</h2>
            <ul className={pm.list}>
              <li>
                <strong>Multilingual:</strong> translate between 4 languages.
              </li>
              <li>
                <strong>History:</strong> view and clear past translations.
              </li>
              <li>
                <strong>Cloud sync:</strong> settings and history synchronized
                across devices.
              </li>
              <li>
                <strong>Material Design:</strong> clean and modern UI.
              </li>
              <li>
                <strong>MVC architecture:</strong> structured project design.
              </li>
            </ul>

            <h2 className={pm.h2}>Technology Stack</h2>
            <ul className={pm.list}>
              <li>Android Studio (Java)</li>
              <li>Material Design</li>
              <li>Lingva Translate API</li>
              <li>Cloud storage</li>
            </ul>

            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={pm.btn}
            >
              GitHub repository
            </Link>
          </div>

<div className={a.cardMedia}>
  <div className={a.media}>
<Carousel
  images={[
    "/androidstudio1.png",
    "/androidstudio12.png",
    "/androidstudio13.png",
  ]}
  alt="Translator — Android Studio App screenshots"
  aspect="phone"
/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
