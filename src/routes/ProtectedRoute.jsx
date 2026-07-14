import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ children, rolesPermitidos }) {
    const { usuario, cargando, tienePermiso } = useAuth()

    if (cargando) return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>

    if (!usuario) return <Navigate to="/login" />
    if (rolesPermitidos && !tienePermiso(rolesPermitidos)) return <Navigate to="/sin-acceso" />

    return children
}