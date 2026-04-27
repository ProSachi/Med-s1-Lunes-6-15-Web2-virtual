import React from 'react'
import { dataDestinos } from '../data/destinos';
import { DestinoCard } from '../components/DestinoCard'; 


const Vistacomponent = () => {
  return (
          <div>
        <h1>Nuestros Destinos</h1>
        <div>
          {/* Iteramos sobre la "base de datos" */}
          {dataDestinos.map((destino) => (
            <DestinoCard
              key={destino.id} // VITAL: Identificador único para React
              ciudad={destino.ciudad}
              pais={destino.pais}
              imagen={destino.img}
              precio={destino.precio}
            />
          ))}
        </div>
      </div>
  )
}

export default Vistacomponent