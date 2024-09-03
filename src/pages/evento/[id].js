import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function DetalleEvento() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Detalle del Evento {id}</h1>
      <p>Detalles específicos del evento aquí...</p>
    </Layout>
  );
}
