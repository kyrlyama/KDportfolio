// pages/project1.js — CleanseTeam (also /uiux/cleaning-website).
// The website page and its UX case (data/uiuxCases.js) are now ONE case study
// in PROJECT PLAN order, so research comes before the result.
// All 7 screenshots + all UX artifacts are kept.
import Image from "next/image";

import {
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
  Swatches,
  TextPanel,
  caseStyles as styles,
} from "@/components/case";

const snapshot = [
  { label: "Role", value: "Design & frontend — solo project" },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "HTML, CSS, JavaScript, Bootstrap" },
  { label: "Status", value: "Closed (project didn’t take off)" },
];

const screens = [
  { src: "/project1.png", alt: "Cleaning website home screen" },
  { src: "/project12.png", alt: "Cleaning website services screen" },
  { src: "/project13.png", alt: "Cleaning website booking screen" },
  { src: "/project14.png", alt: "Cleaning website order confirmation screen" },
  { src: "/project15.png", alt: "Cleaning website reviews screen" },
  { src: "/project16.png", alt: "Cleaning website gallery screen" },
  { src: "/project17.png", alt: "Cleaning website contact screen" },
];

const decisions = [
  {
    chose: "One primary CTA — booking",
    why: "Landing structure built around one primary CTA — booking — repeated at each decision point.",
  },
  {
    chose: "Prices per service type",
    over: "“request a quote”",
    why: "Pricing presented per service type, so users don't have to request a quote for basic questions.",
  },
  {
    chose: "Mobile first",
    why: "Responsive layout tested on mobile first, since most traffic for local services comes from phones.",
  },
];

const results = [
  { value: "1", label: "primary CTA across all pages" },
  { value: "3", label: "click path from landing to booking" },
  { value: "100%", label: "responsive breakpoints covered" },
];

const palette = [
  { name: "Blue", hex: "#2B3CD6", usage: "Primary actions, trust" },
  { name: "Orange", hex: "#D78F07", usage: "Accents, highlights" },
  { name: "White", hex: "#FFFFFF", usage: "Background, clarity" },
];

const emotions = [
  {
    title: "Client (office manager)",
    items: [
      "Confidence in professionalism",
      "Calm about quality",
      "Sense of cleanliness and order",
    ],
  },
  {
    title: "Cleaning manager",
    items: [
      "Pride in a professional brand",
      "Motivation to offer services",
      "Trust in the system",
    ],
  },
  {
    title: "Potential client (after party)",
    items: [
      "Confidence in fast results",
      "Ease of ordering",
      "Modern, approachable feel",
    ],
  },
];

const conversationImages = [
  { src: "/uiux/cleaning/chatbot1.png", alt: "Chatbot draft 1" },
  { src: "/uiux/cleaning/chatbot2.png", alt: "Chatbot draft 2" },
  { src: "/uiux/cleaning/dialogues1.png", alt: "Dialogues 1" },
  { src: "/uiux/cleaning/dialogues2.png", alt: "Dialogues 2" },
  { src: "/uiux/cleaning/dialogues3.png", alt: "Dialogues 3" },
  { src: "/uiux/cleaning/dialogues4.png", alt: "Dialogues 4" },
];

export default function Project1() {
  const sections = {
    context: (
      <>
        <TextPanel>
          <P>
            A cleaning service website with a booking flow, transparent pricing
            and a conversion-focused structure. University project, designed and
            built solo.
          </P>
          <P>
            This started as a small startup with friends, but later the project
            didn’t take off and was closed. I kept this case as a design +
            development snapshot of the work.
          </P>
        </TextPanel>
        <Cards
          cols={2}
          items={[
            { label: "Project type", title: "University project · Year 3" },
            {
              label: "Focus",
              title: "Booking flow, pricing clarity, conversion structure",
            },
          ]}
        />
      </>
    ),

    problem: (
      <Callout title="The problem">
        Cleaning service websites often bury the booking action under generic
        marketing text. The goal was to structure a site where a visitor can
        understand services, see prices, and book a cleaning in as few steps as
        possible.
      </Callout>
    ),

    goal: (
      <TextPanel>
        Service landing + booking flow for a cleaning company. Focus on pricing
        clarity, trust signals, and conversion-friendly structure.
      </TextPanel>
    ),

    research: (
      <>
        <Gallery
          cols={1}
          title="Persona"
          text="Persona helped shape the tone: busy homeowners and small business managers."
          images={[{ src: "/uiux/cleaning/persona.png", alt: "Persona" }]}
        />
        <Gallery
          cols={1}
          title="User Scenarios / User Journey narrative"
          text="Mobile and desktop scenarios were mapped to capture key steps, objections, and decision points before translating them into the booking flow."
          images={[
            {
              src: "/uiux/cleaning/scenarios.png",
              alt: "User scenarios / user journey narrative",
            },
          ]}
        />
        <Gallery
          cols={1}
          title="UX Strategy / Value Definition"
          text="Strategic UX artifact used to align user needs, pain points, and service value before wireframing."
          images={[
            {
              src: "/uiux/cleaning/ValuePropositionCanvas.png",
              alt: "Value proposition canvas",
            },
          ]}
        />
        <H3>Research &amp; Conversation Mapping</H3>
        <P>
          User interviews and objections were translated into conversational
          flows and mapped to functional page blocks.
        </P>
        <Cards
          items={[
            {
              title: "Interviews",
              text: "Short interviews with busy homeowners.",
            },
            {
              title: "Pain points",
              text: "Unclear pricing and scheduling friction.",
            },
            { title: "Statistics", text: "Most bookings happen on mobile." },
          ]}
        />
        <Gallery cols={3} images={conversationImages} />
      </>
    ),

    decisions: (
      <div className={styles.decisions}>
        {decisions.map((d) => (
          <DecisionCard
            key={d.chose}
            {...d}
            cost={<Placeholder>COST: what did this choice cost?</Placeholder>}
          />
        ))}
      </div>
    ),

    design: (
      <>
        <H3>Palette &amp; Tone</H3>
        <P>
          The color system balances cleanliness, trust, and energy through a
          triadic scheme with clear role-based meaning.
        </P>
        <Swatches colors={palette} />
        <Cards
          items={[
            {
              title: "Color scheme",
              items: [
                "Triadic palette with blue as the anchor, white as visual breathing room, and orange for emphasis.",
                "Supports a clean, reliable tone while keeping key actions noticeable.",
              ],
            },
            {
              title: "Typography",
              text: "Bootstrap default typography for headings and body text to keep the interface familiar and readable.",
            },
            {
              title: "Tools",
              text: "Adobe Color for palette exploration and harmony checks.",
            },
          ]}
        />
        <H3>Emotional goals</H3>
        <Cards items={emotions} />
      </>
    ),

    development: (
      <>
        <P>
          Built with HTML, CSS, JavaScript and Bootstrap. Landing structure
          built around one primary CTA, pricing per service type, and a
          responsive layout tested on mobile first.
        </P>
        <H3>Screenshots</H3>
        <Screens images={screens} label="CleanseTeam website screenshots" />
        <P>
          GitHub repository:{" "}
          <Placeholder>
            add the correct link (the old one was “github.com/kyrlyama/...”)
          </Placeholder>
        </P>
      </>
    ),

    testing: (
      <TextPanel>
        <P>Responsive layout tested on mobile first.</P>
        <P>
          <Placeholder>Any other tests or versions? What changed?</Placeholder>
        </P>
      </TextPanel>
    ),

    result: (
      <>
        <Facts items={results} />
        <p>
          The project didn’t take off and was closed; this page is kept as a
          design + development snapshot of the work.
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
        back={{ href: "/websites", label: "← Websites" }}
        eyebrow="Website project · UX case"
        title="CleanseTeam"
        result="A cleaning service website with a booking flow, transparent pricing and a conversion-focused structure."
        snapshot={snapshot}
        media={
          <Image
            src="/uiux/cleaning/project1.png"
            alt="Cleaning website cover"
            width={3799}
            height={2088}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
