// pages/figma1.js — Travel Planning App (also /uiux/travel-app).
// PROJECT PLAN: Hero → Context → Problem → Goal → Research → Decisions →
// Design → Testing → Result → Hardest problem → Learned.
// Development is skipped: this is a Figma-only project.
// Every image and text from the old page is kept (see REDESIGN-CHANGES.md).
import Image from "next/image";

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
  TextPanel,
  TokenGroups,
  TypeScale,
  caseStyles as styles,
} from "@/components/case";

const figmaPrototypeUrl =
  "https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1";

const finalScreens = [
  "/figma23.png",
  "/figma24.png",
  "/figma25.png",
  "/figma26.png",
  "/figma27.png",
  "/figma28.png",
  "/figma29.png",
].map((src, i) => ({ src, alt: `Travel app final screen ${i + 1}` }));

const snapshot = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Timeline", value: "4 months" },
  { label: "Stack", value: "Figma · Mobile app" },
  { label: "Status", value: "Interactive Figma prototype" },
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

const highlights = [
  <>
    <strong>27 mobile screens</strong> designed for a complete high-fidelity
    prototype.
  </>,
  <>
    <strong>48 survey participants</strong> and{" "}
    <strong>6 usability tests</strong> informed the UX direction.
  </>,
  <>
    <strong>32 reusable components</strong> and{" "}
    <strong>9 component sets</strong> supported interface consistency.
  </>,
  <>
    <strong>Group voting, favorites, chat and itinerary</strong> reduce planning
    friction.
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
  "User stories",
  "Wireframes",
  "UI design",
  "Prototype",
];

const researchArtifacts = [
  <>
    <strong>Personas:</strong> key user segments, goals and constraints.
  </>,
  <>
    <strong>Empathy Map:</strong> emotions and pain points during group
    planning.
  </>,
  <>
    <strong>User Scenarios:</strong> journey from trip idea to final shared
    plan.
  </>,
  <>
    <strong>User Story:</strong> expectations aligned to real coordination
    needs.
  </>,
  <>
    <strong>Low-fidelity wireframes:</strong> layout, navigation and interaction
    structure.
  </>,
];

const personas = [1, 2, 3, 4].map((n) => ({
  src: `/figma1/persona${n}.png`,
  alt: `Persona ${n}`,
}));

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

// Travel App design system — exactly the values from the live page.
const colorTokenGroups = [
  {
    title: "Primary",
    description:
      "Bold purple brand colors for CTAs, group actions, highlights, and key conversion moments like voting and confirming plans.",
    tokens: [
      {
        name: "Primary 600",
        value: "#8A2DCE",
        usage: "Primary CTA, voting actions, core highlights",
      },
      {
        name: "Primary 500",
        value: "#A84DE8",
        usage: "Hover states, selection emphasis, interactive accents",
      },
      {
        name: "Primary 100",
        value: "#F1E1FE",
        usage: "Soft backgrounds, tags, light surfaces",
      },
    ],
  },
  {
    title: "Hover / Active",
    description:
      "Stronger CTA color for hover/active actions and a pale tint for lightweight interactive states like taps and focus.",
    tokens: [
      {
        name: "Primary 700",
        value: "#7107BD",
        usage: "Pressed states, stronger CTA emphasis",
      },
      {
        name: "Primary 200",
        value: "#D194FC",
        usage: "Secondary hover states, focus support",
      },
    ],
  },
  {
    title: "Neutrals",
    description:
      "Neutral scale for text hierarchy, cards, dividers, disabled controls, and quiet surfaces across the mobile UI.",
    tokens: [
      {
        name: "Neutral 900",
        value: "#111827",
        usage: "Primary text, icons, strong contrast",
      },
      {
        name: "Neutral 700",
        value: "#374151",
        usage: "Secondary text and supporting labels",
      },
      {
        name: "Neutral 500",
        value: "#6B7280",
        usage: "Muted labels, helper text",
      },
      {
        name: "Neutral 300",
        value: "#D1D5DB",
        usage: "Dividers and inactive UI elements",
      },
      {
        name: "Neutral 200",
        value: "#E5E7EB",
        usage: "Subtle borders and card structure",
      },
      {
        name: "Neutral 100",
        value: "#F3F4F6",
        usage: "Cards, dividers, neutral surfaces",
      },
      {
        name: "Neutral 50",
        value: "#F9FAFB",
        usage: "Soft page backgrounds and quiet containers",
      },
    ],
  },
  {
    title: "Semantic",
    description:
      "Semantic feedback colors for successful votes, validation errors, and warning messages during trip planning.",
    tokens: [
      {
        name: "Success",
        value: "#59B985",
        usage: "Confirmation states, successful actions",
      },
      {
        name: "Error",
        value: "#E1524C",
        usage: "Validation and error feedback",
      },
      {
        name: "Warning",
        value: "#9500FF",
        usage: "Attention and priority cues",
      },
    ],
  },
];

const typographyScale = [
  {
    label: "H1",
    size: 28,
    weight: 700,
    sample: "Headline",
    usage: "Onboarding and key screen titles",
  },
  {
    label: "H2",
    size: 20,
    weight: 700,
    sample: "Headline",
    usage: "Section titles for trip, activities, and itinerary blocks",
  },
  {
    label: "Body",
    size: 16,
    weight: 400,
    sample: "Body text",
    usage: "Trip descriptions, activity copy, and explanatory text",
  },
  {
    label: "Caption",
    size: 12,
    weight: 400,
    sample: "Caption",
    usage: "Helper text, meta labels, form hints, and small tags",
  },
];

const designSystemCards = [
  {
    src: "/figma1/8pt.png",
    alt: "Travel app 8pt spacing grid Figma board",
    title: "01 · 8pt grid",
    text: "Spacing follows 8px steps so trip cards, itinerary rows, voting controls, and mobile sections stay predictable.",
  },
  {
    src: "/figma1/components.png",
    alt: "Travel app reusable components Figma board",
    title: "02 · Reusable components",
    text: "Navigation bar, trip card, activity card, voting button, budget chip, avatar group, itinerary row, and input field.",
  },
  {
    src: "/figma1/states.png",
    alt: "Travel app cards and component states Figma board",
    title: "03 · Interaction states",
    text: "Hover, active, disabled, and focus-visible states are defined for buttons, swipe cards, voting controls, and inputs.",
  },
];

const outcome = [
  "Designed a complete collaborative travel planning prototype.",
  "Created a structured UX process from research to high-fidelity UI.",
  "Validated core navigation through early wireframes and user stories.",
  "Built a reusable visual system with colors, typography and component logic.",
];

export default function Figma1() {
  const sections = {
    context: (
      <>
        <TextPanel>
          <P>
            The project was created as a full UX/UI case study for a group
            travel planning product. The focus was not only on visual screens,
            but also on research, decision-making logic, reusable UI patterns
            and a clear mobile flow.
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
        Planning a trip with friends often requires switching between chats,
        booking apps, notes, maps and budget trackers. This creates confusion,
        duplicated decisions and conflicts inside the group.
      </Callout>
    ),

    goal: (
      <Cards
        cols={2}
        items={[
          {
            title: "Product goal",
            text: "Design one collaborative mobile experience where users can plan, vote, save ideas and manage trip details together.",
          },
          {
            title: "UX solution",
            text: "Combine itinerary, voting, destinations, activities, accommodation, transport and chat into one structured flow.",
          },
        ]}
      />
    ),

    research: (
      <>
        <TextPanel>
          <P>
            The process started with UX research to understand how groups plan
            trips, resolve disagreements and keep schedules clear. Insights were
            translated into personas, empathy map, user scenarios and user
            stories, then applied to navigation and mobile UI patterns.
          </P>
          <BulletList items={researchArtifacts} />
        </TextPanel>
        <Facts
          items={[
            { label: "Participants", value: "48" },
            { label: "Usability tests", value: "6" },
            { label: "Personas", value: "4" },
            { label: "Core artifacts", value: "5" },
          ]}
        />

        <Gallery
          title="4 Personas"
          text="Personas helped define priorities: quick coordination, clarity of responsibilities and reducing friction when planning with friends."
          images={personas}
        />

        <Gallery
          cols={1}
          title="Empathy Map"
          text="The empathy map captures what users think, feel and struggle with when planning trips together. It helped shape microcopy, reduce coordination friction and make the interface feel more supportive."
          images={[{ src: "/figma1/empathymap.png", alt: "Empathy Map" }]}
        />

        <H3>User Scenarios</H3>
        <P>
          Scenarios describe the flow from intent — “Let’s plan a trip” — to
          choosing destinations, agreeing on activities, splitting budget and
          confirming the final shared plan.
        </P>
        <Steps
          items={[
            "Trip idea",
            "Destination",
            "Budget",
            "Activities",
            "Voting",
            "Shared plan",
          ]}
        />
        <Gallery
          cols={1}
          images={[{ src: "/figma1/scenario.png", alt: "Scenario" }]}
        />

        <H3>User Story</H3>
        <P>
          User stories helped validate the feature set and keep the prototype
          aligned with real expectations for group coordination, decision making
          and clarity.
        </P>
        <Callout title="Why it matters">
          User stories translate research into product requirements. They helped
          connect user goals with concrete app features before moving into
          high-fidelity UI.
        </Callout>
        <Gallery
          cols={1}
          images={[{ src: "/figma1/userstory.png", alt: "User Story" }]}
        />
      </>
    ),

    decisions: (
      <>
        <P>
          The most important product decisions focused on reducing decision
          fatigue, making collaboration clearer and keeping the interface easy
          to scan on mobile.
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
          The workflow followed a product design process from discovery to
          high-fidelity prototype. Each step helped reduce uncertainty and
          connect design decisions with user needs.
        </P>
        <Steps items={processSteps} />

        <Gallery
          cols={1}
          title="Low-fidelity prototype"
          text="Early hand-drawn prototype created to explore layout structure, navigation flow and screen hierarchy before moving to high-fidelity design in Figma. This stage helped validate core interactions and reduce unnecessary UI complexity."
          images={[
            {
              src: "/figma1/prototype.png",
              alt: "Low-fidelity hand-drawn prototype",
            },
          ]}
        />

        <H3>Design system</H3>
        <P>
          The design system uses a vibrant purple core, calm neutrals, and clear
          semantic states to support confident group planning on mobile.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Color tokens",
              text: "The color system uses purple for key actions, neutrals for hierarchy and readability, and semantic accents for state clarity during group planning.",
            },
            {
              title: "Typography scale",
              text: "The scale keeps headlines, section titles, body copy, and captions distinct so the mobile experience feels clean and purposeful.",
            },
          ]}
        />
        <TokenGroups groups={colorTokenGroups} />
        <TypeScale
          intro="Readable hierarchy for a collaborative travel app with planning, voting, itinerary, and chat content. Inter regular with H1 28px, H2 20px, body 16px, and caption 12px for clear hierarchy and readable mobile UI."
          items={typographyScale}
        />
        <Cards
          items={[
            {
              title: "Color scheme",
              items: [
                "Purple anchors the main actions and decision moments.",
                "Neutral surfaces keep content readable and structured.",
                "Semantic feedback states support clear completion and error handling.",
              ],
            },
            {
              title: "Energetic",
              items: [
                "Bold purple accents make the experience feel vibrant.",
                "Clear hierarchy keeps the flow focused and inviting.",
              ],
            },
            {
              title: "Trustworthy",
              items: [
                "Neutral surfaces keep the UI calm and structured.",
                "Consistent spacing makes touch targets feel deliberate.",
              ],
            },
          ]}
        />
        <P>
          Tools: Figma styles, component variants, token-based color decisions,
          and interactive prototype states.
        </P>

        <Gallery
          cols={3}
          images={designSystemCards}
          link={{ href: figmaPrototypeUrl, label: "Figma source" }}
        />

        <H3>High-fidelity UI + prototype</H3>
        <P>
          The final experience combines the high-fidelity UI with an interactive
          prototype that shows the shared planning flow, voting interactions,
          itinerary structure, and collaborative decision moments.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Final screens",
              text: "The UI focuses on clarity for group coordination with strong CTA hierarchy, readable states, and a calm mobile-first structure.",
            },
            {
              title: "Prototype focus",
              text: "The prototype highlights itinerary creation, activity voting, group planning, and shared decision-making without overwhelming the user.",
            },
          ]}
        />
        <Screens images={finalScreens} label="Travel app final screens" phone />
        <Callout title="Prototype area">
          <p>
            High-fidelity screens connect planning, voting, itinerary review,
            and collaborative actions.{" "}
            <a
              href={figmaPrototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Figma prototype ↗
            </a>
          </p>
        </Callout>
      </>
    ),

    testing: (
      <>
        <P>
          6 usability tests and the early low-fidelity wireframes were used to
          check the structure before visual styling.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Validated",
              text: "Navigation, hierarchy, core flow and screen structure.",
            },
            {
              title: "Result",
              text: "The final UI had a clearer structure before visual styling was applied.",
            },
          ]}
        />
        <TextPanel>
          <P>
            <Placeholder>
              What changed after the usability tests? One or two concrete
              changes (before → after).
            </Placeholder>
          </P>
        </TextPanel>
      </>
    ),

    result: (
      <>
        <Facts
          items={[
            { label: "Screens", value: "27" },
            { label: "Components", value: "32" },
            { label: "Research", value: "48 users" },
            { label: "Testing", value: "6 users" },
          ]}
        />
        <BulletList items={outcome} />
        <p>
          Final deliverable: interactive Figma prototype, UX research artifacts,
          low-fidelity wireframes and reusable visual system.
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
        eyebrow="University · UX/UI Case Study · Mobile App"
        title="Collaborative Travel Planning App"
        result="A mobile prototype for planning trips with friends. The app helps users choose destinations, split budgets, vote on activities, organize schedules and keep the whole group aligned in one shared travel space."
        snapshot={snapshot}
        links={[{ href: figmaPrototypeUrl, label: "Open in Figma ↗" }]}
        media={
          <Image
            src="/figma1/figma1.png"
            alt="Travel planning app high-fidelity UI preview"
            width={1067}
            height={805}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
