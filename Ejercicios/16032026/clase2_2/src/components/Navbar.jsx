import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span className="brand-icon">◆</span> NovaTech
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`nav-btn-outline${isActive('/login') ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="nav-btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
