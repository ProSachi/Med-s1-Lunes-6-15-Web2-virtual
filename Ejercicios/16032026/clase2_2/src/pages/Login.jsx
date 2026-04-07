import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos.')
      return
    }
    alert(`¡Bienvenido de vuelta, ${formData.email}!`)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="brand-icon auth-brand-icon">◆</span>
          <h1>Bienvenido de vuelta</h1>
          <p>Inicia sesión en tu cuenta NovaTech</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
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
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#" className="forgot-link">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Iniciar Sesión
          </Button>
        </form>

        <p className="auth-redirect">
          ¿No tienes cuenta?{' '}
          <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
