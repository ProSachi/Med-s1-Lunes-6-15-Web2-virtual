const Service = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Servicios</h2>
        <p>Estos son algunos servicios base que puede mostrar este proyecto.</p>
        <div className="cards">
          <article className="card">
            <h3>Desarrollo Web</h3>
            <p>Creación de interfaces modernas, responsivas y accesibles.</p>
          </article>
          <article className="card">
            <h3>Mantenimiento</h3>
            <p>Optimización, corrección de errores y mejoras continuas.</p>
          </article>
          <article className="card">
            <h3>Soporte Técnico</h3>
            <p>Acompañamiento y solución de dudas para el cliente final.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Service