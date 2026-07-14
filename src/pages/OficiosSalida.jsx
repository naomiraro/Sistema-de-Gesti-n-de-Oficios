import Layout from '../components/Layout'
import { Eye, FileCheck } from 'lucide-react'

export default function OficiosSalida() {
    const oficiosSimulados = [
        { id: 1, numero: 'OF-S-2026-0012', asunto: 'Respuesta a solicitud', destinatario: 'Dir. Finanzas', fecha: '14/07/2026', acuse: 'Entregado' },
        { id: 2, numero: 'OF-S-2026-0011', asunto: 'Autorización de gastos', destinatario: 'Dir. Operación', fecha: '13/07/2026', acuse: 'Pendiente' },
    ]

    return (
        <Layout>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1>Oficios de Salida</h1>
                        <p style={{ color: 'var(--gris-claro)' }}>Oficios enviados por tu área</p>
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
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Destinatario</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Fecha</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Acuse</th>
                                    <th style={{ padding: '1rem', textAlign: 'center', borderRadius: '0 4px 0 0' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oficiosSimulados.map(oficio => (
                                    <tr key={oficio.id} style={{ borderBottom: '1px solid #EEE' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{oficio.numero}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.asunto}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.destinatario}</td>
                                        <td style={{ padding: '1rem' }}>{oficio.fecha}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.35rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                background: oficio.acuse === 'Entregado' ? '#E6F4EA' : '#FFF8E1',
                                                color: oficio.acuse === 'Entregado' ? '#2E7D32' : '#F57C00'
                                            }}>
                                                {oficio.acuse}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--granate-oscuro)' }} title="Ver detalle">
                                                    <Eye size={16} />
                                                </button>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: '#2E7D32' }} title="Ver acuse">
                                                    <FileCheck size={16} />
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