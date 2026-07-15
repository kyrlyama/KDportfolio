import Link from "next/link";

import Carousel from "@/components/Carousel";
import ZoomableImage from "@/components/ZoomableImage";
import fm from "@/styles/Figma.module.css";
import pm from "@/styles/Project.module.css";

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

const projectFacts = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Duration", value: "6 weeks" },
  { label: "Platform", value: "Mobile app" },
  { label: "Prototype", value: "Interactive Figma" },
];

const highlightMetrics = [
  { label: "Screens", value: "7" },
  { label: "Personas", value: "3" },
  { label: "Core flows", value: "5" },
  { label: "Research artifacts", value: "5" },
  { label: "Gift filters", value: "4" },
  { label: "Main modules", value: "5" },
  { label: "Visual system", value: "7 colors" },
  { label: "Prototype", value: "Clickable" },
];

const processSteps = [
  "Research",
  "Personas",
  "Scenarios",
  "User stories",
  "Wireframes",
  "UI design",
];

const designDecisions = [
  [
    "Smart filters",
    "Grouped gift discovery by age, budget, hobbies and occasion.",
    "This reduces decision overload and helps users narrow down options faster.",
  ],
  [
    "People profiles",
    "Added saved preferences for friends and family members.",
    "This supports recurring occasions and makes the product useful beyond one-time gift search.",
  ],
  [
    "Calendar reminders",
    "Connected gift planning with important dates.",
    "This prevents users from forgetting birthdays and other social events.",
  ],
  [
    "Supportive visual tone",
    "Used soft gradients, purple accents and friendly color contrast.",
    "The interface feels less stressful for users choosing gifts under time pressure.",
  ],
];

const responsibilities = [
  "UX research",
  "Personas",
  "Empathy map",
  "User scenarios",
  "User stories",
  "Low-fidelity wireframes",
  "UI design",
  "Interactive prototype",
  "Visual system",
];

const outcome = [
  "Designed a mobile concept that helps users choose gifts faster.",
  "Created a structured UX process from research to high-fidelity prototype.",
  "Translated user uncertainty into filters, saved profiles and reminders.",
  "Built a friendly visual system with clear hierarchy and emotional tone.",
];

const paletteTone = {
  id: "design-system",
  title: "Design System",
  text: "The visual system feels supportive and optimistic while guiding users through gift selection with calm, accessible, and emotionally friendly interactions.",
  colors: [
    {
      name: "Primary 600",
      hex: "#8A2DCE",
      usage: "Primary CTA, key actions, navigation accents",
    },
    {
      name: "Primary 500",
      hex: "#A84DE8",
      usage: "Hover states, selection emphasis, interactive accents",
    },
    {
      name: "Primary 100",
      hex: "#F1E1FE",
      usage: "Soft backgrounds, tags, light surfaces",
    },
    {
      name: "Hover / Active 700",
      hex: "#7107BD",
      usage: "Pressed states and stronger CTA emphasis",
    },
    {
      name: "Hover / Active 200",
      hex: "#D194FC",
      usage: "Secondary hover states and focus support",
    },
    {
      name: "Neutral 900",
      hex: "#111827",
      usage: "Primary text, icons, strong contrast",
    },
    {
      name: "Neutral 700",
      hex: "#374151",
      usage: "Secondary text and supporting labels",
    },
    {
      name: "Neutral 500",
      hex: "#6B7280",
      usage: "Muted labels and helper text",
    },
    {
      name: "Neutral 300",
      hex: "#D1D5DB",
      usage: "Dividers and inactive UI elements",
    },
    {
      name: "Neutral 200",
      hex: "#E5E7EB",
      usage: "Subtle borders and card structure",
    },
    {
      name: "Neutral 100",
      hex: "#F3F4F6",
      usage: "Cards and neutral surfaces",
    },
    {
      name: "Neutral 50",
      hex: "#F9FAFB",
      usage: "Soft page backgrounds and quiet containers",
    },
    {
      name: "Success",
      hex: "#59B985",
      usage: "Confirmation and positive feedback",
    },
    {
      name: "Error",
      hex: "#E1524C",
      usage: "Validation and error feedback",
    },
    {
      name: "Warning",
      hex: "#9500FF",
      usage: "Attention and priority cues",
    },
  ],
  scheme: [
    "Purple anchors the main actions and decision moments.",
    "Neutral surfaces keep content readable and structured.",
    "Semantic feedback states support clear completion and error handling.",
  ],
  typography:
    "Inter regular with H1 28px, H2 20px, body 16px, and caption 12px for clear hierarchy and readable mobile UI.",
  tools: "Figma styles, component variants, semantic color usage, and interactive prototype states.",
  emotions: [
    {
      title: "Under time pressure",
      points: [
        "Relief from overload",
        "Confidence to choose quickly",
        "Feeling guided, not judged",
      ],
    },
    {
      title: "Planner",
      points: [
        "Sense of control",
        "Trust in saved preferences",
        "Calm about reminders",
      ],
    },
    {
      title: "Gift giver",
      points: [
        "Confidence in the choice",
        "Feeling thoughtful and prepared",
        "Positive emotional feedback",
      ],
    },
  ],
};

export default function Figma2() {
  return (
    <main className={`${fm.page} ${fm.figmaLegacyCase}`}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        <section className={`${pm.card} ${fm.androidLike}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <p className={fm.eyebrow}>UX/UI Case Study · Mobile App</p>

            <h1 className={pm.title}>Gift Helper — Gift Finder App</h1>

            <p className={pm.p}>
              A mobile concept that helps users choose the right present faster.
              The app combines smart filters, saved people profiles, reminders,
              favorites and supportive micro-interactions to reduce uncertainty
              during gift selection.
            </p>

            <div className={fm.factGrid}>
              {projectFacts.map((fact) => (
                <div key={fact.label} className={fm.factCard}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>

            <h2 className={pm.h2}>Project highlights</h2>
            <ul className={pm.list}>
              <li>
                <strong>7 mobile screens</strong> showing the core gift-finding
                experience.
              </li>
              <li>
                <strong>3 personas</strong> used to define user needs and
                decision patterns.
              </li>
              <li>
                <strong>4 smart filters</strong>: age, budget, hobbies and
                occasion.
              </li>
              <li>
                <strong>5 key modules</strong>: filters, favorites, calendar,
                people profiles and recommendations.
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
              <Carousel
                images={images}
                alt="Gift Helper screens"
                aspect="square"
                whiteFrameFor={["/figma1.png"]}
              />
            </div>
          </div>
        </section>

        <section className={fm.uxLayout}>
          <aside className={fm.contents}>
            <h3 className={fm.contentsTitle}>Contents</h3>

            <nav className={fm.contentsNav}>
              <a className={fm.contentsLink} href="#snapshot">
                Project snapshot
              </a>
              <a className={fm.contentsLink} href="#problem">
                Problem & solution
              </a>
              <a className={fm.contentsLink} href="#process">
                Design process
              </a>
              <a className={fm.contentsLink} href="#research">
                Research
              </a>
              <a className={fm.contentsLink} href="#persona">
                Personas
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
              <a className={fm.contentsLink} href="#decisions">
                Design decisions
              </a>
              <a className={fm.contentsLink} href="#design-system">
                Design System
              </a>
              <a className={fm.contentsLink} href="#outcome">
                Outcome
              </a>

              <Link href="/figma" className={pm.btn}>
                ← Back
              </Link>
            </nav>
          </aside>

          <div className={fm.uxContent}>
            <section id="snapshot" className={fm.uxCard}>
              <p className={fm.weekLabel}>Overview</p>
              <h2 className={fm.uxH2}>Project snapshot</h2>

              <p className={fm.uxP}>
                Gift Helper was designed as a compact mobile product concept
                focused on fast decision-making. The case combines research
                artifacts, personas, scenarios, wireframes and a soft emotional
                visual system.
              </p>

              <div className={fm.factGrid}>
                {highlightMetrics.map((metric) => (
                  <div key={metric.label} className={fm.factCard}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section id="problem" className={fm.uxCard}>
              <p className={fm.weekLabel}>Product thinking</p>
              <h2 className={fm.uxH2}>Problem & solution</h2>

              <div className={fm.insightBox}>
                <h3>Problem</h3>
                <p>
                  Choosing gifts often becomes stressful because users need to
                  consider budget, age, interests, occasion and personal
                  preferences at the same time. This creates uncertainty and
                  slows down decision-making.
                </p>
              </div>

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Product goal</h3>
                  <p className={fm.metaText}>
                    Help users quickly find relevant gift ideas and save
                    important information for future occasions.
                  </p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>UX solution</h3>
                  <p className={fm.metaText}>
                    Combine smart filters, people profiles, favorites,
                    reminders and recommendations into one simple mobile flow.
                  </p>
                </div>
              </div>
            </section>

            <section id="process" className={fm.uxCard}>
              <p className={fm.weekLabel}>Process</p>
              <h2 className={fm.uxH2}>Design process</h2>

              <p className={fm.uxP}>
                The workflow moved from understanding user uncertainty to
                structuring the product around practical decision support.
              </p>

              <div className={fm.timeline}>
                {processSteps.map((step, index) => (
                  <div key={step} className={fm.timelineStep}>
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section id="research" className={fm.uxCard}>
              <p className={fm.weekLabel}>Research</p>
              <h2 className={fm.uxH2}>Research overview</h2>

              <p className={fm.uxP}>
                The project started with lightweight UX research to understand
                how people choose gifts under time pressure and uncertainty.
                Based on insights, I created personas, an empathy map,
                scenarios and user stories, then translated them into screen
                structure, navigation and micro-interactions.
              </p>

              <div className={fm.factGrid}>
                <div className={fm.factCard}>
                  <span>Personas</span>
                  <strong>3</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Scenarios</span>
                  <strong>3</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Core filters</span>
                  <strong>4</strong>
                </div>
                <div className={fm.factCard}>
                  <span>UX artifacts</span>
                  <strong>5</strong>
                </div>
              </div>

              <ul className={fm.uxList}>
                <li>
                  <strong>Personas:</strong> key user segments, goals and
                  constraints.
                </li>
                <li>
                  <strong>Empathy Map:</strong> emotions and pain points during
                  gift selection.
                </li>
                <li>
                  <strong>User Scenarios:</strong> journey from first search to
                  saving ideas.
                </li>
                <li>
                  <strong>User Story:</strong> functional expectations aligned
                  to real needs.
                </li>
                <li>
                  <strong>Low-fidelity wireframes:</strong> layout, navigation
                  and micro-interactions.
                </li>
              </ul>
            </section>

            <section id="persona" className={fm.uxCard}>
              <p className={fm.weekLabel}>User definition</p>
              <h2 className={fm.uxH2}>3 Personas</h2>

              <p className={fm.uxP}>
                Personas helped define priorities: fast decisions, budget
                control, saved preferences and confidence during recurring
                social occasions.
              </p>

              <div className={fm.uxMediaGrid}>
                {[assets.persona1, assets.persona2, assets.persona3].map(
                  (src, i) => (
                    <div key={src} className={fm.uxMediaItem}>
                      <ZoomableImage
                        imageClassName={fm.uxImage}
                        src={src}
                        alt={`Persona ${i + 1}`}
                        width={1600}
                        height={900}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  )
                )}
              </div>
            </section>

            <section id="empathy" className={fm.uxCard}>
              <p className={fm.weekLabel}>User empathy</p>
              <h2 className={fm.uxH2}>Empathy Map</h2>

              <p className={fm.uxP}>
                The empathy map captures what users think, feel and struggle
                with when choosing a gift. It helped shape the product tone,
                messaging and decision-support features.
              </p>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src={assets.empathy}
                  alt="Empathy Map"
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>

            <section id="scenarios" className={fm.uxCard}>
              <p className={fm.weekLabel}>User journey</p>
              <h2 className={fm.uxH2}>User Scenarios</h2>

              <p className={fm.uxP}>
                Scenarios describe the flow from the first intent — “I need a
                gift” — to selecting filters, saving ideas and setting reminders.
              </p>

              <div className={fm.timeline}>
                {[
                  "Need a gift",
                  "Choose filters",
                  "View ideas",
                  "Save favorites",
                  "Add reminder",
                  "Prepare gift",
                ].map((step, index) => (
                  <div key={step} className={fm.timelineStep}>
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src={assets.scenario}
                  alt="Scenario"
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>

            <section id="userstory" className={fm.uxCard}>
              <p className={fm.weekLabel}>Requirements</p>
              <h2 className={fm.uxH2}>User Story</h2>

              <p className={fm.uxP}>
                User stories helped validate the feature set and keep the
                prototype aligned with real expectations for gift search,
                reminders and saved preferences.
              </p>

              <div className={fm.insightBox}>
                <h3>Why it matters</h3>
                <p>
                  User stories translated emotional uncertainty into product
                  requirements: filters, saved people profiles, favorites,
                  calendar reminders and clear confirmations.
                </p>
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src={assets.userStory}
                  alt="User Story"
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>

            <section id="prototype" className={fm.uxCard}>
              <p className={fm.weekLabel}>Wireframes</p>
              <h2 className={fm.uxH2}>Low-fidelity prototype</h2>

              <p className={fm.uxP}>
                Early hand-drawn prototype created to explore layout structure,
                navigation flow and screen hierarchy before moving to
                high-fidelity design in Figma.
              </p>

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Validated</h3>
                  <p className={fm.metaText}>
                    Navigation, filter logic, screen hierarchy and content
                    structure.
                  </p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Result</h3>
                  <p className={fm.metaText}>
                    The final UI became easier to structure before visual
                    styling was applied.
                  </p>
                </div>
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src="/figma2/prototype.png"
                  alt="Low-fidelity hand-drawn prototype"
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>

            <section id="prototype-ui" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 6</p>
              <h2 className={fm.uxH2}>High-fidelity UI + prototype</h2>

              <p className={fm.uxP}>
                The final prototype ties together filtering, favorites, planning,
                and reminders to make gift selection feel calm and less
                overwhelming.
              </p>

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Final screens</h3>
                  <p className={fm.metaText}>
                    The interface focuses on calm visual rhythm, strong hierarchy,
                    and low-friction interaction to guide decisions.
                  </p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Prototype focus</h3>
                  <p className={fm.metaText}>
                    The experience emphasizes smart filters, profiles, and reminder
                    moments that help users feel prepared.
                  </p>
                </div>
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src="/figma2/prototype.png"
                  alt="High-fidelity gift helper prototype"
                  width={1600}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>

            <section id="decisions" className={fm.uxCard}>
              <p className={fm.weekLabel}>Decision-making</p>
              <h2 className={fm.uxH2}>Design decisions</h2>

              <p className={fm.uxP}>
                The key decisions focused on reducing cognitive load, supporting
                recurring use and helping users feel more confident while
                choosing gifts.
              </p>

              <div className={fm.decisionTable}>
                {designDecisions.map(([area, decision, reason]) => (
                  <article key={area} className={fm.decisionRow}>
                    <strong>{area}</strong>
                    <span>{decision}</span>
                    <p>{reason}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id={paletteTone.id} className={fm.uxCard}>
              <p className={fm.weekLabel}>Visual system</p>
              <h2 className={fm.uxH2}>{paletteTone.title}</h2>

              <p className={fm.uxP}>{paletteTone.text}</p>

              <div className={fm.paletteGrid}>
                {paletteTone.colors.map((c) => (
                  <div key={c.hex} className={fm.colorCard}>
                    <span
                      className={fm.swatch}
                      style={{ backgroundColor: c.hex }}
                    />
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

              <h3 className={fm.uxH3}>Scheme</h3>
              <ul className={fm.uxList}>
                {paletteTone.scheme.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

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
            </section>

            <section id="outcome" className={fm.uxCard}>
              <p className={fm.weekLabel}>Result</p>
              <h2 className={fm.uxH2}>Outcome & learnings</h2>

              <div className={fm.factGrid}>
                <div className={fm.factCard}>
                  <span>Screens</span>
                  <strong>7</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Personas</span>
                  <strong>3</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Core filters</span>
                  <strong>4</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Modules</span>
                  <strong>5</strong>
                </div>
              </div>

              <h3 className={fm.uxH3}>Responsibilities</h3>
              <div className={fm.cardGrid3}>
                {responsibilities.map((item) => (
                  <article key={item} className={fm.storyCard}>
                    <h3>{item}</h3>
                  </article>
                ))}
              </div>

              <h3 className={fm.uxH3}>Final outcome</h3>
              <ul className={fm.uxList}>
                {outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={fm.deliverable}>
                Final deliverable: interactive Figma prototype, UX research
                artifacts, low-fidelity wireframes and supportive visual system.
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}