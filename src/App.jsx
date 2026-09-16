const App = () => {
  return (
    <main
      style={{
        alignItems: 'center',
        background: '#ffffff',
        color: '#111111',
        display: 'flex',
        inset: 0,
        justifyContent: 'center',
        padding: '2rem',
        position: 'fixed',
        textAlign: 'center',
      }}>
      <p
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 'clamp(2.75rem, 8vw, 7rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          margin: 0,
          maxWidth: '16ch',
        }}>
        This site has been relocated to{' '}
        <a
          href="https://dilans.dev"
          style={{
            color: '#0047ff',
            textDecorationThickness: '0.08em',
            textUnderlineOffset: '0.12em',
          }}>
          dilans.dev
        </a>
        .
      </p>
    </main>
  );
};

export default App;
