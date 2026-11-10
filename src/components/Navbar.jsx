function Navbar({ tema, onCambiarTema, email, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            width="40"
            height="40"
            className="align-middle me-2"
            alt="Logo"
          />
          Dashboard Videojuegos
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDashboard"
          aria-controls="navbarDashboard"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarDashboard">
          <div className="ms-auto d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {email && <span className="text-light small">{email}</span>}

            {/* Conmutador de tema claro / oscuro */}
            <button className="btn btn-outline-light btn-sm" onClick={onCambiarTema}>
              {tema === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
            </button>

            <button className="btn btn-danger btn-sm" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
