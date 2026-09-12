export default function AdminLoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#0c0d0d',
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #cdb17f',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          margin: '0 auto 20px',
          animation: 'spin 0.8s linear infinite',
        }} />
        <div style={{
          color: '#cdb17f',
          fontSize: '16px',
          fontFamily: 'Inter, sans-serif',
        }}>
          Loading...
        </div>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
