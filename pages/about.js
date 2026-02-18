// pages/about.js
import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Если фон с «пятнами» уже глобальный — УДАЛИ три строки ниже */}
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />
      <div className={`${styles.blob} ${styles.b3}`} />

      <div className={styles.grid}>
        {/* Левая колонка */}
        <div className={styles.leftCol}>
          <div className={styles.heroCard}>
            <h1 className={styles.title}>Kristina Dunajeva</h1>

            <p className={styles.p}>
              I am a graduate of the Estonian Entrepreneurship University of Applied Sciences, where I studied Web Technologies and Design. 
              During my studies, I developed a strong interest in UX/UI design, especially in the research and ideation stages that precede visual or technical solutions. 
              Working with personas, scenarios, and empathy maps shaped my understanding of user-centered design and the importance of making decisions based on user needs rather than assumptions.
            </p>

            <p className={styles.p}>
              After completing university, I gained hands-on experience working independently on design and development projects across both digital and physical environments. 
              Without a technical team or professional supervision, I was responsible for translating non-technical business requests into structured UX/UI solutions and functional web implementations. 
              My experience includes the independent development of an internal inventory management system with a strong focus on staff usability, as well as in-store branding projects such as logo redesign and promotional materials.
            </p>

            <p className={styles.p}>
              Across these projects, I owned the full process — from clarifying requirements and exploring design approaches to delivering final results and iterating based on stakeholder feedback. 
              This experience strengthened my ability to balance design, UX, and technical decisions while taking responsibility for outcomes in real business contexts.
            </p>

            <p className={styles.p}>
              I am now motivated to grow within a professional team environment, where I can learn from experienced specialists, exchange knowledge, and deepen my understanding of collaborative workflows beyond academic and independent projects.
            </p>

            <p className={styles.p}>
              Outside of work, I create and edit short, calm nature-focused videos for TikTok. 
              To balance long hours at the computer, I enjoy walking outdoors and practicing Pilates, valuing both mental clarity and physical well-being alongside focused, detail-oriented work.
            </p>
          </div>

          {/* Секции-карточки */}
          <div className={styles.cardsGrid}>
            <section className={`${styles.card} ${styles.cardWide}`}>
              <h2 className={styles.cardTitle}>Work experience</h2>
              <p className={styles.cardText}>August 2021 – present: Sales consultant - Likefon OÜ (Narva)</p>
              <p className={styles.cardText}>August 2024 – May 2025: Frontend Developer (Part-time) - Likefon OÜ (Narva)</p>
              <p className={styles.cardText}>November 2025 – February 2026: In-store UX & Visual Designer (Part-time) - Likefon OÜ (Narva)</p>
            </section>



            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Education</h2>
              <p className={styles.cardText}>2025 — Mainor University of Entrepreneurship</p>
              <p className={styles.cardText}>2022 — Narva Central Gymnasium</p>
            </section>

            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Hobbies</h2>
              <p className={styles.cardText}>2015–2021 — Photo studio “Positive”</p>
              <p className={styles.cardText}>
                I have participated in and won many city competitions. Currently, I only take photos with my phone and a film camera with color film.
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

            <div className={styles.barWrap}>
              <span className={styles.barLabel}>UX Research</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "90%" }} /></div>

              <span className={styles.barLabel}>Wireframing & UI</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "85%" }} /></div>

              <span className={styles.barLabel}>Frontend (React/Next)</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "80%" }} /></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
