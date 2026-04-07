import { Link } from 'react-router-dom'
import Button from '../components/Button'

const features = [
  {
    icon: '🚀',
    title: 'Alto Rendimiento',
    description: 'Plataforma optimizada para velocidad y escalabilidad empresarial sin límites.',
  },
  {
    icon: '🔒',
    title: 'Seguridad Total',
    description: 'Protección avanzada de datos con cifrado de extremo a extremo.',
  },
  {
    icon: '📊',
    title: 'Analíticas Avanzadas',
    description: 'Dashboards en tiempo real con insights accionables para tu negocio.',
  },
  {
    icon: '🤝',
    title: 'Soporte 24/7',
    description: 'Equipo de expertos disponible en todo momento para ayudarte.',
  },
  {
    icon: '☁️',
    title: 'En la Nube',
    description: 'Accede a tu información desde cualquier lugar del mundo.',
  },
  {
    icon: '⚙️',
    title: 'Personalizable',
    description: 'Adapta cada aspecto de la plataforma a las necesidades de tu empresa.',
  },
]

const stats = [
  { value: '10K+', label: 'Usuarios Activos' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '150+', label: 'Países alcanzados' },
  { value: '4.9★', label: 'Valoración promedio' },
]

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <span className="feature-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
)

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">✨ Plataforma #1 en crecimiento</span>
          <h1>
            Lleva tu negocio al{' '}
            <span className="gradient-text">siguiente nivel</span>
          </h1>
          <p>
            Soluciones digitales innovadoras para empresas modernas. Optimiza tus
            procesos, aumenta tu productividad y escala sin límites.
          </p>
          <div className="hero-buttons">
            <Link to="/register">
              <Button variant="primary">Comenzar Gratis</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Hablar con ventas</Button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-mockup">
            <div className="mockup-header">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-line"></div>
              <div className="mockup-line short"></div>
              <div className="mockup-block"></div>
              <div className="mockup-line"></div>
              <div className="mockup-line medium"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Todo lo que necesitas para crecer</h2>
          <p>Una plataforma completa con todas las herramientas que tu empresa necesita.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Listo para empezar?</h2>
        <p>Únete a miles de empresas que ya confían en NovaTech.</p>
        <Link to="/register">
          <Button variant="light">Crear cuenta gratuita →</Button>
        </Link>
      </section>
    </div>
  )
}

export default Home
