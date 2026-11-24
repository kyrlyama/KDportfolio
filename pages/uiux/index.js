// pages/uiux/index.js
import Link from "next/link";

import Carousel from "@/components/Carousel";
import { uiuxCases } from "@/data/uiuxCases";
import fm from "@/styles/Figma.module.css";
import pm from "@/styles/Project.module.css";

export default function Uiux() {
  return (
    <main className={fm.page}>
      <h1 className="pageTitle">UI/UX Case studies</h1>

      <div className={`${pm.container} ${fm.grid}`}>
        {uiuxCases.map((item) => {
          const href = item.href || `/uiux/${item.slug}`;
          return <ProjectBlock key={item.slug} {...item} href={href} />;
        })}
      </div>
    </main>
  );
}

function ProjectBlock({ title, label, description, highlights, cover, href }) {
  return (
    <section className={`${pm.card} ${fm.row}`}>
      <div className={`${pm.media} ${fm.media}`}>
        <div className={`${pm.frame} ${fm.frame}`}>
          <Carousel
            images={[cover]}
            alt={`${title} preview`}
            tight
            showControls={false}
          />
        </div>
      </div>

      <div className={`${pm.text} ${fm.text}`}>
        {label && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#6b7280",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        )}
        <h2 className={pm.title}>{title}</h2>
        <p className={pm.p}>{description}</p>

        {highlights?.length > 0 && (
          <ul className={pm.list}>
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <Link href={href} className={pm.btn} aria-label={`${title} — details`}>
          Open case
        </Link>
      </div>
    </section>
  );
}
