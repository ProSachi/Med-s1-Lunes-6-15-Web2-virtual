const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contacto</h2>
        <p>Déjanos tus datos y te responderemos pronto.</p>

        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje" rows="4" />
          <button type="button">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact