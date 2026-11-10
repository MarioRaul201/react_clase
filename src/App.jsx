import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Login } from './components/Login'
import { MainContent } from './components/MainContent'
import { generos, plataformas } from './data/videojuegos'

const filtrosIniciales = { busqueda: '', genero: 'Todos', plataformas: [], puntuacionMin: 0 }

function App() {
  // useState #1: sesión (token guardado en el navegador)
  const [token, setToken] = useState(localStorage.getItem('token'))
  // useState #2: filtros en tiempo real (los cambia Sidebar, los usa MainContent)
  const [filtros, setFiltros] = useState(filtrosIniciales)
  // useState #3: tema claro / oscuro
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'light')

  // useEffect: aplica el tema a toda la página cada vez que cambia
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  const cambiarTema = () => setTema(tema === 'light' ? 'dark' : 'light')

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setToken(null)
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
      {token ? (
        <>
          <Navbar
            tema={tema}
            onCambiarTema={cambiarTema}
            email={localStorage.getItem('email')}
            onLogout={cerrarSesion}
          />

          {/* Layout con Grid de Bootstrap */}
          <div className="container-fluid px-4 flex-grow-1 my-4">
            <div className="row g-4">
              <aside className="col-md-4 col-lg-3">
                <Sidebar
                  filtros={filtros}
                  setFiltros={setFiltros}
                  generos={generos}
                  plataformas={plataformas}
                  onLimpiar={() => setFiltros(filtrosIniciales)}
                />
              </aside>
              <main className="col-md-8 col-lg-9">
                <MainContent filtros={filtros} />
              </main>
            </div>
          </div>

          <footer className="text-center text-secondary py-3 border-top">
            Dashboard Reactivo · React + Bootstrap
          </footer>
        </>
      ) : (
        <Login onLoginSuccess={(nuevoToken) => setToken(nuevoToken)} />
      )}
    </div>
  )
}

export default App
