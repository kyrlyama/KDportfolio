// pages/skills.js
import Image from "next/image";

export default function Skills() {
  // ==== ДАННЫЕ (убедитесь, что пути к иконкам верные) ====
  const TOOLS = [
    { img: "/tools/figma.png",      title: "Figma" },
    { img: "/tools/photoshop.png",  title: "Photoshop" },
    { img: "/tools/illustrator.png",title: "Illustrator" },
    { img: "/tools/vscode.png",     title: "VS Code" },
    { img: "/tools/github.png",     title: "Git & GitHub" },
    { img: "/tools/xampp.png",      title: "XAMPP / Docke" },
    { img: "/tools/wix.png",        title: "Wix / Google Sites" },
    { img: "/tools/chatgpt.png",    title: "ChatGPT" },
  ];

const LANGS = [
  "Russian — native",
  "English — B2",
  "Estonian — A2",
];

  const SOFT = [
    "Creativity and visual thinking",
    "Attention to detail",
    "Problem-solving and adaptability",
    "Communication and teamwork",
    "Time management and responsibility",
    "Willingness to learn and grow",
    "User-centered mindset",
    "Presentation and storytelling",
  ];

  const TECHNOLOGIES = [
    {
      lead: "Frontend & Web Development",
      text:
        "HTML5, CSS3 / SCSS, JavaScript (ES6+), React.js, Next.js, Bootstrap, Tailwind CSS",
    },
    {
      lead: "Backend & Databases",
      text:
        "Node.js (basics, project launch, API), MySQL (creating and working with databases, queries), JSON (working with data, Fetch API)",
    },
    {
      lead: "Mobile Development",
      text: "Android Studio, Java / Kotlin (basic level, calculator, translator app)",
    },
    {
      lead: "Version Control & Deployment",
      text: "Git, GitHub (publication of projects, open source code)",
    },
    {
      lead: "Design & Prototyping",
      text: "Figma, Adobe Photoshop, Adobe Illustrator, Canva",
    },
    {
      lead: "Other Tools",
      text:
        "VS Code, XAMPP, Docker, ChatGPT, Google Sites, Wix (creating websites without code, practical assignments)",
    },
  ];

  const APPROACHES = [
    "User Research — collecting insights through interviews, surveys, and observations.",
    "Personas & Empathy Maps — defining user needs, emotions, and motivations.",
    "Customer Journey Mapping — visualizing user flows and identifying pain points.",
    "Information Architecture — organizing content and navigation in a clear way.",
    "Wireframing & Prototyping — from low-fidelity sketches to high-fidelity interactive Figma prototypes.",
    "Usability Testing — validating ideas with users and iterating designs.",
    "Design Systems & UI Guidelines — ensuring consistency across the product.",
    "Microinteractions & Chatbot Flows — focusing on details that improve user experience.",
    "MVC Pattern (Model–View–Controller) — separating business logic, UI, and data for clean and scalable design. (was disclosed in the diploma)",
  ];

  const s = styles;

  return (
    <div style={s.page}>
      <div style={s.wrap}>

        {/* Ряд 1: Tools, Languages, Soft Skills */}
        <div style={s.row}>
          <section style={s.bigCard}>
            <h2 style={s.title}>Tools &amp; Software</h2>
            <div style={s.grid2}>
              {TOOLS.map((t, i) => (
                <div key={i} style={s.smallCard}>
                  <div style={s.iconBox}>
<Image src={t.img} alt="" width={22} height={22} />
                  </div>
                  <div style={s.smallText}>{t.title}</div>
                </div>
              ))}
            </div>
          </section>

<section style={s.bigCard}>
  <h2 style={s.title}>Languages</h2>
  <div style={{ ...s.grid2, gridTemplateColumns: "1fr", gap: 12 }}>
    {LANGS.map((t, i) => (
                <div key={i} style={{ ...s.smallCard, gridTemplateColumns: "1fr", minHeight: 64 }}>
                  <div style={s.smallText}>{t}</div>
      </div>
    ))}
  </div>
</section>


          <section style={s.bigCard}>
            <h2 style={s.title}>Soft Skills</h2>
            <div style={s.grid2}>
              {SOFT.map((t, i) => (
                <div key={i} style={{ ...s.smallCard, gridTemplateColumns: "1fr", minHeight: 64 }}>
                  <div style={s.smallText}>{t}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Ряд 2: Technologies */}
        <section style={{ ...s.bigCard, ...s.fullWidth, marginBottom: "44px" }}>
          <h2 style={s.title}>Technologies</h2>
          <div style={s.listStack}>
            {TECHNOLOGIES.map((it, i) => (
              <div key={i} style={s.lineCard}>
                <span style={s.lead}>{it.lead}</span>
                <span style={s.lineText}> — {it.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ряд 3: Design Approaches */}
        <section style={{ ...s.bigCard, ...s.fullWidth }}>
          <h2 style={s.title}>Design Approaches</h2>
          <div style={s.listStack}>
            {APPROACHES.map((t, i) => (
              <div key={i} style={s.lineCard}>
                {highlightLead(t)}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Простая адаптивность */}
      <style jsx global>{`
        @media (max-width: 980px) {
          .skills-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function highlightLead(str) {
  const [lead, rest] = str.split(" — ");
  return (
    <>
      <span style={styles.lead}>{lead}</span>
      {rest ? <span style={styles.lineText}> — {rest}</span> : null}
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "110px 24px 80px",
    color: "#111",
    background:
      "radial-gradient(1200px 800px at 15% 0%, rgba(255,255,255,0.95) 0%, rgba(235,242,255,0.85) 35%, rgba(242,226,255,0.8) 60%, rgba(254,233,247,0.8) 85%, rgb(251,226,226) 100%)",
  },
  wrap: { maxWidth: 1200, margin: "0 auto" },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 0.8fr 1fr",
    gap: 24,
    marginBottom: 28,
  },
  bigCard: {
    background: "#fff",
    borderRadius: 22,
    padding: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
  },
  fullWidth: { gridColumn: "1 / -1" },
  title: {
    margin: "4px 6px 16px",
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: 0.2,
    color: "#111",
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  smallCard: {
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    borderRadius: 16,
    padding: "12px 14px",
    minHeight: 60,
    boxShadow: "0 6px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
    background:
      "radial-gradient(circle at 30% 30%, #f2f7ff 0%, #eef1ff 60%, #f7ecff 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
  },
  smallText: {
    fontSize: 15,
    lineHeight: 1.4,
    color: "#222",
    wordBreak: "normal",
    overflowWrap: "anywhere",
  },

  listStack: { display: "grid", gap: 12 },
  lineCard: {
    background: "#fff",
    borderRadius: 14,
    padding: "12px 14px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    fontSize: 15.5,
    lineHeight: 1.45,
    color: "#222",
  },
  lead: { fontWeight: 800, color: "#111" },
  lineText: { color: "#222" },
};
