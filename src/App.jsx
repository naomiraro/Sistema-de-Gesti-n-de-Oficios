import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import OficiosEntrada from './pages/OficiosEntrada'
import OficiosSalida from './pages/OficiosSalida'
import NuevoOficio from './pages/NuevoOficio'
import GestionUsuarios from './pages/GestionUsuarios'
import SinAcceso from './pages/SinAcceso'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/oficios/entrada" element={
            <ProtectedRoute>
              <OficiosEntrada />
            </ProtectedRoute>
          } />
          <Route path="/oficios/salida" element={
            <ProtectedRoute>
              <OficiosSalida />
            </ProtectedRoute>
          } />
          <Route path="/oficios/nuevo" element={
            <ProtectedRoute>
              <NuevoOficio />
            </ProtectedRoute>
          } />
          <Route path="/usuarios" element={
            <ProtectedRoute rolesPermitidos={['admin']}>
              <GestionUsuarios />
            </ProtectedRoute>
          } />
          <Route path="/sin-acceso" element={<SinAcceso />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App