// pages/androidstudio3.js
import styles from "@/styles/AndroidStudio.module.css";

export default function AndroidStudio3() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* одиночная белая карточка без медиа-колонки */}
        <div className={styles.card}>
          <h1 className={styles.title}>EUR to USD — Currency Converter App</h1>

          <p className={styles.p}>
            A simple currency converter mobile application created in Android Studio. It allows users to convert
            Euros (EUR) to US Dollars (USD) with a single tap. The exchange rate is hardcoded for simplicity and
            demonstration purposes. Interface follows clean, readable Material Design.
          </p>

          <h2 className={styles.h2}>Basic functionality</h2>
          <ul className={styles.ul}>
            <li><strong>Input:</strong> users can enter any amount in EUR.</li>
            <li><strong>Conversion:</strong> instant calculation to USD.</li>
            <li><strong>UI:</strong> simple and user-friendly layout with clear controls.</li>
          </ul>

          <h2 className={styles.h2}>Technology</h2>
          <ul className={styles.ul}>
            <li><strong>Language:</strong> Java</li>
            <li><strong>Environment:</strong> Android Studio</li>
            <li><strong>Platform:</strong> Android</li>
            <li><strong>Design:</strong> XML layouts (Material Design)</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/EURtoUSD"
            target="_blank" rel="noopener noreferrer"
            className={styles.repoBtn}
          >
            GitHub repository
          </a>
        </div>

      </div>
    </div>
  );
}
