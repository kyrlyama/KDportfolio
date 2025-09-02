// pages/contacts.js
import { useState } from "react";

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

  const s = styles;

  return (
    <div style={s.page}>
      <div style={s.container}>


        {/* Стеклянная карточка 2-колоночная */}
        <div style={s.glassCard}>
          {/* Левая колонка: инфо + соцсети + фото */}
          <aside style={s.left}>
            <h2 style={s.h2}>Let’s connect</h2>


            {/* Email / social */}
            <div style={s.contactList}>
              <a href="mailto:kdunaeva04@gmail.com" style={s.contactItem}>
                <span style={s.contactIcon}>✉️</span>
                <span>kdunaeva04@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/kristina-dunajeva-kd/" target="_blank" rel="noreferrer" style={s.contactItem}>
                <span style={s.contactIcon}>in</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/kyrlyama?tab=repositories" target="_blank" rel="noreferrer" style={s.contactItem}>
                <span style={s.contactIcon}>⌘</span>
                <span>GitHub</span>
              </a>
              <a href="https://www.facebook.com/kristina.dunajeva" target="_blank" rel="noreferrer" style={s.contactItem}>
                <span style={s.contactIcon}>f</span>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/kurlyama/" target="_blank" rel="noreferrer" style={s.contactItem}>
                <span style={s.contactIcon}>◎</span>
                <span>Instagram</span>
              </a>
            </div>
          </aside>

          {/* Правая колонка: форма */}
          <section style={s.right}>
            <h2 style={s.h2}>Send me an email</h2>
            <form onSubmit={onSubmit} style={s.form}>
              <div style={s.row2}>
                <div style={s.field}>
                  <label htmlFor="name" style={s.label}>Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={s.input}
                  />
                </div>

                <div style={s.field}>
                  <label htmlFor="email" style={s.label}>Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    style={s.input}
                  />
                </div>
              </div>

              <div style={s.field}>
                <label htmlFor="message" style={s.label}>Message</label>
                <textarea
                  id="message"
                  rows={7}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={s.textarea}
                />
              </div>

              <div style={s.actions}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{ ...s.button, ...(loading ? s.buttonLoading : {}) }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  {loading ? "Sending..." : "Send email"}
                </button>

                {result && (
                  <div
                    style={{
                      ...s.alert,
                      ...(result.type === "ok" ? s.alertOk : s.alertErr),
                    }}
                    role="status"
                  >
                    {result.msg}
                  </div>
                )}
              </div>
            </form>

            <p style={s.microcopy}>
              By sending this form you agree that I can contact you back. I don’t store personal data and do not share it with third parties.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ===== Inline styles ===== */
const styles = {
  // фон в стиле About (светлый мультиградиент)
  page: {
    minHeight: "100vh",
    padding: "110px 24px 80px",
    color: "#111",
    background:
      "radial-gradient(1200px 800px at 15% 0%, rgba(255,255,255,0.95) 0%, rgba(235,242,255,0.85) 35%, rgba(242,226,255,0.8) 60%, rgba(254,233,247,0.8) 85%, rgb(251,226,226) 100%)",
  },
  container: { maxWidth: 1100, margin: "0 auto" },

  header: { marginBottom: 18 },
  h1: { fontSize: 34, fontWeight: 900, margin: 0, color: "#0f172a", letterSpacing: 0.2 },
  lead: { margin: "8px 0 0", color: "#334155", lineHeight: 1.6 },

  // стеклянная карточка с двумя колонками
  glassCard: {
    display: "grid",
    gridTemplateColumns: "minmax(280px, 1fr) 1.6fr",
    gap: 28,
    borderRadius: 24,
    padding: 24,
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 24px 48px rgba(2, 6, 23, 0.08)",
    border: "1px solid rgba(255,255,255,0.6)",
  },

  left: { background: "#fff", borderRadius: 20, padding: 20, boxShadow: "0 10px 24px rgba(0,0,0,0.08)" },
  right: { background: "#fff", borderRadius: 20, padding: 20, boxShadow: "0 10px 24px rgba(0,0,0,0.08)" },

  h2: { fontSize: 22, fontWeight: 800, margin: "0 0 10px", color: "#111" },
  p: { color: "#334155", lineHeight: 1.6, margin: "0 0 14px" },

  contactList: { display: "grid", gap: 10, marginTop: 12, marginBottom: 14 },
  contactItem: {
    display: "grid",
    gridTemplateColumns: "28px 1fr",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 12,
    background: "#f8fafc",
    color: "#0f172a",
    textDecoration: "none",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
    transition: "transform .15s ease, background .2s ease",
  },
  contactIcon: {
    width: 28,
    height: 28,
    display: "grid",
    placeItems: "center",
    borderRadius: 8,
    background:
      "radial-gradient(circle at 30% 30%, #f2f7ff 0%, #eef1ff 60%, #f7ecff 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
    fontWeight: 800,
    color: "#1e293b",
  },
  photoWrap: { marginTop: 16, display: "grid", placeItems: "center" },

  form: { display: "grid", gap: 16 },
  row2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  field: { display: "grid", gap: 8 },
  label: { fontSize: 13, fontWeight: 700, color: "#0f172a" },
  input: {
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#0f172a",
    outline: "none",
    transition: "box-shadow .2s ease, border-color .2s ease",
    boxShadow: "0 1px 0 rgba(255,255,255,.6) inset",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#0f172a",
    outline: "none",
    resize: "vertical",
    minHeight: 140,
    transition: "box-shadow .2s ease, border-color .2s ease",
    boxShadow: "0 1px 0 rgba(255,255,255,.6) inset",
  },
  actions: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 4 },
  button: {
    padding: "12px 20px",
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
    transition: "transform .2s ease, box-shadow .2s ease",
    boxShadow: "0 10px 24px rgba(124, 58, 237, 0.25)",
  },
  buttonLoading: {
    opacity: 0.8,
    cursor: "default",
    boxShadow: "none",
  },
  alert: {
    fontWeight: 700,
    padding: "10px 12px",
    borderRadius: 10,
  },
  alertOk: { background: "#ecfdf5", color: "#065f46", border: "1px solid #a7f3d0" },
  alertErr: { background: "#fef2f2", color: "#991b1b", border: "1px solid #fecaca" },
  microcopy: { marginTop: 10, fontSize: 12.5, color: "#475569" },

  // фокус стили (микро-UX)
  "@global": {},
};

// Простая фокус-рамка через addEventListener не нужна — браузерные :focus работают.
// Добавь в globals.css (не обязательно):
// input:focus, textarea:focus { border-color:#93c5fd; box-shadow: 0 0 0 3px rgba(147,197,253,.35); }
