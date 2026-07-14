import { Link } from 'react-router-dom'

export default function SinAcceso() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Acceso Restringido</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--gris-claro)', maxWidth: '500px', marginBottom: '2rem' }}>
                No cuentas con los permisos necesarios para ver esta página. Si crees que es un error, contacta al administrador.
            </p>
            <Link to="/" className="btn-principal" style={{ display: 'inline-block' }}>
                Regresar al Inicio
            </Link>
        </div>
    )
}