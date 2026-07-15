
import {
  Component,
  ExternalLink,
  Grid3X3,
  MousePointerClick,
  Palette,
  Type,
} from "lucide-react";
import Link from "next/link";

import Carousel from "@/components/Carousel";
import ZoomableImage from "@/components/ZoomableImage";
import fm from "@/styles/Figma.module.css";
import pm from "@/styles/Project.module.css";

const images = [
  "/figma23.png",
  "/figma24.png",
  "/figma25.png",
  "/figma26.png",
  "/figma27.png",
  "/figma28.png",
  "/figma29.png",
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

const projectFacts = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Duration", value: "4 months" },
  { label: "Platform", value: "Mobile app" },
  { label: "Prototype", value: "Interactive Figma" },
];

const highlightMetrics = [
  { label: "Mobile screens", value: "27" },
  { label: "Survey participants", value: "48" },
  { label: "Usability tests", value: "6" },
  { label: "Personas", value: "4" },
  { label: "Components", value: "32" },
  { label: "Component sets", value: "9" },
  { label: "Instances", value: "99" },
  { label: "Visual layers", value: "904" },
];

const processSteps = [
  "Research",
  "Personas",
  "User stories",
  "Wireframes",
  "UI design",
  "Prototype",
];

const designDecisions = [
  [
    "Group voting",
    "Added collaborative decision-making instead of only saving places.",
    "Helps reduce conflict when several people choose activities together.",
  ],
  [
    "Swipe interaction",
    "Used a lightweight swipe flow for entertainment and places.",
    "Makes choosing activities feel faster and less overwhelming.",
  ],
  [
    "Shared itinerary",
    "Combined dates, transport, hotels and activities in one flow.",
    "Reduces switching between chats, notes and booking apps.",
  ],
  [
    "High contrast UI",
    "Used bold purple accents and clear visual hierarchy.",
    "Keeps the interface readable and energetic for a young digital audience.",
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
  "Designed a complete collaborative travel planning prototype.",
  "Created a structured UX process from research to high-fidelity UI.",
  "Validated core navigation through early wireframes and user stories.",
  "Built a reusable visual system with colors, typography and component logic.",
];

const _colorTokenGroups = [
  {
    title: "Primary",
    description:
      "Bold purple brand colors for CTAs, group actions, highlights, and key conversion moments like voting and confirming plans.",
    tokens: [
      { name: "Primary 600", value: "#8A2DCE", text: "#FFFFFF" },
      { name: "Primary 500", value: "#A84DE8", text: "#FFFFFF" },
      { name: "Primary 100", value: "#F1E1FE", text: "#111827" },
    ],
  },
  {
    title: "Hover / Active",
    description:
      "Stronger CTA color for hover/active actions and a pale tint for lightweight interactive states like taps and focus.",
    tokens: [
      { name: "Primary 700", value: "#7107BD", text: "#FFFFFF" },
      { name: "Primary 200", value: "#D194FC", text: "#111827" },
    ],
  },
  {
    title: "Neutrals",
    description:
      "Neutral scale for text hierarchy, cards, dividers, disabled controls, and quiet surfaces across the mobile UI.",
    tokens: [
      { name: "Neutral 900", value: "#111827", text: "#FFFFFF" },
      { name: "Neutral 700", value: "#374151", text: "#FFFFFF" },
      { name: "Neutral 500", value: "#6B7280", text: "#FFFFFF" },
      { name: "Neutral 300", value: "#D1D5DB", text: "#111827" },
      { name: "Neutral 200", value: "#E5E7EB", text: "#111827" },
      { name: "Neutral 100", value: "#F3F4F6", text: "#111827" },
      { name: "Neutral 50", value: "#F9FAFB", text: "#111827" },
    ],
  },
  {
    title: "Semantic",
    description:
      "Semantic feedback colors for successful votes, validation errors, and warning messages during trip planning.",
    tokens: [
      { name: "Success", value: "#59B985", text: "#FFFFFF" },
      { name: "Error", value: "#E1524C", text: "#FFFFFF" },
      { name: "Warning", value: "#9500FF", text: "#FFFFFF" },
    ],
  },
];

const PaletteTone = {
  id: "design-system",
  title: "Design system",
  text: "The design system uses a vibrant purple core, calm neutrals, and clear semantic states to support confident group planning on mobile.",
  colors: [
    {
      name: "Primary 600",
      hex: "#8A2DCE",
      usage: "Primary CTA, voting actions, core highlights",
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
      usage: "Pressed states, stronger CTA emphasis",
    },
    {
      name: "Hover / Active 200",
      hex: "#D194FC",
      usage: "Secondary hover states, focus support",
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
      usage: "Muted labels, helper text",
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
      usage: "Cards, dividers, neutral surfaces",
    },
    {
      name: "Neutral 50",
      hex: "#F9FAFB",
      usage: "Soft page backgrounds and quiet containers",
    },
    {
      name: "Success",
      hex: "#59B985",
      usage: "Confirmation states, successful actions",
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
  typography: "Inter regular with H1 28px, H2 20px, body 16px, and caption 12px for clear hierarchy and readable mobile UI.",
  tools: "Figma styles, component variants, token-based color decisions, and interactive prototype states.",
  emotions: [
    {
      title: "Energetic",
      points: [
        "Bold purple accents make the experience feel vibrant.",
        "Clear hierarchy keeps the flow focused and inviting.",
      ],
    },
    {
      title: "Trustworthy",
      points: [
        "Neutral surfaces keep the UI calm and structured.",
        "Consistent spacing makes touch targets feel deliberate.",
      ],
    },
  ],
};

const _typographyScale = [
  { label: "H1", sample: "Headline", usage: "Onboarding and key screen titles", className: "typeH1" },
  { label: "H2", sample: "Headline", usage: "Section titles for trip, activities, and itinerary blocks", className: "typeH2" },
  { label: "Body", sample: "Body text", usage: "Trip descriptions, activity copy, and explanatory text", className: "typeBody" },
  { label: "Caption", sample: "Caption", usage: "Helper text, meta labels, form hints, and small tags", className: "typeCaption" },
];

const _designSystemCards = [
  {
    step: "01",
    icon: Grid3X3,
    title: "8pt grid",
    text: "Spacing follows 8px steps so trip cards, itinerary rows, voting controls, and mobile sections stay predictable.",
    image: {
      src: "/figma1/8pt.png",
      alt: "Travel app 8pt spacing grid Figma board",
    },
  },
  {
    step: "02",
    icon: Component,
    title: "Reusable components",
    text: "Navigation bar, trip card, activity card, voting button, budget chip, avatar group, itinerary row, and input field.",
    image: {
      src: "/figma1/components.png",
      alt: "Travel app reusable components Figma board",
    },
  },
  {
    step: "03",
    icon: MousePointerClick,
    title: "Interaction states",
    text: "Hover, active, disabled, and focus-visible states are defined for buttons, swipe cards, voting controls, and inputs.",
    image: {
      src: "/figma1/states.png",
      alt: "Travel app cards and component states Figma board",
    },
  },
];

const _figmaPrototypeUrl =
  "https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1";

const _figma1PreviewImages = ["/figma1/uiprototype.png"];

export default function Figma1() {
  return (
    <main className={`${fm.page} ${fm.figmaLegacyCase}`}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        <section className={`${pm.card} ${fm.androidLike}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <p className={fm.eyebrow}>UX/UI Case Study · Mobile App</p>

            <h1 className={pm.title}>Collaborative Travel Planning App</h1>

            <p className={pm.p}>
              A mobile prototype for planning trips with friends. The app helps
              users choose destinations, split budgets, vote on activities,
              organize schedules and keep the whole group aligned in one shared
              travel space.
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
                <strong>27 mobile screens</strong> designed for a complete
                high-fidelity prototype.
              </li>
              <li>
                <strong>48 survey participants</strong> and{" "}
                <strong>6 usability tests</strong> informed the UX direction.
              </li>
              <li>
                <strong>32 reusable components</strong> and{" "}
                <strong>9 component sets</strong> supported interface
                consistency.
              </li>
              <li>
                <strong>Group voting, favorites, chat and itinerary</strong>{" "}
                reduce planning friction.
              </li>
            </ul>

<a href="https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1" target="_blank" rel="noreferrer">
  Open in Figma <ExternalLink size={14} />
</a>
          </div>

          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={`${pm.frame} ${fm.mediaFrame}`}>
              <Carousel images={images} alt="Figma Travel App screens" tight />
            </div>
          </div>
        </section>

        <section className={fm.uxLayout}>
          <aside className={`${fm.contents} ${fm.stickyContents}`}>
            <h3 className={fm.contentsTitle}>Contents</h3>
            <nav className={fm.contentsNav}>
            <a className={fm.contentsLink} href="#snapshot">Project snapshot</a>
            <a className={fm.contentsLink} href="#problem">Problem & solution</a>
            <a className={fm.contentsLink} href="#process">Design process</a>
            <a className={fm.contentsLink} href="#research">Research</a>
            <a className={fm.contentsLink} href="#persona">Personas</a>
            <a className={fm.contentsLink} href="#empathy">Empathy Map</a>
            <a className={fm.contentsLink} href="#scenarios">User Scenarios</a>
            <a className={fm.contentsLink} href="#userstory">User Story</a>
            <a className={fm.contentsLink} href="#prototype">Low-fidelity wireframes</a>
            <a className={fm.contentsLink} href="#decisions"> Design decisions </a>
            <a className={fm.contentsLink} href="#design-system">Design System</a>
            <a className={fm.contentsLink} href="#outcome">Outcome</a>
            <Link href="/figma" className={`${pm.btn} ${fm.contentsBackButton}`}>
                ← Back
              </Link>
            </nav>
          </aside>

          <div className={fm.uxContent}>
            <section id="snapshot" className={fm.uxCard}>
              <p className={fm.weekLabel}>Overview</p>
              <h2 className={fm.uxH2}>Project snapshot</h2>

              <p className={fm.uxP}>
                The project was created as a full UX/UI case study for a group
                travel planning product. The focus was not only on visual
                screens, but also on research, decision-making logic, reusable
                UI patterns and a clear mobile flow.
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
                  Planning a trip with friends often requires switching between
                  chats, booking apps, notes, maps and budget trackers. This
                  creates confusion, duplicated decisions and conflicts inside
                  the group.
                </p>
              </div>

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Product goal</h3>
                  <p className={fm.metaText}>
                    Design one collaborative mobile experience where users can
                    plan, vote, save ideas and manage trip details together.
                  </p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>UX solution</h3>
                  <p className={fm.metaText}>
                    Combine itinerary, voting, destinations, activities,
                    accommodation, transport and chat into one structured flow.
                  </p>
                </div>
              </div>
            </section>

            <section id="process" className={fm.uxCard}>
              <p className={fm.weekLabel}>Process</p>
              <h2 className={fm.uxH2}>Design process</h2>

              <p className={fm.uxP}>
                The workflow followed a product design process from discovery to
                high-fidelity prototype. Each step helped reduce uncertainty and
                connect design decisions with user needs.
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
                The process started with UX research to understand how groups
                plan trips, resolve disagreements and keep schedules clear.
                Insights were translated into personas, empathy map, user
                scenarios and user stories, then applied to navigation and
                mobile UI patterns.
              </p>

              <div className={fm.factGrid}>
                <div className={fm.factCard}>
                  <span>Participants</span>
                  <strong>48</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Usability tests</span>
                  <strong>6</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Personas</span>
                  <strong>4</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Core artifacts</span>
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
                  group planning.
                </li>
                <li>
                  <strong>User Scenarios:</strong> journey from trip idea to
                  final shared plan.
                </li>
                <li>
                  <strong>User Story:</strong> expectations aligned to real
                  coordination needs.
                </li>
                <li>
                  <strong>Low-fidelity wireframes:</strong> layout, navigation
                  and interaction structure.
                </li>
              </ul>
            </section>

            <section id="persona" className={fm.uxCard}>
              <p className={fm.weekLabel}>User definition</p>
              <h2 className={fm.uxH2}>4 Personas</h2>

              <p className={fm.uxP}>
                Personas helped define priorities: quick coordination, clarity
                of responsibilities and reducing friction when planning with
                friends.
              </p>

              <div className={fm.uxMediaGrid}>
                {[
                  assets.persona1,
                  assets.persona2,
                  assets.persona3,
                  assets.persona4,
                ].map((src, i) => (
                  <div key={src} className={fm.uxMediaItem}>
                    <ZoomableImage
                      imageClassName={fm.uxImage}
                      src={src}
                      alt={`Persona ${i + 1}`}
                      width={1200}
                      height={800}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section id="empathy" className={fm.uxCard}>
              <p className={fm.weekLabel}>User empathy</p>
              <h2 className={fm.uxH2}>Empathy Map</h2>

              <p className={fm.uxP}>
                The empathy map captures what users think, feel and struggle
                with when planning trips together. It helped shape microcopy,
                reduce coordination friction and make the interface feel more
                supportive.
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
                Scenarios describe the flow from intent — “Let’s plan a trip” —
                to choosing destinations, agreeing on activities, splitting
                budget and confirming the final shared plan.
              </p>

              <div className={fm.timeline}>
                {[
                  "Trip idea",
                  "Destination",
                  "Budget",
                  "Activities",
                  "Voting",
                  "Shared plan",
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
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            </section>

            <section id="userstory" className={fm.uxCard}>
              <p className={fm.weekLabel}>Requirements</p>
              <h2 className={fm.uxH2}>User Story</h2>

              <p className={fm.uxP}>
                User stories helped validate the feature set and keep the
                prototype aligned with real expectations for group coordination,
                decision making and clarity.
              </p>

              <div className={fm.insightBox}>
                <h3>Why it matters</h3>
                <p>
                  User stories translate research into product requirements.
                  They helped connect user goals with concrete app features
                  before moving into high-fidelity UI.
                </p>
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src={assets.userStory}
                  alt="User Story"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            </section>

            <section id="prototype" className={fm.uxCard}>
              <p className={fm.weekLabel}>Wireframes</p>
              <h2 className={fm.uxH2}>Low-fidelity prototype</h2>

              <p className={fm.uxP}>
                Early hand-drawn prototype created to explore layout structure,
                navigation flow and screen hierarchy before moving to
                high-fidelity design in Figma. This stage helped validate core
                interactions and reduce unnecessary UI complexity.
              </p>

              <div className={fm.metaGrid}>
                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Validated</h3>
                  <p className={fm.metaText}>
                    Navigation, hierarchy, core flow and screen structure.
                  </p>
                </div>

                <div className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Result</h3>
                  <p className={fm.metaText}>
                    The final UI had a clearer structure before visual styling
                    was applied.
                  </p>
                </div>
              </div>

              <div className={fm.uxMedia}>
                <ZoomableImage
                  imageClassName={fm.uxImage}
                  src="/figma1/prototype.png"
                  alt="Low-fidelity hand-drawn prototype"
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
                The most important product decisions focused on reducing
                decision fatigue, making collaboration clearer and keeping the
                interface easy to scan on mobile.
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

            <section id={PaletteTone.id} className={fm.uxCard}>
              <p className={fm.weekLabel}>Visual system</p>
              <h2 className={fm.uxH2}>{PaletteTone.title}</h2>

              <p className={fm.uxP}>{PaletteTone.text}</p>

              <div className={fm.designHeroGrid}>
                <article className={fm.designIntroCard}>
                  <Palette aria-hidden="true" />
                  <h3>Color tokens</h3>
                  <p>
                    The color system uses purple for key actions, neutrals for
                    hierarchy and readability, and semantic accents for state
                    clarity during group planning.
                  </p>
                </article>
                <article className={fm.designIntroCard}>
                  <Type aria-hidden="true" />
                  <h3>Typography scale</h3>
                  <p>
                    The scale keeps headlines, section titles, body copy, and
                    captions distinct so the mobile experience feels clean and
                    purposeful.
                  </p>
                </article>
              </div>

              <div className={fm.colorSystem}>
                {_colorTokenGroups.map((group) => (
                  <article key={group.title} className={fm.colorGroup}>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                    <div className={fm.colorSwatches}>
                      {group.tokens.map((token) => (
                        <div
                          key={token.name}
                          className={fm.colorSwatch}
                          style={{ backgroundColor: token.value, color: token.text }}
                        >
                          <strong>{token.name}</strong>
                          <span>{token.value}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className={fm.typographyPanel}>
                <div className={fm.typographyHeader}>
                  <Type aria-hidden="true" />
                  <div>
                    <h3>Typography</h3>
                    <p>
                      Readable hierarchy for a collaborative travel app with
                      planning, voting, itinerary, and chat content.
                    </p>
                  </div>
                </div>
                <div className={fm.typeScaleList}>
                  {_typographyScale.map((item) => (
                    <article key={item.label} className={fm.typeScaleItem}>
                      <span>{item.label}</span>
                      <strong className={fm[item.className]}>{item.sample}</strong>
                      <p>{item.usage}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={fm.designSystemFlow}>
                {_designSystemCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className={fm.designSystemCard}>
                      <div className={fm.designSystemCardBody}>
                        <div className={fm.designCardTopline}>
                          <span>{card.step}</span>
                          <Icon aria-hidden="true" />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                      {card.image ? (
                        <figure className={fm.designSystemCardMedia}>
                          <ZoomableImage
                            src={card.image.src}
                            alt={card.image.alt}
                            width={1200}
                            height={820}
                          />
                        </figure>
                      ) : null}
                      <Link href={_figmaPrototypeUrl} className={fm.smallFigmaButton}>
                        Figma source <ExternalLink aria-hidden="true" size={14} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="prototype-ui" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 6</p>
              <h2 className={fm.uxH2}>High-fidelity UI + prototype</h2>
              <p className={fm.uxP}>
                The final experience combines the high-fidelity UI with an interactive prototype that shows the shared planning flow, voting interactions, itinerary structure, and collaborative decision moments.
              </p>
              <div className={fm.twoColGrid}>
                <article className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Final screens</h3>
                  <p className={fm.metaText}>
                    The UI focuses on clarity for group coordination with strong CTA hierarchy, readable states, and a calm mobile-first structure.
                  </p>
                </article>
                <article className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Prototype focus</h3>
                  <p className={fm.metaText}>
                    The prototype highlights itinerary creation, activity voting, group planning, and shared decision-making without overwhelming the user.
                  </p>
                </article>
              </div>
              <div className={fm.prototypePreviewGrid}>
                {['/figma1/figma1.png'].map((src) => (
                  <figure key={src} className={`${fm.caseImageCard} ${fm.heroPreviewCard}`}>
                    <ZoomableImage
                      src={src}
                      alt="Travel planning app high-fidelity UI preview"
                      width={1200}
                      height={760}
                      imageClassName={fm.caseZoomImage}
                    />
                  </figure>
                ))}
              </div>
              <div className={fm.placeholderPanel}>
                <strong>Prototype area</strong>
                <span>High-fidelity screens connect planning, voting, itinerary review, and collaborative actions.</span>
                <Link href={_figmaPrototypeUrl} className={fm.figmaPrototypeButton}>
                  Open Figma prototype <ExternalLink aria-hidden="true" size={18} />
                </Link>
              </div>
            </section>

            <section id="outcome" className={fm.uxCard}>
              <p className={fm.weekLabel}>Result</p>
              <h2 className={fm.uxH2}>Outcome & learnings</h2>

              <div className={fm.factGrid}>
                <div className={fm.factCard}>
                  <span>Screens</span>
                  <strong>27</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Components</span>
                  <strong>32</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Research</span>
                  <strong>48 users</strong>
                </div>
                <div className={fm.factCard}>
                  <span>Testing</span>
                  <strong>6 users</strong>
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
                artifacts, low-fidelity wireframes and reusable visual system.
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}