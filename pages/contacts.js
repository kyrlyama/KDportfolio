// pages/contacts.js
import { useState } from "react";
import styles from "@/styles/Contacts.module.css";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // {type:'ok'|'err', msg:string}

  async function onSubmit(e) {
    e.preventDefault();
    setResult(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setResult({ type: "err", msg: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setResult({ type: "ok", msg: "Your message has been sent. Thank you!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setResult({ type: "err", msg: "Failed to send message. Try again later." });
      }
    } catch {
      setResult({ type: "err", msg: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        {/* Стеклянная карточка в 2 колонки */}
        <div className={styles.glassCard}>
          {/* Левая колонка: контакты/соцсети */}
          <aside className={styles.left}>
            <h2 className={styles.h2}>Let’s connect</h2>

            <div className={styles.contactList}>
              <a href="mailto:kdunaeva04@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>kdunaeva04@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/kristina-dunajeva-kd/" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>in</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/kyrlyama?tab=repositories" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>⌘</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.facebook.com/kristina.dunajeva" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>f</span>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/kurlyama/" target="_blank" rel="noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>◎</span>
                <span>Instagram</span>
              </a>
            </div>
          </aside>

          {/* Правая колонка: форма */}
          <section className={styles.right}>
            <h2 className={styles.h2}>Send me an email</h2>

            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  rows={7}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className={styles.textarea}
                />
              </div>

              <div className={styles.actions}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${styles.button} ${loading ? styles.isLoading : ""}`}
                >
                  {loading ? "Sending..." : "Send email"}
                </button>

                {result && (
                  <div
                    className={`${styles.alert} ${result.type === "ok" ? styles.alertOk : styles.alertErr}`}
                    role="status"
                  >
                    {result.msg}
                  </div>
                )}
              </div>
            </form>

            <p className={styles.microcopy}>
              By sending this form you agree that I can contact you back.
              I don’t store personal data and do not share it with third parties.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
