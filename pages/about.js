// pages/about.js
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.grid}>
        {/* Левая колонка */}
        <div className={styles.leftCol}>
          <div className={styles.heroCard}>
<p className={styles.eyebrow}>About me</p>

<h1 className={styles.title}>Kristina Dunajeva</h1>

<p className={styles.lead}>
  Frontend developer with UI/UX design skills. My strongest side is combining
  two directions — design and development — and building projects independently
  from research and structure to visual design and working implementation.
</p>

<div className={styles.summaryGrid}>
  <div className={styles.summaryItem}>
    <span>Direction</span>
    <strong>Frontend development + UI/UX design</strong>
  </div>
  <div className={styles.summaryItem}>
    <span>Strong side</span>
    <strong>Full-cycle independent project work</strong>
  </div>
  <div className={styles.summaryItem}>
    <span>Background</span>
    <strong>Web Technologies and Design</strong>
  </div>
</div>

<p className={styles.p}>
  I am a graduate of the Estonian Entrepreneurship University of Applied
  Sciences, where I studied Web Technologies and Design. During my studies and
  independent projects, I developed an interest in both sides of digital
  product creation: understanding user needs and turning ideas into functional
  interfaces.
</p>

<p className={styles.p}>
  I work across two connected directions: UI/UX design and frontend
  development. On the design side, I create research-based user flows,
  information architecture, wireframes, visual layouts and clickable Figma
  prototypes. On the development side, I build responsive pages, interactive
  interfaces and practical web tools.
</p>

<p className={styles.p}>
  A key part of my experience is that I created my projects independently. I
  worked through the full process myself: searching and analyzing information,
  studying competitors, thinking through customer and business needs, designing
  the interface, preparing visual materials, and implementing the final result
  in code.
</p>

<p className={styles.p}>
  This combination helps me think not only about how a page looks, but also how
  it works, how users move through it, and how the interface can support real
  business tasks. I am motivated to grow in a professional team environment,
  learn from experienced specialists and continue improving both my frontend
  and UI/UX skills.
</p>
          </div>

          {/* Секции-карточки */}
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
      <div className={styles.experienceDate}>August 2024 — May 2025</div>

      <div className={styles.experienceContent}>
        <h3>Frontend Developer — Likefon OÜ</h3>
        <p>
          Built a practical inventory management interface for phone case
          accounting, focusing on product data, search, filtering, availability
          states, and staff usability.
        </p>

        <div className={styles.experienceTags}>
          <span>Frontend</span>
          <span>JavaScript</span>
          <span>Inventory system</span>
          <span>Staff usability</span>
        </div>

        <Link href="/project4" className={styles.experienceLink}>
          View related project
        </Link>
      </div>
    </article>

    <article className={styles.experienceItem}>
      <div className={styles.experienceDate}>November 2025 — February 2026</div>

      <div className={styles.experienceContent}>
        <h3>In-store UX & Visual Designer — Likefon OÜ</h3>
        <p>
          Worked on in-store visual and UX improvements, including promotional
          materials, customer-facing communication, visual hierarchy, and shop
          redesign ideas for a clearer store experience.
        </p>

        <div className={styles.experienceTags}>
          <span>Visual design</span>
          <span>UX thinking</span>
          <span>Shop redesign</span>
          <span>Brand materials</span>
        </div>

        <Link href="/uiux/shop-redesign" className={styles.experienceLink}>
          View shop redesign
        </Link>
      </div>
    </article>

    <article className={styles.experienceItem}>
      <div className={styles.experienceDate}>February 2026 — May 2026</div>

      <div className={styles.experienceContent}>
        <h3>UX/UI Designer — Commercial Figma Prototype — Likefon OÜ</h3>
        <p>
          Created a commercial clickable Figma prototype independently, covering
          the full UX/UI process: competitor research, information gathering,
          customer and business needs analysis, interface structure, visual
          design, and interactive prototype creation.
        </p>

        <div className={styles.experienceTags}>
          <span>Competitor research</span>
          <span>Customer analysis</span>
          <span>UX/UI design</span>
          <span>Clickable prototype</span>
          <span>Figma</span>
        </div>

        <Link href="/figma3" className={styles.experienceLink}>
          View Figma prototype case
        </Link>
      </div>
    </article>

    <article className={styles.experienceItem}>
      <div className={styles.experienceDate}>May 2026 — present</div>

      <div className={styles.experienceContent}>
        <h3>Frontend Developer — Likefon Website Implementation — Likefon OÜ</h3>
        <p>
          Continuing the Likefon redesign project by turning the Figma prototype
          into a working website, focusing on responsive layout, frontend
          structure, reusable sections, and implementation of the designed user
          flow.
        </p>

        <div className={styles.experienceTags}>
          <span>Frontend development</span>
          <span>Website implementation</span>
          <span>Responsive layout</span>
          <span>From Figma to code</span>
        </div>

        <Link href="/figma3" className={styles.experienceLink}>
          View project foundation
        </Link>
      </div>
    </article>
  </div>
</section>

            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Education</h2>
              <p className={styles.cardText}>
                2025 — Mainor University of Entrepreneurship
              </p>
              <p className={styles.cardText}>2022 — Narva Central Gymnasium</p>
            </section>

<section className={styles.card}>
  <h2 className={styles.cardTitle}>Creative background</h2>
  <p className={styles.cardText}>
    2015–2021 — Photo studio “Positive”
  </p>
  <p className={styles.cardText}>
    Photography, visual composition and calm nature video editing help me
    develop an eye for detail, framing, color, rhythm and visual storytelling.
  </p>
</section>
          </div>
        </div>

        {/* Правая колонка — липкая карточка */}
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
