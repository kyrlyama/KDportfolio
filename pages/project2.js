import Image from 'next/image';
import { useState } from 'react';

export default function Project1() {
  const images = [
    '/project2.png',
    '/project21.png',
    '/project22.png',
    '/project23.png',
    '/project24.png',
    '/project25.png'
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>


      {/* Фон всей страницы */}
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
            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
              Welcome to the world of space!
            </h1>

            <p style={{ marginBottom: '20px', color: '#333', lineHeight: 1.7 }}>
              This site is dedicated to the study of space and the planets of the solar system.
              It is designed to provide users with interesting and useful information about our galaxy,
              as well as interactive exploration of the planets through quizzes and characterization tables.
            </p>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Basic functionality</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Home page —</strong> user welcome and a brief introduction to the space theme.</li>
              <li><strong>Planet pages —</strong> each planet has a separate page with a description, a table of characteristics and an image.</li>
              <li><strong>Interactive test —</strong> a form with questions about the order of planets in the solar system to test knowledge.</li>
              <li><strong>Test results —</strong> dynamic checking with highlighting correct/incorrect answers.</li>
              <li><strong>Styling and design —</strong> CSS gradients and interactive effects.</li>
            </ul>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Technology</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>HTML —</strong> structure.</li>
              <li><strong>CSS —</strong> styling, background and link animation.</li>
              <li><strong>JavaScript —</strong> quiz logic and validation.</li>
              <li><strong>Bootstrap —</strong> responsive layout and UI components.</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/space-site"
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

          {/* Белая карточка со слайдером (отдельный блок, соседний) */}
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
