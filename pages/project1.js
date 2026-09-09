import BrowserMock from "@/components/BrowserMock";
import styles from "@/styles/Project.module.css";

const snapshot = [
  { label: "Role", value: "Design & frontend — solo project" },
  { label: "Stack", value: "HTML, CSS, JavaScript, Bootstrap" },
  { label: "Project type", value: "University project · Year 3" },
  { label: "Focus", value: "Booking flow, pricing clarity, conversion structure" },
];

const problem =
  "Cleaning service websites often bury the booking action under generic marketing text. " +
  "The goal was to structure a site where a visitor can understand services, see prices, " +
  "and book a cleaning in as few steps as possible.";

const solution = [
  "Landing structure built around one primary CTA — booking — repeated at each decision point.",
  "Pricing presented per service type, so users don't have to request a quote for basic questions.",
  "Responsive layout tested on mobile first, since most traffic for local services comes from phones.",
];

const results = [
  { value: "1", label: "primary CTA across all pages" },
  { value: "3", label: "click path from landing to booking" },
  { value: "100%", label: "responsive breakpoints covered" },
];

export default function Project1() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.projectHero}>
          <div className={styles.projectHeroText}>
            <p className={styles.projectEyebrow}>Website project</p>
            <h1 className={styles.projectHeroTitle}>CleanseTeam</h1>
            <p className={styles.projectHeroLead}>
              A cleaning service website with a booking flow, transparent
              pricing and a conversion-focused structure. University project,
              designed and built solo.
            </p>
          </div>
        </section>

        {/* SNAPSHOT */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Project snapshot</h2>
          <div className={styles.projectSnapshotGrid}>
            {snapshot.map((item) => (
              <article key={item.label} className={styles.projectSnapshotCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>The problem</h2>
          <p className={styles.projectText}>{problem}</p>
        </section>

        {/* SOLUTION */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>The solution</h2>
          <ul className={styles.projectList}>
            {solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* RESULT — цифры крупно */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Result</h2>
          <div className={styles.projectSnapshotGrid}>
            {results.map((item) => (
              <article key={item.label} className={styles.projectSnapshotCard}>
                <strong className={styles.resultValue}>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* LINKS */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Links</h2>
          <div className={styles.btnRow}>
            <a
              href="https://github.com/kyrlyama/..." // ПРОВЕРЬ: ссылка на репозиторий проекта
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoBtn}
            >
              GitHub repository
            </a>
          </div>
        </section>

        {/* SCREENSHOTS в мокапах */}
        <section className={styles.projectSection}>
          <h2 className={styles.projectSectionTitle}>Screenshots</h2>
          <BrowserMock src="/project1.png" alt="CleanseTeam homepage" />
          <BrowserMock src="/project12.png" alt="CleanseTeam services page" />
          <BrowserMock src="/project13.png" alt="CleanseTeam booking flow" />
        </section>
      </div>
    </main>
  );
}