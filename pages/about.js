// pages/about.js
import Image from "next/image";

export default function About() {
  return (
    <>
      <div style={pageBg}>
        {/* декоративные «пятна» */}
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />

        <div style={container}>
          {/* Левая колонка — текст */}
          <div style={leftCol}>
            <div style={heroCard}>
              <h1 style={title}>Kristina Dunajeva</h1>
              <p style={p}>
                I am a recent graduate from the Estonian Entrepreneurship University of Applied Sciences, where I studied Web Technologies and Design.
                Although I don’t yet have professional work experience in the field,
                I am eager to apply my fresh knowledge in a real working environment and grow as a designer and developer.
              </p>
              <p style={p}>
                During my studies, I enjoyed the freedom of experimenting with concepts and visuals, but I especially loved our UX/UI classes.
                Before creating applications, we spent a lot of time building personas, scenarios, and empathy maps. 
                These tools showed me the importance of understanding users, and I look forward to applying and promoting them in future teamwork.
              </p>
              <p style={p}>
                At university, we had to focus on a wide range of skills, which gave me a solid foundation but also showed me where I still need to grow. 
                Now I am actively improving my skills in modern and creative design,
                and I want to join a company where I can learn from professionals and discover what the industry is like outside of university projects.
              </p>
              <p style={p}>
                In my free time, I create and edit short videos for TikTok, film nature, and combine it with calm music.
                Since I spend a lot of time at the computer, I balance it with long walks outdoors.
              </p>
            </div>

            {/* Секции-карточки */}
            <div style={cardsGrid}>
              <section style={card}>
                <h2 style={cardTitle}>Work experience</h2>
                <p style={cardText}>2020–present: Likefon, sales consultant</p>
              </section>

              <section style={card}>
                <h2 style={cardTitle}>Practice</h2>
                <p style={cardText}>
                  2025 — Development of a web application for inventory management at Likefon
                </p>
              </section>

              <section style={card}>
                <h2 style={cardTitle}>Education</h2>
                <p style={cardText}>2025 — Mainor University of Entrepreneurship</p>
                <p style={cardText}>2022 — Narva Central Gymnasium</p>
              </section>

              <section style={card}>
                <h2 style={cardTitle}>Hobbies</h2>
                <p style={cardText}>2015–2021 — Photo studio “Positive”</p>
                <p style={cardText}>
                  I have participated in and won many city competitions. Currently, I only take photos with my phone and a film camera with color film.
                </p>
              </section>
            </div>
          </div>

          {/* Правая колонка — липкая карточка с фото */}
          <aside style={rightCol}>
            <div style={stickyCard}>
              <div style={avatarWrap}>
                <Image
                  src="/me.jpg"
                  alt="My photo"
                  width={160}
                  height={160}
                  style={avatar}
                />
              </div>
              <div style={facts}>
                <div style={chip}>UX/UI</div>
                <div style={chip}>Frontend</div>
                <div style={chip}>Web design</div>
              </div>
              <div style={barWrap}>
                <span style={barLabel}>Creativity</span>
                <div style={barTrack}><div style={{...barFill, width: "90%"}} /></div>
                <span style={barLabel}>Teamwork</span>
                <div style={barTrack}><div style={{...barFill, width: "85%"}} /></div>
                <span style={barLabel}>Focus</span>
                <div style={barTrack}><div style={{...barFill, width: "80%"}} /></div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .blob {
          position: absolute;
          filter: blur(60px);
          border-radius: 50%;
          opacity: 0.55;
          pointer-events: none;
        }
        .b1 {
          width: 420px; height: 420px;
          top: -80px; left: -60px;
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #b9d3ff 35%, #e5c9ff 70%, #ffd6e6 100%);
        }
        .b2 {
          width: 360px; height: 360px;
          bottom: 10%; right: 8%;
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #bfe1ff 35%, #dbcbff 70%, #ffe6ef 100%);
        }
        .b3 {
          width: 300px; height: 300px;
          top: 30%; right: 35%;
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #c9e0ff 35%, #e6d6ff 70%, #ffeaf2 100%);
        }

        @media (max-width: 1024px) {
          .b1 { width: 320px; height: 320px; }
          .b2 { width: 270px; height: 270px; }
          .b3 { display: none; }
        }
      `}</style>
    </>
  );
}

/* ==== стили ==== */

const pageBg = {
  minHeight: "100vh",
  padding: "120px 24px 80px",
  position: "relative",
  background:
    "radial-gradient(1200px 800px at 50% -10%, rgba(255,255,255,1) 0%, rgba(240,246,255,0.9) 45%, rgba(242,230,255,0.85) 75%, rgba(255,236,243,0.85) 100%)",
  backdropFilter: "blur(80px)",
};

const container = {
  maxWidth: 1100,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 320px",
  gap: 28,
};

const leftCol = { minWidth: 0 };

const rightCol = { minWidth: 0 };

const heroCard = {
  background: "rgba(255,255,255,0.9)",
  borderRadius: 18,
  padding: 24,
  boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
  border: "1px solid rgba(255,255,255,0.6)",
};

const title = {
  fontSize: 32,
  fontWeight: 800,
  margin: "0 0 14px",
  letterSpacing: "-0.02em",
  color: "#111111",
};

const p = {
  color: "#1a1a1a",
  lineHeight: 1.75,
  margin: "0 0 16px",
};

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 18,
  marginTop: 18,
};

const card = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: 16,
  padding: 18,
  boxShadow: "0 14px 35px rgba(0,0,0,0.05)",
  border: "1px solid rgba(255,255,255,0.7)",
};

const cardTitle = {
  fontSize: 16,
  fontWeight: 700,
  margin: "0 0 8px",
  color: "#1a1a1a",
};

const cardText = {
  margin: "6px 0",
  color: "#2a2a2a",
  lineHeight: 1.6,
};

const stickyCard = {
  position: "sticky",
  top: 100,
  background: "rgba(255,255,255,0.9)",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
  border: "1px solid rgba(255,255,255,0.6)",
};

const avatarWrap = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 14,
};

const avatar = {
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 0 0 6px rgba(255,255,255,0.9), 0 10px 26px rgba(0,0,0,0.1)",
};

const facts = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: 12,
};

const chip = {
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  color: "#3a2e7a",
  background:
    "linear-gradient(135deg, rgba(230,240,255,0.95), rgba(249,238,255,0.95))",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.9)",
};

const barWrap = { marginTop: 6 };

const barLabel = {
  display: "inline-block",
  fontSize: 12,
  fontWeight: 700,
  color: "#3a3a3a",
  margin: "10px 0 4px",
};

const barTrack = {
  width: "100%",
  height: 8,
  borderRadius: 999,
  background: "rgba(0,0,0,0.06)",
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  borderRadius: 999,
  background:
    "linear-gradient(90deg, rgba(184,214,255,1), rgba(215,186,254,1), rgba(255,206,228,1))",
  boxShadow: "0 0 12px rgba(180,160,255,0.35)",
};

/* На планшете/мобиле — одна колонка */
if (typeof window === "undefined") {
  container.gridTemplateColumns = "minmax(0, 1fr) 320px";
} else {
  // Ничего не делаем; responsive обеспечен через CSS выше.
}
