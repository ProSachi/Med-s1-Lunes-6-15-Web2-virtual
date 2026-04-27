import dataDestinos from '../assets/dataDestinos'
import DestinoCard from '../components/DestinoCard'

const TarjetaPadre = () => {
    return (
        <div>
            <h1>Nuestros Destinos</h1>
            <div>
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

export default TarjetaPadre