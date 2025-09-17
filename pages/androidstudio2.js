import Link from "next/link";
import Carousel from "@/components/Carousel";

import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

export default function AndroidStudio2() {
  return (
    <main className={fm.page}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        {/* Один в один макет figma2: широкая горизонтальная карточка */}
        <section className={`${pm.card} ${fm.androidLike}`}>
          {/* слева — текст */}
          <div className={`${pm.text} ${fm.colText}`}>
            <h1 className={pm.title}>Calculator — Android Studio App</h1>

            <p className={pm.p}>
              A mobile calculator with basic operations, polished layout and
              responsive keypad. Built with Kotlin and Material components with
              attention to error handling and accessibility.
            </p>

            <h2 className={pm.h2}>Key Features</h2>
            <ul className={pm.list}>
              <li>Basic arithmetic operations</li>
              <li>Responsive keypad and high-contrast UI</li>
              <li>Input validation and clear states</li>
              <li>Material components, theming</li>
            </ul>

            <h2 className={pm.h2}>Technology Stack</h2>
            <ul className={pm.list}>
              <li>Android Studio (Kotlin)</li>
              <li>Material Design Components</li>
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

          {/* справа — медиа в той же панорамной рамке */}
          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={`${pm.frame} ${fm.mediaFrame}`}>
              <Carousel
                images={[
                  "/androidstudio2.png",
                  "/androidstudio22.png",
                  "/androidstudio23.png",
                  "/androidstudio24.png",
                ]}
                alt="Calculator — Android Studio App screenshots"
                aspect="landscape"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
