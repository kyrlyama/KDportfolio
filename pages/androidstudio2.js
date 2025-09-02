import Image from 'next/image';
import { useState } from 'react';

export default function AndroidStudio2() {
  const images = ['/androidstudio2.png', '/androidstudio22.png', '/androidstudio23.png', '/androidstudio24.png'];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      {/* Background */}
      <div
        style={{
          padding: '120px 20px 40px',
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
          color: '#000',
        }}
      >
        {/* White card with two columns */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            maxWidth: 1100,
            margin: '0 auto',
            padding: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Text (left) */}
            <div style={{ flex: '1 1 420px', minWidth: 320 }}>
              <h1 style={{ fontSize: 28, marginBottom: 16 }}>Android Calculator — Mobile Calculator App</h1>

              <p style={{ marginBottom: 16, lineHeight: 1.6, color: '#333' }}>
                A simple calculator built in Android Studio. It supports core arithmetic operations,
                a clean Material-inspired UI, and responsive layouts for different screen sizes.
              </p>

              <h2 style={{ fontSize: 20, margin: '16px 0 8px' }}>Basic Functionality</h2>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
                <li><strong>Operations:</strong> addition, subtraction, multiplication, division.</li>
                <li><strong>Responsive UI:</strong> works correctly on different screen sizes.</li>
                <li><strong>Minimal design:</strong> large tap targets and readable typography.</li>
              </ul>

              <h2 style={{ fontSize: 20, margin: '16px 0 8px' }}>Technology</h2>
              <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
                <li>Java, Android Studio (SDK)</li>
                <li>XML Layouts</li>
                <li>Material Design principles</li>
              </ul>

              <a
                href="https://github.com/kyrlyama/Calculator"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#e6f2ff',
                  color: '#0047ab',
                  fontWeight: 'bold',
                  padding: '12px 20px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform .3s, box-shadow .3s',
                  marginTop: 10
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
                GitHub repository
              </a>
            </div>

            {/* Slider (right) — FIXED container so nothing jumps */}
            <div style={{ flex: '0 0 420px', width: 420, position: 'relative', margin: '0 auto' }}>
              <div
                style={{
                  position: 'relative',
                  background: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  padding: 10,
                  // фиксируем размеры контейнера под изображение
                  width: 400,
                  height: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Вариант с fill + objectFit обеспечивает единый бокс */}
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden' }}>
                  <Image
                    src={images[current]}
                    alt={`Calculator screen ${current + 1}`}
                    fill
                    sizes="400px"
                    style={{ objectFit: 'contain', display: 'block' }} // поставь 'cover', если не хочешь полей
                    priority={false}
                  />
                </div>

                {images.length > 1 && (
                  <>
                    <button onClick={prevImage} style={arrowStyle('left')} aria-label="Prev">&#10094;</button>
                    <button onClick={nextImage} style={arrowStyle('right')} aria-label="Next">&#10095;</button>
                  </>
                )}
              </div>
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
    [position]: '8px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.55)',
    border: 'none',
    color: 'white',
    fontSize: 28,
    cursor: 'pointer',
    borderRadius: '50%',
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    transition: 'background .3s',
  };
}
