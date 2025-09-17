// pages/skills.js
import Image from "next/image";
import styles from "@/styles/Skills.module.css";

export default function Skills() {
  // ==== ДАННЫЕ ====
  const TOOLS = [
    { img: "/tools/figma.png",      title: "Figma" },
    { img: "/tools/photoshop.png",  title: "Photoshop" },
    { img: "/tools/illustrator.png",title: "Illustrator" },
    { img: "/tools/vscode.png",     title: "VS Code" },
    { img: "/tools/github.png",     title: "Git & GitHub" },
    { img: "/tools/xampp.png",      title: "XAMPP" },
    { img: "/tools/dockerdesktop.png",     title: "Dockerdesktop" },
    { img: "/tools/wix.png",        title: "Wix / Google Sites" },
    { img: "/tools/chatgpt.png",    title: "ChatGPT" },
    { img: "/tools/androidstudio.png", title: "Android Studio" },
    { img: "/tools/canva.png",      title: "Canva" },
    { img: "/tools/oracle.png",  title: "Oracle" },
    { img: "/tools/notepad.png",  title: "Notepad++" },


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

  return (
    <div className={styles.skillsPage}>
      <div className={styles.wrap}>

        {/* Ряд 1: Tools, Languages, Soft Skills */}
        <div className={styles.row}>

  <section className={styles.bigCard}>
    <h2 className={styles.title}>Tools &amp; Software</h2>
    <div className={styles.grid2}>
      {TOOLS.map((t, i) => (
        <div key={i} className={styles.smallCard}>
          <div className={styles.iconBox}>
            <Image src={t.img} alt={`${t.title} icon`} width={22} height={22} />
          </div>
          <div className={styles.smallText}>{t.title}</div>
        </div>
      ))}
    </div>
  </section>

  <section className={`${styles.bigCard} ${styles.languagesCol}`}>
    <h2 className={styles.title}>Languages</h2>
    <div className={`${styles.grid2} ${styles.oneCol}`}>
      {LANGS.map((t, i) => (
        <div key={i} className={`${styles.smallCard} ${styles.singleCell}`}>
          <div className={`${styles.smallText} ${styles.noWrap}`}>{t}</div>
        </div>
      ))}
    </div>
  </section>


  <section className={styles.bigCard}>
    <h2 className={styles.title}>Soft Skills</h2>
    <div className={styles.grid2}>
      {SOFT.map((t, i) => (
        <div key={i} className={`${styles.smallCard} ${styles.singleCell}`}>
          <div className={styles.smallText}>{t}</div>
        </div>
      ))}
    </div>
  </section>
</div>

        {/* Ряд 2: Technologies */}
        <section className={`${styles.bigCard} ${styles.fullWidth}`} style={{ marginBottom: 44 }}>
          <h2 className={styles.title}>Technologies</h2>
          <div className={styles.listStack}>
            {TECHNOLOGIES.map((it, i) => (
              <div key={i} className={styles.lineCard}>
                <span className={styles.lead}>{it.lead}</span>
                <span className={styles.lineText}> — {it.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ряд 3: Design Approaches */}
        <section className={`${styles.bigCard} ${styles.fullWidth}`}>
          <h2 className={styles.title}>Design Approaches</h2>
          <div className={styles.listStack}>
            {APPROACHES.map((txt, i) => (
              <div key={i} className={styles.lineCard}>
                {highlightLead(txt)}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

/* Выделение лид-части строки «Lead — текст» */
function highlightLead(str) {
  const [lead, rest] = str.split(" — ");
  return (
    <>
      <span className={styles.lead}>{lead}</span>
      {rest ? <span className={styles.lineText}> — {rest}</span> : null}
    </>
  );
}
