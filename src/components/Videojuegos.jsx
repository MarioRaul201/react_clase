import { useState } from 'react'
import Sidebar from './Sidebar'
import VideojuegoCard from './VideojuegoCard'

// Lista de ejemplo
const videojuegos = [
  { id: 1, nombre: 'The Legend of Zelda: Ocarina of Time', genero: 'Aventura', plataforma: 'Nintendo', anio: 1998, puntuacion: 9.9 },
  { id: 2, nombre: 'Super Mario Odyssey', genero: 'Plataformas', plataforma: 'Nintendo', anio: 2017, puntuacion: 9.7 },
  { id: 3, nombre: 'God of War', genero: 'Acción', plataforma: 'PlayStation', anio: 2018, puntuacion: 9.4 },
  { id: 4, nombre: 'The Last of Us', genero: 'Aventura', plataforma: 'PlayStation', anio: 2013, puntuacion: 9.5 },
  { id: 5, nombre: 'Halo Infinite', genero: 'Shooter', plataforma: 'Xbox', anio: 2021, puntuacion: 8.7 },
  { id: 6, nombre: 'Forza Horizon 5', genero: 'Carreras', plataforma: 'Xbox', anio: 2021, puntuacion: 9.2 },
  { id: 7, nombre: 'Minecraft', genero: 'Aventura', plataforma: 'PC', anio: 2011, puntuacion: 9.3 },
  { id: 8, nombre: 'Counter-Strike 2', genero: 'Shooter', plataforma: 'PC', anio: 2023, puntuacion: 8.2 },
  { id: 9, nombre: 'Mario Kart 8 Deluxe', genero: 'Carreras', plataforma: 'Nintendo', anio: 2017, puntuacion: 9.2 },
  { id: 10, nombre: 'Hollow Knight', genero: 'Plataformas', plataforma: 'PC', anio: 2017, puntuacion: 9.0 },
  { id: 11, nombre: 'Spider-Man 2', genero: 'Acción', plataforma: 'PlayStation', anio: 2023, puntuacion: 9.0 },
  { id: 12, nombre: 'Elden Ring', genero: 'RPG', plataforma: 'PC', anio: 2022, puntuacion: 9.6 },
]

// Valores únicos para armar las opciones de los filtros
const generos = [...new Set(videojuegos.map((j) => j.genero))]
const plataformas = [...new Set(videojuegos.map((j) => j.plataforma))]

const filtrosIniciales = { busqueda: '', genero: 'Todos', plataformas: [], puntuacionMin: 0 }

function Videojuegos() {
  const [filtros, setFiltros] = useState(filtrosIniciales)

  // Se recalcula en cada render a partir de los filtros
  const juegosFiltrados = videojuegos.filter((juego) => {
    const coincideNombre = juego.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase())
    const coincideGenero = filtros.genero === 'Todos' || juego.genero === filtros.genero
    const coincidePlataforma = filtros.plataformas.length === 0 || filtros.plataformas.includes(juego.plataforma)
    const coincidePuntuacion = juego.puntuacion >= filtros.puntuacionMin
    return coincideNombre && coincideGenero && coincidePlataforma && coincidePuntuacion
  })

  return (
    <section className="container-fluid py-4">
      <div className="row">
        <aside className="col-md-4 col-lg-3 mb-4">
          <Sidebar
            filtros={filtros}
            setFiltros={setFiltros}
            generos={generos}
            plataformas={plataformas}
            onLimpiar={() => setFiltros(filtrosIniciales)}
          />
        </aside>

        <main className="col-md-8 col-lg-9">
          <h2 className="mb-3">
            Videojuegos <span className="badge bg-secondary fs-6 align-middle">{juegosFiltrados.length}</span>
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
        </main>
      </div>
    </section>
  )
}

export default Videojuegos
