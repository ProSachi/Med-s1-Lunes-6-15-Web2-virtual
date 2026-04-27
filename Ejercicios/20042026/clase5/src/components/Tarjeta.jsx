import React from 'react'

const Tarjeta = (props) => {
  return (
    <>
      <img src={props.imagen} alt="" />
      <section>
        <h2>{props.nombre}</h2>
        <p>{props.precio}</p>
      </section>
    </>
  )
}

export default Tarjeta
