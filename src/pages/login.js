import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <h1>Login</h1>
      <form style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <label>
          Usuario:
          <input type="text" name="username" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Iniciar Sesión</button>
      </form>
    </Layout>
  );
}
