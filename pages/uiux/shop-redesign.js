import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/UiuxCase.module.css";

const toc = [
  { id: "background", label: "Project background" },
  { id: "goal", label: "Goal" },
  { id: "audit", label: "UX / Visual audit" },
  { id: "final", label: "Final result" },
  { id: "logo", label: "Logo design" },
  { id: "mockups", label: "Mockups" },
  { id: "outcome", label: "Outcome & learnings" },
];

const likeImages = {
  hero: [{ src: "/uiux/redesign/like-store-final.png", alt: "Like store after the logo redesign" }],
  compare: [
    { src: "/uiux/redesign/beforeredesign.jpg", alt: "Before redesign" },
    { src: "/uiux/redesign/like-store-final.png", alt: "Like store after redesign" },
  ],
  logo: [
    { src: "/uiux/redesign/Logo_likefon_1.png", alt: "Logo Likefon concept 1" },
    { src: "/uiux/redesign/Logo_likefon_2.png", alt: "Logo Likefon concept 2" },
    { src: "/uiux/redesign/logo_likefon_3.png", alt: "Logo Likefon concept 3" },
  ],
  mockups: [
    { src: "/uiux/redesign/like-brand-mockup.png", alt: "Like brand identity mockup" }
  ],
};

export default function ShopRedesign() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.heroCard}>
         <div className={styles.heroMedia}>
          <Image src={likeImages.hero[0].src} alt={likeImages.hero[0].alt} fill sizes="(max-width: 900px) 100vw, 420px" className={styles.heroImage} priority />
          </div>
          <div className={styles.heroText}>
            <p className={styles.kicker}>VISUAL IDENTITY UPDATE · AFFINITY DESIGNER</p>
            <h1 className={styles.title}>Logo Redesign for Like</h1>
            <p className={styles.lead}>Refreshing a local phone accessories retailer’s identity to improve clarity, trust, and visibility in a competitive mall environment.</p>
          </div>
        </section>

        <div className={styles.body}>
          <aside className={styles.toc}>
            <h3>Contents</h3>
            <ul>{toc.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
            <div className={styles.tocActions}><Link href="/uiux" className={styles.btn}>← Back</Link></div>
          </aside>

          <div className={styles.sections}>
            <section id="background" className={styles.section}><h2>Project background</h2><ul><li><strong>Store type:</strong> local retail shop.</li><li><strong>What it sells:</strong> phone accessories and headsets.</li><li><strong>Competitive context:</strong> strong competition with Click, Evelatus, and OnOff.</li></ul></section>
            <section id="goal" className={styles.section}><h2>Goal</h2><p className={styles.p}>Create a clearer and more recognisable brand mark that is readable at distance, scalable for print and digital use, and visually connected to the store’s category.</p></section>
            <section id="audit" className={styles.section}><h2>UX / Visual audit</h2><p className={styles.p}>The original mark was too abstract and didn’t communicate the store’s category well. It also lost clarity at small sizes, reducing memorability and trust.</p></section>

            <section id="final" className={styles.section}>
              <h2>Final result</h2>
              <div className={styles.compareGrid}>
                {likeImages.compare.map((image, index) => (
                  <div className={styles.compareCard} key={image.src}>
                    <div className={styles.compareImageWrapper}>
                      <Image src={image.src} alt={image.alt} width={1200} height={800} className={styles.compareImage} />
                    </div>
                    <h3 className={styles.h3}>{index === 0 ? "Before" : "After"}</h3>
                    <p className={styles.p}>{index === 0 ? "Abstract mark with low association to the store’s products and weak scalability." : "The redesigned identity is now visible in the real retail environment and works clearly at storefront scale."}</p>
                  </div>
                ))}
              </div>
            </section>

<section id="logo" className={styles.section}>
  <h2>Logo design</h2>

  <div className={styles.mediaGrid}>
    {likeImages.logo.map((image) => (
      <div key={image.src} className={styles.mediaCard}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </div>
    ))}
  </div>
</section>

            <section id="mockups" className={styles.section}>
              <h2>Mockups</h2>
<section id="mockups" className={styles.section}>
  <h2>Mockups</h2>

  <div className={styles.mockupGrid}>
    {likeImages.mockups.map((image) => (
      <div className={styles.mockupItem} key={image.src}>
        <div className={styles.mockupMedia}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
            className={styles.mockupImage}
          />
        </div>

        <h3 className={styles.mockupTitle}>{image.alt}</h3>
      </div>
    ))}
  </div>
</section>            </section>

            <section id="outcome" className={styles.section}><h2>Outcome & learnings</h2><ul className={styles.list}><li>A more readable mark increased clarity and category association.</li><li>Testing at small sizes helped keep the logo scalable and consistent.</li><li>Mockups validated how the identity performs in real retail contexts.</li></ul></section>
          </div>
        </div>
      </div>
    </main>
  );
}
