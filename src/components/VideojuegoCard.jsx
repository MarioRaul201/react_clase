// Color de la etiqueta según la plataforma
const colores = {
  Nintendo: 'danger',
  PlayStation: 'primary',
  Xbox: 'success',
  PC: 'secondary',
}

function VideojuegoCard({ juego }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span className={`badge bg-${colores[juego.plataforma] || 'secondary'}`}>{juego.plataforma}</span>
          <span className="fw-bold">★ {juego.puntuacion}</span>
        </div>
        <h5 className="card-title">{juego.nombre}</h5>
        <p className="card-text text-secondary mt-auto mb-0">
          {juego.genero} · {juego.anio}
        </p>
      </div>
    </div>
  )
}

export default VideojuegoCard
