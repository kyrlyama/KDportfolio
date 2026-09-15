import {
  Check,
  Component,
  ExternalLink,
  Grid3X3,
  MousePointerClick,
  Palette,
  Type,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ZoomableImage from "@/components/ZoomableImage";
import fm from "@/styles/Figma.module.css";
import pm from "@/styles/Project.module.css";

const figma3PreviewImages = [
  "/figma3/figma1.png",
];

const personaImages = [
  {
    src: "/figma3/persona1.png",
    title: "Persona — Anna",
    description: "Primary 35+ offline buyer who needs personal consultation, clear prices, and confidence that the accessory fits her phone.",
  },
  {
    src: "/figma3/persona2.png",
    title: "Persona — Marina",
    description: "Research-online-buy-offline user who compares prices and product details before visiting the physical store.",
  },
  {
    src: "/figma3/person3.png",
    title: "Persona — Oleg",
    description: "Loyal deal seeker who looks for current discounts, bundles, and competitive prices before recommending the store.",
  },
];

const journeyMapImages = [
  {
    src: "/figma3/customermapAnna.png",
    title: "Customer Journey Map — Anna",
    description: "Shows the offline buyer path from phone protection need to store consultation, website research, and confident purchase.",
  },
  {
    src: "/figma3/customermapMarina.png",
    title: "Customer Journey Map — Marina",
    description: "Documents the online comparison journey where website catalog, photos, and availability help her decide faster.",
  },
  {
    src: "/figma3/customermapOleg.png",
    title: "Customer Journey Map — Oleg",
    description: "Highlights the deal-seeking path where promotions and bundle visibility become the main conversion opportunity.",
  },
];

const architectureSketchImages = [
  {
    src: "/figma3/layout1.png",
    title: "Information architecture draft",
    description: "Early structure sketch for the main navigation and content blocks before high-fidelity design work.",
  },
  {
    src: "/figma3/layout2.png",
    title: "Catalog hierarchy sketch",
    description: "Explores how product categories and phone model filtering should be grouped for faster accessory discovery.",
  },
  {
    src: "/figma3/layout3.png",
    title: "Services and contact structure",
    description: "Maps service, contact, and store information sections around the goal of bringing users to the offline shop.",
  },
];

const stateImages = [
  {
    src: "/figma3/emptystate.png",
    title: "Empty states",
    description: "Covers no accessories, no active offers, and no search results with clear recovery actions for users.",
  },
  {
    src: "/figma3/errorstate.png",
    title: "Error states",
    description: "Shows failure states for unexpected errors, no internet connection, and unavailable images with retry options.",
  },
];

const edgeCaseImages = [
  {
    src: "/figma3/edgecase1.png",
    title: "Edge case — phone model not found",
    description: "Explains what happens when the selected phone model is missing and redirects users to another model or contact option.",
  },
  {
    src: "/figma3/edgecase2.png",
    title: "Edge case — promotion expired",
    description: "Prevents confusion when a seasonal offer is no longer available and suggests current promotions instead.",
  },
  {
    src: "/figma3/edgecase3.png",
    title: "Edge case — no accessories available",
    description: "Clarifies out-of-stock or missing accessory situations and keeps users in the catalog flow.",
  },
  {
    src: "/figma3/edgecase4.png",
    title: "Edge case — service unavailable",
    description: "Shows how the interface communicates temporary service limitations without creating a dead end.",
  },
];

const wireframeImages = [
  {
    src: "/figma3/low.png",
    title: "Low-fidelity mobile wireframes",
    description: "Mobile-first wireframes for home, catalog, product discovery, promotions, services, and contact actions.",
  },
];

const quickFacts = [
  { label: "Project type", value: "Marketing website + Figma case study" },
  { label: "Business", value: "Likefon phone accessories store in Narva" },
  { label: "Main goal", value: "+30% offline foot traffic in 6 months" },
  { label: "Primary users", value: "Offline shoppers 35–60 and fast-research users 18–35" },
  { label: "Deliverable", value: "Discovery document for PDF / Notion" },
];

const targetAudiences = [
  {
    title: "Primary audience — 35–60",
    summary:
      "Prefer shopping offline and value personal consultation. Their main fear is buying the wrong accessory online, so trust and in-store guidance matter more than speed.",
  },
  {
    title: "Secondary audience — 18–35",
    summary:
      "Research prices and options online, then visit the store to buy quickly. Long delivery times elsewhere push them toward a store that can fulfill urgent needs on the spot.",
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

const competitorRows = [
  ["Offline store", "✔", "✔", "✔", "✔"],
  ["Online store", "✔", "✔", "❌", "✔"],
  ["Installation included", "❌", "❌", "✔", "✔"],
  ["Free reinstallation", "❌", "❌", "✔", "✔"],
  ["Old phone models", "Limited", "Limited", "✔", "✔"],
  ["Major seasonal discounts", "✔", "✔", "Limited", "✔"],
  ["Micro-seasonal promotions", "❌", "❌", "❌", "✔"],
  ["SEO visibility", "Medium", "Medium", "❌", "High"],
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

const uxRequirementLinks = [
  ["When I want to see discounts", "Promotions / Deals section"],
  ["When I want to check prices online", "Catalog with clear prices"],
  ["When I want help installing a screen protector", "Visible service information and installation guarantee"],
];

const journeyMaps = [
  {
    title: "Anna — Offline buyer",
    rows: [
      ["Problem", "Her phone needs protection", "I don’t want the screen to get scratched.", "Doesn’t know which accessory to choose", "Simple product explanations"],
      ["Search", "Thinks about where to buy", "It’s easier to go to a store.", "Online stores feel confusing", "Simple and clear website catalog"],
      ["Store visit", "Visits Likefon", "The salesperson will help me.", "Afraid of choosing the wrong product", "In-store consultation"],
      ["Recommendation", "Staff recommends the website", "I can check options at home.", "Doesn’t know how to search online", "Phone model filter"],
      ["Website research", "Looks at products", "Now it’s easier to understand.", "Previously didn’t trust online info", "Clear photos and descriptions"],
      ["Purchase", "Returns and buys", "Feels confident", "—", "Screen protector installation"],
    ],
  },
  {
    title: "Marina — Research online → buy offline",
    rows: [
      ["Problem", "Wants a new phone case", "I want something nice and reliable.", "—", "Show new arrivals"],
      ["Search", "Searches prices online", "Where is it cheaper?", "Photos may differ from reality", "High-quality product photos"],
      ["Compare", "Compares options", "I want to see colors.", "Doesn’t know store availability", "Show availability"],
      ["Website research", "Checks Likefon website", "Now I can compare easily.", "Had to search different websites", "Full product catalog"],
      ["Store visit", "Travels to the store", "I already know what I want.", "—", "Faster decision making"],
      ["Purchase", "Buys the accessory", "Satisfaction", "—", "Installation service"],
    ],
  },
  {
    title: "Oleg — Deal-seeking loyal customer",
    rows: [
      ["Problem", "Wants accessories", "Maybe there are discounts.", "—", "Promotions section"],
      ["Search", "Checks prices", "I want the best deal.", "Hard to track discounts", "Clear promotions page"],
      ["Website visit", "Views current deals", "Let’s see current offers.", "No place to see promotions", "Discount and bundle section"],
      ["Compare", "Looks at bundles", "Case + glass is more profitable.", "Promotions not always visible", "Bundle deals"],
      ["Store visit", "Goes to the store", "I already know what to buy.", "—", "Faster purchase"],
      ["Purchase", "Buys accessories", "Satisfaction", "—", "Save money through deals"],
    ],
  },
];

const jtbd = [
  {
    character: "Anna",
    jobs: [
      "When my phone needs protection, I want to visit a store and get help choosing accessories so that I do not buy the wrong product.",
    ],
  },
  {
    character: "Marina",
    jobs: [
      "When I plan to buy phone accessories, I want to check prices and options online so that I can choose the best offer before visiting the store.",
    ],
  },
  {
    character: "Oleg",
    jobs: [
      "When I want to buy phone accessories, I want to see current discounts and bundle offers so that I can save money.",
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

const sitemap = [
  {
    title: "Home",
    items: ["Catalog entry", "Promotions entry", "Services entry", "About Store", "Contact / map CTA"],
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
  {
    title: "Contact",
    items: ["Phone number", "Email", "Map and directions"],
  },
];

const userFlows = [
  "Home → Catalog → Phone Cases → Samsung → Samsung A Series → Samsung A36 → Product List",
  "Home → Catalog → Screen Protectors → Samsung → Samsung A36 → Product List",
  "Home → Promotions → Seasonal Promotions → Valentine’s Day → Product List",
];

const keyDecisions = [
  {
    title: "Products grouped by phone model, not just category",
    text: "The \"phone model filtering\" hypothesis tested well, so the catalog groups products by model instead of a flat category list — this prevents users from choosing an incompatible accessory.",
  },
  {
    title: "Large banner-style promotion blocks",
    text: "The \"promotions visibility\" hypothesis showed deals get missed if buried in a menu. Promotions got a dedicated, highly visible block instead of a small link.",
  },
  {
    title: "Large contact buttons over a contact form",
    text: "The business goal is offline foot traffic, not online leads, so contact actions are big, direct buttons (call, directions) instead of a form that would keep the user on the site.",
  },
];

const uxDecisions = [
  ["Home screen", "Simple layout with clear entry points", "Users, especially 35+, need fast understanding without confusion."],
  ["Catalog", "Category-based navigation with icons", "Users recognize categories faster visually than through text."],
  ["Product list", "Products grouped by phone model", "This prevents users from choosing incompatible accessories."],
  ["Services", "Simple service list", "Users need fast answers to clear problems."],
  ["Promotions", "Large banner-style blocks", "Promotions must be highly visible."],
  ["Brands", "Display partner brands", "Brand logos build trust and product quality perception."],
  ["Contacts", "Large contact buttons", "The main conversion goal is bringing users to the physical store."],
];

const colorTokenGroups = [
  {
    title: "Primary",
    description: "Warm orange brand colors for CTAs, promotional banners, active states, and key conversion actions.",
    tokens: [
      { name: "Primary 600", value: "#DE5F25", text: "#FFFFFF" },
      { name: "Primary 500", value: "#ED7A32", text: "#FFFFFF" },
      { name: "Primary 100", value: "#FBF3EA", text: "#111827" },
    ],
  },
  {
    title: "Hover / Active",
    description: "Stronger CTA color for hover/active actions and pale focus background for lightweight interactive states.",
    tokens: [
      { name: "Primary 700", value: "#BA471D", text: "#FFFFFF" },
      { name: "Primary 50", value: "#FFF8F0", text: "#111827" },
    ],
  },
  {
    title: "Neutrals",
    description: "Neutral scale for text hierarchy, cards, dividers, disabled controls, and quiet surfaces.",
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
    description: "Semantic feedback colors for success, validation errors, warnings, and promotion-sensitive messages.",
    tokens: [
      { name: "Success", value: "#59B985", text: "#FFFFFF" },
      { name: "Error", value: "#E1524C", text: "#FFFFFF" },
      { name: "Warning", value: "#F0A936", text: "#111827" },
    ],
  },
];

const typographyScale = [
  { label: "H1", sample: "Headline", usage: "Landing hero and important page titles", className: "typeH1" },
  { label: "H2", sample: "Headline", usage: "Section titles for catalog, services, and case-study blocks", className: "typeH2" },
  { label: "Body", sample: "Body text", usage: "Product descriptions, service copy, and explanatory text", className: "typeBody" },
  { label: "Caption", sample: "Caption", usage: "Helper text, product meta, form hints, and small labels", className: "typeCaption" },
];

const designSystemCards = [
  {
    step: "01",
    icon: Grid3X3,
    title: "8pt grid",
    text: "Spacing follows 8px steps so catalog cards, filters, service blocks, and responsive sections stay predictable.",
    image: {
      src: "/figma3/8pt.png",
      alt: "Likefon 8pt spacing grid Figma board",
    },
  },
  {
    step: "02",
    icon: Component,
    title: "Reusable components",
    text: "Header, footer, category card, product card, filters, promotion banner, service card, contact CTA, and input field.",
    image: {
      src: "/figma3/components.png",
      alt: "Likefon reusable components Figma board",
    },
  },
  {
    step: "03",
    icon: MousePointerClick,
    title: "Interaction states",
    text: "Hover, active, disabled, and focus-visible states are defined for buttons, filters, links, cards, and inputs.",
    image: {
      src: "/figma3/states.png",
      alt: "Likefon cards and component states Figma board",
    },
  },
];


const figmaPrototypeUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=52-171&t=z2ae5zBKMUZ57psw-1";
const architectureBoardUrl =
  "https://www.figma.com/board/JriTyumTnhVhHN9lBNZHIN/Untitled?node-id=0-1&t=vhqudZzpZvh394pF-1";
const statesFigmaUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=52-2&t=z2ae5zBKMUZ57psw-1";
const wireframesFigmaUrl =
  "https://www.figma.com/design/zluMbf8Zarkpm07P9lv9kO/likefon?node-id=0-1&t=z2ae5zBKMUZ57psw-1";

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
  "Lighthouse audit and PageSpeed screenshots for the case study",
];

const finalPolish = [
  "Trade-offs and challenges",
  "Why this stack was chosen",
  "What could be improved after launch",
  "Scalability opportunities for catalog, promotions, and real inventory",
  "Expected real business metrics after search visibility improves",
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
];

const mainUserFlowMetrics = [
  "Clicks on “Get directions” and “Call store”",
  "Visits to product and category pages",
  "Promotion banner clicks",
];

const mainUserFlowReasons = [
  "Model-based navigation reduces the risk of choosing the wrong accessory.",
  "Product photos improve trust before visiting the store.",
  "Offline-focused CTA buttons support the real business goal.",
];

function AvailabilityCell({ value }) {
  if (value === "✔") {
    return (
      <span className={fm.availabilityYes}>
        <Check aria-hidden="true" size={16} />
        <span className={fm.srOnly}>Yes</span>
      </span>
    );
  }
  if (value === "❌") {
    return (
      <span className={fm.availabilityNo}>
        <X aria-hidden="true" size={16} />
        <span className={fm.srOnly}>No</span>
      </span>
    );
  }
  return <span className={fm.availabilityPartial}>{value}</span>;
}

function ImageTopicBlock({ title, description, images, columns = "two", link, progressive = false }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = progressive && images.length > 1;
  const visibleImages = hasMore && !expanded ? images.slice(0, 1) : images;

  return (
    <section className={fm.imageTopicBlock}>
      <div className={fm.imageTopicHeader}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? (
          <Link href={link.href} className={fm.inlineFigmaLink}>
            {link.label} <ExternalLink aria-hidden="true" size={14} />
          </Link>
        ) : null}
      </div>
      <div className={`${fm.imageGallery} ${columns === "three" ? fm.imageGallery3 : ""}`}>
        {visibleImages.map((image) => (
          <figure key={image.src} className={fm.caseImageCard}>
            <ZoomableImage
              src={image.src}
              alt={image.title}
              width={900}
              height={620}
              imageClassName={fm.caseZoomImage}
            />
            <figcaption>
              <strong>{image.title}</strong>
              <span>{image.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {hasMore ? (
        <button type="button" className={pm.btn} onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Show less" : `Show ${images.length - 1} more`}
        </button>
      ) : null}
    </section>
  );
}

export default function Figma3() {
  const [journeysExpanded, setJourneysExpanded] = useState(false);
  const [competitorExpanded, setCompetitorExpanded] = useState(false);
  const visibleJourneys = journeysExpanded ? journeyMaps : journeyMaps.slice(0, 1);

  return (
    <main className={`${fm.page} ${fm.likefonCase}`}>
      <div className={`${pm.container} ${fm.containerWide}`}>
        <section className={`${pm.card} ${fm.androidLike} ${fm.likefonHero}`}>
          <div className={`${pm.text} ${fm.colText}`}>
            <p className={fm.eyebrow}>Figma case study</p>
            <h1 className={pm.title}>Likefon — marketing website for a phone accessories store</h1>

            <p className={pm.p}>
              A UX/UI plan for a marketing and informational website that helps Likefon increase online
              visibility, explain services, promote accessories, and convert Google search traffic into physical
              store visits in Narva.
            </p>

            <div className={fm.heroOverviewGrid}>
              <article>
                <span>What is Likefon</span>
                <strong>Local phone accessories and service store in Narva.</strong>
              </article>
              <article>
                <span>Main business goal</span>
                <strong>Increase offline foot traffic by turning search visitors into store actions.</strong>
              </article>
            </div>

            <h2 className={pm.h2}>Project focus</h2>
            <ul className={pm.list}>
              <li>
                <strong>Business:</strong> raise brand awareness and offline store visits.
              </li>
              <li>
                <strong>UX:</strong> make product discovery, filtering, promotions, and contact actions simple.
              </li>
              <li>
                <strong>UI:</strong> mobile-first structure with trustworthy catalog, services, and brand blocks.
              </li>
              <li>
                <strong>Delivery:</strong> design system, high-fidelity prototype, technical plan, and optimization.
              </li>
            </ul>

            <div className={fm.heroButtonRow}>
              <Link href={figmaPrototypeUrl} className={`${pm.btn} ${fm.orangeButton}`}>
                Open Figma <ExternalLink aria-hidden="true" size={16} />
              </Link>
              <Link href="/figma" className={`${pm.btn} ${fm.secondaryCaseButton}`}>
                ← Back to Figma projects
              </Link>
            </div>
          </div>

          <div className={`${pm.media} ${fm.colMedia}`}>
            <div className={fm.likefonPreviewGrid} aria-label="Likefon Figma screenshots">
              {figma3PreviewImages.map((src) => (
                <figure key={src} className={`${fm.caseImageCard} ${fm.heroPreviewCard} ${fm.staticHeroPreview}`}>
                  <Image
                    src={src}
                    alt="Likefon Figma project screenshot"
                    width={1200}
                    height={760}
                    priority
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={fm.uxLayout}>
          <aside className={fm.contents}>
            <h3 className={fm.contentsTitle}>Contents</h3>
            <nav className={fm.contentsNav}>
              <a className={fm.contentsLink} href="#snapshot">Project snapshot</a>
              <a className={fm.contentsLink} href="#framing">Product framing</a>
              <a className={fm.contentsLink} href="#research">Research</a>
              <a className={fm.contentsLink} href="#jtbd">JTBD</a>
              <a className={fm.contentsLink} href="#journey">Journey & hypotheses</a>
              <a className={fm.contentsLink} href="#decisions">Key decisions</a>
              <a className={fm.contentsLink} href="#architecture">Information architecture</a>
              <a className={fm.contentsLink} href="#wireframes">Wireframes + UX decisions</a>
              <a className={fm.contentsLink} href="#design-system">Design system</a>
              <a className={fm.contentsLink} href="#prototype">High-fidelity prototype</a>
              <a className={fm.contentsLink} href="#user-scenario">Main user flow</a>
              <a className={fm.contentsLink} href="#states">Edge, empty, and error states</a>
              <a className={fm.contentsLink} href="#technical">Technical planning</a>
              <a className={fm.contentsLink} href="#optimization">SEO + performance</a>
              <a className={fm.contentsLink} href="#result">Result</a>
              <a className={fm.contentsLink} href="#reflection">Retrospective</a>
              <Link href="/figma" className={`${pm.btn} ${fm.contentsBackButton}`}>
                ← Back
              </Link>
            </nav>
          </aside>

          <div className={fm.uxContent}>
            <section id="framing" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 1</p>
              <h2 className={fm.uxH2}>Product framing & problem definition</h2>
              <p className={fm.uxP}>
                The website should make Likefon visible online and help customers understand products,
                services, prices, promotions, and location before visiting the physical store.
              </p>

              <div className={fm.factGrid}>
                {quickFacts.map((fact) => (
                  <div key={fact.label} className={fm.factCard}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>

              <div className={fm.insightBox}>
                <h3>Problem statement</h3>
                <p>
                  Likefon currently operates only as an offline store. Even with competitive prices,
                  professional installation, and a wide assortment of accessories, many potential customers do
                  not know about the store because there is no online presence.
                </p>
              </div>

              <h3 className={fm.uxH3}>Value proposition</h3>
              <p className={fm.uxP}>
                Likefon offers reliable accessories, professional installation, and trusted in-store service — a
                safe and convenient alternative to buying accessories from unknown online stores.
              </p>

              <div className={fm.audienceGrid}>
                {targetAudiences.map((audience) => (
                  <article key={audience.title} className={fm.audienceCard}>
                    <h3>{audience.title}</h3>
                    <p>{audience.summary}</p>
                  </article>
                ))}
              </div>

              <h3 className={fm.uxH3}>KPIs</h3>
              <ul className={fm.uxList}>
                {kpis.map((kpi) => (
                  <li key={kpi}>{kpi}</li>
                ))}
              </ul>

              <h3 className={fm.uxH3}>Competitive analysis</h3>
              <p className={fm.uxP}>
                Competitors compete primarily through base pricing and online visibility, but they do not
                communicate service value strongly. Likefon can differentiate through bundled pricing, service
                guarantees, older phone model support, and flexible year-round promotions.
              </p>
              <div className={fm.insightGrid}>
                {competitiveInsights.map((insight) => (
                  <article key={insight.title} className={fm.insightMiniCard}>
                    <h4>{insight.title}</h4>
                    <p>{insight.text}</p>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className={pm.btn}
                onClick={() => setCompetitorExpanded((v) => !v)}
              >
                {competitorExpanded ? "Hide comparison table" : "Show full comparison table"}
              </button>
              {competitorExpanded ? (
                <div className={fm.tableWrap}>
                  <table className={fm.summaryTable}>
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Click</th>
                        <th>Evelatus</th>
                        <th>Likefon current</th>
                        <th>Likefon proposed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorRows.map(([feature, click, evelatus, current, proposed]) => (
                        <tr key={feature}>
                          <td>{feature}</td>
                          <td><AvailabilityCell value={click} /></td>
                          <td><AvailabilityCell value={evelatus} /></td>
                          <td><AvailabilityCell value={current} /></td>
                          <td><AvailabilityCell value={proposed} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              <div className={fm.deliverable}>Deliverable: Discovery document for PDF / Notion.</div>
            </section>

            <section id="research" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 2</p>
              <h2 className={fm.uxH2}>Research & hypotheses</h2>
              <p className={fm.uxP}>
                Research focuses on behavior, not only opinions: short 10–15 minute conversations with people
                from both target segments, pain point validation, JTBD statements, customer journey maps, and
                actionable product hypotheses for the website structure.
              </p>
              <h3 className={fm.uxH3}>Research tasks</h3>
              <ul className={fm.uxList}>
                {researchTasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              <p className={fm.uxP}>
                Interviews covered both segments: current buying habits, trust in online stores, and what
                information would make them check a website before visiting.
              </p>
              <h3 className={fm.uxH3}>Validated pain points</h3>
              <div className={fm.twoColGrid}>
                {painPointGroups.map((group) => (
                  <div key={group.title} className={fm.metaCard}>
                    <h3 className={fm.metaTitle}>{group.title}</h3>
                    <ul className={fm.compactList}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <ImageTopicBlock
                title="Personas"
                description="Separate persona cards describe the main user archetypes before moving into journey maps or wireframes. This keeps the research artifacts easy to scan and understand."
                images={personaImages}
                columns="three"
                progressive
              />
              <div className={fm.deliverable}>Deliverable: research section for the case study.</div>
            </section>

            <section id="jtbd" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Jobs To Be Done</h2>
              <p className={fm.uxP}>
                Formula: <strong>When ___ happens, I want to ___ so that ___.</strong>
              </p>
              <div className={fm.cardGrid3}>
                {jtbd.map((person) => (
                  <article key={person.character} className={fm.storyCard}>
                    <h3>{person.character}</h3>
                    <ul>
                      {person.jobs.map((job) => (
                        <li key={job}>{job}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <h3 className={fm.uxH3}>Product requirements from JTBD</h3>
              <div className={fm.requirementGrid}>
                {uxRequirementLinks.map(([job, solution]) => (
                  <article key={job} className={fm.requirementCard}>
                    <span>JTBD</span>
                    <strong>{job}</strong>
                    <span>UX solution</span>
                    <p>{solution}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="journey" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Customer journey map & hypotheses</h2>
              <div className={fm.timeline}>
                {["Phone screen breaks", "Searches in Google", "Compares prices", "Reads reviews", "Visits the store", "Gets installation service"].map((step, index) => (
                  <div key={step} className={fm.timelineStep}>
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
              <p className={fm.uxP}>
                Current problem: Likefon has no website step in the journey, so the store is missing the
                moment where customers compare options online.
              </p>
              <ImageTopicBlock
                title="Customer Journey Map visuals"
                description="Journey map screenshots are separated from personas because they explain the step-by-step customer behavior, pain points, and opportunities after the user archetypes are defined."
                images={journeyMapImages}
                progressive
              />
              <h3 className={fm.uxH3}>Detailed customer journey maps</h3>
              <div className={fm.journeyStack}>
                {visibleJourneys.map((journey) => (
                  <article key={journey.title} className={fm.journeyCard}>
                    <h3>{journey.title}</h3>
                    <div className={fm.tableWrap}>
                      <table className={fm.journeyTable}>
                        <thead>
                          <tr>
                            <th>Stage</th>
                            <th>Actions</th>
                            <th>Thoughts / feelings</th>
                            <th>Pain points</th>
                            <th>Opportunity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {journey.rows.map(([stage, actions, thoughts, pain, opportunity]) => (
                            <tr key={`${journey.title}-${stage}`}>
                              <td>{stage}</td>
                              <td>{actions}</td>
                              <td>{thoughts}</td>
                              <td>{pain}</td>
                              <td>{opportunity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                ))}
              </div>
              {journeyMaps.length > 1 ? (
                <button
                  type="button"
                  className={pm.btn}
                  onClick={() => setJourneysExpanded((v) => !v)}
                >
                  {journeysExpanded
                    ? "Show fewer journeys"
                    : `Show ${journeyMaps.length - 1} more customer journeys`}
                </button>
              ) : null}
              <h3 className={fm.uxH3}>Formulated hypotheses</h3>
              <div className={fm.hypothesisGrid}>
                {hypotheses.map((hypothesis) => (
                  <article key={hypothesis.title} className={fm.hypothesisCard}>
                    <h3>{hypothesis.title}</h3>
                    <p>{hypothesis.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="decisions" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Key decisions</h2>
              <p className={fm.uxP}>
                Three decisions came directly out of the research above — not from personal taste, but from a
                hypothesis, a pain point, or the business goal.
              </p>
              <div className={fm.hypothesisGrid}>
                {keyDecisions.map((decision) => (
                  <article key={decision.title} className={fm.hypothesisCard}>
                    <h3>{decision.title}</h3>
                    <p>{decision.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="architecture" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 3</p>
              <h2 className={fm.uxH2}>Information architecture</h2>
              <div className={fm.twoColGrid}>
                {sitemap.map((block) => (
                  <div key={block.title} className={fm.metaCard}>
                    <h3 className={fm.metaTitle}>{block.title}</h3>
                    <ul className={fm.compactList}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <h3 className={fm.uxH3}>User flows</h3>
              <ol className={fm.flowList}>
                {userFlows.map((flow) => (
                  <li key={flow}>{flow}</li>
                ))}
              </ol>
              <div className={fm.insightBox}>
                <h3>Navigation logic</h3>
                <p>
                  Product discovery narrows by category, brand, and model so customers reach compatible
                  accessories in fewer decisions.
                </p>
              </div>
              <ImageTopicBlock
                title="Information architecture sketches"
                description="These layout sketches are shown as their own block because they explain the website structure: navigation, catalog hierarchy, services, and contact paths."
                images={architectureSketchImages}
                columns="three"
                link={{ href: architectureBoardUrl, label: "Open architecture board" }}
              />
              <div className={fm.deliverable}>Deliverable: UX block ready in Figma + FigJam.</div>
            </section>

            <section id="wireframes" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 4</p>
              <h2 className={fm.uxH2}>Wireframes + UX decisions</h2>
              <p className={fm.uxP}>
                Low-fidelity wireframes are mobile-first and focused on product discovery, search, and
                promotions.
              </p>
              <ImageTopicBlock
                title="Low-fidelity wireframes"
                description="Wireframes are kept in a dedicated block so the layout logic and UX decisions are not mixed with research personas, journey maps, or state screens."
                images={wireframeImages}
                link={{ href: wireframesFigmaUrl, label: "Open low-fidelity wireframes" }}
              />
              <div className={fm.decisionTable}>
                {uxDecisions.map(([screen, decision, reason]) => (
                  <article key={screen} className={fm.decisionRow}>
                    <strong>{screen}</strong>
                    <span>{decision}</span>
                    <p>{reason}</p>
                  </article>
                ))}
              </div>
              <div className={fm.insightBox}>
                <h3>Mobile-first thinking</h3>
                <p>
                  Product discovery, search, and promotions come first because mobile users need a fast path
                  from Google search to store confidence.
                </p>
              </div>
            </section>

            <section id="design-system" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 5</p>
              <h2 className={fm.uxH2}>Design system</h2>
              <p className={fm.uxP}>
                A practical Figma foundation: brand colors, semantic states, typography, spacing, reusable
                components, and interaction states.
              </p>

              <div className={fm.designHeroGrid}>
                <article className={fm.designIntroCard}>
                  <Palette aria-hidden="true" />
                  <h3>Color tokens</h3>
                  <p>
                    Tokens support brand recognition, surface hierarchy, UI feedback, and promotional accents.
                    The orange CTA color is reserved for conversion actions like “Find your model” and “Call store”.
                  </p>
                </article>
                <article className={fm.designIntroCard}>
                  <Type aria-hidden="true" />
                  <h3>Typography scale</h3>
                  <p>
                    The scale separates landing headlines, section headings, body copy, and captions for product
                    cards, banners, service pages, and content-heavy case-study sections.
                  </p>
                </article>
              </div>

              <div className={fm.colorSystem}>
                {colorTokenGroups.map((group) => (
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
                    <p>Readable hierarchy for a local-store website with catalog and service content.</p>
                  </div>
                </div>
                <div className={fm.typeScaleList}>
                  {typographyScale.map((item) => (
                    <article key={item.label} className={fm.typeScaleItem}>
                      <span>{item.label}</span>
                      <strong className={fm[item.className]}>{item.sample}</strong>
                      <p>{item.usage}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={fm.designSystemFlow}>
                {designSystemCards.map((card) => {
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
                            imageClassName={fm.designSystemZoomImage}
                          />
                        </figure>
                      ) : null}
                      <Link href={figmaPrototypeUrl} className={fm.smallFigmaButton}>
                        Figma source <ExternalLink aria-hidden="true" size={14} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="prototype" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 6</p>
              <h2 className={fm.uxH2}>High-fidelity UI + prototype</h2>
              <p className={fm.uxP}>
                The final prototype covers desktop, tablet, and mobile, with hover states and the full flow:
                Home → Catalog → Filter → Product Page.
              </p>
              <div className={fm.twoColGrid}>
                <article className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Final screens</h3>
                  <p className={fm.metaText}>
                    The final UI connects the marketing home page, catalog entry points, product discovery, and
                    store-focused actions in one Figma prototype.
                  </p>
                </article>
                <article className={fm.metaCard}>
                  <h3 className={fm.metaTitle}>Desktop / tablet / mobile explanation</h3>
                  <p className={fm.metaText}>
                    Desktop supports richer comparison, tablet keeps the same content hierarchy, and mobile
                    prioritizes quick model selection, calls, directions, and promotion discovery.
                  </p>
                </article>
              </div>
              <div className={fm.prototypePreviewGrid}>
                {figma3PreviewImages.map((src) => (
                  <figure key={`prototype-${src}`} className={`${fm.caseImageCard} ${fm.heroPreviewCard}`}>
                    <Image src={src} alt="Likefon final Figma screen preview" width={1200} height={760} />
                  </figure>
                ))}
              </div>
              <div className={fm.placeholderPanel}>
                <span>Desktop, tablet, and mobile screens connect the catalog path with offline store actions.</span>
                <Link href={figmaPrototypeUrl} className={fm.figmaPrototypeButton}>
                  Open full prototype in Figma <ExternalLink aria-hidden="true" size={18} />
                </Link>
              </div>
            </section>

            <section id="user-scenario" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 7</p>
              <h2 className={fm.uxH2}>Main User Flow</h2>
              <p className={fm.uxP}>
                Home → Catalog → Product list → Product page → Store action
              </p>

              <figure className={fm.mainFlowVisual}>
                <ZoomableImage
                  src="/figma3/userscenario.png"
                  alt="Main user flow scenario from home to catalog, product page, and store action"
                  width={1600}
                  height={900}
                  imageClassName={fm.mainFlowZoomImage}
                />
              </figure>

              <div className={fm.mainFlowInfoGrid}>
                {mainUserFlowDetails.map((item) => (
                  <article key={item.title} className={fm.flowInfoCard}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
                <article className={fm.flowInfoCard}>
                  <h3>Flow summary</h3>
                  <p>
                    This flow shows how a user discovers the store offer, selects a product category and phone
                    model, compares available cases, opens a product page, and completes an offline action.
                  </p>
                </article>
              </div>

              <div className={fm.flowBottomGrid}>
                <article className={fm.flowBottomCard}>
                  <h3>Why this flow works</h3>
                  <ul>
                    {mainUserFlowReasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </article>
                <article className={fm.flowBottomCard}>
                  <h3>Success metrics</h3>
                  <ul>
                    {mainUserFlowMetrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section id="states" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 8</p>
              <h2 className={fm.uxH2}>Edge, empty, and error states</h2>
              <div className={fm.stateGrid}>
                <article className={fm.stateCard}>
                  <h4>Edge cases</h4>
                  <p>Phone model not found, promotion expired, no accessories available, or service unavailable. These cases prevent dead ends by explaining what happened and suggesting a next step.</p>
                </article>
                <article className={fm.stateCard}>
                  <h4>Empty states</h4>
                  <p>No accessories found, no active offers, and no search results. Each empty state gives a clear explanation and redirects users to another model, catalog, or search path.</p>
                </article>
                <article className={fm.stateCard}>
                  <h4>Error states</h4>
                  <p>Something went wrong, no internet connection, and image unavailable. Error states reduce frustration by showing a retry action instead of leaving the interface unclear.</p>
                </article>
              </div>
              <ImageTopicBlock
                title="Edge case flows"
                description="Edge cases are grouped separately to show how the product handles unusual but important situations without confusing the user."
                images={edgeCaseImages}
                link={{ href: statesFigmaUrl, label: "Open edge case states" }}
              />
              <ImageTopicBlock
                title="Empty and error state screens"
                description="Empty and error states are separated from edge cases because they solve different UX problems: missing content and technical failures."
                images={stateImages}
                link={{ href: statesFigmaUrl, label: "Open empty and error states" }}
              />
            </section>

            <section id="result" className={fm.uxCard}>
              <h2 className={fm.uxH2}>Result</h2>
              <p className={fm.uxP}>
                This is a design plan, not a launched site, so results are framed as what the solution is
                built to achieve rather than measured traffic. The catalog structure and promotions layout
                map directly to the two tested hypotheses above, and every screen ties back to one KPI: getting
                a search visitor into the physical store.
              </p>
            </section>

            <section id="technical" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 9</p>
              <h2 className={fm.uxH2}>Technical planning</h2>
              <div className={fm.twoColGrid}>
                {techItems.map((item) => (
                  <div key={item} className={fm.techPill}>{item}</div>
                ))}
              </div>
              <pre className={fm.architectureTree}>{`/app
/components
/lib
/data
/hooks
/styles
/public`}</pre>
              <h3 className={fm.uxH3}>Implementation plan</h3>
              <ul className={fm.uxList}>
                {developmentStages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="optimization" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 10</p>
              <h2 className={fm.uxH2}>SEO + performance + optimization</h2>
              <ul className={fm.uxList}>
                {seoPerformance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="reflection" className={fm.uxCard}>
              <p className={fm.weekLabel}>Stage 11</p>
              <h2 className={fm.uxH2}>Retrospective</h2>
              <ul className={fm.uxList}>
                {finalPolish.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}