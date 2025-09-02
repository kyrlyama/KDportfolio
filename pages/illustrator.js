// pages/illustrator.js
import Image from "next/image";

export default function Illustrator() {
  // Положи файлы в /public/images и подставь свои имена
  const works = [
    { svg: "/images/poster1.svg" },
    { svg: "/images/poster2.svg" },
    { svg: "/images/poster3.svg" },
    { svg: "/images/poster4.svg" },
    { svg: "/images/poster5.svg" },
    { svg: "/images/poster6.svg" },
    { svg: "/images/poster7.svg" },
    { svg: "/images/poster8.svg" },
  ];

  return (
    <>


      {/* Контент */}
      <main
        style={{
          paddingTop: "100px",
          paddingBottom: "60px",
          paddingLeft: "24px",
          paddingRight: "24px",
          background: "#f5f5f5",
          minHeight: "100vh",
          fontFamily: "sans-serif",
          color: "#111",
        }}
      >
        {/* Заголовок + описание */}
        <header style={{ maxWidth: 1320, margin: "0 auto 32px", textAlign: "center" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>
            Illustrator Portfolio
          </h1>
          <p style={{ fontSize: 16, color: "#555", maxWidth: 720, margin: "0 auto" }}>
            I keep studying Adobe Illustrator and Photoshop and will continue to expand this portfolio.
          </p>
        </header>

        {/* Галерея: ровно 3 постера в ряд, каждый полностью виден (уменьшенный) */}
        <section
          style={{
            maxWidth: 1320,            // 3 карточки по ~400px + отступы
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // ровно 3 колонки
            gap: "24px",
          }}
        >
          {works.map((item, i) => (
            <a
              key={i}
              href={item.svg}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                overflow: "hidden",
                display: "block",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.08)";
              }}
            >
              {/* Контейнер: единая пропорция для “постеров” (портрет). 
                  Если у тебя ландшафтные — поменяй на "16/9". */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3 / 4",        // близко к A4 (портрет)
                  background: "#f5f5f5",       // совпадает с фоном страницы — “рамки” не видны
                }}
              >
                <Image
                  src={item.svg}
                  alt="Illustration work"
                  fill
                  style={{ objectFit: "contain" }} // показываем весь постер целиком
                  sizes="(max-width: 1320px) 33vw, 440px"
                  priority={i < 2}
                />
              </div>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
