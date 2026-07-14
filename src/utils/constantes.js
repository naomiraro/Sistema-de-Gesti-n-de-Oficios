export const DIRECCIONES = [
    {
        id: 'operacion',
        nombre: 'Dirección de Operación',
        tipo: 'recepcionista',
        subdirecciones: [
            'Subdirección de Procesos',
            'Subdirección de Infraestructura',
            'Subdirección de Soporte Operativo'
        ]
    },
    {
        id: 'general',
        nombre: 'Dirección General',
        tipo: 'secretaria_tecnica',
        subdirecciones: [
            'Subdirección de Seguimiento',
            'Subdirección de Enlace Institucional',
            'Subdirección de Transparencia'
        ]
    },
    {
        id: 'juridica',
        nombre: 'Dirección Jurídica',
        tipo: 'recepcionista',
        subdirecciones: [
            'Subdirección de Asesoría',
            'Subdirección de Normatividad',
            'Subdirección de Procesos Legales'
        ]
    },
    {
        id: 'administracion',
        nombre: 'Dirección de Administración y Finanzas',
        tipo: 'recepcionista',
        subdirecciones: [
            'Subdirección de Recursos Financieros',
            'Subdirección de Recursos Humanos',
            'Subdirección de Recursos Materiales'
        ]
    },
    {
        id: 'planeacion',
        nombre: 'Dirección de Planeación y Desarrollo',
        tipo: 'recepcionista',
        subdirecciones: [
            'Subdirección de Programación',
            'Subdirección de Evaluación',
            'Subdirección de Proyectos Estratégicos'
        ]
    }
]

export const TIPO_OFICIO = {
    ENTRADA: 'entrada',
    SALIDA: 'salida',
    CCP: 'conocimiento'
}

export const ESTADOS_OFICIO = {
    RECIBIDO: 'Recibido',
    EN_ASIGNACION: 'En asignación',
    EN_PROCESO: 'En proceso',
    RESPONDIDO: 'Respondido',
    ARCHIVADO: 'Archivado'
}

export const ROLES = {
    ADMIN: 'admin',
    SECRETARIA_TECNICA: 'secretaria_tecnica',
    RECEPCIONISTA: 'recepcionista',
    DIRECTOR: 'director',
    SUBDIRECTOR: 'subdirector'
}