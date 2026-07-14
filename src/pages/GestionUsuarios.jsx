import Layout from '../components/Layout'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function GestionUsuarios() {
    const usuarios = [
        { id: 1, nombre: 'Juan Pérez', usuario: 'j.perez', rol: 'Director', direccion: 'General' },
        { id: 2, nombre: 'María López', usuario: 'm.lopez', rol: 'Recepcionista', direccion: 'Operación' },
        { id: 3, nombre: 'Carlos Ruiz', usuario: 'c.ruiz', rol: 'Subdirector', direccion: 'Jurídica' },
    ]

    return (
        <Layout>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1>Gestión de Usuarios</h1>
                        <p style={{ color: 'var(--gris-claro)' }}>Administra las cuentas y permisos del sistema</p>
                    </div>
                    <button className="btn-principal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={18} /> Nuevo Usuario
                    </button>
                </div>

                <div className="card">
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'var(--beige-claro)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', borderRadius: '4px 0 0 0' }}>Nombre</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Usuario</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Rol</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Dirección</th>
                                    <th style={{ padding: '1rem', textAlign: 'center', borderRadius: '0 4px 0 0' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(usr => (
                                    <tr key={usr.id} style={{ borderBottom: '1px solid #EEE' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{usr.nombre}</td>
                                        <td style={{ padding: '1rem' }}>{usr.usuario}</td>
                                        <td style={{ padding: '1rem' }}>{usr.rol}</td>
                                        <td style={{ padding: '1rem' }}>{usr.direccion}</td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--marron-dorado)' }}>
                                                    <Edit size={16} />
                                                </button>
                                                <button style={{ padding: '0.5rem', background: 'transparent', color: 'var(--rojo-vino)' }}>
                                                    <Trash2 size={16} />
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