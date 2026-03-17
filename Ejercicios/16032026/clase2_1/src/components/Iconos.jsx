import React from 'react'
import { FaDog } from "react-icons/fa";

const Iconos = () => {
    return (
        <>
            <h1>Bienvenido a la Veterinaria</h1>
            {/* 2. Uso del componente importado */}
            <FaDog style={{ color: 'brown', fontSize: '200px', alignContent:'center' }} />
        </>
    )
}

export default Iconos