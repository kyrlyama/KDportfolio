// pages/figma3.js — Likefon UX case study (also /uiux/likefon-prototype).
// PROJECT PLAN order. All 11 original stages are kept: they now live inside
// the plan sections (research → section 4, IA/wireframes/design system/
// prototype/flow/states → section 6, technical plan + SEO → section 7).
// NEW palette from likefon-website (app/globals.css) + Manrope (this page only).
// The old orange palette is shown only as "First version" in Testing.
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import {
  BulletList,
  Callout,
  CaseHero,
  CasePage,
  CasePlan,
  Cards,
  DecisionCard,
  Gallery,
  H3,
  More,
  P,
  Placeholder,
  Steps,
  Table,
  TextPanel,
  TokenGroups,
  TypeScale,
  caseStyles as styles,
} from "@/components/case";

// Manrope — the Likefon product font. Loaded only on this page.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

const figmaPrototypeUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=52-171&t=z2ae5zBKMUZ57psw-1";
const architectureBoardUrl =
  "https://www.figma.com/board/JriTyumTnhVhHN9lBNZHIN/Untitled?node-id=0-1&t=vhqudZzpZvh394pF-1";
const statesFigmaUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=52-2&t=z2ae5zBKMUZ57psw-1";
const wireframesFigmaUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=0-1&t=z2ae5zBKMUZ57psw-1";

const snapshot = [
  { label: "Role", value: "Designer + developer · Solo" },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "Figma, FigJam" },
  { label: "Status", value: "Hi-fi prototype · website in progress" },
];

const quickFacts = [
  { label: "Project type", value: "Commercial project · Likefon" },
  { label: "Business", value: "Likefon phone accessories store in Narva" },
  { label: "Main goal", value: "+30% offline foot traffic in 6 months" },
  {
    label: "Primary users",
    value: "Offline shoppers 35–60 and fast-research users 18–35",
  },
  { label: "Deliverable", value: "Discovery document for PDF / Notion" },
];

const projectFocus = [
  <>
    <strong>Business:</strong> raise brand awareness and offline store visits.
  </>,
  <>
    <strong>UX:</strong> make product discovery, filtering, promotions, and
    contact actions simple.
  </>,
  <>
    <strong>UI:</strong> mobile-first structure with trustworthy catalog,
    services, and brand blocks.
  </>,
  <>
    <strong>Delivery:</strong> design system, high-fidelity prototype, technical
    plan, and optimization.
  </>,
];

const targetAudiences = [
  {
    title: "Primary audience — 35–60",
    text: "Prefer shopping offline and value personal consultation. Their main fear is buying the wrong accessory online, so trust and in-store guidance matter more than speed.",
  },
  {
    title: "Secondary audience — 18–35",
    text: "Research prices and options online, then visit the store to buy quickly. Long delivery times elsewhere push them toward a store that can fulfill urgent needs on the spot.",
  },
];

const kpis = [
  "Primary KPI: increase offline store visits by 30% within 6 months",
  "Reach 1,500 monthly website visitors within 3 months",
  "Achieve Top-3 Google ranking for “phone accessories Narva”",
  "Achieve 5% click-through rate to Google Maps directions",
];

const competitiveInsights = [
  {
    title: "Assortment advantage",
    text: "Competitors focus mostly on newer phone models. Likefon keeps accessories for older devices, which creates a niche advantage for customers aged 35+ who do not upgrade frequently.",
  },
  {
    title: "Key conclusion",
    text: "Likefon’s main competitive disadvantage is not pricing but limited online visibility. The website closes this gap and positions the store as a service-driven, value-oriented local retailer.",
  },
];

const yes = <span aria-label="Yes">✓</span>;
const no = <span aria-label="No">✕</span>;
const competitorRows = [
  ["Offline store", yes, yes, yes, yes],
  ["Online store", yes, yes, no, yes],
  ["Installation included", no, no, yes, yes],
  ["Free reinstallation", no, no, yes, yes],
  ["Old phone models", "Limited", "Limited", yes, yes],
  ["Major seasonal discounts", yes, yes, "Limited", yes],
  ["Micro-seasonal promotions", no, no, no, yes],
  ["SEO visibility", "Medium", "Medium", no, "High"],
];

const researchTasks = [
  "Conduct 5–7 mini interviews with real or similar Likefon customers",
  "Validate pain points instead of collecting abstract opinions",
  "Create JTBD statements for each user character",
  "Build Customer Journey Maps for offline buyers, online researchers, and deal seekers",
  "Formulate product hypotheses using: If we ___, then ___ because ___",
];

const painPointGroups = [
  {
    title: "35+ audience",
    items: [
      "Fear of ordering the wrong case",
      "Difficulty applying screen protectors",
      "Low trust in unknown online shops",
      "Need affordable products and simple explanations",
    ],
  },
  {
    title: "18–30 audience",
    items: [
      "Long delivery times from online shops",
      "Doubts about cheap product quality",
      "Low trust in unknown online shops",
      "Need accessories urgently and at a good price",
    ],
  },
];

const personaImages = [
  {
    src: "/figma3/persona1.png",
    title: "Persona — Anna",
    text: "Primary 35+ offline buyer who needs personal consultation, clear prices, and confidence that the accessory fits her phone.",
  },
  {
    src: "/figma3/persona2.png",
    title: "Persona — Marina",
    text: "Research-online-buy-offline user who compares prices and product details before visiting the physical store.",
  },
  {
    src: "/figma3/person3.png",
    title: "Persona — Oleg",
    text: "Loyal deal seeker who looks for current discounts, bundles, and competitive prices before recommending the store.",
  },
];

const jtbd = [
  {
    title: "Anna",
    text: "When my phone needs protection, I want to visit a store and get help choosing accessories so that I do not buy the wrong product.",
  },
  {
    title: "Marina",
    text: "When I plan to buy phone accessories, I want to check prices and options online so that I can choose the best offer before visiting the store.",
  },
  {
    title: "Oleg",
    text: "When I want to buy phone accessories, I want to see current discounts and bundle offers so that I can save money.",
  },
];

const uxRequirementLinks = [
  ["When I want to see discounts", "Promotions / Deals section"],
  ["When I want to check prices online", "Catalog with clear prices"],
  [
    "When I want help installing a screen protector",
    "Visible service information and installation guarantee",
  ],
];

const journeyMapImages = [
  {
    src: "/figma3/customermapAnna.png",
    title: "Customer Journey Map — Anna",
    text: "Shows the offline buyer path from phone protection need to store consultation, website research, and confident purchase.",
  },
  {
    src: "/figma3/customermapMarina.png",
    title: "Customer Journey Map — Marina",
    text: "Documents the online comparison journey where website catalog, photos, and availability help her decide faster.",
  },
  {
    src: "/figma3/customermapOleg.png",
    title: "Customer Journey Map — Oleg",
    text: "Highlights the deal-seeking path where promotions and bundle visibility become the main conversion opportunity.",
  },
];

const journeyMaps = [
  {
    title: "Anna — Offline buyer",
    rows: [
      [
        "Problem",
        "Her phone needs protection",
        "I don’t want the screen to get scratched.",
        "Doesn’t know which accessory to choose",
        "Simple product explanations",
      ],
      [
        "Search",
        "Thinks about where to buy",
        "It’s easier to go to a store.",
        "Online stores feel confusing",
        "Simple and clear website catalog",
      ],
      [
        "Store visit",
        "Visits Likefon",
        "The salesperson will help me.",
        "Afraid of choosing the wrong product",
        "In-store consultation",
      ],
      [
        "Recommendation",
        "Staff recommends the website",
        "I can check options at home.",
        "Doesn’t know how to search online",
        "Phone model filter",
      ],
      [
        "Website research",
        "Looks at products",
        "Now it’s easier to understand.",
        "Previously didn’t trust online info",
        "Clear photos and descriptions",
      ],
      [
        "Purchase",
        "Returns and buys",
        "Feels confident",
        "—",
        "Screen protector installation",
      ],
    ],
  },
  {
    title: "Marina — Research online → buy offline",
    rows: [
      [
        "Problem",
        "Wants a new phone case",
        "I want something nice and reliable.",
        "—",
        "Show new arrivals",
      ],
      [
        "Search",
        "Searches prices online",
        "Where is it cheaper?",
        "Photos may differ from reality",
        "High-quality product photos",
      ],
      [
        "Compare",
        "Compares options",
        "I want to see colors.",
        "Doesn’t know store availability",
        "Show availability",
      ],
      [
        "Website research",
        "Checks Likefon website",
        "Now I can compare easily.",
        "Had to search different websites",
        "Full product catalog",
      ],
      [
        "Store visit",
        "Travels to the store",
        "I already know what I want.",
        "—",
        "Faster decision making",
      ],
      [
        "Purchase",
        "Buys the accessory",
        "Satisfaction",
        "—",
        "Installation service",
      ],
    ],
  },
  {
    title: "Oleg — Deal-seeking loyal customer",
    rows: [
      [
        "Problem",
        "Wants accessories",
        "Maybe there are discounts.",
        "—",
        "Promotions section",
      ],
      [
        "Search",
        "Checks prices",
        "I want the best deal.",
        "Hard to track discounts",
        "Clear promotions page",
      ],
      [
        "Website visit",
        "Views current deals",
        "Let’s see current offers.",
        "No place to see promotions",
        "Discount and bundle section",
      ],
      [
        "Compare",
        "Looks at bundles",
        "Case + glass is more profitable.",
        "Promotions not always visible",
        "Bundle deals",
      ],
      [
        "Store visit",
        "Goes to the store",
        "I already know what to buy.",
        "—",
        "Faster purchase",
      ],
      [
        "Purchase",
        "Buys accessories",
        "Satisfaction",
        "—",
        "Save money through deals",
      ],
    ],
  },
];

const hypotheses = [
  {
    title: "Phone model filtering",
    text: "If we add a phone model filter, then customers will feel more confident because they know the products are compatible with their device.",
  },
  {
    title: "Promotions visibility",
    text: "If we highlight seasonal offers, then customers will visit the store more often because they know when special deals are available.",
  },
];

const keyDecisions = [
  {
    chose: "Products grouped by phone model",
    over: "a flat category list",
    why: 'The "phone model filtering" hypothesis tested well, so the catalog groups products by model instead of a flat category list — this prevents users from choosing an incompatible accessory.',
  },
  {
    chose: "Large banner-style promotion blocks",
    over: "a small menu link",
    why: 'The "promotions visibility" hypothesis showed deals get missed if buried in a menu. Promotions got a dedicated, highly visible block instead of a small link.',
  },
  {
    chose: "Large contact buttons",
    over: "a contact form",
    why: "The business goal is offline foot traffic, not online leads, so contact actions are big, direct buttons (call, directions) instead of a form that would keep the user on the site.",
  },
];

const sitemap = [
  {
    title: "Home",
    items: [
      "Catalog entry",
      "Promotions entry",
      "Services entry",
      "About Store",
      "Contact / map CTA",
    ],
  },
  {
    title: "Catalog — shop by phone model",
    items: [
      "Phone Cases: iPhone 11–17, Samsung A/S Series, Xiaomi Mi/Redmi/Note",
      "Screen Protectors: iPhone, Samsung, Xiaomi",
      "Chargers: wall, car, wireless",
      "Headphones and selfie sticks",
    ],
  },
  {
    title: "Promotions",
    items: [
      "Bundle Offers: Case + Glass, -30% on phone cases",
      "Seasonal Promotions: Summer sale, Valentine’s Day, Christmas",
      "Current Discounts",
    ],
  },
  {
    title: "Services",
    items: [
      "Phone screen repair and battery replacement",
      "Speaker, charging port, and headphone cleaning",
      "Screen protector installation",
      "Account creation / recovery, app troubleshooting, data transfer",
    ],
  },
  {
    title: "About Store",
    items: ["Store information", "Location", "Opening hours", "Store photos"],
  },
  { title: "Contact", items: ["Phone number", "Email", "Map and directions"] },
];

const userFlows = [
  "Home → Catalog → Phone Cases → Samsung → Samsung A Series → Samsung A36 → Product List",
  "Home → Catalog → Screen Protectors → Samsung → Samsung A36 → Product List",
  "Home → Promotions → Seasonal Promotions → Valentine’s Day → Product List",
];

const architectureSketchImages = [
  {
    src: "/figma3/layout1.png",
    title: "Information architecture draft",
    text: "Early structure sketch for the main navigation and content blocks before high-fidelity design work.",
  },
  {
    src: "/figma3/layout2.png",
    title: "Catalog hierarchy sketch",
    text: "Explores how product categories and phone model filtering should be grouped for faster accessory discovery.",
  },
  {
    src: "/figma3/layout3.png",
    title: "Services and contact structure",
    text: "Maps service, contact, and store information sections around the goal of bringing users to the offline shop.",
  },
];

const uxDecisions = [
  [
    "Home screen",
    "Simple layout with clear entry points",
    "Users, especially 35+, need fast understanding without confusion.",
  ],
  [
    "Catalog",
    "Category-based navigation with icons",
    "Users recognize categories faster visually than through text.",
  ],
  [
    "Product list",
    "Products grouped by phone model",
    "This prevents users from choosing incompatible accessories.",
  ],
  [
    "Services",
    "Simple service list",
    "Users need fast answers to clear problems.",
  ],
  [
    "Promotions",
    "Large banner-style blocks",
    "Promotions must be highly visible.",
  ],
  [
    "Brands",
    "Display partner brands",
    "Brand logos build trust and product quality perception.",
  ],
  [
    "Contacts",
    "Large contact buttons",
    "The main conversion goal is bringing users to the physical store.",
  ],
];

// NEW Likefon palette — from github.com/kyrlyama/likefon-website (app/globals.css)
const colorTokenGroups = [
  {
    title: "Primary",
    description:
      "Blue brand colors for CTAs, promotional banners, active states, and key conversion actions.",
    tokens: [
      { name: "Primary 600", value: "#054692" },
      { name: "Primary 500", value: "#0061D2" },
      { name: "Primary 100", value: "#DEEDFF" },
    ],
  },
  {
    title: "Hover / Active",
    description:
      "Stronger CTA color for hover actions and a pale background for active, lightweight interactive states.",
    tokens: [
      { name: "Hover · Primary 700", value: "#053369" },
      { name: "Active · Primary 50", value: "#EBF3FD" },
    ],
  },
  {
    title: "Neutrals",
    description:
      "Neutral scale for text hierarchy, cards, dividers, disabled controls, and quiet surfaces.",
    tokens: [
      { name: "Neutral 900", value: "#111827" },
      { name: "Neutral 700", value: "#374151" },
      { name: "Neutral 500", value: "#6B7280" },
      { name: "Neutral 300", value: "#D1D5DB" },
      { name: "Neutral 200", value: "#E5E7EB" },
      { name: "Neutral 100", value: "#F3F4F6" },
      { name: "Neutral 50", value: "#F9FAFB" },
    ],
  },
  {
    title: "Semantic",
    description:
      "Semantic feedback colors for success, validation errors, warnings, and promotion-sensitive messages.",
    tokens: [
      { name: "Success", value: "#10B981" },
      { name: "Warning", value: "#F59E0B" },
      { name: "Error", value: "#EF4444" },
    ],
  },
];

// FIRST VERSION (old orange palette) — shown only in Testing and iterations
const firstVersionTokens = [
  {
    title: "Primary (first version)",
    description:
      "Warm orange brand colors for CTAs, promotional banners, active states, and key conversion actions.",
    tokens: [
      { name: "Primary 600", value: "#DE5F25" },
      { name: "Primary 500", value: "#ED7A32" },
      { name: "Primary 100", value: "#FBF3EA" },
    ],
  },
  {
    title: "Hover / Active (first version)",
    description:
      "Stronger CTA color for hover/active actions and pale focus background for lightweight interactive states.",
    tokens: [
      { name: "Primary 700", value: "#BA471D" },
      { name: "Primary 50", value: "#FFF8F0" },
    ],
  },
  {
    title: "Semantic (first version)",
    description:
      "Semantic feedback colors for success, validation errors, warnings, and promotion-sensitive messages.",
    tokens: [
      { name: "Success", value: "#59B985" },
      { name: "Error", value: "#E1524C" },
      { name: "Warning", value: "#F0A936" },
    ],
  },
];

const typographyScale = [
  {
    label: "H1",
    size: 28,
    weight: 700,
    sample: "Headline",
    usage: "Landing hero and important page titles",
  },
  {
    label: "H2",
    size: 20,
    weight: 700,
    sample: "Headline",
    usage: "Section titles for catalog, services, and case-study blocks",
  },
  {
    label: "Body",
    size: 16,
    lineHeight: 24,
    weight: 400,
    sample: "Body text",
    usage: "Product descriptions, service copy, and explanatory text",
  },
  {
    label: "Caption",
    size: 12,
    weight: 400,
    sample: "Caption",
    usage: "Helper text, product meta, form hints, and small labels",
  },
];

const designSystemCards = [
  {
    src: "/figma3/8pt.png",
    alt: "Likefon 8pt spacing grid Figma board",
    title: "01 · 8pt grid",
    text: "Spacing follows 8px steps so catalog cards, filters, service blocks, and responsive sections stay predictable.",
  },
  {
    src: "/figma3/components.png",
    alt: "Likefon reusable components Figma board",
    title: "02 · Reusable components",
    text: "Header, footer, category card, product card, filters, promotion banner, service card, contact CTA, and input field.",
  },
  {
    src: "/figma3/states.png",
    alt: "Likefon cards and component states Figma board",
    title: "03 · Interaction states",
    text: "Hover, active, disabled, and focus-visible states are defined for buttons, filters, links, cards, and inputs.",
  },
];

const mainUserFlowDetails = [
  {
    title: "Scenario",
    text: "A customer wants to find a compatible phone case for iPhone 17 Pro and continue the purchase offline.",
  },
  {
    title: "User goal",
    text: "Quickly find a suitable phone case for a specific phone model.",
  },
  {
    title: "Business goal",
    text: "Increase awareness of Like’s offline stores and guide users toward store visits, calls, or route requests.",
  },
  {
    title: "Flow summary",
    text: "This flow shows how a user discovers the store offer, selects a product category and phone model, compares available cases, opens a product page, and completes an offline action.",
  },
];

const stateCards = [
  {
    title: "Edge cases",
    text: "Phone model not found, promotion expired, no accessories available, or service unavailable. These cases prevent dead ends by explaining what happened and suggesting a next step.",
  },
  {
    title: "Empty states",
    text: "No accessories found, no active offers, and no search results. Each empty state gives a clear explanation and redirects users to another model, catalog, or search path.",
  },
  {
    title: "Error states",
    text: "Something went wrong, no internet connection, and image unavailable. Error states reduce frustration by showing a retry action instead of leaving the interface unclear.",
  },
];

const edgeCaseImages = [
  {
    src: "/figma3/edgecase1.png",
    title: "Edge case — phone model not found",
    text: "Explains what happens when the selected phone model is missing and redirects users to another model or contact option.",
  },
  {
    src: "/figma3/edgecase2.png",
    title: "Edge case — promotion expired",
    text: "Prevents confusion when a seasonal offer is no longer available and suggests current promotions instead.",
  },
  {
    src: "/figma3/edgecase3.png",
    title: "Edge case — no accessories available",
    text: "Clarifies out-of-stock or missing accessory situations and keeps users in the catalog flow.",
  },
  {
    src: "/figma3/edgecase4.png",
    title: "Edge case — service unavailable",
    text: "Shows how the interface communicates temporary service limitations without creating a dead end.",
  },
];

const stateImages = [
  {
    src: "/figma3/emptystate.png",
    title: "Empty states",
    text: "Covers no accessories, no active offers, and no search results with clear recovery actions for users.",
  },
  {
    src: "/figma3/errorstate.png",
    title: "Error states",
    text: "Shows failure states for unexpected errors, no internet connection, and unavailable images with retry options.",
  },
];

const techItems = [
  "Framework: Next.js App Router",
  "Styling: Tailwind CSS",
  "State: React Hooks / Zustand",
  "Data: JSON / Mock API",
  "SEO: metadata and semantic pages",
  "i18n: next-intl",
  "Image optimization: next/image",
  "Deployment: Vercel",
];

const developmentStages = [
  "Layout, header, footer, and grid system",
  "Product cards and reusable category cards",
  "Phone model filters and empty states",
  "Product page and service details",
  "Cart-like saved selection logic for future scalability",
  "Clean component-based architecture with props and reusable data structures",
];

const seoPerformance = [
  "Meta tags and Open Graph previews",
  "Semantic HTML and local business structured data",
  "Lazy loading and optimized images",
  "Code splitting for fast initial load",
  "Lighthouse audit and PageSpeed performance screenshots",
];

const finalPolish = [
  "Trade-offs and challenges",
  "Why this stack was chosen",
  "What could be improved after launch",
  "Scalability opportunities for catalog, promotions, and real inventory",
  "Expected real business metrics after search visibility improves",
];

// Collapsed deep dive = the original 11 stages (list only)
const stages = [
  "Stage 1 — Product framing & problem definition (Discovery document for PDF / Notion)",
  "Stage 2 — Research & hypotheses (interviews, pain points, personas, JTBD, journey maps)",
  "Stage 3 — Information architecture (UX block ready in Figma + FigJam)",
  "Stage 4 — Wireframes + UX decisions",
  "Stage 5 — Design system",
  "Stage 6 — High-fidelity UI + prototype",
  "Stage 7 — Main user flow",
  "Stage 8 — Edge, empty, and error states",
  "Stage 9 — Technical planning",
  "Stage 10 — SEO + performance + optimization",
  "Stage 11 — Retrospective",
];

export default function Figma3() {
  const sections = {
    context: (
      <>
        <Cards
          cols={2}
          items={[
            {
              label: "What is Likefon",
              title: "Local phone accessories and service store in Narva.",
            },
            {
              label: "Main business goal",
              title:
                "Increase offline foot traffic by turning search visitors into store actions.",
            },
          ]}
        />
        <TextPanel>
          <P>
            The website should make Likefon visible online and help customers
            understand products, services, prices, promotions, and location
            before visiting the physical store. Online payment and checkout are
            intentionally out of scope: the goal is not e-commerce, it is
            driving offline foot traffic and growing Likefon&apos;s customer
            base.
          </P>
          <H3>Project focus</H3>
          <BulletList items={projectFocus} />
        </TextPanel>
        <Cards
          items={quickFacts.map((f) => ({ label: f.label, title: f.value }))}
        />
        <H3>Value proposition</H3>
        <P>
          Likefon offers reliable accessories, professional installation, and
          trusted in-store service — a safe and convenient alternative to buying
          accessories from unknown online stores.
        </P>
        <Cards cols={2} items={targetAudiences} />
        <P>
          Part of the <Link href="/projects/likefon">Likefon project</Link>:
          brand refresh → UX case study → website.
        </P>
      </>
    ),

    problem: (
      <Callout title="Problem statement">
        Likefon currently operates only as an offline store. Even with
        competitive prices, professional installation, and a wide assortment of
        accessories, many potential customers do not know about the store
        because there is no online presence.
      </Callout>
    ),

    goal: (
      <>
        <TextPanel>
          <P>
            Increase offline foot traffic by turning search visitors into store
            actions.
          </P>
          <H3>KPIs</H3>
          <BulletList items={kpis} />
        </TextPanel>
      </>
    ),

    research: (
      <>
        <H3>Competitive analysis</H3>
        <P>
          Competitors compete primarily through base pricing and online
          visibility, but they do not communicate service value strongly.
          Likefon can differentiate through bundled pricing, service guarantees,
          older phone model support, and flexible year-round promotions.
        </P>
        <Cards cols={2} items={competitiveInsights} />
        <More label="Show full comparison table">
          <Table
            head={[
              "Feature",
              "Click",
              "Evelatus",
              "Likefon current",
              "Likefon proposed",
            ]}
            rows={competitorRows}
          />
          <Gallery
            cols={1}
            images={[
              {
                src: "/figma3/summarytable.png",
                alt: "Competitor summary table",
                title: "Summary table",
              },
            ]}
          />
        </More>
        <P>Deliverable: Discovery document for PDF / Notion.</P>

        <H3>Research &amp; hypotheses</H3>
        <TextPanel>
          <P>
            Research focuses on behavior, not only opinions: short 10–15 minute
            conversations with people from both target segments, pain point
            validation, JTBD statements, customer journey maps, and actionable
            product hypotheses for the website structure.
          </P>
          <BulletList items={researchTasks} />
          <P>
            Interviews covered both segments: current buying habits, trust in
            online stores, and what information would make them check a website
            before visiting.
          </P>
        </TextPanel>

        <H3>Validated pain points</H3>
        <Cards cols={2} items={painPointGroups} />

        <Gallery
          cols={3}
          title="Personas"
          text="Separate persona cards describe the main user archetypes before moving into journey maps or wireframes. This keeps the research artifacts easy to scan and understand."
          images={personaImages}
        />

        <H3>Jobs To Be Done</H3>
        <P>
          Formula: <strong>When ___ happens, I want to ___ so that ___.</strong>
        </P>
        <Cards items={jtbd} />
        <H3>Product requirements from JTBD</H3>
        <Table head={["JTBD", "UX solution"]} rows={uxRequirementLinks} />

        <H3>Customer journey map &amp; hypotheses</H3>
        <Steps
          items={[
            "Phone screen breaks",
            "Searches in Google",
            "Compares prices",
            "Reads reviews",
            "Visits the store",
            "Gets installation service",
          ]}
        />
        <P>
          Current problem: Likefon has no website step in the journey, so the
          store is missing the moment where customers compare options online.
        </P>
        <Gallery
          cols={3}
          title="Customer Journey Map visuals"
          text="Journey map screenshots are separated from personas because they explain the step-by-step customer behavior, pain points, and opportunities after the user archetypes are defined."
          images={journeyMapImages}
        />
        <More label="Show detailed customer journey maps (3)">
          {journeyMaps.map((j) => (
            <Table
              key={j.title}
              caption={j.title}
              head={[
                "Stage",
                "Actions",
                "Thoughts / feelings",
                "Pain points",
                "Opportunity",
              ]}
              rows={j.rows}
            />
          ))}
        </More>
        <H3>Formulated hypotheses</H3>
        <Cards cols={2} items={hypotheses} />
        <P>Deliverable: research section for the Likefon project.</P>
      </>
    ),

    decisions: (
      <>
        <P>
          Three decisions came directly out of the research above — not from
          personal taste, but from a hypothesis, a pain point, or the business
          goal.
        </P>
        <div className={styles.decisions}>
          {keyDecisions.map((d) => (
            <DecisionCard
              key={d.chose}
              {...d}
              cost={<Placeholder>COST: what did this choice cost?</Placeholder>}
            />
          ))}
        </div>
      </>
    ),

    design: (
      <>
        <H3>Information architecture</H3>
        <Cards items={sitemap} />
        <H3>User flows</H3>
        <BulletList ordered items={userFlows} />
        <Callout title="Navigation logic">
          Product discovery narrows by category, brand, and model so customers
          reach compatible accessories in fewer decisions.
        </Callout>
        <Gallery
          cols={3}
          title="Information architecture sketches"
          text="These layout sketches are shown as their own block because they explain the website structure: navigation, catalog hierarchy, services, and contact paths."
          images={architectureSketchImages}
          link={{
            href: architectureBoardUrl,
            label: "Open architecture board",
          }}
        />
        <P>Deliverable: UX block ready in Figma + FigJam.</P>

        <H3>Wireframes + UX decisions</H3>
        <P>
          Low-fidelity wireframes are mobile-first and focused on product
          discovery, search, and promotions.
        </P>
        <Gallery
          cols={1}
          title="Low-fidelity wireframes"
          text="Wireframes are kept in a dedicated block so the layout logic and UX decisions are not mixed with research personas, journey maps, or state screens."
          images={[
            {
              src: "/figma3/low.png",
              title: "Low-fidelity mobile wireframes",
              text: "Mobile-first wireframes for home, catalog, product discovery, promotions, services, and contact actions.",
            },
          ]}
          link={{
            href: wireframesFigmaUrl,
            label: "Open low-fidelity wireframes",
          }}
        />
        <Table head={["Screen", "Decision", "Why"]} rows={uxDecisions} />
        <Callout title="Mobile-first thinking">
          Product discovery, search, and promotions come first because mobile
          users need a fast path from Google search to store confidence.
        </Callout>

        <H3>Design system</H3>
        <P>
          A practical Figma foundation: brand colors, semantic states,
          typography, spacing, reusable components, and interaction states.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Color tokens",
              text: "Tokens support brand recognition, surface hierarchy, UI feedback, and promotional accents. The primary blue CTA color is reserved for conversion actions like “Find your model” and “Call store”.",
            },
            {
              title: "Typography scale",
              text: "The scale separates landing headlines, section headings, body copy, and captions for product cards, banners, service pages, and content-heavy case-study sections.",
            },
          ]}
        />
        <TokenGroups groups={colorTokenGroups} />
        <TypeScale
          title="Typography — Manrope"
          intro="Readable hierarchy for a local-store website with catalog and service content."
          items={typographyScale}
          fontClass={manrope.className}
        />
        <Gallery
          cols={3}
          images={designSystemCards}
          link={{ href: figmaPrototypeUrl, label: "Figma source" }}
        />

        <H3>High-fidelity UI + prototype</H3>
        <P>
          The final prototype covers desktop, tablet, and mobile, with hover
          states and the full flow: Home → Catalog → Filter → Product Page.
        </P>
        <Cards
          cols={2}
          items={[
            {
              title: "Final screens",
              text: "The final UI connects the marketing home page, catalog entry points, product discovery, and store-focused actions in one Figma prototype.",
            },
            {
              title: "Desktop / tablet / mobile explanation",
              text: "Desktop supports richer comparison, tablet keeps the same content hierarchy, and mobile prioritizes quick model selection, calls, directions, and promotion discovery.",
            },
          ]}
        />
        <Callout>
          <p>
            Desktop, tablet, and mobile screens connect the catalog path with
            offline store actions.{" "}
            <a
              href={figmaPrototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open full prototype in Figma ↗
            </a>
          </p>
        </Callout>

        <H3>Main User Flow</H3>
        <P>Home → Catalog → Product list → Product page → Store action</P>
        <Gallery
          cols={1}
          images={[
            {
              src: "/figma3/userscenario.png",
              alt: "Main user flow scenario from home to catalog, product page, and store action",
            },
          ]}
        />
        <Cards cols={2} items={mainUserFlowDetails} />
        <Cards
          cols={2}
          items={[
            {
              title: "Why this flow works",
              items: [
                "Model-based navigation reduces the risk of choosing the wrong accessory.",
                "Product photos improve trust before visiting the store.",
                "Offline-focused CTA buttons support the real business goal.",
              ],
            },
            {
              title: "Success metrics",
              items: [
                "Clicks on “Get directions” and “Call store”",
                "Visits to product and category pages",
                "Promotion banner clicks",
              ],
            },
          ]}
        />

        <H3>Edge, empty, and error states</H3>
        <Cards items={stateCards} />
        <Gallery
          cols={2}
          title="Edge case flows"
          text="Edge cases are grouped separately to show how the product handles unusual but important situations without confusing the user."
          images={edgeCaseImages}
          link={{ href: statesFigmaUrl, label: "Open edge case states" }}
        />
        <Gallery
          cols={2}
          title="Empty and error state screens"
          text="Empty and error states are separated from edge cases because they solve different UX problems: missing content and technical failures."
          images={stateImages}
          link={{ href: statesFigmaUrl, label: "Open empty and error states" }}
        />
      </>
    ),

    development: (
      <>
        <P>
          Technical plan for building this design. The website itself is in
          progress — see the{" "}
          <Link href="/projects/likefon">Likefon project page</Link>.
        </P>
        <H3>Technical planning</H3>
        <Cards cols={2} items={techItems.map((t) => ({ title: t }))} />
        <pre className={`glass-strong ${styles.tree}`}>{`/app
/components
/lib
/data
/hooks
/styles
/public`}</pre>
        <H3>Implementation plan</H3>
        <BulletList items={developmentStages} />
        <H3>SEO + performance + optimization</H3>
        <BulletList items={seoPerformance} />
      </>
    ),

    testing: (
      <>
        <P>
          The two hypotheses (phone model filtering and promotions visibility)
          were checked before the catalog and promotions layout were fixed.
        </P>
        <TextPanel>
          <P>
            <Placeholder>
              How did you test the hypotheses? With how many people?
            </Placeholder>
          </P>
        </TextPanel>
        <H3>First version: orange palette</H3>
        <P>
          The first design system used a warm orange palette. The orange CTA
          color was reserved for conversion actions like “Find your model” and
          “Call store”. It was later replaced with the blue palette used in the
          Likefon website code.
        </P>
        <TokenGroups groups={firstVersionTokens} />
      </>
    ),

    result: (
      <p>
        This is a commercial project for Likefon: a customer-facing website so
        people know what is available in the offline store before they visit.
        Online payment and checkout are intentionally out of scope — the goal is
        not e-commerce, it is increasing offline foot traffic and growing the
        store&apos;s customer base. The catalog structure and promotions layout
        map directly to the two tested hypotheses above, and every screen ties
        back to one KPI: getting a search visitor into the physical store.
      </p>
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
        <P>Retrospective topics:</P>
        <BulletList items={finalPolish} />
        <P>
          <Placeholder>Your answers for each topic above.</Placeholder>
        </P>
      </TextPanel>
    ),
  };

  return (
    <CasePage className={manrope.variable}>
      <CaseHero
        back={{ href: "/projects/likefon", label: "← Likefon project" }}
        eyebrow="Commercial Project · Likefon · UX case study"
        title="Likefon — marketing website for a phone accessories store"
        result="A UX/UI plan for a marketing and informational website that helps Likefon increase online visibility, explain services, promote accessories, and convert Google search traffic into physical store visits in Narva."
        snapshot={snapshot}
        links={[
          { href: figmaPrototypeUrl, label: "Open Figma ↗" },
          { href: "/figma", label: "← Back to Figma projects" },
        ]}
        media={
          <Image
            src="/figma3/figma1.png"
            alt="Likefon Figma project screenshot"
            width={1165}
            height={681}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} deepDive={{ items: stages }} />
    </CasePage>
  );
}
