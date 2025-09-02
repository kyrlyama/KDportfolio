import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Figma() {
  return (
    <>

<div
  className="min-h-screen flex items-center justify-center px-6 pt-40 pb-20"
  style={{
    background: `
      radial-gradient(circle at 30% 30%,
        rgb(255, 255, 255) 0%,
        rgba(172, 206, 241, 0.6) 30%,
        rgba(186, 149, 255, 0.5) 60%,
        rgba(250, 202, 250, 0.4) 90%,
        rgb(255, 255, 255) 100%)`,
    backdropFilter: "blur(100px)",
  }}
>
  
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>  My Figma Projects </h1>

          {/* Первый проект — Travel App */}
          <ProjectBlock
            title="Travel Planning App"
            description="A prototype for an app that helps friends plan group trips. Features include destination selection, joint budgets, AI recommendations, and swipe-based decision making for activities."
            images={["/figma22.png", "/figma23.png", "/figma24.png", "/figma25.png", "/figma26.png", "/figma27.png", "/figma28.png", "/figma29.png"]}
            reverse={false}
            slug="figma1"
          />

          {/* Второй проект — Gift Helper */}
          <ProjectBlock
            title="Gift Helper"
            description="A mobile app that helps users find the perfect gift based on filters like age, budget, hobbies, and occasion. Includes calendar reminders and a contacts list for organizing ideas."
            images={["/figma1.png", "/figma12.png", "/figma13.png", "/figma14.png", "/figma15.png", "/figma16.png", "/figma17.png"]}
            reverse={true}
            slug="figma2"
          />

        </div>
      </div>
    </>
  );
}

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
        margin: '60px 0',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        background: '#fff',
        padding: '20px',
      }}
    >
      {/* Блок изображения */}
      <div style={{
        position: 'relative',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', width: '80%' }}>
          <Image
            src={images[current]}
            alt={`Figma project ${current + 1}`}
            width={800}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
          />
          {images.length > 1 && (
            <>
              <button onClick={prevImage} style={arrowStyle('left')}>&#10094;</button>
              <button onClick={nextImage} style={arrowStyle('right')}>&#10095;</button>
            </>
          )}
        </div>
      </div>

      {/* Текстовый блок */}
      <div style={{ width: '50%', padding }}>
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
