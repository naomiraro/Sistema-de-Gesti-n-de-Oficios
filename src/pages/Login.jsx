import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { DIRECCIONES, ROLES } from '../utils/constantes'

export default function Login() {
    const { iniciarSesion } = useAuth()
    const navegar = useNavigate()
    const [cargando, setCargando] = useState(false)

    const validacion = Yup.object({
        usuario: Yup.string().required('Ingresa tu usuario'),
        contrasena: Yup.string().required('Ingresa tu contraseña')
    })

    const autenticar = (valores) => {
        setCargando(true)
        setTimeout(() => {
            // Simulación de autenticación - reemplaza con tu API real
            const usuarioSimulado = {
                id: '1',
                nombre: 'Usuario de Prueba',
                usuario: valores.usuario,
                rol: ROLES.ADMIN, // Cambia según tu lógica
                direccion: DIRECCIONES[1].nombre // Dirección General
            }

            iniciarSesion(usuarioSimulado)
            toast.success('¡Bienvenido al sistema!')
            navegar('/')
            setCargando(false)
        }, 1200)
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--granate-oscuro) 0%, var(--rojo-vino) 100%)'
        }}>
            <div style={{
                background: 'var(--blanco)',
                borderRadius: 'var(--radio-borde)',
                padding: '2.5rem',
                width: '100%',
                maxWidth: '420px',
                boxShadow: 'var(--sombra)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Sistema de Oficios</h1>
                    <p style={{ color: 'var(--gris-claro)' }}>Ingresa tus credenciales para continuar</p>
                </div>

                <Formik
                    initialValues={{ usuario: '', contrasena: '' }}
                    validationSchema={validacion}
                    onSubmit={autenticar}
                >
                    {({ errors, touched }) => (
                        <Form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label>Usuario / Correo</label>
                                <Field
                                    name="usuario"
                                    placeholder="ej: j.perez@institucion.gob.mx"
                                />
                                {errors.usuario && touched.usuario && (
                                    <span style={{ color: 'var(--rojo-vino)', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                                        {errors.usuario}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label>Contraseña</label>
                                <Field name="contrasena" type="password" placeholder="••••••••" />
                                {errors.contrasena && touched.contrasena && (
                                    <span style={{ color: 'var(--rojo-vino)', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                                        {errors.contrasena}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn-principal"
                                style={{ fontSize: '1rem', padding: '14px', marginTop: '0.5rem' }}
                                disabled={cargando}
                            >
                                {cargando ? 'Verificando...' : 'Iniciar Sesión'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}