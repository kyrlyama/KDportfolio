import Link from "next/link";
import Carousel from "@/components/Carousel";
import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

const images = [
  "/figma1/figma23.png",
  "/figma1/figma24.png",
  "/figma1/figma25.png",
  "/figma1/figma26.png",
  "/figma1/figma27.png",
  "/figma1/figma28.png",
  "/figma1/figma29.png",
];

const assets = {
  empathy: "/figma1/empathymap.png",
  scenario: "/figma1/scenario.png",
  userStory: "/figma1/userstory.png",
  persona1: "/figma1/persona1.png",
  persona2: "/figma1/persona2.png",
  persona3: "/figma1/persona3.png",
  persona4: "/figma1/persona4.png",
};

const paletteTone = {
  id: "palette-tone",
  type: "palette",
  title: "Palette & Tone",
  text:
    "The visual identity uses high contrast and bold purple accents to create a confident, modern, and energetic impression.",
  colors: [
    { name: "Black", hex: "#000000", usage: "Primary text, strong contrast elements" },
    { name: "Primary Purple", hex: "#7107BD", usage: "CTAs, highlights, interactive elements" },
    { name: "White", hex: "#FFFFFF", usage: "Main background, layout clarity" },
    { name: "Soft Purple", hex: "#DAACFC", usage: "Background accents, UI blocks" },
    { name: "Light Pink", hex: "#FEEDFF", usage: "Surface backgrounds, soft sections" },
    { name: "Lavender Accent", hex: "#D9B7F1", usage: "Secondary UI accents, decorative elements" },
  ],
  scheme: [
    "Purple as the dominant accent color.",
    "High contrast with black for strong hierarchy.",
    "Soft pastel surfaces for visual balance.",
  ],
  typography:
    "Inter — clean geometric sans-serif typeface for modern UI clarity and digital readability.",
  tools:     "Figma styles and component tokens for scalable interface consistency.",
  emotions: [
    {
      title: "Young digital audience",
      points: [
        "Energetic visual tone",
        "High contrast for clarity",
        "Modern minimal aesthetic",
      ],
    },
    {
      title: "Brand confidence",
      points: [
        "Strong purple as identity anchor",
        "Clear hierarchy",
        "Memorable visual presence",
      ],
    },
    {
      title: "Usability focus",
      points: [
        "Readable typography",
        "Clean spacing",
        "Balanced visual rhythm",
      ],
    },
  ],
};

export default function Figma1() {
  return (
    <main className={fm.page}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        {/* === TOP CARD (prototype + carousel + figma link) === */}
        <section className={`${pm.card} ${fm.androidLike}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <h1 className={pm.title}>Figma Travel App</h1>

            <p className={pm.p}>
              Prototype of a collaborative travel planning app. Users pick destinations,
              split budgets, plan schedules, and vote on activities — focused on smooth
              group decision-making and high-legibility mobile UI.
            </p>

            <h2 className={pm.h2}>Main features</h2>
            <ul className={pm.list}>
              <li>
                <strong>Trip planning:</strong> dates, destinations, shared itinerary.
              </li>
              <li>
                <strong>Group collaboration:</strong> notes and quick votes.
              </li>
              <li>
                <strong>Recommendations:</strong> places & activities.
              </li>
              <li>
                <strong>Smart suggestions:</strong> tailored to preferences.
              </li>
              <li>
                <strong>Sync:</strong> shared calendars & live updates.
              </li>
            </ul>

            <Link
              href="https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1"
              target="_blank"
              className={pm.btn}
            >
              Figma Prototype
            </Link>
          </div>

          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={`${pm.frame} ${fm.mediaFrame}`}>
              <Carousel images={images} alt="Figma Travel App screens" />
            </div>
          </div>
        </section>

        {/* === UX STRUCTURE (same as figma2) === */}
        <section className={fm.uxLayout}>
          <aside className={fm.contents}>
            <h3 className={fm.contentsTitle}>Contents</h3>
            <nav className={fm.contentsNav}>
              <a className={fm.contentsLink} href="#research">
                Research overview
              </a>
              <a className={fm.contentsLink} href="#persona">
                Persona
              </a>
              <a className={fm.contentsLink} href="#empathy">
                Empathy Map
              </a>
              <a className={fm.contentsLink} href="#scenarios">
                User Scenarios
              </a>
              <a className={fm.contentsLink} href="#userstory">
                User Story
              </a>
              <a className={fm.contentsLink} href="#prototype">
                Low-fidelity wireframes
              </a>
              <a className={fm.contentsLink} href="#palette-tone">
                Palette & Tone
              </a>
            </nav>
          </aside>

          <div className={fm.uxContent}>
            <section id="research" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Research overview</h2>
              <p className={fm.uxP}>
                The process started with lightweight UX research to understand how groups
                plan trips, resolve disagreements, and keep schedules clear. Insights were
                translated into personas, journey scenarios, and user stories, then applied
                to navigation structure and mobile UI patterns.
              </p>

              <ul className={fm.uxList}>
                <li>
                  <strong>Persona:</strong> key user segments, goals, and constraints
                </li>
                <li>
                  <strong>Empathy Map:</strong> emotions and pain points during gift selection
                </li>
                <li>
                  <strong>User Scenarios:</strong> step-by-step journey from first search to saving ideas
                </li>
                <li>
                  <strong>User Story:</strong> functional expectations aligned to real needs
                </li>
                <li>
                  <strong>Low-friendlity wireframes:</strong> layout, navigation, and micro-interactions
                </li>
                <li>
                  <strong>Palette & Tone:</strong> colors, typography, and component tokens
                </li>
              </ul>
            </section>

            <section id="persona" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Persona</h2>
              <p className={fm.uxP}>
                Personas helped define priorities: quick coordination, clarity of responsibilities,
                and reducing friction when planning with friends.
              </p>

              <div className={fm.uxMediaGrid}>
                {[assets.persona1, assets.persona2, assets.persona3, assets.persona4].map(
                  (src, i) => (
                    <div key={src} className={fm.uxMediaItem}>
                      <img
                        className={fm.uxImage}
                        src={src}
                        alt={`Persona ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>
            </section>

            <section id="empathy" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Empathy Map</h2>
              <p className={fm.uxP}>
                Captures what users think, feel, and struggle with when planning trips together,
                helping shape microcopy and reduce coordination friction.
              </p>

              <div className={fm.uxMedia}>
                <img className={fm.uxImage} src={assets.empathy} alt="Empathy Map" />
              </div>
            </section>

            <section id="scenarios" className={fm.uxCard}>
              <h2 className={fm.uxH2}>User Scenarios</h2>
              <p className={fm.uxP}>
                Scenarios describe the flow from intent (“Let’s plan a trip”) to choosing destinations,
                agreeing on activities, splitting budget, and confirming the final shared plan.
              </p>

              <div className={fm.uxMedia}>
                <img className={fm.uxImage} src={assets.scenario} alt="Scenario" />
              </div>
            </section>

            <section id="userstory" className={fm.uxCard}>
              <h2 className={fm.uxH2}>User Story</h2>
              <p className={fm.uxP}>
                User stories helped validate the feature set and keep the prototype aligned with real
                expectations for group coordination and clarity.
              </p>

              <div className={fm.uxMedia}>
                <img className={fm.uxImage} src={assets.userStory} alt="User Story" />
              </div>
            </section>
                        <section id="prototype" className={fm.uxCard}>
  <h2 className={fm.uxH2}>Low-fidelity wireframes</h2>

  <p className={fm.uxP}>
    Early hand-drawn prototype created to explore layout structure,
    navigation flow, and screen hierarchy before moving to high-fidelity
    design in Figma. This stage helped validate core interactions
    and reduce unnecessary UI complexity.
  </p>

  <div className={fm.uxMedia}>
    <img
      className={fm.uxImage}
      src="/figma1/prototype.png"
      alt="Low-fidelity hand-drawn prototype"
    />
  </div>
</section>

 <section id={paletteTone.id} className={fm.uxCard}>
              <h2 className={fm.uxH2}>{paletteTone.title}</h2>
              <p className={fm.uxP}>{paletteTone.text}</p>

              <div className={fm.paletteGrid}>
                {paletteTone.colors.map((c) => (
                  <div key={c.hex} className={fm.colorCard}>
                    <span className={fm.swatch} style={{ backgroundColor: c.hex }} />
                    <div className={fm.colorMeta}>
                      <div className={fm.colorTop}>
                        <strong className={fm.colorName}>{c.name}</strong>
                        <code className={fm.colorHex}>{c.hex}</code>
                      </div>
                      <div className={fm.colorUsage}>{c.usage}</div>
                    </div>
                  </div>
                ))}
              </div>

              {paletteTone.scheme?.length ? (
                <>
                  <h3 className={fm.uxH3}>Scheme</h3>
                  <ul className={fm.uxList}>
                    {paletteTone.scheme.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Typography</h3>
                  <p className={fm.metaText}>{paletteTone.typography}</p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Tools</h3>
                  <p className={fm.metaText}>{paletteTone.tools}</p>
                </div>
              </div>

              {paletteTone.emotions?.length ? (
                <>
                  <h3 className={fm.uxH3}>Emotional intent</h3>
                  <div className={fm.emotionsGrid}>
                    {paletteTone.emotions.map((b) => (
                      <div key={b.title} className={fm.emotionCard}>
                        <h4 className={fm.emotionTitle}>{b.title}</h4>
                        <ul className={fm.emotionList}>
                          {b.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </section>


          </div>
        </section>
      </div>
    </main>
  );
}
