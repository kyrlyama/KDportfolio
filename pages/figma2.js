import Link from "next/link";
import Carousel from "@/components/Carousel";
import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

const images = [
  "/figma1.png","/figma12.png","/figma13.png",
  "/figma14.png","/figma15.png","/figma16.png","/figma17.png",
];

export default function Figma2() {
  return (
    <main className={fm.page}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        <section className={`${pm.card} ${fm.androidLike}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <h1 className={pm.title}>Gift Helper — gift finder app</h1>

            <p className={pm.p}>
              Mobile concept to quickly find the right present. Filter by age,
              budget, hobbies and occasion, save important dates, and store
              people’s preferences in a handy contacts list.
            </p>

            <h2 className={pm.h2}>Core features</h2>
            <ul className={pm.list}>
              <li><strong>Smart filters:</strong> age, budget, hobbies, event type.</li>
              <li><strong>Lists for men/women:</strong> fast favorites.</li>
              <li><strong>Calendar:</strong> reminders for upcoming dates.</li>
              <li><strong>People profiles:</strong> preferences & suggestions.</li>
              <li><strong>Micro-interactions:</strong> confirmations & toasts.</li>
            </ul>

            <Link
              href="https://www.figma.com/design/joVwSJGnBQUslG8eSYn2iB/Untitled?node-id=0-1"
              target="_blank"
              className={pm.btn}
            >
              Figma Prototype
            </Link>
          </div>

          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={`${pm.frame} ${fm.mediaFrame}`}>
              <Carousel images={images} alt="Gift Helper screens" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
