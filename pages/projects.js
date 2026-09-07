import { useState } from "react";

import ProjectOrbit from "@/components/ProjectOrbit";
import styles from "@/styles/Project.module.css";
import Websites from "./websites";
import AndroidStudio from "./android_studio";
import Figma from "./figma";
import UiuxCases from "./uiux/index";
import Illustrator from "./illustrator";

export default function Projects() {
  // Do not leave recruiters staring at an empty state: show a category immediately.
  const [active, setActive] = useState("Websites");
  const ActiveProjects =
    active === "Websites" ? Websites :
    active === "Android" ? AndroidStudio :
    active === "Figma" ? Figma :
    active === "UI/UX" ? UiuxCases :
    active === "Illustrator" ? Illustrator :
    Websites;

  return (
    <main className={styles.page}>
      <section style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ margin: "0 0 10px", color: "#6b7280", fontSize: 13, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>
          Selected work
        </p>
        <h1 className="pageTitle">Projects</h1>
        <p style={{ margin: "0 auto", maxWidth: 650, color: "#6b7280", lineHeight: 1.6 }}>
          Explore the categories below. The featured work is visible immediately, so the page is useful even before the orbit is touched.
        </p>
        <ProjectOrbit active={active} onChange={setActive} />
      </section>

      <section style={{ marginTop: 24 }} aria-live="polite">
        <ActiveProjects />
      </section>
    </main>
  );
}
