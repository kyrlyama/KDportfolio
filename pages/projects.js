import { useState } from "react";
import ProjectOrbit from "@/components/ProjectOrbit";
import Websites from "./websites";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  const [active, setActive] = useState("Websites");
  return (
    <div className={styles.page}>
      <h1 className="pageTitle">Projects</h1>
      <ProjectOrbit active={active} onChange={setActive} styles={styles} />
      <div className={styles.categoryContent}><Websites /></div>
    </div>
  );
}
