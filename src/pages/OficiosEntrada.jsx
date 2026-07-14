import Layout from '../components/Layout'
import { Eye, Reply, Share2 } from 'lucide-react'

export default function OficiosEntrada() {
    const oficiosSimulados = [
        { id: 1, numero: 'OF-2026-0045', asunto: 'Solicitud de materiales', remitente: 'Dir. Operación', fecha: '14/07/2026', estado: 'Recibido' },
        { id: 2, numero: 'OF-2026-0044', asunto: 'Informe trimestral', remitente: 'Dir. Planeación', fecha: '13/07/2026', estado: 'En asignación' },
        { id: 3, numero: 'OF-2026-0043', asunto: 'Consulta jurídica', remitente: 'Dir. Jurídica', fecha: '12/07/2026', estado: 'Respondido' },
    ]

    return (
        <Layout>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1>Oficios de Entrada</h1>
                        <p style={{ color: 'var(--gris-claro)' }}>Lista de oficios recibidos para su atención</p>
                    </div>
                    <button className="btn-principal" onClick={() => window.location.href = '/oficios/nuevo'}>
                        Nuevo Oficio
                    </button>
                </div>

                <div className="card">
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'var(--beige-claro)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', borderRadius: '4px 0 0 0' }}>Número</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Asunto</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Remitente</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Fecha</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Estado</th>
                                    <th style={{ padding: '1rem', textAlign: 'center', borderRadius: '0 4px 0 0' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oficiosSimulados.map(oficio => (
                                    <tr key={oficio.id} style={{ borderBottom: '1px solid #EEE' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{oficio.numero}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.asunto}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.remitente}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.fecha}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.35rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                background: oficio.estado === 'Respondido' ? '#E6F4EA' : oficio.estado === 'En asignación' ? '#FFF3E0' : '#F5F5F5',
                                                color: oficio.estado === 'Respondido' ? '#2E7D32' : oficio.estado === 'En asignación' ? '#E65100' : 'var(--gris-oscuro)'
                                            }}>
                                                {oficio.estado}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--granate-oscuro)' }} title="Ver detalle">
                                                    <Eye size={16} />
                                                </button>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--marron-dorado)' }} title="Responder">
                                                    <Reply size={16} />
                                                </button>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--rojo-vino)' }} title="Asignar">
                                                    <Share2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}