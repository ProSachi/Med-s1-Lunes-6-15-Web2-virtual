import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="app-footer">
            <nav className="app-nav" aria-label="Navegacion inferior">
                <Link to="/">Pagina Principal</Link> {/* 4. Enlace sin recarga */}
                <Link to="/redes">Redes Sociales</Link>
            </nav>
        </footer>
    )
}

export default Footer