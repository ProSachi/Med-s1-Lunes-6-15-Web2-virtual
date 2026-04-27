import React from 'react'

const FormularioLogin = () => {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '22px'
      }}
    >
      <h2 style={{ margin: '0 0 8px 0', color: '#111827' }}>Iniciar sesion</h2>
      <p style={{ margin: '0 0 18px 0', color: '#6b7280', fontSize: '14px' }}>
        Ingresa tus datos para acceder a la plataforma.
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '14px' }}>
          Correo electronico
          <input
            type="email"
            placeholder="usuario@correo.com"
            required
            style={{
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '14px' }}>
          Contrasena
          <input
            type="password"
            placeholder="********"
            required
            style={{
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', fontSize: '13px' }}>
          <input type="checkbox" />
          Recordar mi sesion
        </label>

        <button
          type="submit"
          style={{
            marginTop: '4px',
            padding: '10px 14px',
            border: 'none',
            borderRadius: '8px',
            background: '#2563eb',
            color: '#ffffff',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default FormularioLogin