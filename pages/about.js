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
              I am a recent graduate from the Estonian Entrepreneurship University of Applied Sciences, where I studied Web Technologies and Design.
              Although I don’t yet have professional work experience in the field,
              I am eager to apply my fresh knowledge in a real working environment and grow as a designer and developer.
            </p>

            <p className={styles.p}>
              During my studies, I enjoyed the freedom of experimenting with concepts and visuals, but I especially loved our UX/UI classes.
              Before creating applications, we spent a lot of time building personas, scenarios, and empathy maps.
              These tools showed me the importance of understanding users, and I look forward to applying and promoting them in future teamwork.
            </p>

            <p className={styles.p}>
              At university, we had to focus on a wide range of skills, which gave me a solid foundation but also showed me where I still need to grow.
              Now I am actively improving my skills in modern and creative design,
              and I want to join a company where I can learn from professionals and discover what the industry is like outside of university projects.
            </p>

            <p className={styles.p}>
              In my free time, I create and edit short videos for TikTok, film nature, and combine it with calm music.
              Since I spend a lot of time at the computer, I balance it with long walks outdoors.
            </p>
          </div>

          {/* Секции-карточки */}
          <div className={styles.cardsGrid}>
            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Work experience</h2>
              <p className={styles.cardText}>2020–present: Likefon, sales consultant</p>
            </section>

            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Practice</h2>
              <p className={styles.cardText}>
                2025 — Development of a web application for inventory management at Likefon
              </p>
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
              <span className={styles.barLabel}>Creativity</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "90%" }} /></div>

              <span className={styles.barLabel}>Teamwork</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "85%" }} /></div>

              <span className={styles.barLabel}>Focus</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "80%" }} /></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
