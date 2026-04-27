import React from 'react'

const ImagenPublicitario = () => {
  return (
    <div
      style={{
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        background: '#f9fafb'
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=900&q=80"
        alt="Pantalla de inicio de sesion"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <div style={{ padding: '14px 16px' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#111827' }}>Bienvenido</h3>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
          Accede a tu cuenta para continuar con tu experiencia en la pagina de inicio.
        </p>
      </div>
    </div>
  )
}

export default ImagenPublicitario