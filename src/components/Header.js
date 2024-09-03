import Link from 'next/link';

export default function Header() {
  const userLoggedIn = false; // Esto se actualizará en la parte 2

  return (
    <header style={{ padding: '1rem', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '1rem' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      {userLoggedIn && (
        <div className="user-info" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '1rem' }}>Nombre del Usuario</span>
          <button style={{ padding: '0.5rem', borderRadius: '5px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>Cerrar Sesión</button>
        </div>
      )}
    </header>
  );
}
