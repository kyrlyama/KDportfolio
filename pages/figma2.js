import Link from "next/link";
import Carousel from "@/components/Carousel";
import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

const images = [
  "/figma1.png",
  "/figma12.png",
  "/figma13.png",
  "/figma14.png",
  "/figma15.png",
  "/figma16.png",
  "/figma17.png",
];

const assets = {
  empathy: "/figma2/empathymap.png",
  scenario: "/figma2/scenario.png",
  userStory: "/figma2/userstory.png",
  persona1: "/figma2/persona1.png",
  persona2: "/figma2/persona2.png",
  persona3: "/figma2/persona3.png",
};

const paletteTone = {
  id: "palette-tone",
  type: "palette",
  title: "Palette & Tone",
  text:
    "The visual system feels supportive and optimistic to reduce decision friction and help users choose gifts faster.",
  colors: [
    {
      name: "Primary Purple",
      hex: "#735BF2",
      usage: "Primary actions, key UI focus, navigation accents",
    },
    {
      name: "Accent Pink",
      hex: "#EF5BF2",
      usage: "Emotional accents, highlights, micro-interactions",
    },
    {
      name: "Soft Lavender",
      hex: "#E8C3FF",
      usage: "Background gradients, cards, soft UI surfaces",
    },
    {
      name: "Light Violet",
      hex: "#BBAFFC",
      usage: "Secondary backgrounds, decorative UI elements",
    },
    {
      name: "Warm Peach",
      hex: "#FFD88C",
      usage: "Warm highlights, friendly emphasis, visual contrast",
    },
    { name: "White", hex: "#FFFFFF", usage: "Main background, spacing, content clarity" },
    { name: "Black", hex: "#000000", usage: "Primary text, icons, high-contrast elements" },
  ],
  scheme: [
    "Purple as the anchor for CTAs and key hierarchy.",
    "Pink adds emotional accents and playful micro-feedback.",
    "High contrast on light surfaces for fast scanning on mobile.",
  ],
  typography:
    "System UI / Inter (or equivalent) for clear readability, strong UI rhythm and predictable rendering.",
  tools: "Figma styles + contrast checks (WCAG) and component tokens.",
  emotions: [
    {
      title: "User under time pressure",
      points: ["Relief from overload", "Confidence to choose quickly", "Feeling guided, not judged"],
    },
    {
      title: "Planner (keeps dates / contacts)",
      points: ["Sense of control", "Trust in saved preferences", "Calm about reminders"],
    },
    {
      title: "Gift giver (social occasions)",
      points: ["Confidence in the choice", "Feeling thoughtful and prepared", "Positive emotional feedback"],
    },
  ],
};

export default function Figma2() {
  return (
    <main className={fm.page}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        {/* === TOP CARD (prototype + carousel + figma link) === */}
        <section className={`${pm.card} ${fm.androidLike}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <h1 className={pm.title}>Gift Helper — gift finder app</h1>

            <p className={pm.p}>
              Mobile concept to quickly find the right present. Filter by age, budget, hobbies and
              occasion, save important dates, and store people’s preferences in a handy contacts list.
            </p>

            <h2 className={pm.h2}>Core features</h2>
            <ul className={pm.list}>
              <li>
                <strong>Smart filters:</strong> age, budget, hobbies, event type.
              </li>
              <li>
                <strong>Lists for men/women:</strong> fast favorites.
              </li>
              <li>
                <strong>Calendar:</strong> reminders for upcoming dates.
              </li>
              <li>
                <strong>People profiles:</strong> preferences & suggestions.
              </li>
              <li>
                <strong>Micro-interactions:</strong> confirmations & toasts.
              </li>
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
              {/* ✅ рамка только на большой картинке */}
              <Carousel
                 images={images}
                 alt="Gift Helper screens"
                 whiteFrameFor={["/figma1.png"]}
              />
            </div>
          </div>
        </section>

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
                The project started with lightweight UX research to understand how people choose gifts
                under time pressure and uncertainty. Based on insights, I created personas, empathy map,
                scenarios, and user stories, and then translated them into screen structure, navigation,
                and micro-interactions in the Figma prototype.
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
                Personas helped define priorities: fast decisions, budget control, and saving preferences for recurring occasions.
              </p>

              <div className={fm.uxMediaGrid}>
                {[assets.persona1, assets.persona2, assets.persona3, assets.persona4].map((src, i) => (
                  <div key={src} className={fm.uxMediaItem}>
                    <img className={fm.uxImage} src={src} alt={`Persona ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </section>

            <section id="empathy" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Empathy Map</h2>
              <p className={fm.uxP}>
                Captures what users think, feel, and struggle with when choosing a gift, helping to shape messaging and reduce decision friction.
              </p>

              <div className={fm.uxMedia}>
                <img className={fm.uxImage} src={assets.empathy} alt="Empathy Map" />
              </div>
            </section>

            <section id="scenarios" className={fm.uxCard}>
              <h2 className={fm.uxH2}>User Scenarios</h2>
              <p className={fm.uxP}>
                Scenarios describe the flow from the first intent (“I need a gift”) to selecting filters, saving ideas, and setting reminders.
              </p>

              <div className={fm.uxMedia}>
                <img className={fm.uxImage} src={assets.scenario} alt="Scenario" />
              </div>
            </section>

            <section id="userstory" className={fm.uxCard}>
              <h2 className={fm.uxH2}>User Story</h2>
              <p className={fm.uxP}>
                User stories helped validate the feature set and keep the prototype aligned with real expectations.
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
                  src="/figma2/prototype.png"
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
