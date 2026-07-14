import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import Layout from '../components/Layout'
import { DIRECCIONES, TIPO_OFICIO } from '../utils/constantes'

export default function NuevoOficio() {
    const navegar = useNavigate()
    const [cargando, setCargando] = useState(false)

    const validacion = Yup.object({
        numeroOficio: Yup.string().required('El número de oficio es obligatorio'),
        asunto: Yup.string().required('El asunto es obligatorio').max(150, 'Máximo 150 caracteres'),
        remitente: Yup.string().required('El remitente es obligatorio'),
        destinatario: Yup.string().required('Selecciona el destinatario'),
        tipo: Yup.string().required('Selecciona el tipo de oficio'),
        ccp: Yup.string(),
        cuerpo: Yup.string().required('El contenido es obligatorio').min(20, 'Escribe más detalles')
    })

    const guardarOficio = (valores) => {
        setCargando(true)
        setTimeout(() => {
            console.log('Datos del oficio:', valores)
            toast.success('✅ Oficio registrado correctamente')
            navegar('/oficios/entrada')
            setCargando(false)
        }, 1500)
    }

    return (
        <Layout>
            <div style={{ maxWidth: '950px', margin: '0 auto' }}>
                <h1>Nuevo Oficio</h1>
                <p style={{ marginBottom: '2rem', color: 'var(--gris-claro)' }}>
                    Llena todos los campos para registrar el oficio en el sistema.
                </p>

                <div className="card">
                    <Formik
                        initialValues={{
                            numeroOficio: '',
                            asunto: '',
                            remitente: '',
                            destinatario: '',
                            tipo: TIPO_OFICIO.ENTRADA,
                            ccp: '',
                            cuerpo: ''
                        }}
                        validationSchema={validacion}
                        onSubmit={guardarOficio}
                    >
                        {({ errors, touched }) => (
                            <Form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label>Número de Oficio</label>
                                        <Field name="numeroOficio" placeholder="ej: OF-2026-0123" />
                                        {errors.numeroOficio && touched.numeroOficio && <span style={{ color: 'var(--rojo-vino)', fontSize: '0.8rem' }}>{errors.numeroOficio}</span>}
                                    </div>

                                    <div>
                                        <label>Tipo de Oficio</label>
                                        <Field as="select" name="tipo">
                                            <option value={TIPO_OFICIO.ENTRADA}>Entrada</option>
                                            <option value={TIPO_OFICIO.SALIDA}>Salida</option>
                                            <option value={TIPO_OFICIO.CCP}>Conocimiento (CCP)</option>
                                        </Field>
                                    </div>
                                </div>

                                <div>
                                    <label>Asunto</label>
                                    <Field name="asunto" placeholder="Resumen breve del contenido" />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label>Remitente</label>
                                        <Field name="remitente" placeholder="Nombre de la persona/área que envía" />
                                    </div>

                                    <div>
                                        <label>Destinatario</label>
                                        <Field as="select" name="destinatario">
                                            <option value="">Selecciona una dirección</option>
                                            {DIRECCIONES.map(dir => (
                                                <option key={dir.id} value={dir.id}>{dir.nombre}</option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>

                                <div>
                                    <label>Conocimiento (CCP - Opcional)</label>
                                    <Field name="ccp" placeholder="Personas que solo tendrán conocimiento del oficio" />
                                </div>

                                <div>
                                    <label>Contenido del Oficio</label>
                                    <Field as="textarea" name="cuerpo" rows={8} placeholder="Escribe aquí el contenido completo..." />
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                    <button type="button" className="btn-secundario" onClick={() => navegar(-1)}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn-principal" disabled={cargando}>
                                        {cargando ? 'Guardando...' : 'Registrar Oficio'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    )
}