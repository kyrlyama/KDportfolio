import Link from "next/link";
import Image from "next/image";
import pm from "@/styles/Project.module.css";
import styles from "@/styles/UiuxCase.module.css";

const toc = [
  { id: "background", label: "Project background" },
  { id: "goal", label: "Goal" },
  { id: "audience", label: "Visitors / Audience" },
  { id: "audit", label: "UX / Visual audit (old logo)" },
  { id: "why", label: "Why redesign" },
  { id: "concept", label: "Concept" },
  { id: "process", label: "Process" },
  { id: "final", label: "Final result" },
  { id: "logo", label: "Logo design" },
  { id: "mockups", label: "Mockups" },
  { id: "outcome", label: "Outcome & learnings" },
];

export default function ShopRedesign() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.heroCard}>
          <div className={styles.heroMedia}>
            <Image
              src="/uiux/redesign/redesign.png"
              alt="Redesign Like store cover"
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              className={styles.heroImage}
              priority
            />
          </div>

          <div className={styles.heroText}>
            <p className={styles.kicker}>VISUAL IDENTITY UPDATE · AFFINITY DESIGNER</p>
            <h1 className={styles.title}>Logo Redesign for Like</h1>
            <p className={styles.lead}>
              Refreshing a local phone accessories retailer’s identity to improve clarity, trust,
              and visibility in a competitive mall environment.
            </p>
          </div>
        </section>

        {/* BODY GRID: TOC + SECTIONS */}
        <div className={styles.body}>
          {/* LEFT NAV (same as Cleaning case) */}
          <aside className={styles.toc}>
            <h3>Contents</h3>

            <ul>
              {toc.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>

            {/* mobile dropdown (same behavior as Cleaning case) */}
            <div className={styles.tocMobile}>
              <label htmlFor="tocSelect">Jump to</label>
              <select
                id="tocSelect"
                defaultValue=""
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) return;
                  const el = document.getElementById(value);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <option value="" disabled>
                  Select section
                </option>
                {toc.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className={styles.sections}>
            <section id="background" className={styles.section}>
              <h2>Project background</h2>
              <ul>
                <li>
                  <strong>Store type:</strong> local retail shop.
                </li>
                <li>
                  <strong>What it sells:</strong> phone accessories and headsets.
                </li>
                <li>
                  <strong>Location:</strong> a local shop inside a shopping mall.
                </li>
                <li>
                  <strong>Competitive context:</strong> strong competition with Click, Evelatus, and OnOff.
                </li>
              </ul>
            </section>

            <section id="goal" className={styles.section}>
              <h2>Goal</h2>
              <p>
                Create a clearer and more recognisable brand mark that is readable at distance, scalable for print
                and digital use, and visually connected to the store’s category.
              </p>
            </section>

            <section id="audience" className={styles.section}>
              <h2>Visitors / Audience</h2>
              <p>
                Mall visitors who need accessories quickly, plus repeat customers looking for repairs, cases, chargers,
                and small tech essentials.
              </p>
            </section>

            <section id="audit" className={styles.section}>
              <h2>UX / Visual audit (old logo)</h2>
              <p>
                The original mark was too abstract and didn’t communicate the store’s category well. It also lost
                clarity at small sizes, reducing memorability and trust.
              </p>
            </section>

            <section id="why" className={styles.section}>
              <h2>Why redesign</h2>
              <ul>
                <li>Improve recognisability in a noisy retail environment.</li>
                <li>Increase perceived professionalism and trust.</li>
                <li>Make the logo readable and consistent across signage, packaging, and digital.</li>
              </ul>
            </section>

            <section id="concept" className={styles.section}>
              <h2>Concept</h2>
              <p>
                A friendly, modern mark that references communication/phone accessories through a simple and
                recognisable shape language, while staying scalable and clean.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2>Process</h2>
              <ul>
                <li>Competitive scan + visual direction</li>
                <li>Logo sketches and iterations</li>
                <li>Testing at small sizes (print/digital)</li>
                <li>Mockups for real-world context</li>
              </ul>
            </section>

            {/* FINAL RESULT with images */}
            <section id="final" className={styles.section}>
              <h2>Final result</h2>

              <div className={styles.compareGrid}>
                <div className={styles.compareCard}>
                  <div className={styles.compareImageWrapper}>
                    <Image
                      src="/uiux/redesign/beforeredesign.jpg"
                      alt="Before redesign"
                      width={1200}
                      height={800}
                      className={styles.compareImage}
                    />
                  </div>
                  <h3 className={styles.h3}>Before</h3>
                  <p className={styles.p}>
                    Abstract mark with low association to the store’s products and weak scalability.
                  </p>
                </div>

                <div className={styles.compareCard}>
                  <div className={styles.compareImageWrapper}>
                    <Image
                      src="/uiux/redesign/redesign.png"
                      alt="After redesign"
                      width={1200}
                      height={800}
                      className={styles.compareImage}
                    />
                  </div>
                  <h3 className={styles.h3}>After</h3>
                  <p className={styles.p}>
                    Clearer, more modern logo with recognisable cues and improved legibility for print and digital use.
                  </p>
                </div>
              </div>
            </section>

            {/* LOGO DESIGN */}
            <section id="logo" className={styles.section}>
              <h2>Logo design</h2>

              <div className={styles.mediaGrid}>
                {/* 1 */}
                <div className={styles.logoBlock}>
                  <div className={styles.mediaCard}>
                    <Image
                      src="/uiux/redesign/Logo_likefon_1.png"
                      alt="Logo Likefon concept 1"
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>

                  <div className={styles.logoMeta}>
                    <div className={styles.colorRow}>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#EBEBEB" }} />
                        <span className={styles.colorCode}>#EBEBEB</span>
                      </span>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#000000" }} />
                        <span className={styles.colorCode}>#000000</span>
                      </span>
                    </div>
                    <div className={styles.fontInfo}>
                      <span className={styles.fontLabel}>Font:</span> Arial Rounded MT Bold
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className={styles.logoBlock}>
                  <div className={styles.mediaCard}>
                    <Image
                      src="/uiux/redesign/Logo_likefon_2.png"
                      alt="Logo Likefon concept 2"
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>

                  <div className={styles.logoMeta}>
                    <div className={styles.colorRow}>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#2D2D2D" }} />
                        <span className={styles.colorCode}>#2D2D2D</span>
                      </span>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#30D158" }} />
                        <span className={styles.colorCode}>#30D158</span>
                      </span>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#FAFAF2" }} />
                        <span className={styles.colorCode}>#FAFAF2</span>
                      </span>
                    </div>
                    <div className={styles.fontInfo}>
                      <span className={styles.fontLabel}>Font:</span> Arial Rounded MT Bold
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className={styles.logoBlock}>
                  <div className={styles.mediaCard}>
                    <Image
                      src="/uiux/redesign/logo_likefon_3.png"
                      alt="Logo Likefon concept 3"
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>

                  <div className={styles.logoMeta}>
                    <div className={styles.colorRow}>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#2F47FF" }} />
                        <span className={styles.colorCode}>#2F47FF</span>
                      </span>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#EFF6FF" }} />
                        <span className={styles.colorCode}>#EFF6FF</span>
                      </span>
                      <span className={styles.colorChip}>
                        <span className={styles.colorSwatch} style={{ background: "#2D2D2D" }} />
                        <span className={styles.colorCode}>#2D2D2D</span>
                      </span>
                    </div>
                    <div className={styles.fontInfo}>
                      <span className={styles.fontLabel}>Font:</span> Segoe UI
                    </div>
                  </div>
                </div>
              </div>
            </section>

{/* MOCKUPS */}
<section id="mockups" className={styles.section}>
  <h2>Mockups</h2>

  <div className={styles.mockupGrid}>
    {/* STORE SIGNAGE */}
    <div className={styles.mockupItem}>
      <div className={styles.mockupMedia}>
        <Image
          src="/uiux/redesign/mockup1.jpg"
          alt="Store signage"
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          className={styles.mockupImage}
        />
      </div>
      <h3 className={styles.mockupTitle}>Store signage</h3>
      <p className={styles.mockupText}>
        Exterior storefront application demonstrating logo visibility, clarity at distance, and improved recognisability in a busy mall environment.
      </p>
    </div>

    {/* PACKAGING */}
    <div className={styles.mockupItem}>
      <div className={styles.mockupMedia}>
        <Image
          src="/uiux/redesign/mockup2.jpg"
          alt="Packaging"
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          className={styles.mockupImage}
        />
      </div>
      <h3 className={styles.mockupTitle}>Packaging</h3>
      <p className={styles.mockupText}>
        Branded packaging design showcasing clean logo placement, scalable proportions, and consistent visual identity on retail bags.
      </p>
    </div>

    {/* BRAND VISUAL APPLICATION */}
    <div className={styles.mockupItem}>
      <div className={styles.mockupMedia}>
        <Image
          src="/uiux/redesign/mockup3.jpg"
          alt="Brand visual application"
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          className={styles.mockupImage}
        />
      </div>
      <h3 className={styles.mockupTitle}>Brand visual application</h3>
      <p className={styles.mockupText}>
        Compact logo usage as a modern sticker-style element — suitable for business cards, promo materials, and social media visuals.
      </p>
    </div>

    {/* POSTER / PROMO */}
    <div className={styles.mockupItem}>
<div className={`${styles.mockupMedia} ${styles.mockupMediaVertical}`}>
        <Image
          src="/uiux/redesign/posterlike.png"
          alt="Promotional poster"
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
          className={styles.mockupImageContain}
        />
      </div>
      <h3 className={styles.mockupTitle}>Promotional poster</h3>
      <p className={styles.mockupText}>
        In-store discount / campaign poster showing how the identity works with promotional messaging and remains clear in large-format print.
      </p>
    </div>
  </div>
</section>


            <section id="outcome" className={styles.section}>
              <h2>Outcome & learnings</h2>
              <ul>
                <li>A more readable mark increased clarity and category association.</li>
                <li>Testing at small sizes helped keep the logo scalable and consistent.</li>
                <li>Mockups validated how the identity performs in real retail contexts.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
