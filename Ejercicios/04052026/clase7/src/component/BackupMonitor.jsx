import backupsDeServidor from "../data/backupsDeServidor"
import Tarjeta from "./Tarjeta"

const BackupMonitor = () => {
    return (
        <>
            <header className="admin-header">
                <h2>Panel de Seguridad y Recuperación</h2>
                <p>Estado de las herramientas tecnológicas de respaldo.</p>
            </header>
            {/* Técnica de Maquetación: Contenedor Grid */}
            <div>
                {/* Renderizado iterativo */}
                {backupsDeServidor.map((backup) => (
                    // El 'key' es obligatorio en el elemento de nivel superior del map
                    <Tarjeta 
                    key={backup.id}
                    server={backup.server}
                    status={backup.status}
                    size={backup.size}
                    />
                ))}
            </div>
        </>
    )
}

export default BackupMonitor