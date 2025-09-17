import Link from "next/link";
import Carousel from "@/components/Carousel";

import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";
import as from "@/styles/AndroidStudio.module.css";

const projects = [
  {
    title: "Translator — Android Studio App",
    desc:
      "Multilingual translator (RU/EN/EE/DE) with history, Material Design UI and simple cloud sync. Focus on clean UX and fast input.",
    images: ["/androidstudio1.png","/androidstudio12.png","/androidstudio13.png"],
    href: "/androidstudio1",
  },
  {
    title: "Calculator — Android Studio App",
    desc:
      "Mobile calculator with basic operations, polished layout and responsive keypad. Built with Kotlin and Material components.",
    images: ["/androidstudio2.png","/androidstudio22.png","/androidstudio23.png","/androidstudio24.png"],
    href: "/androidstudio2",
  },
  {
    title: "EUR → USD — Currency Converter",
    desc:
      "Simple currency converter demonstrating input validation, formatting and instant conversion. Lightweight UI and clear states.",
    images: [], // ← у этой карточки нет картинок
    href: "/androidstudio3",
  },
];

export default function AndroidStudio() {
  return (
    <main className={as.page}>
      <div className={pm.container}>
        <h1 className="pageTitle">Android Studio</h1>

        <div className={fm.grid}>
          {projects.map((p, i) => {
            const hasImages = p.images?.length > 0;

            return (
              <section
                key={i}
                className={`${pm.card} ${fm.row} ${!hasImages ? as.cardNoMedia : ""}`}
              >
                {/* медиа только если есть */}
                {hasImages && (
                  <div className={`${pm.media} ${fm.media}`}>
                    <div className={pm.frame}>
                      <Carousel
                        images={p.images}
                        alt={`${p.title} preview`}
                        aspect="landscape"
                        tight
                      />
                    </div>
                  </div>
                )}

                {/* текст на всю ширину, если нет медиа */}
                <div className={`${pm.text} ${fm.text} ${!hasImages ? as.fullText : ""}`}>
                  <h2 className={pm.title}>{p.title}</h2>
                  <p className={pm.p}>{p.desc}</p>
                  <Link href={p.href} className={pm.btn}>See more details</Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
