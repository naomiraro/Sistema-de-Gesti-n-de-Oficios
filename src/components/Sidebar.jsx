import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {
    FileText,
    Inbox,
    Send,
    PlusCircle,
    Users,
    LogOut,
    LayoutDashboard
} from 'lucide-react'

export default function Sidebar() {
    const { usuario, cerrarSesion } = useAuth()
    const navegar = useNavigate()

    const salir = () => {
        cerrarSesion()
        navegar('/login')
    }

    return (
        <aside style={{
            width: '260px',
            background: 'var(--granate-oscuro)',
            color: 'var(--blanco)',
            minHeight: '100vh',
            padding: '1.5rem 0',
            position: 'fixed',
            left: 0,
            top: 0
        }}>
            <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <h3 style={{ color: 'var(--blanco)', fontSize: '1.2rem' }}>Sistema de Oficios</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.25rem' }}>
                    {usuario?.nombre}
                </p>
                <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                    {usuario?.direccion}
                </p>
            </div>

            <nav style={{ marginTop: '1.5rem' }}>
                <Link to="/" style={estilos.enlace}>
                    <LayoutDashboard size={18} style={{ marginRight: '0.75rem' }} />
                    Panel Principal
                </Link>
                <Link to="/oficios/entrada" style={estilos.enlace}>
                    <Inbox size={18} style={{ marginRight: '0.75rem' }} />
                    Oficios de Entrada
                </Link>
                <Link to="/oficios/salida" style={estilos.enlace}>
                    <Send size={18} style={{ marginRight: '0.75rem' }} />
                    Oficios de Salida
                </Link>
                <Link to="/oficios/nuevo" style={estilos.enlace}>
                    <PlusCircle size={18} style={{ marginRight: '0.75rem' }} />
                    Nuevo Oficio
                </Link>

                {usuario?.rol === 'admin' && (
                    <Link to="/usuarios" style={estilos.enlace}>
                        <Users size={18} style={{ marginRight: '0.75rem' }} />
                        Gestión de Usuarios
                    </Link>
                )}

                <button onClick={salir} style={{
                    ...estilos.enlace,
                    width: '100%',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    marginTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.15)'
                }}>
                    <LogOut size={18} style={{ marginRight: '0.75rem' }} />
                    Cerrar Sesión
                </button>
            </nav>
        </aside>
    )
}

const estilos = {
    enlace: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.85rem 1.5rem',
        color: 'var(--blanco)',
        opacity: 0.9,
        transition: 'var(--transicion)'
    }
}
estilos.enlace[':hover'] = {
    background: 'rgba(255,255,255,0.1)',
    opacity: 1,
    paddingLeft: '1.75rem'
}