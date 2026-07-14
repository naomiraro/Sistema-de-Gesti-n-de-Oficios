import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    // Cargar sesión guardada al iniciar
    useEffect(() => {
        const sesionGuardada = localStorage.getItem('usuario')
        if (sesionGuardada) setUsuario(JSON.parse(sesionGuardada))
        setCargando(false)
    }, [])

    const iniciarSesion = (datosUsuario) => {
        setUsuario(datosUsuario)
        localStorage.setItem('usuario', JSON.stringify(datosUsuario))
    }

    const cerrarSesion = () => {
        setUsuario(null)
        localStorage.removeItem('usuario')
    }

    const tienePermiso = (rolesPermitidos) => {
        if (!usuario) return false
        if (usuario.rol === ROLES.ADMIN) return true // Admin tiene todo acceso
        return rolesPermitidos.includes(usuario.rol)
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            iniciarSesion,
            cerrarSesion,
            cargando,
            tienePermiso
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)