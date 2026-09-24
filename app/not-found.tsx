export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121211',
        color: '#f5f0e8',
        fontFamily: 'monospace',
        gap: '24px',
      }}
    >
      <div
        style={{
          border: '4px solid #f5f0e8',
          padding: '40px 48px',
          boxShadow: '6px 6px 0 #f5f0e8',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '80px', fontWeight: 900, color: '#e63329', lineHeight: 1 }}>
          404
        </div>
        <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px', letterSpacing: '2px' }}>
          PÁGINA NO ENCONTRADA
        </div>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '28px',
            border: '3px solid #f5f0e8',
            padding: '10px 24px',
            fontWeight: 800,
            color: '#121211',
            backgroundColor: '#f5c842',
            textDecoration: 'none',
            letterSpacing: '1px',
            boxShadow: '4px 4px 0 #f5f0e8',
          }}
        >
          ← VOLVER AL INICIO
        </a>
      </div>
    </div>
  );
}
