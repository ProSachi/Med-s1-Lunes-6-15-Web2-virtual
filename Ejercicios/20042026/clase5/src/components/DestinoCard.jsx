import React from 'react'

const DestinoCard = ({ ciudad, pais, imagen, precio }) => {
    return (
        <>
            <img src={imagen} alt="Imagen de la ciudad Destino" />
            <div>
                <h2>{ciudad}</h2>
                <p>{pais}</p>
                <span>{precio}</span>
                <button>Reservar</button>
            </div>
        </>
    )
}

export default DestinoCard