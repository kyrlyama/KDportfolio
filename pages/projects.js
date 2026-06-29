import { useState } from "react";

import ProjectOrbit from "@/components/ProjectOrbit";
import styles from "@/styles/Project.module.css";
import Websites from "./websites";
import AndroidStudio from "./android_studio";
import Figma from "./figma";
import Illustrator from "./illustrator";

export default function Projects() {
  const [active, setActive] = useState("Websites");
  const ActiveProjects =
    active === "Android" ? AndroidStudio :
    active === "Figma" ? Figma :
    active === "Illustrator" ? Illustrator :
    Websites;

  return (
    <main className={styles.page}>
      <section style={{ textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ margin: "0 0 10px", color: "#6b7280", fontSize: 13, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>
          Selected work
        </p>
        <h1 className="pageTitle">Projects</h1>
        <ProjectOrbit active={active} onChange={setActive} />
      </section>

      <section style={{ marginTop: 24 }} aria-live="polite">
        <ActiveProjects />
      </section>
    </main>
  );
}
