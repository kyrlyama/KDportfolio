import Image from 'next/image';
import { useState } from 'react';


export default function Project1() {
  const images = [
    '/project1.png','/project12.png','/project13.png',
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>

      {/* ФОН: мыльный градиент на всю страницу */}
      <div
        style={{
          padding: '120px 40px',
          minHeight: '100vh',
          fontFamily: 'sans-serif',
          background: `
            radial-gradient(circle at 30% 30%,
              rgba(255, 255, 255, 1) 0%,
              rgba(172, 206, 241, 0.6) 30%,
              rgba(215, 186, 254, 0.5) 60%,
              rgba(250, 202, 250, 0.4) 90%,
              rgb(251, 226, 226) 100%)
          `,
          backdropFilter: 'blur(100px)',
          color: '#000'
        }}
      >
        {/* Центральный контейнер */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* БЕЛАЯ КАРТОЧКА С ТЕКСТОМ — читаемость */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
              padding: '24px 28px',
              marginBottom: '28px'
            }}
          >
            <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>
              CleanseTeam — Cleaning Service Website
            </h1>

            <p style={{ marginBottom: '16px', color: '#333', lineHeight: 1.7 }}>
              CleanseTeam is a web service for cleaning services in Tallinn that allows users to order cleaning of apartments,
              offices, and other premises. The platform provides a convenient form for selecting the type of service,
              entering contact details, and calculating the cost of work.
            </p>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Basic functionality</h2>
            <ul style={{ paddingLeft: '18px', lineHeight: 1.8, color: '#333' }}>
              <li><strong>Cleaning order form:</strong> select service, address, date, rooms, details.</li>
              <li><strong>Automatic cost calculation:</strong> price based on selected service.</li>
              <li><strong>Gallery of completed work:</strong> photos of results and customers.</li>
              <li><strong>Customer reviews:</strong> leave and sort reviews.</li>
              <li><strong>Interactive elements:</strong> modals, dynamic enlargements, confirmations.</li>
            </ul>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Technology</h2>
            <ul style={{ paddingLeft: '18px', lineHeight: 1.8, color: '#333' }}>
              <li><strong>Frontend:</strong> HTML, CSS (Bootstrap), JavaScript.</li>
              <li><strong>Design:</strong> Gradient background, responsive layout, hover animations.</li>
              <li><strong>Functionality:</strong> Forms, cost calculation, reviews.</li>
              <li><strong>UI:</strong> Bootstrap components, dynamic lists.</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/lessons-cleanseteam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#e6f2ff',
                color: '#0047ab',
                fontWeight: '600',
                padding: '10px 16px',
                borderRadius: 10,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                marginTop: 12
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              GitHub repository
            </a>
          </div>

          {/* Блок слайдера можно оставить без белой карточки (или тоже поместить в белую, если хочешь) */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: '20px',
              boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <Image
              src={images[current]}
              alt={`Project ${current + 1}`}
              width={800}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12
              }}
            />
            <button onClick={prevImage} style={arrowStyle('left')}>&#10094;</button>
            <button onClick={nextImage} style={arrowStyle('right')}>&#10095;</button>
          </div>
        </div>
      </div>
    </>
  );
}

function arrowStyle(position) {
  return {
    position: 'absolute',
    top: '50%',
    [position]: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: 'white',
    fontSize: '32px',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    transition: 'background 0.3s',
  };
}
