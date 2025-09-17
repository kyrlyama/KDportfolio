// pages/figma.js
import Link from "next/link";
import Carousel from "@/components/Carousel";
import pm from "@/styles/Project.module.css";
import fm from "@/styles/Figma.module.css";

export default function Figma() {
  return (
      <main className={fm.page}>
        <h1 className="pageTitle">Figma</h1>
      <div className={`${pm.container} ${fm.grid}`}>
        <ProjectBlock
          title="Travel Planning App"
          description="A prototype for an app that helps friends plan group trips. Features include destination selection, joint budgets, AI recommendations, and swipe-based decision making for activities."
          images={[
            // СТАВИМ РАБОЧЕЕ ИЗОБРАЖЕНИЕ ПЕРВЫМ
            "/figma23.png","/figma24.png","/figma25.png",
            "/figma26.png","/figma27.png","/figma28.png","/figma29.png",
            // проблемное (бывшее первое) оставим последним — или вовсе убери его
            "/figma22.png",
          ]}
          slug="figma1"
        />
        <ProjectBlock
          title="Gift Helper"
          description="A mobile app that helps users find the perfect gift based on filters like age, budget, hobbies, and occasion. Includes calendar reminders and a contacts list for organizing ideas."
          images={["/figma1.png","/figma12.png","/figma13.png","/figma14.png","/figma15.png","/figma16.png","/figma17.png"]}
          slug="figma2"
        />
      </div>
    </main>
  );
}

function ProjectBlock({ title, description, images, slug }) {
  const hasImages = images && images.length > 0;

  return (
    <section className={`${pm.card} ${fm.row}`}>
      {hasImages && (
        <div className={`${pm.media} ${fm.media}`}>
          <div className={`${pm.frame} ${fm.frame}`}>
            {/* без aspect="landscape", чтобы на мобиле не резало */}
            <Carousel images={images} alt={`${title} preview`} tight />
          </div>
        </div>
      )}

      <div className={`${pm.text} ${fm.text}`}>
        <h2 className={pm.title}>{title}</h2>
        <p className={pm.p}>{description}</p>
        <Link href={`/${slug}`} className={pm.btn} aria-label={`${title} — details`}>
          See more details
        </Link>
      </div>
    </section>
  );
}
