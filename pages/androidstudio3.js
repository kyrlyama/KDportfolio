import Link from "next/link";
import as from "@/styles/AndroidStudio.module.css";

export default function AndroidStudio3() {
  return (
    <main className={as.page}>
      <div className={as.container}>
        <section className={`${as.cardRow} ${as.cardRowSingle} ${as.cardRowCompact}`}>
          <div className={as.colText}>
            <h1 className={`${as.title} ${as.titleSm}`}>EUR → USD — Currency Converter</h1>

            <p className={`${as.p} ${as.pSm}`}>
              Lightweight currency converter demonstrating formatted input,
              instant conversion and simple state management. Compact UI with
              clear validation and error feedback.
            </p>

            <h2 className={as.h2}>Key Features</h2>
            <ul className={as.ul}>
              <li>Real-time conversion</li>
              <li>Locale-aware formatting</li>
              <li>Input validation</li>
              <li>Clean Material layout</li>
            </ul>

            <h2 className={as.h2}>Technology Stack</h2>
            <ul className={as.ul}>
              <li>Android Studio (Kotlin)</li>
              <li>Material Design</li>
            </ul>

            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={as.repoBtn}
            >
              GitHub repository
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
