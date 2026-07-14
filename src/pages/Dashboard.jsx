import Layout from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import { FileText, Inbox, Send, CheckCircle } from 'lucide-react'

export default function Dashboard() {
    const { usuario } = useAuth()

    const estadisticas = [
        { titulo: 'Oficios Recibidos', valor: '24', icono: <Inbox size={28} />, color: 'var(--granate-oscuro)' },
        { titulo: 'Oficios Enviados', valor: '18', icono: <Send size={28} />, color: 'var(--marron-dorado)' },
        { titulo: 'En Proceso', valor: '7', icono: <FileText size={28} />, color: 'var(--rojo-vino)' },
        { titulo: 'Respondidos', valor: '15', icono: <CheckCircle size={28} />, color: '#2E7D32' }
    ]

    return (
        <Layout>
            <div>
                <h1>Panel Principal - {usuario?.direccion}</h1>
                <p style={{ marginBottom: '2rem', color: 'var(--gris-claro)' }}>
                    Bienvenido, {usuario?.nombre}. Aquí tienes el resumen de tus oficios.
                </p>

                {/* Tarjetas de estadísticas */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2.5rem'
                }}>
                    {estadisticas.map((item, idx) => (
                        <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{ color: item.color, opacity: 0.8 }}>{item.icono}</div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.8rem' }}>{item.valor}</h3>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gris-claro)' }}>{item.titulo}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Últimos oficios */}
                <div className="card">
                    <h3>Últimos Oficios Recibidos</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                            <thead>
                                <tr style={{ background: 'var(--beige-claro)' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', borderRadius: '4px 0 0 0' }}>Número</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Asunto</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>Remitente</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', borderRadius: '0 4px 0 0' }}>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--gris-claro)' }}>
                                    <td style={{ padding: '0.75rem' }}>OF-2026-0045</td>
                                    <td style={{ padding: '0.75rem' }}>Solicitud de presupuesto</td>
                                    <td style={{ padding: '0.75rem' }}>Dir. Administración</td>
                                    <td style={{ padding: '0.75rem', color: '#B58C56', fontWeight: 500 }}>En proceso</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--gris-claro)' }}>
                                    <td style={{ padding: '0.75rem' }}>OF-2026-0044</td>
                                    <td style={{ padding: '0.75rem' }}>Informe de actividades</td>
                                    <td style={{ padding: '0.75rem' }}>Dir. Operación</td>
                                    <td style={{ padding: '0.75rem', color: '#2E7D32', fontWeight: 500 }}>Respondido</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}