import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="app-header">
            <nav className="app-nav" aria-label="Navegacion principal">
                <Link to="/">Inicio</Link> {/* 4. Enlace sin recarga */}
                <Link to="/acerca">Acerca de</Link>
                <Link to="/login">Ingresar</Link>
            </nav>
        </header>
    )
}

export default Header