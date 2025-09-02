import Image from 'next/image';
import { useState } from 'react';

export default function FigmaGiftHelperApp() {
  const images = [
    '/figma1.png', '/figma12.png', '/figma13.png', '/figma14.png', '/figma15.png',
    '/figma16.png', '/figma17.png'
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>

      {/* Portfolio background */}
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
        {/* Unified card: text left + images right */}
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
          {/* LEFT — TEXT (unchanged) */}
          <div style={{ flex: '1 1 520px', minWidth: 300 }}>
            <h1 style={{ fontSize: 28, marginBottom: 20 }}>Figma Gift Helper — gift finder app</h1>

            <p style={{ marginBottom: 20, lineHeight: 1.7, color: '#333' }}>
              <strong>Gift Helper</strong> is a mobile app concept that helps you pick the right gift for
              anyone — fast and confidently. Users filter gifts by <em>age, budget, hobbies and occasion</em>,
              save important dates to a smart calendar, and store people’s preferences in a handy
              <em> People</em> section. UI follows a soft lilac/blue palette with rounded controls,
              minimal noise, and clear hierarchy.
            </p>

            <h2 style={{ fontSize: 20, margin: '18px 0 10px' }}>Core features</h2>
            <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
              <li><strong>Smart filtering:</strong> age ranges, budget brackets, hobbies, and holiday type.</li>
              <li><strong>Women/Men gift flows:</strong> dedicated lists with quick “add to favorites”.</li>
              <li><strong>Calendar:</strong> save birthdays & events, see upcoming dates at a glance, create reminders.</li>
              <li><strong>People profiles:</strong> store names, dates, and preferences; attach suggested gifts.</li>
              <li><strong>Micro-interactions:</strong> confirmations, badges, subtle motion for feedback.</li>
            </ul>

            <h2 style={{ fontSize: 20, margin: '18px 0 10px' }}>Design & UX</h2>
            <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
              <li>Calm pastel gradients, high legibility, large tap targets.</li>
              <li>Segmented controls & chips for super-fast filtering.</li>
              <li>Bottom home action for one-hand navigation.</li>
              <li>Consistent empty states and success toasts.</li>
            </ul>
          </div>

          {/* RIGHT — Figma button ABOVE photos + slider */}
          <div
            style={{
              flex: '1 1 520px',
              minWidth: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Figma button */}
            <a
              href="https://www.figma.com/design/joVwSJGnBQUslG8eSYn2iB/Untitled?node-id=0-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#e6f2ff',
                color: '#0047ab',
                fontWeight: 'bold',
                padding: '12px 24px',
                borderRadius: 12,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform .3s, box-shadow .3s',
                marginBottom: 12
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

            {/* Slider with fixed container (no jump) */}
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
                alt={`Gift Helper screen ${current + 1}`}
                width={400}
                height={600}
                style={{ objectFit: 'contain' }}
              />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} style={arrowStyle('left')} aria-label="Previous">&#10094;</button>
                  <button onClick={nextImage} style={arrowStyle('right')} aria-label="Next">&#10095;</button>
                </>
              )}
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
    transition: 'background .3s',
  };
}
