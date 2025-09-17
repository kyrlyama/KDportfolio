import Link from "next/link";
import Carousel from "@/components/Carousel";
import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

const images = [
  "/figma23.png","/figma24.png","/figma25.png",
  "/figma26.png","/figma27.png","/figma28.png","/figma29.png",
];

export default function Figma1() {
  return (
    <main className={fm.page}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        <section className={`${pm.card} ${fm.androidLike}`}>
          {/* слева — текст */}
          <div className={`${pm.text} ${fm.colText}`}>
            <h1 className={pm.title}>Figma Travel App</h1>

            <p className={pm.p}>
              Prototype of a collaborative travel planning app. Users pick
              destinations, split budgets, plan schedules and vote on activities.
              Focus on smooth group decision-making and high-legibility mobile UI.
            </p>

            <h2 className={pm.h2}>Main features</h2>
            <ul className={pm.list}>
              <li><strong>Trip planning:</strong> dates, destinations, shared plan.</li>
              <li><strong>Group collaboration:</strong> notes and quick votes.</li>
              <li><strong>Recommendations:</strong> places & activities.</li>
              <li><strong>AI suggestions:</strong> tailored to preferences.</li>
              <li><strong>Sync:</strong> shared calendars & live updates.</li>
            </ul>

            <Link
              href="https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1"
              target="_blank"
              className={pm.btn}
            >
              Figma Prototype
            </Link>
          </div>

          {/* справа — медиа */}
          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={`${pm.frame} ${fm.mediaFrame}`}>
              <Carousel images={images} alt="Figma Travel App screens" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
