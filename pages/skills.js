// pages/skills.js
import Image from "next/image";

import styles from "@/styles/Skills.module.css";

export default function Skills() {
  const TOOLS = [
    { img: "/tools/figma.png", title: "Figma" },
    { img: "/tools/photoshop.png", title: "Photoshop" },
    { img: "/tools/illustrator.png", title: "Illustrator" },
    { img: "/tools/affinity.png", title: "Affinity" },
    { img: "/tools/vscode.png", title: "VS Code" },
    { img: "/tools/github.png", title: "Git & GitHub" },
    { img: "/tools/xampp.png", title: "XAMPP" },
    { img: "/tools/dockerdesktop.png", title: "Docker Desktop" },
    { img: "/tools/wix.png", title: "Wix / Google Sites" },
    { img: "/tools/chatgpt.png", title: "ChatGPT" },
    { img: "/tools/androidstudio.png", title: "Android Studio" },
    { img: "/tools/canva.png", title: "Canva" },
    { img: "/tools/oracle.png", title: "Oracle" },
    { img: "/tools/notepad.png", title: "Notepad++" },
  ];

  const LANGS = [
    { name: "Russian", level: "Native" },
    { name: "English", level: "B2" },
    { name: "Estonian", level: "A2" },
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
      text: "HTML5, CSS3 / SCSS, JavaScript (ES6+), React.js, Next.js, Bootstrap, Tailwind CSS",
    },
    {
      lead: "Backend & Databases",
      text: "Node.js basics, API project launch, MySQL databases and queries, JSON, Fetch API",
    },
    {
      lead: "Mobile Development",
      text: "Android Studio, Java / Kotlin basics, calculator and translator app projects",
    },
    {
      lead: "Version Control & Deployment",
      text: "Git, GitHub, publishing projects, working with repositories and project versions",
    },
    {
      lead: "Design & Prototyping",
      text: "Figma, Adobe Photoshop, Adobe Illustrator, Canva, Affinity",
    },
    {
      lead: "Other Tools",
      text: "VS Code, XAMPP, Docker, ChatGPT, Google Sites, Wix, Notepad++",
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
    "MVC Pattern — separating business logic, UI, and data for cleaner and more scalable design.",
  ];

  const CORE = [
    {
      title: "Frontend development",
      text: "Building responsive pages, interactive UI, forms, galleries, filters, and project case layouts.",
      tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "UI/UX design",
      text: "Creating user flows, wireframes, prototypes, design systems, and case-study presentations.",
      tags: ["Figma", "User flows", "Wireframes", "Prototypes"],
    },
    {
      title: "Data & logic",
      text: "Working with JSON, Fetch API, localStorage, filtering, validation, and basic database logic.",
      tags: ["JSON", "Fetch API", "localStorage", "MySQL"],
    },
  ];

  return (
    <main className={styles.skillsPage}>
      <div className={styles.wrap}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Skills overview</p>
          <h1 className={styles.heroTitle}>
            Frontend, UI/UX and practical product-building skills
          </h1>
          <p className={styles.heroLead}>
            I combine frontend development with UI/UX thinking: building
            responsive interfaces, structuring content, prototyping user flows,
            and turning design ideas into working web pages.
          </p>
        </section>

        <section className={styles.coreGrid}>
          {CORE.map((item) => (
            <article key={item.title} className={styles.coreCard}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className={styles.tagRow}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <div className={styles.row}>
          <section className={styles.bigCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.title}>Tools & Software</h2>
              <span>{TOOLS.length} tools</span>
            </div>

            <div className={styles.grid2}>
              {TOOLS.map((t) => (
                <div key={t.title} className={styles.smallCard}>
                  <div className={styles.iconBox}>
                    <Image
                      src={t.img}
                      alt={`${t.title} icon`}
                      width={22}
                      height={22}
                    />
                  </div>
                  <div className={styles.smallText}>{t.title}</div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.bigCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.title}>Languages</h2>
              <span>Communication</span>
            </div>

            <div className={styles.langList}>
              {LANGS.map((l) => (
                <div
                  key={l.name}
                  className={`${styles.smallCard} ${styles.singleCell}`}
                >
                  <div className={styles.langRow}>
                    <span className={styles.langName}>{l.name}</span>
                    <span className={styles.langSep}>—</span>
                    <span className={styles.langLevel}>{l.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.bigCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.title}>Soft Skills</h2>
              <span>Work style</span>
            </div>

            <div className={`${styles.grid2} ${styles.softGrid}`}>
              {SOFT.map((t) => (
                <div key={t} className={styles.softCard}>
                  <div className={styles.softText}>{t}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className={`${styles.bigCard} ${styles.fullWidth}`}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Technologies</h2>
            <span>Development stack</span>
          </div>

          <div className={styles.techGrid}>
            {TECHNOLOGIES.map((it) => (
              <article key={it.lead} className={styles.techCard}>
                <h3>{it.lead}</h3>
                <p>{it.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.bigCard} ${styles.fullWidth}`}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Design Approaches</h2>
            <span>UX process</span>
          </div>

          <div className={styles.approachGrid}>
            {APPROACHES.map((txt) => (
              <article key={txt} className={styles.lineCard}>
                {highlightLead(txt)}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function highlightLead(str) {
  const [lead, rest] = str.split(" — ");
  return (
    <>
      <span className={styles.lead}>{lead}</span>
      {rest ? <span className={styles.lineText}> — {rest}</span> : null}
    </>
  );
}