import { useEffect, useState } from 'react'
import VideojuegoCard from './VideojuegoCard'
import { obtenerVideojuegos } from '../services/api'

export function MainContent({ filtros }) {
    const [juegos, setJuegos] = useState([])
    const [cargando, setCargando] = useState(true)

    // useEffect #1: al montar el componente se "piden" los datos (tarda 1.5 s)
    useEffect(() => {
        obtenerVideojuegos().then((datos) => {
            setJuegos(datos)
            setCargando(false)
        })
    }, [])

    // El filtro se recalcula en cada render a partir de los filtros del Sidebar
    const juegosFiltrados = juegos.filter((juego) => {
        const coincideNombre = juego.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase())
        const coincideGenero = filtros.genero === 'Todos' || juego.genero === filtros.genero
        const coincidePlataforma = filtros.plataformas.length === 0 || filtros.plataformas.includes(juego.plataforma)
        const coincidePuntuacion = juego.puntuacion >= filtros.puntuacionMin
        return coincideNombre && coincideGenero && coincidePlataforma && coincidePuntuacion
    })

    // useEffect #2: actualiza el título de la pestaña con el número de resultados
    useEffect(() => {
        document.title = cargando ? 'Cargando...' : `Dashboard (${juegosFiltrados.length})`
    }, [cargando, juegosFiltrados.length])

    // Renderizado condicional: spinner mientras carga
    if (cargando) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-3 text-secondary">Cargando...</p>
            </div>
        )
    }

    return (
        <>
            <h2 className="mb-3">
                Videojuegos{' '}
                <span className="badge bg-secondary fs-6 align-middle">
                    {juegosFiltrados.length} de {juegos.length}
                </span>
            </h2>

            {juegosFiltrados.length === 0 ? (
                <div className="alert alert-warning">No hay videojuegos que coincidan con los filtros.</div>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">
                    {juegosFiltrados.map((juego) => (
                        <div className="col" key={juego.id}>
                            <VideojuegoCard juego={juego} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
