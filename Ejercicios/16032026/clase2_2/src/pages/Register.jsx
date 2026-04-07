import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = formData

    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor completa todos los campos.')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    setSuccess(true)
  }

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card success-card">
          <span className="success-icon">✅</span>
          <h2>¡Registro exitoso!</h2>
          <p>Tu cuenta ha sido creada correctamente.</p>
          <Link to="/login">
            <Button variant="primary">Ir a Iniciar Sesión</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-icon auth-brand-icon">◆</span>
          <h1>Crea tu cuenta</h1>
          <p>Únete a NovaTech hoy mismo</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <InputField
            label="Nombre completo"
            type="text"
            name="name"
            placeholder="Juan García"
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
          <InputField
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <InputField
            label="Confirmar contraseña"
            type="password"
            name="confirmPassword"
            placeholder="Repite tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="auth-terms">
            <label>
              <input type="checkbox" required /> Acepto los{' '}
              <a href="#">Términos y Condiciones</a>
            </label>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Crear Cuenta
          </Button>
        </form>

        <p className="auth-redirect">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
