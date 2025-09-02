import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Websites() {
  return (
    <>
  
      {/* Простой серый фон */}
<div
  style={{
    padding: '120px 40px',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
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
  <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>  My Website Projects </h1>


  {/* ➜ Добавили такой же центральный контейнер, как в Figma/Websites */}
  <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
    {projects.map((project, index) => (
      <ProjectBlock key={index} {...project} reverse={index % 2 !== 0} />
    ))}
  </div>
</div>

    </>
  );
}

const projects = [
  {
    title: "CleanseTeam",
    slug: "project1",
    description: "Website for cleaning services in Tallinn. Built during 3rd year of study.",
    images: ["/project1.png", "/project12.png", "/project13.png"]
  },
  {
    title: "Welcome to the world space!",
    slug: "project2",
    description: "The very first project in year 1 — educational space site with quiz.",
    images: ["/project2.png", "/project21.png", "/project22.png", "/project23.png", "/project24.png"]
  },
  {
    title: "Choose your musician",
    slug: "project3",
    description: "Year 2 project. Based on your answers, a musician is selected from the library.",
    images: ["/project3.png", "/project31.png", "/project32.png"]
  },
  {
    title: "Practical experience",
    slug: "project4",
    description: "Store inventory management web app for Likefon internship.",
    images: ["/project4.png"]
  }
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
    {/* Блок изображений */}
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
          alt={`Project ${current + 1}`}
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

    {/* Текст */}
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
