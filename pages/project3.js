import Image from 'next/image';
import { useState } from 'react';

export default function Project1() {
  const images = [
    '/project3.png',
    '/project32.png',
    '/project33.png',
    '/project34.png'
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>


      {/* Фон страницы */}
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
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Белая карточка с текстом */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
              padding: '24px 28px',
              marginBottom: '28px'
            }}
          >
            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Choose Your Musician</h1>

            <p style={{ marginBottom: '20px', color: '#333', lineHeight: 1.7 }}>
              “Music Portal” is a web application that allows users to find information about musicians, 
              including their biography, genre, albums and best tracks. 
              The project was created for music lovers who want to learn more about their favorite artists and discover new artists.
            </p>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Basic functionality</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Musician Search —</strong> users can select year, genre and region to search for musicians.</li>
              <li><strong>Artist details —</strong> display name, genre, country, albums, awards and top tracks.</li>
              <li><strong>Login system —</strong> register and log in for a personalized experience.</li>
              <li><strong>Dynamic data display —</strong> info is loaded from the server via API requests.</li>
              <li><strong>Adaptive interface —</strong> works correctly on different devices.</li>
            </ul>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Technologies used</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Frontend:</strong> HTML, CSS (Bootstrap), JavaScript.</li>
              <li><strong>Backend:</strong> PHP (database queries).</li>
              <li><strong>Optional:</strong> React (registration), AJAX (update without reload).</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/music-site"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#e6f2ff',
                color: '#0047ab',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                marginTop: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              GitHub repository
            </a>
          </div>

          {/* Белая карточка со слайдером */}
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
