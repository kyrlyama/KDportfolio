export const uiuxCases = [
  {
    slug: "shop-redesign",
    title: "Redesign Like store",
    label: "VISUAL IDENTITY UPDATE · AFFINITY DESIGNER",
    description:
      "Commercial redesign focused on clarifying the catalog flow, checkout experience, and overall trust signals.",
    highlights: [
      "E-commerce UX audit",
      "IA + user flows",
      "UI kit + responsive screens",
    ],
    cover: "/uiux/redesign/redesign.png",
    tags: ["UX/UI", "Website", "Retail"],
    snapshot: {
      problem:
        "Shoppers struggled to navigate the catalog and confidently complete checkout.",
      goal: "Simplify the purchase flow, highlight key CTAs, and reinforce trust with consistent UI patterns.",
      responsibilities: [
        "UX research + synthesis",
        "Information architecture",
        "Wireframes and UI screens",
      ],
      deliverables: [
        "Personas + empathy map",
        "User journey & scenarios",
        "Responsive UI kit",
      ],
    },
    sections: [
      {
        id: "research",
        type: "research",
        title: "Research",
        text: "Validated key pain points around discovery, comparison, and checkout confidence.",
        cards: [
          {
            title: "Interviews",
            text: "7 quick interviews with returning customers.",
          },
          {
            title: "Pain points",
            text: "Navigation overload and unclear CTAs.",
          },
          {
            title: "Insights",
            text: "Users want faster filtering and trust signals.",
          },
        ],
        images: [],
      },
      {
        id: "persona",
        type: "persona",
        title: "Persona",
        text: "Persona helped shape the tone: busy homeowners and small business managers.",
        images: [],
      },
      {
        id: "user-flow-ia",
        type: "flow",
        title: "User Scenarios / User Journey narrative",
        text: "Scenarios were used to validate key user paths and clarify the catalog structure before wireframing.",
        image: null,
      },
      {
        id: "ux-strategy",
        type: "research",
        title: "UX Strategy / Value Definition",
        text: "Value proposition and user needs defined to guide future wireframes and UI decisions.",
        images: [],
      },
    ],
  },



/*////////////////////////*/


  {
  slug: "cleaning-website",
  title: "Case: Cleaning website",
  label: "STARTUP PROJECT · VISUAL STUDIO CODE",
  description: "This started as a small startup with friends, but later the project didn’t take off and was closed.",
lead: "Service landing + booking flow for a cleaning company. Built in Visual Studio Code (Next.js) with focus on pricing clarity, trust signals, and conversion-friendly structure.",
note: "This started as a small startup with friends, but later the project didn’t take off and was closed. I kept this case as a design + development snapshot of the work.",
tags: [],
buttons: [{ label: "Result", href: "/project1" }],


  // добавляем текст снизу
  note:
    "This started as a small startup with friends, but later the project didn’t take off and was closed. I kept this case as a design + development snapshot of the work.",
highlights: [
      "Service website UX audit",
      "Booking flow redesign",
      "Visual hierarchy improvements",
    ],
    cover: "/uiux/cleaning/project1.png",
    snapshot: {
      problem:
        "Users could not quickly understand services or confidently request a quote.",
      goal: "Build trust and help visitors book cleaning services in under 2 minutes.",
      responsibilities: ["Competitor audit", "User flows", "UI direction"],
      deliverables: ["Service map", "Booking flow", "Landing visuals"],
    },
    sections: [
      {
        id: "persona",
        type: "personas",
        title: "Persona",
        text: "Persona helped shape the tone: busy homeowners and small business managers.",
        images: [
          {
            src: "/uiux/cleaning/persona.png",
            alt: "Persona",
            caption: "Persona overview",
          },
        ],
      },
      {
        id: "user-flow-ia",
        type: "flow",
        title: "User Scenarios / User Journey narrative",
        text: "Mobile and desktop scenarios were mapped to capture key steps, objections, and decision points before translating them into the booking flow.",
        image: {
          src: "/uiux/cleaning/scenarios.png",
          alt: "User scenarios / user journey narrative",
          caption: "Service scenarios (mobile + desktop)",
        },
      },
      {
        id: "ux-strategy",
        type: "research",
        title: "UX Strategy / Value Definition",
        text: "Strategic UX artifact used to align user needs, pain points, and service value before wireframing.",
        images: [
          {
            src: "/uiux/cleaning/ValuePropositionCanvas.png",
            alt: "Value proposition canvas",
            caption: "Value proposition canvas",
          },
        ],
      },
            {
        id: "research",
        type: "research",
        title: "Research & Conversation Mapping",
        text: "User interviews and objections were translated into conversational flows and mapped to functional page blocks.",
        cards: [
          {
            title: "Interviews",
            text: "Short interviews with busy homeowners.",
          },
          {
            title: "Pain points",
            text: "Unclear pricing and scheduling friction.",
          },
          { title: "Statistics", text: "Most bookings happen on mobile." },
        ],
        images: [
          {
            src: "/uiux/cleaning/chatbot1.png",
            alt: "Chatbot script 1",
            caption: "Chatbot draft 1",
          },
          {
            src: "/uiux/cleaning/chatbot2.png",
            alt: "Chatbot script 2",
            caption: "Chatbot draft 2",
          },
          {
            src: "/uiux/cleaning/dialogues1.png",
            alt: "Dialogues 1",
            caption: "Dialogues 1",
          },
          {
            src: "/uiux/cleaning/dialogues2.png",
            alt: "Dialogues 2",
            caption: "Dialogues 2",
          },
          {
            src: "/uiux/cleaning/dialogues3.png",
            alt: "Dialogues 3",
            caption: "Dialogues 3",
          },
          {
            src: "/uiux/cleaning/dialogues4.png",
            alt: "Dialogues 4",
            caption: "Dialogues 4",
          },
        ],
      },
      {
        id: "palette-tone",
        type: "palette",
        title: "Palette & Tone",
        text: "The color system balances cleanliness, trust, and energy through a triadic scheme with clear role-based meaning.",
        colors: [
          { name: "Blue", hex: "#2B3CD6", usage: "Primary actions, trust" },
          { name: "Orange", hex: "#D78F07", usage: "Accents, highlights" },
          { name: "White", hex: "#FFFFFF", usage: "Background, clarity" },
        ],
        scheme: [
          "Triadic palette with blue as the anchor, white as visual breathing room, and orange for emphasis.",
          "Supports a clean, reliable tone while keeping key actions noticeable.",
        ],
        typography:
          "Bootstrap default typography for headings and body text to keep the interface familiar and readable.",
        tools: "Adobe Color for palette exploration and harmony checks.",
        emotions: [
          {
            title: "Client (office manager)",
            points: [
              "Confidence in professionalism",
              "Calm about quality",
              "Sense of cleanliness and order",
            ],
          },
          {
            title: "Cleaning manager",
            points: [
              "Pride in a professional brand",
              "Motivation to offer services",
              "Trust in the system",
            ],
          },
          {
            title: "Potential client (after party)",
            points: [
              "Confidence in fast results",
              "Ease of ordering",
              "Modern, approachable feel",
            ],
          },
        ],
      },
    ],
  },
];

export const getUiuxCase = (slug) =>
  uiuxCases.find((item) => item.slug === slug);
