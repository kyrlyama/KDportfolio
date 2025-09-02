import Image from 'next/image';
import { useState } from 'react';

export default function FigmaTravelApp() {
  const images = [
    '/figma23.png', '/figma24.png', '/figma25.png',
    '/figma26.png', '/figma27.png', '/figma28.png', '/figma29.png'
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>

      {/* Background */}
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
        {/* Единный блок: текст слева + фото справа */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            padding: '24px 28px',
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
            flexWrap: 'wrap'
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: '1 1 520px', minWidth: 300 }}>
            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Figma Travel App</h1>
            <p style={{ marginBottom: '20px', color: '#333', lineHeight: 1.7 }}>
              This prototype represents a travel planning application designed to help friends organize shared trips.
              The app supports features such as destination selection, expense planning, shared schedules, and real-time activity suggestions.
              It provides a smooth user experience and intuitive navigation, focusing on collaborative travel and decision-making.
            </p>

            <h2>Main Features:</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Trip planning interface:</strong> choose dates, destinations, and create joint plans.</li>
              <li><strong>Group chat and notes:</strong> collaborate and share ideas with travel companions.</li>
              <li><strong>Swipe-based recommendation system:</strong> vote on suggested places with swipes.</li>
              <li><strong>AI-based suggestions:</strong> tailored to group preferences and history.</li>
              <li><strong>Synchronization:</strong> real-time updates and shared calendars.</li>
            </ul>

            <h2 style={{ marginTop: '40px' }}>Technology</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Design tools:</strong> Figma (prototype and UI design).</li>
              <li><strong>Mobile-first layout:</strong> optimized for smartphones.</li>
              <li><strong>Interactions:</strong> animated transitions and clickable flows.</li>
            </ul>
          </div>

          {/* Right: Button ABOVE photos + slider */}
          <div
            style={{
              flex: '1 1 520px',
              minWidth: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Figma button — теперь СРАЗУ НАД фото */}
            <a
              href="https://www.figma.com/design/lSyW28vXTWfd7wGZ81aAnx/Diplom?node-id=0-1&m=dev&t=sgkhJ5frAjpAZyiN-1"
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
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                marginBottom: 12   // небольшой зазор до фото
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              Figma Prototype
            </a>

            {/* Slider */}
            <div
              style={{
                position: 'relative',
                width: 420,
                height: 640,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <Image
                src={images[current]}
                alt={`Figma Travel App ${current + 1}`}
                width={400}
                height={600}
                style={{ objectFit: 'contain' }}
              />
              <button onClick={prevImage} style={arrowStyle('left')} aria-label="Prev">&#10094;</button>
              <button onClick={nextImage} style={arrowStyle('right')} aria-label="Next">&#10095;</button>
            </div>
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
