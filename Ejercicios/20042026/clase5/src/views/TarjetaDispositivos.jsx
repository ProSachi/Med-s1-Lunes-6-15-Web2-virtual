import React from 'react'
import Tarjeta from '../components/Tarjeta'
import database from '../assets/database'

const TarjetaDispositivos = () => {
    return (
        <div>
            {database.map((producto) => (
                <Tarjeta
                    key={producto.id} // VITAL: Identificador único para React
                    nombre={producto.nombre}
                    precio={producto.precio}
                    imagen={producto.imagen}
                />
            ))}
        </div>

    )
}

export default TarjetaDispositivos