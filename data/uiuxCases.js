export const uiuxCases = [
  {
    slug: "shop-redesign",
    href: "/uiux/shop-redesign",
    title: "Redesign Like store",
    label: "VISUAL IDENTITY UPDATE · AFFINITY DESIGNER",
    description:
      "Refreshing a local phone accessories retailer’s identity to improve clarity, trust, and visibility in a competitive mall environment.",
    highlights: ["Visual audit", "Logo redesign", "Mockups + print/digital"],
    cover: "/uiux/redesign/redesign.png",
  },

  {
    slug: "cleaning-website",
    // href не нужен — пойдёт по /uiux/[slug]
    title: "Case: Cleaning website",
    label: "STARTUP PROJECT · VISUAL STUDIO CODE",
    description:
      "Service landing + booking flow for a cleaning company. Focus on pricing clarity, trust signals, and conversion-friendly structure.",
    highlights: ["Booking flow", "Value proposition", "Design artifacts"],
    cover: "/uiux/cleaning/project1.png",

    // дальше — данные для /uiux/[slug]
    subtitle:
      "Design + development snapshot: pricing clarity, trust signals, and a conversion-friendly booking structure.",
    summary:
      "This started as a small startup with friends, but later the project didn’t take off and was closed. I kept this case as a design + development snapshot of the work.",
    heroImage: {
      src: "/uiux/cleaning/project1.png",
      alt: "Cleaning website cover",
    },
buttons: [{ label: "Result", href: "/project1" }],

    sections: [
      {
        id: "persona",
        title: "Persona",
        text: "Persona helped shape the tone: busy homeowners and small business managers.",
        images: [
          {
            src: "/uiux/cleaning/persona.png",
            alt: "Persona",
          },
        ],
      },
      {
        id: "scenarios",
        title: "User Scenarios / User Journey narrative",
        text: "Mobile and desktop scenarios were mapped to capture key steps, objections, and decision points before translating them into the booking flow.",
        images: [
          {
            src: "/uiux/cleaning/scenarios.png",
            alt: "User scenarios / user journey narrative",
          },
        ],
      },
      {
        id: "ux-strategy",
        title: "UX Strategy / Value Definition",
        text: "Strategic UX artifact used to align user needs, pain points, and service value before wireframing.",
        images: [
          {
            src: "/uiux/cleaning/ValuePropositionCanvas.png",
            alt: "Value proposition canvas",
          },
        ],
      },
      {
        id: "research",
        type: "research",
        title: "Research & Conversation Mapping",
        text: "User interviews and objections were translated into conversational flows and mapped to functional page blocks.",
        cards: [
          { title: "Interviews", text: "Short interviews with busy homeowners." },
          { title: "Pain points", text: "Unclear pricing and scheduling friction." },
          { title: "Statistics", text: "Most bookings happen on mobile." },
        ],
        images: [
          { src: "/uiux/cleaning/chatbot1.png", alt: "Chatbot draft 1" },
          { src: "/uiux/cleaning/chatbot2.png", alt: "Chatbot draft 2" },
          { src: "/uiux/cleaning/dialogues1.png", alt: "Dialogues 1" },
          { src: "/uiux/cleaning/dialogues2.png", alt: "Dialogues 2" },
          { src: "/uiux/cleaning/dialogues3.png", alt: "Dialogues 3" },
          { src: "/uiux/cleaning/dialogues4.png", alt: "Dialogues 4" },
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
}

    ],
  },
];

export const getUiuxCase = (slug) =>
  uiuxCases.find((item) => item.slug === slug);
