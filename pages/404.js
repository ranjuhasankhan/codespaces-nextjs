export default function Custom404() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0a2540' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a href="/" style={{ color: '#ffb347', marginTop: '1.5rem', fontWeight: 'bold' }}>Go to Homepage</a>
    </div>
  );
}
