import Image from 'next/image';
import { useState } from 'react';

export default function Project1() {
  const images = [
    '/project4.png'
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
            <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Practice</h1>

            <p style={{ marginBottom: '20px', color: '#333', lineHeight: 1.7 }}>
              “Case Management System” is a web application for accounting and management of goods 
              in the warehouse of the phone accessories store. The project is designed for convenient 
              adding, filtering and searching of covers by various criteria, as well as for controlling 
              the availability of goods.
            </p>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Basic functionality</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Add products —</strong> interface for adding new models of cases with brand, model, color, price and quantity.</li>
              <li><strong>Automatic data storage —</strong> stored in localStorage and loaded on page open.</li>
              <li><strong>Filtering and search —</strong> sort by brand, model, type, gender, price, quantity.</li>
              <li><strong>Display of availability —</strong> “In stock” / “Out of stock” indicators.</li>
              <li><strong>Dynamic table update —</strong> real-time update without reload.</li>
            </ul>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Technology</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li><strong>Frontend:</strong> HTML, CSS (Bootstrap).</li>
              <li><strong>Dynamic functionality:</strong> JavaScript (Fetch API, localStorage).</li>
              <li><strong>Data files:</strong> JSON (models.json, cases.json).</li>
            </ul>

            <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Processing logic</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#333' }}>
              <li>Adding a product with data correctness check.</li>
              <li>Filtering by criteria (brand, model, type, price, availability).</li>
              <li>Auto save/load to localStorage.</li>
            </ul>

            <a
              href="https://github.com/kyrlyama/practice"
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
