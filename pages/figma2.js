// pages/figma2.js — Gift Helper (also /uiux/gift-helper).
// Same PROJECT PLAN structure as the Travel App (pages/figma1.js).
// FIX: the design system now shows Gift Helper's OWN "Palette & Tone"
// (from the project_move branch), not the Travel App purple.
// Development is skipped: this is a Figma-only project.
import {
  BulletList,
  Callout,
  CaseHero,
  CasePage,
  CasePlan,
  Cards,
  DecisionCard,
  Facts,
  Gallery,
  H3,
  P,
  Placeholder,
  Screens,
  Steps,
  Swatches,
  TextPanel,
  TypeScale,
  caseStyles as styles,
} from "@/components/case";

const figmaPrototypeUrl =
  "https://www.figma.com/design/joVwSJGnBQUslG8eSYn2iB/Untitled?node-id=0-1";

const finalScreens = [
  "/figma1.png",
  "/figma12.png",
  "/figma13.png",
  "/figma14.png",
  "/figma15.png",
  "/figma16.png",
  "/figma17.png",
].map((src, i) => ({ src, alt: `Gift Helper screen ${i + 1}` }));

const snapshot = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Timeline", value: "6 weeks" },
  { label: "Stack", value: "Figma · Mobile app" },
  { label: "Status", value: "Interactive Figma prototype" },
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

const highlights = [
  <>
    <strong>7 mobile screens</strong> showing the core gift-finding experience.
  </>,
  <>
    <strong>3 personas</strong> used to define user needs and decision patterns.
  </>,
  <>
    <strong>4 smart filters</strong>: age, budget, hobbies and occasion.
  </>,
  <>
    <strong>5 key modules</strong>: filters, favorites, calendar, people
    profiles and recommendations.
  </>,
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

const processSteps = [
  "Research",
  "Personas",
  "Scenarios",
  "User stories",
  "Wireframes",
  "UI design",
];

const researchArtifacts = [
  <>
    <strong>Personas:</strong> key user segments, goals and constraints.
  </>,
  <>
    <strong>Empathy Map:</strong> emotions and pain points during gift
    selection.
  </>,
  <>
    <strong>User Scenarios:</strong> journey from first search to saving ideas.
  </>,
  <>
    <strong>User Story:</strong> functional expectations aligned to real needs.
  </>,
  <>
    <strong>Low-fidelity wireframes:</strong> layout, navigation and
    micro-interactions.
  </>,
];

const personas = [1, 2, 3].map((n) => ({
  src: `/figma2/persona${n}.png`,
  alt: `Persona ${n}`,
}));

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

// Gift Helper "Palette & Tone" — its real Figma colors (project_move branch)
const paletteTone = {
  text: "The visual system feels supportive and optimistic to reduce decision friction and help users choose gifts faster.",
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
    {
      name: "White",
      hex: "#FFFFFF",
      usage: "Main background, spacing, content clarity",
    },
    {
      name: "Black",
      hex: "#000000",
      usage: "Primary text, icons, high-contrast elements",
    },
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
      items: [
        "Relief from overload",
        "Confidence to choose quickly",
        "Feeling guided, not judged",
      ],
    },
    {
      title: "Planner (keeps dates / contacts)",
      items: [
        "Sense of control",
        "Trust in saved preferences",
        "Calm about reminders",
      ],
    },
    {
      title: "Gift giver (social occasions)",
      items: [
        "Confidence in the choice",
        "Feeling thoughtful and prepared",
        "Positive emotional feedback",
      ],
    },
  ],
};

// Gift Helper's own gradient: lavender → peach (shown inside its own swatch)
const giftGradient = "linear-gradient(90deg, #E8C3FF 0%, #FFD88C 100%)";

const typographyScale = [
  {
    label: "H1",
    previewSize: 28,
    weight: 700,
    sample: "Headline",
    usage: "Key screen titles",
  },
  {
    label: "H2",
    previewSize: 20,
    weight: 700,
    sample: "Headline",
    usage: "Section titles for filters, favorites, and reminders",
  },
  {
    label: "Body",
    previewSize: 16,
    weight: 400,
    sample: "Body text",
    usage: "Gift descriptions, filter copy, and explanatory text",
  },
  {
    label: "Caption",
    previewSize: 12,
    weight: 400,
    sample: "Caption",
    usage: "Helper text, filter labels, and small tags",
  },
];

const designSystemCards = [
  {
    title: "01 · 8pt grid",
    text: "Spacing follows 8px steps so gift cards, filter chips, profile rows, and mobile sections stay predictable.",
  },
  {
    title: "02 · Reusable components",
    text: "Navigation bar, gift card, filter chip, favorite button, profile card, reminder badge, and input field.",
  },
  {
    title: "03 · Interaction states",
    text: "Hover, active, disabled, and focus-visible states are defined for buttons, filter chips, favorite toggles, and inputs.",
  },
];

const outcome = [
  "Designed a mobile concept that helps users choose gifts faster.",
  "Created a structured UX process from research to high-fidelity prototype.",
  "Translated user uncertainty into filters, saved profiles and reminders.",
  "Built a friendly visual system with clear hierarchy and emotional tone.",
];

export default function Figma2() {
  const sections = {
    context: (
      <>
        <TextPanel>
          <P>
            Gift Helper was designed as a compact mobile product concept focused
            on fast decision-making. The case combines research artifacts,
            personas, scenarios, wireframes and a soft emotional visual system.
          </P>
          <BulletList items={highlights} />
        </TextPanel>
        <Facts items={highlightMetrics} />
        <H3>My responsibilities</H3>
        <Cards items={responsibilities.map((title) => ({ title }))} />
      </>
    ),

    problem: (
      <Callout title="Problem">
        Choosing gifts often becomes stressful because users need to consider
        budget, age, interests, occasion and personal preferences at the same
        time. This creates uncertainty and slows down decision-making.
      </Callout>
    ),

    goal: (
      <Cards
        cols={2}
        items={[
          {
            title: "Product goal",
            text: "Help users quickly find relevant gift ideas and save important information for future occasions.",
          },
          {
            title: "UX solution",
            text: "Combine smart filters, people profiles, favorites, reminders and recommendations into one simple mobile flow.",
          },
        ]}
      />
    ),

    research: (
      <>
        <TextPanel>
          <P>
            The project started with lightweight UX research to understand how
            people choose gifts under time pressure and uncertainty. Based on
            insights, I created personas, an empathy map, scenarios and user
            stories, then translated them into screen structure, navigation and
            micro-interactions.
          </P>
          <BulletList items={researchArtifacts} />
        </TextPanel>
        <Facts
          items={[
            { label: "Personas", value: "3" },
            { label: "Scenarios", value: "3" },
            { label: "Core filters", value: "4" },
            { label: "UX artifacts", value: "5" },
          ]}
        />

        <Gallery
          cols={3}
          title="3 Personas"
          text="Personas helped define priorities: fast decisions, budget control, saved preferences and confidence during recurring social occasions."
          images={personas}
        />

        <Gallery
          cols={1}
          title="Empathy Map"
          text="The empathy map captures what users think, feel and struggle with when choosing a gift. It helped shape the product tone, messaging and decision-support features."
          images={[{ src: "/figma2/empathymap.png", alt: "Empathy Map" }]}
        />

        <H3>User Scenarios</H3>
        <P>
          Scenarios describe the flow from the first intent — “I need a gift” —
          to selecting filters, saving ideas and setting reminders.
        </P>
        <Steps
          items={[
            "Need a gift",
            "Choose filters",
            "View ideas",
            "Save favorites",
            "Add reminder",
            "Prepare gift",
          ]}
        />
        <Gallery
          cols={1}
          images={[{ src: "/figma2/scenario.png", alt: "Scenario" }]}
        />

        <H3>User Story</H3>
        <P>
          User stories helped validate the feature set and keep the prototype
          aligned with real expectations for gift search, reminders and saved
          preferences.
        </P>
        <Callout title="Why it matters">
          User stories translated emotional uncertainty into product
          requirements: filters, saved people profiles, favorites, calendar
          reminders and clear confirmations.
        </Callout>
        <Gallery
          cols={1}
          images={[{ src: "/figma2/userstory.png", alt: "User Story" }]}
        />
      </>
    ),

    decisions: (
      <>
        <P>
          The key decisions focused on reducing cognitive load, supporting
          recurring use and helping users feel more confident while choosing
          gifts.
        </P>
        <div className={styles.decisions}>
          {designDecisions.map(([area, decision, reason]) => (
            <DecisionCard
              key={area}
              chose={area}
              why={`${decision} ${reason}`}
              cost={<Placeholder>COST: what did this choice cost?</Placeholder>}
            />
          ))}
        </div>
      </>
    ),

    design: (
      <>
        <H3>Design process</H3>
        <P>
          The workflow moved from understanding user uncertainty to structuring
          the product around practical decision support.
        </P>
        <Steps items={processSteps} />

        <Gallery
          cols={1}
          title="Low-fidelity prototype"
          text="Early hand-drawn prototype created to explore layout structure, navigation flow and screen hierarchy before moving to high-fidelity design in Figma."
          images={[
            {
              src: "/figma2/prototype.png",
              alt: "Low-fidelity hand-drawn Gift Helper prototype",
            },
          ]}
        />

        <H3>Palette &amp; Tone</H3>
        <P>{paletteTone.text}</P>
        <Swatches colors={paletteTone.colors} />
        <div className={`glass ${styles.gradientSwatch}`}>
          <span style={{ background: giftGradient }} aria-hidden="true" />
          <p>
            <strong>Lavender → peach gradient</strong>
            <code>#E8C3FF → #FFD88C</code>
          </p>
        </div>
        <Cards
          items={[
            { title: "Color scheme", items: paletteTone.scheme },
            { title: "Typography", text: paletteTone.typography },
            { title: "Tools", text: paletteTone.tools },
          ]}
        />
        <TypeScale
          intro="Readable hierarchy for a gift-finding app with filters, favorites, reminders, and profile content. The scale keeps headlines, section titles, body copy, and captions distinct so the mobile experience feels calm and easy to scan."
          items={typographyScale}
        />
        <Cards items={designSystemCards} />
        <a
          href={figmaPrototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          Figma source ↗
        </a>

        <H3>Emotional intent</H3>
        <Cards items={paletteTone.emotions} />

        <H3>High-fidelity UI + prototype</H3>
        <P>
          The final prototype ties together filtering, favorites, planning, and
          reminders to make gift selection feel calm and less overwhelming.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Final screens",
              text: "The interface focuses on calm visual rhythm, strong hierarchy, and low-friction interaction to guide decisions.",
            },
            {
              title: "Prototype focus",
              text: "The experience emphasizes smart filters, profiles, and reminder moments that help users feel prepared.",
            },
          ]}
        />
        <Screens images={finalScreens} label="Gift Helper screens" phone />
      </>
    ),

    testing: (
      <>
        <P>
          The low-fidelity wireframes were used to check the structure before
          visual styling was applied.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Validated",
              text: "Navigation, filter logic, screen hierarchy and content structure.",
            },
            {
              title: "Result",
              text: "The final UI became easier to structure before visual styling was applied.",
            },
          ]}
        />
        <TextPanel>
          <P>
            <Placeholder>
              Did you test the prototype with anyone? What changed after it?
            </Placeholder>
          </P>
        </TextPanel>
      </>
    ),

    result: (
      <>
        <Facts
          items={[
            { label: "Screens", value: "7" },
            { label: "Personas", value: "3" },
            { label: "Core filters", value: "4" },
            { label: "Modules", value: "5" },
          ]}
        />
        <BulletList items={outcome} />
        <p>
          Final deliverable: interactive Figma prototype, UX research artifacts,
          low-fidelity wireframes and supportive visual system.
        </p>
      </>
    ),

    hardest: (
      <TextPanel>
        <P>
          <Placeholder>
            The hardest problem in this project and how you solved it.
          </Placeholder>
        </P>
      </TextPanel>
    ),

    learned: (
      <TextPanel>
        <P>
          <Placeholder>What you learned / what you would improve.</Placeholder>
        </P>
      </TextPanel>
    ),
  };

  return (
    <CasePage>
      <CaseHero
        back={{ href: "/figma", label: "← Figma projects" }}
        eyebrow="Figma concept · UX/UI Case Study · Mobile App"
        title="Gift Helper — Gift Finder App"
        result="A mobile concept that helps users choose the right present faster. The app combines smart filters, saved people profiles, reminders, favorites and supportive micro-interactions to reduce uncertainty during gift selection."
        snapshot={snapshot}
        links={[{ href: figmaPrototypeUrl, label: "Figma Prototype ↗" }]}
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
