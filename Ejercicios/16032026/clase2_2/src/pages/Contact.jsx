import { useState } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const contactInfo = [
  { icon: '📍', title: 'Dirección', detail: 'Calle 50 #10-20, Medellín, Colombia' },
  { icon: '📞', title: 'Teléfono', detail: '+57 (604) 555-0100' },
  { icon: '📧', title: 'Email', detail: 'hola@novatech.co' },
  { icon: '🕐', title: 'Horario', detail: 'Lun - Vie: 8:00 AM – 6:00 PM' },
]

const ContactInfoCard = ({ icon, title, detail }) => (
  <div className="contact-info-card">
    <span className="contact-icon">{icon}</span>
    <div>
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna pregunta o propuesta? Estamos aquí para ayudarte.</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Información de contacto</h2>
          <p>Elige el canal que prefieras para comunicarte con nuestro equipo.</p>
          <div className="contact-info-list">
            {contactInfo.map((item, index) => (
              <ContactInfoCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <span>✅</span>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos pondremos en contacto contigo pronto.</p>
              <Button variant="primary" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Envíanos un mensaje</h2>
              <div className="form-row">
                <InputField
                  label="Nombre"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Correo electrónico"
                  type="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <InputField
                label="Asunto"
                type="text"
                name="subject"
                placeholder="¿En qué podemos ayudarte?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <div className="input-group">
                <label className="input-label">Mensaje</label>
                <textarea
                  name="message"
                  className="input-field textarea"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" variant="primary" fullWidth>
                Enviar Mensaje
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
