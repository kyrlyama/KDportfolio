import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Websites() {
  return (
  <div className="pageWrapper">
    <h1 className="pageTitle">My Android Studio Projects</h1>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
      {projects.map((project, index) => (
        <ProjectBlock key={index} {...project} reverse={index % 2 !== 0} />
      ))}
    </div>
  </div>
);
}

const projects = [
  {
    title: "Translator — Android Studio App",
    slug: "androidstudio1",
    description: "A simple translator app (RU/EN/EE/DE) built in Android Studio with Material UI and history.",
    images: ["/androidstudio1.png", "/androidstudio12.png", "/androidstudio13.png"]
  },
  {
    title: "Calculator — Android Studio App",
    slug: "androidstudio2",
    description: "Mobile calculator with clean UI and core arithmetic operations.",
    images: ["/androidstudio2.png", "/androidstudio22.png", "/androidstudio23.png", "/androidstudio24.png"]
  },
  {
    title: "EUR to USD — Currency Converter App",
    slug: "androidstudio3",
    description: "Simple currency converter. Text-only card as requested.",
    images: [] // ← фоток НЕТ на третьей карточке
  },
];

function ProjectBlock({ title, description, images, reverse, slug }) {
  const [current, setCurrent] = useState(0);
  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);
  const padding = reverse ? '0 60px 0 0' : '0 0 0 40px';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '20px',
        margin: '60px 0',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        background: '#fff',
        padding: '20px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'scale(1.015)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >

      {/* Блок изображений — делаем компактным и НЕ на всю ширину */}
      {images && images.length > 0 && (
        <div style={{
          position: 'relative',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Фиксированный мини-контейнер под картинку, чтобы не «прыгало» */}
          <div
            style={{
              position: 'relative',
              width: 300,       // компактнее
              height: 450,      // фиксированный размер, единый для всех кадров
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              background: '#fff',
              margin: '0 auto'
            }}
          >
            <Image
              src={images[current]}
              alt={`${title} — screen ${current + 1}`}
              fill
              sizes="300px"
              style={{ objectFit: 'contain', display: 'block' }}
              priority={false}
            />
            {images.length > 1 && (
              <>
                <button onClick={prevImage} style={arrowStyle('left')} aria-label="Prev">&#10094;</button>
                <button onClick={nextImage} style={arrowStyle('right')} aria-label="Next">&#10095;</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Текст */}
      <div style={{ width: images && images.length > 0 ? '50%' : '100%', padding }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '12px' }}>{title}</h2>
        <p style={{ color: '#333', lineHeight: '1.6' }}>{description}</p>
        <Link
          href={`/${slug}`}
          style={{
            marginTop: '16px',
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#e0f0ff',
            color: '#00509e',
            fontWeight: '600',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f8ff';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e0f0ff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          See more details
        </Link>
      </div>
    </div>
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
    fontSize: 24,
    cursor: 'pointer',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    transition: 'background .3s',
  };
}
