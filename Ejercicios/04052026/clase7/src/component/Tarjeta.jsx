

const Tarjeta = ({ server, status, size, id }) => {
    return (
        <div key={id} className={`tarjeta-respaldo ${status === 'Fallido' ? 'alerta' : ''}`}>
            <h3>{server}</h3>
            <ul>
                <li><strong>ID:</strong> {id}</li>
                <li><strong>Estado:</strong> {status}</li>
                <li><strong>Tamaño:</strong> {size}</li>
            </ul>
        </div>
    )
}

export default Tarjeta
