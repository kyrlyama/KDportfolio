import Image from "next/image";
import Link from "next/link";

const cases = {
  like: {
    eyebrow: "Brand identity redesign",
    title: "Like Store",
    lead: "Refreshing a local phone accessories retailer’s identity to improve trust, recognition and consistency across physical and digital touchpoints.",
    image: "/uiux/redesign/redesign.png",
    meta: [
      ["Role", "Brand / UI Designer"],
      ["Scope", "Identity, mockups, visual audit"],
      ["Tools", "Affinity Designer, Photoshop"],
      ["Focus", "Recognition, clarity, scalability"],
    ],
    nav: ["Overview", "Problem", "Audit", "System", "Applications", "Outcome"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        text: "The redesign focused on turning a small local retail identity into a cleaner, more scalable visual system. The goal was not only to make a new logo, but to improve how the brand works on signage, packaging, small digital sizes and promotional materials.",
        cards: [
          ["Business need", "Stand out in a busy mall environment and look more trustworthy."],
          ["Design challenge", "Keep the mark simple, readable and connected to phone accessories."],
          ["Expected impact", "Better recognition, stronger visual consistency and easier brand usage."],
        ],
      },
      {
        id: "problem",
        title: "Problem framing",
        text: "The previous identity felt too generic and did not clearly communicate the store category. It also had weak scalability, which made it harder to use consistently across physical and digital touchpoints.",
        cards: [
          ["Low clarity", "The logo did not instantly explain what the business offers."],
          ["Weak scalability", "Small-size use reduced recognition and readability."],
          ["No system", "The identity needed clearer rules for real-world usage."],
        ],
      },
      {
        id: "audit",
        title: "Before / After audit",
        text: "The audit compared the old mark with the new direction across legibility, category association, memorability and practical usage.",
        compare: [
          ["Before", "/uiux/redesign/beforeredesign.jpg", "Abstract mark with weaker connection to retail tech accessories."],
          ["After", "/uiux/redesign/redesign.png", "Cleaner mark with stronger recognition and better digital/print scalability."],
        ],
      },
      {
        id: "system",
        title: "Logo system",
        text: "The final identity uses simple geometry, high contrast and rounded shapes to feel approachable while still fitting a tech-accessories context.",
        images: [
          ["/uiux/redesign/Logo_likefon_1.png", "Logo concept 1"],
          ["/uiux/redesign/Logo_likefon_2.png", "Logo concept 2"],
          ["/uiux/redesign/logo_likefon_3.png", "Logo concept 3"],
        ],
      },
      {
        id: "applications",
        title: "Brand applications",
        text: "Mockups were used to check if the identity works outside the canvas: on signage, retail packaging, stickers, posters and social-ready visuals.",
        images: [
          ["/uiux/redesign/mockup1.jpg", "Store signage"],
          ["/uiux/redesign/mockup2.jpg", "Packaging"],
          ["/uiux/redesign/mockup3.jpg", "Brand visual application"],
          ["/uiux/redesign/posterlike.png", "Promotional poster"],
        ],
      },
      {
        id: "outcome",
        title: "Outcome & next steps",
        text: "The redesigned identity is clearer, more flexible and easier to apply across real brand materials. If continued, the next step would be a compact brand guideline, social templates and a small in-store usability check for signage visibility.",
        cards: [
          ["What improved", "Clarity, recognisability, consistency and small-size readability."],
          ["What I would test", "Recognition from distance, social post readability and storefront visibility."],
          ["Senior reflection", "The strongest portfolio value is explaining why the identity solves a business problem, not only showing the final logo."],
        ],
      },
    ],
  },
  cleaning: {
    eyebrow: "Conversion-focused service website",
    title: "Cleaning Website",
    lead: "Designing a trust-first responsive website and booking experience for a local cleaning service, with emphasis on pricing clarity, confidence and mobile usability.",
    image: "/uiux/cleaning/project1.png",
    meta: [
      ["Role", "UX/UI Designer + Frontend"],
      ["Scope", "Research, IA, UI, landing page"],
      ["Tools", "Figma, VS Code, Bootstrap"],
      ["Focus", "Trust, pricing, booking flow"],
    ],
    nav: ["Overview", "Problem", "Research", "UX Strategy", "Design", "Outcome"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        text: "The project explored how a cleaning company can communicate trust quickly and make booking feel simple. The solution combines a service landing page, clear value proposition, visual hierarchy and a more structured ordering path.",
        cards: [
          ["Business goal", "Make service information clear and reduce friction before booking."],
          ["User goal", "Understand price, process, reliability and how to request cleaning fast."],
          ["Expected impact", "Higher confidence, clearer decision-making and better mobile conversion."],
        ],
      },
      {
        id: "problem",
        title: "Problem framing",
        text: "Cleaning websites often lose users because pricing, service scope and trust signals are unclear. The experience needed to answer key questions before asking the user to contact or book.",
        cards: [
          ["Unclear pricing", "Users need to understand what affects the price before contacting."],
          ["Trust gap", "The site must prove reliability before a visitor shares details."],
          ["Mobile friction", "Most users compare services quickly on a phone."],
        ],
      },
      {
        id: "research",
        title: "Research artifacts",
        text: "Personas, scenarios and conversation mapping helped define decision points, objections and the information that should appear before the booking action.",
        images: [
          ["/uiux/cleaning/persona.png", "Persona"],
          ["/uiux/cleaning/scenarios.png", "User scenarios"],
          ["/uiux/cleaning/chatbot1.png", "Conversation map"],
          ["/uiux/cleaning/dialogues1.png", "Dialogues"],
        ],
      },
      {
        id: "strategy",
        title: "UX strategy",
        text: "The information architecture prioritises the questions users ask first: what service is offered, why to trust the company, how much it costs, how the process works and what to do next.",
        images: [["/uiux/cleaning/ValuePropositionCanvas.png", "Value proposition canvas"]],
        cards: [
          ["Hero", "Immediate promise, service category and primary CTA."],
          ["Services", "Clear cards explaining what is included."],
          ["Booking", "Short path from service choice to request details."],
        ],
      },
      {
        id: "design",
        title: "UI decisions",
        text: "The visual system uses clean whitespace, blue trust cues, orange accents and direct content hierarchy to make the service feel reliable and easy to order.",
        cards: [
          ["Color", "Blue for trust, orange for attention, white for cleanliness."],
          ["Layout", "Large content blocks and clear CTAs for fast scanning."],
          ["Responsive", "Mobile-first structure for quick comparison and ordering."],
        ],
      },
      {
        id: "outcome",
        title: "Outcome & next steps",
        text: "The case shows a complete UX direction from research artifacts to a working website. If continued, the next step would be a price calculator, service package comparison, reviews and A/B testing of CTA copy.",
        cards: [
          ["What improved", "Clearer service structure, stronger trust signals and better booking logic."],
          ["What I would validate", "CTA conversion, pricing comprehension and mobile task completion."],
          ["Senior reflection", "The strongest design decision is reducing uncertainty before the booking step."],
        ],
      },
    ],
  },
};

export default function SeniorUiuxCase({ caseId }) {
  const item = cases[caseId];
  if (!item) return null;

  return (
    <main className="seniorCase">
      <section className="hero">
        <div className="heroText">
          <Link href="/uiux" className="back">← UI/UX cases</Link>
          <p className="eyebrow">{item.eyebrow}</p>
          <h1>{item.title}</h1>
          <p className="lead">{item.lead}</p>
          <div className="metaGrid">
            {item.meta.map(([label, value]) => (
              <div className="meta" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="heroMockup">
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 48vw" priority />
        </div>
      </section>

      <div className="layout">
        <aside className="toc">
          <span>Case structure</span>
          {item.nav.map((label) => (
            <a key={label} href={`#${label.toLowerCase().split(" ")[0]}`}>{label}</a>
          ))}
        </aside>

        <div className="content">
          {item.sections.map((section) => (
            <section className="section" id={section.id} key={section.id}>
              <p className="sectionIndex">{section.id}</p>
              <h2>{section.title}</h2>
              <p className="sectionText">{section.text}</p>

              {section.cards && (
                <div className="cards">
                  {section.cards.map(([title, text]) => (
                    <article className="card" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              )}

              {section.compare && (
                <div className="compare">
                  {section.compare.map(([title, src, text]) => (
                    <article className="visualCard" key={title}>
                      <div className="visual"><Image src={src} alt={title} fill sizes="(max-width: 900px) 100vw, 36vw" /></div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              )}

              {section.images && (
                <div className="gallery">
                  {section.images.map(([src, alt]) => (
                    <div className="galleryItem" key={src}>
                      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <style jsx>{`
        .seniorCase {
          min-height: 100svh;
          padding: calc(var(--nav-h, 64px) + 44px) 20px 96px;
          color: #111827;
          background:
            radial-gradient(circle at 12% 8%, rgba(96, 165, 250, 0.16), transparent 32%),
            radial-gradient(circle at 86% 12%, rgba(244, 114, 182, 0.13), transparent 30%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 45%, #f8fafc 100%);
        }
        .hero {
          max-width: 1220px;
          margin: 0 auto 34px;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
          gap: 28px;
          align-items: stretch;
        }
        .heroText, .heroMockup, .section, .toc {
          border: 1px solid rgba(255,255,255,.7);
          background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(255,255,255,.42));
          box-shadow: 0 24px 70px rgba(15,23,42,.10), inset 0 1px 0 rgba(255,255,255,.8);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
        }
        .heroText {
          padding: clamp(28px, 5vw, 64px);
          border-radius: 38px;
          display: grid;
          align-content: center;
          gap: 18px;
        }
        .back {
          width: max-content;
          color: #334155;
          text-decoration: none;
          font-weight: 800;
          font-size: 14px;
        }
        .eyebrow, .sectionIndex, .toc span, .meta span {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        h1 {
          margin: 0;
          font-size: clamp(48px, 8vw, 104px);
          line-height: .86;
          letter-spacing: -.075em;
          font-weight: 950;
        }
        .lead {
          max-width: 760px;
          margin: 0;
          color: #334155;
          font-size: clamp(17px, 1.55vw, 21px);
          line-height: 1.7;
        }
        .heroMockup {
          position: relative;
          min-height: 520px;
          border-radius: 38px;
          overflow: hidden;
        }
        .heroMockup :global(img), .visual :global(img), .galleryItem :global(img) {
          object-fit: contain;
          padding: 22px;
        }
        .metaGrid, .cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }
        .meta, .card {
          border-radius: 22px;
          padding: 16px;
          background: rgba(255,255,255,.54);
          border: 1px solid rgba(255,255,255,.72);
        }
        .meta strong, .card h3 {
          display: block;
          margin-top: 7px;
          color: #0f172a;
          font-size: 15px;
          line-height: 1.35;
        }
        .layout {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 24px;
          align-items: start;
        }
        .toc {
          position: sticky;
          top: 116px;
          border-radius: 28px;
          padding: 18px;
          display: grid;
          gap: 8px;
        }
        .toc a {
          color: #334155;
          text-decoration: none;
          font-weight: 800;
          padding: 10px 12px;
          border-radius: 999px;
        }
        .toc a:hover {
          background: rgba(255,255,255,.72);
          color: #0f172a;
        }
        .content {
          display: grid;
          gap: 24px;
        }
        .section {
          border-radius: 34px;
          padding: clamp(24px, 4vw, 46px);
          scroll-margin-top: 130px;
        }
        .section h2 {
          margin: 8px 0 14px;
          font-size: clamp(30px, 4vw, 56px);
          line-height: .98;
          letter-spacing: -.05em;
        }
        .sectionText {
          max-width: 860px;
          margin: 0;
          color: #334155;
          font-size: 18px;
          line-height: 1.75;
        }
        .cards {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .card p, .visualCard p {
          margin: 8px 0 0;
          color: #475569;
          line-height: 1.6;
        }
        .compare, .gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 22px;
        }
        .gallery {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .visualCard {
          padding: 14px;
          border-radius: 26px;
          background: rgba(255,255,255,.58);
          border: 1px solid rgba(255,255,255,.72);
        }
        .visual, .galleryItem {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
        }
        .galleryItem {
          min-height: 220px;
        }
        .visualCard h3 {
          margin: 14px 0 0;
          font-size: 18px;
        }
        @media (max-width: 980px) {
          .hero, .layout { grid-template-columns: 1fr; }
          .toc { position: relative; top: auto; display: flex; overflow-x: auto; }
          .metaGrid, .cards, .compare, .gallery { grid-template-columns: 1fr; }
          .heroMockup { min-height: 340px; }
        }
        @media (max-width: 560px) {
          .seniorCase { padding-inline: 12px; }
          .heroText, .section { border-radius: 26px; }
          h1 { font-size: clamp(44px, 16vw, 70px); }
        }
      `}</style>
    </main>
  );
}
