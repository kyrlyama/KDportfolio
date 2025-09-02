
export default function AndroidStudio3() {
  return (
    <>
      {/* Фон как на остальных страницах */}
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
          color: '#000',
        }}
      >
        {/* Белая карточка с контентом */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            padding: '32px 28px',
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
            EUR to USD — Currency Converter App
          </h1>

          <p style={{ marginBottom: '20px', lineHeight: 1.7, color: '#333' }}>
            A simple currency converter mobile application created in Android Studio. It allows users to convert
            Euros (EUR) to US Dollars (USD) with a single tap. The exchange rate is hardcoded for simplicity and
            demonstration purposes. Interface follows clean, readable Material Design.
          </p>

          <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Basic functionality</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
            <li><strong>Input:</strong> users can enter any amount in EUR.</li>
            <li><strong>Conversion:</strong> instant calculation to USD.</li>
            <li><strong>UI:</strong> simple and user-friendly layout with clear controls.</li>
          </ul>

          <h2 style={{ fontSize: '20px', margin: '18px 0 10px' }}>Technology</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: '#333' }}>
            <li><strong>Language:</strong> Java</li>
            <li><strong>Environment:</strong> Android Studio</li>
            <li><strong>Platform:</strong> Android</li>
            <li><strong>Design:</strong> XML layouts (Material Design)</li>
          </ul>

          <a
            href="https://github.com/kyrlyama/EURtoUSD"
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
              marginTop: '16px',
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
      </div>
    </>
  );
}
