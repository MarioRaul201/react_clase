// Barra lateral con los filtros. No guarda estado propio:
// lee `filtros` y avisa los cambios con `setFiltros`.
function Sidebar({ filtros, setFiltros, generos, plataformas, onLimpiar }) {
  // Cambia un solo campo de los filtros sin perder los demás
  const cambiar = (campo, valor) => setFiltros({ ...filtros, [campo]: valor })

  const togglePlataforma = (plataforma) => {
    const nuevas = filtros.plataformas.includes(plataforma)
      ? filtros.plataformas.filter((p) => p !== plataforma)
      : [...filtros.plataformas, plataforma]
    cambiar('plataformas', nuevas)
  }

  return (
    <div className="card shadow-sm sticky-top" style={{ top: '1rem' }}>
      <div className="card-body">
        <h5 className="card-title mb-3">Filtros</h5>

        {/* Búsqueda por nombre */}
        <div className="mb-3">
          <label htmlFor="busqueda" className="form-label fw-semibold">Buscar</label>
          <input
            id="busqueda"
            type="text"
            className="form-control"
            placeholder="Nombre del juego..."
            value={filtros.busqueda}
            onChange={(e) => cambiar('busqueda', e.target.value)}
          />
        </div>

        {/* Género */}
        <div className="mb-3">
          <label htmlFor="genero" className="form-label fw-semibold">Género</label>
          <select
            id="genero"
            className="form-select"
            value={filtros.genero}
            onChange={(e) => cambiar('genero', e.target.value)}
          >
            <option value="Todos">Todos</option>
            {generos.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Plataformas (se pueden marcar varias) */}
        <div className="mb-3">
          <span className="form-label fw-semibold d-block">Plataforma</span>
          {plataformas.map((p) => (
            <div className="form-check" key={p}>
              <input
                id={`plat-${p}`}
                type="checkbox"
                className="form-check-input"
                checked={filtros.plataformas.includes(p)}
                onChange={() => togglePlataforma(p)}
              />
              <label htmlFor={`plat-${p}`} className="form-check-label">{p}</label>
            </div>
          ))}
        </div>

        {/* Puntuación mínima */}
        <div className="mb-3">
          <label htmlFor="puntuacion" className="form-label fw-semibold">
            Puntuación mínima: {filtros.puntuacionMin}
          </label>
          <input
            id="puntuacion"
            type="range"
            className="form-range"
            min="0"
            max="10"
            step="0.5"
            value={filtros.puntuacionMin}
            onChange={(e) => cambiar('puntuacionMin', Number(e.target.value))}
          />
        </div>

        <button className="btn btn-outline-secondary w-100" onClick={onLimpiar}>
          Limpiar filtros
        </button>
      </div>
    </div>
  )
}

export default Sidebar
