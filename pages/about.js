import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <div className={styles.heroCard}>
            <p className={styles.eyebrow}>About me</p>

            <h1 className={styles.title}>Kristina Dunajeva</h1>

            <p className={styles.lead}>
              Frontend developer with UI/UX design skills. My strongest side is
              connecting design and implementation: I can take a user or business
              problem, structure the experience, design the interface, and turn it
              into a responsive frontend.
            </p>

            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <span>Direction</span>
                <strong>Frontend development + UI/UX design</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Best fit</span>
                <strong>Frontend, UI/UX, or hybrid product roles</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Background</span>
                <strong>Web Technologies and Design</strong>
              </div>
            </div>

            <section style={{ marginTop: 24 }}>
              <h2 className={styles.cardTitle}>How I can contribute</h2>
              <p className={styles.p}>
                I am most useful where design and frontend meet: turning UX decisions
                into responsive interfaces, communicating clearly with designers and
                developers, and taking ownership of small features from brief to
                implementation. I bring hands-on experience with real business
                workflows and care about usability, consistency, and practical code.
              </p>
            </section>

            <p className={styles.p}>
              I am a graduate of the Estonian Entrepreneurship University of Applied
              Sciences, where I studied Web Technologies and Design. During my studies
              and independent projects, I developed an interest in both sides of
              digital product creation: understanding user needs and turning ideas
              into functional interfaces.
            </p>

            <p className={styles.p}>
              On the design side, I create research-based user flows, information
              architecture, wireframes, visual layouts and clickable Figma prototypes.
              On the development side, I build responsive pages, interactive
              interfaces and practical web tools.
            </p>

            <p className={styles.p}>
              A key part of my experience is independent end-to-end project work:
              competitor research, customer and business needs analysis, interface
              design, visual materials, implementation, testing and iteration.
            </p>
          </div>

          <div className={styles.cardsGrid}>
<section className={`${styles.card} ${styles.cardWide}`}>
  <div className={styles.sectionTop}>
    <h2 className={styles.cardTitle}>Work experience</h2>
    <span>Project-backed experience</span>
  </div>

  <div className={styles.experienceList}>
    <article className={styles.experienceItem}>
      <div className={styles.experienceDate}>August 2021 — present</div>

      <div className={styles.experienceContent}>
        <h3>Sales Consultant — Likefon OÜ</h3>
        <p>
          Worked directly with customers in a phone accessories store, helping
          users choose products and understanding real customer needs, product
          selection behavior, and everyday service pain points.
        </p>

        <div className={styles.experienceTags}>
          <span>Customer communication</span>
          <span>Product knowledge</span>
          <span>User needs</span>
        </div>
      </div>
    </article>

    <article className={styles.experienceItem}>
      <div className={styles.experienceDate}>August 2024 — present</div>

      <div className={styles.experienceContent}>
        <h3>Product Designer (UI/UX) & Frontend Developer — Likefon OÜ</h3>
        <p>• Designed and built a web-based inventory management system from scratch (HTML, CSS/Bootstrap, JavaScript, Fetch API, JSON)
        - dynamic filtering and live stock indicators replaced manual stock checks, now used daily by store staff</p>
        <p>• Led an in-store branding refresh end to end - logo, posters, business cards - based on competitor and customer research, from brief through management approval. </p>
        <p> • Designed and implemented a responsive, interactive user interface for a full-stack web application, including user authentication, inventory management, and order processing </p>
        <p> • Designed a commercial Figma prototype independently, from competitor research and customer analysis through to high-fidelity, interactive UI covering full user flows and information architecture. </p>
        <p>• Currently converting that prototype into a responsive production website with reusable components and structured frontend layout</p>

        <div className={styles.experienceTags}>
          <span>Frontend</span>
          <span>JavaScript</span>
          <span>Inventory system</span>
          <span>Staff usability</span>
        </div>

        <Link href="/project4" className={styles.experienceLink}>
          Stock Tracker
        </Link>
                <Link href="/figma3" className={styles.experienceLink}>
          Figma prototype
        </Link>
                <Link href="/uiux/shop-redesign" className={styles.experienceLink}>
          Logo Redesign
        </Link>
      </div>
    </article>
  </div>
</section>

            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Education</h2>
              <p className={styles.cardText}>
                2025 —  Estonian Entrepreneurship University of Applied Sciences. 
              </p> 
              <p className={styles.cardText}>
                Bachelor of Arts in Web Technologies and Design
              </p> 
              <p className={styles.cardText}>2022 — Narva Central Gymnasium</p>
            </section>

            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Creative background</h2>
              <p className={styles.cardText}>2015–2021 — Photo studio “Positive”</p>
              <p className={styles.cardText}>
                Photography, visual composition and calm nature video editing help me
                develop an eye for detail, framing, color, rhythm and visual storytelling.
              </p>
            </section>
          </div>
        </div>

        <aside className={styles.rightCol}>
          <div className={styles.stickyCard}>
            <div className={styles.avatarWrap}>
              <Image
                src="/me.jpg"
                alt="My photo"
                width={160}
                height={160}
                className={styles.avatar}
                priority
              />
            </div>

            <div className={styles.facts}>
              <div className={styles.chip}>UX/UI</div>
              <div className={styles.chip}>Frontend</div>
              <div className={styles.chip}>Web design</div>
            </div>

            <div className={styles.focusBox}>
              <h2>Focus areas</h2>
              <div className={styles.focusList}>
                <span>Frontend development</span>
                <span>UI/UX design</span>
                <span>Figma prototyping</span>
                <span>Responsive layout</span>
                <span>Independent project work</span>
                <span>Business-oriented interfaces</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}