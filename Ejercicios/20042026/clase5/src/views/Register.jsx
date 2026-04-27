import React from 'react'
import ImagenPublicitario from '../components/ImagenPublicitario'

const Register = () => {
    return (
        <>
            <h2 style={{ color: '#e43504' }}> Página de Registro </h2>
            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '30px 16px',
                    background: '#f6f4f3'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '980px',
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        flexDirection: 'row-reverse',
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '20px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                    }}
                >

                    <aside style={{ flex: '1 1 320px' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '14px' }}>
                                Usuario
                                <input
                                    type="text"
                                    placeholder="Crea un usuario"
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
                                Telefono
                                <input
                                    type="number"
                                    placeholder="Ingresa tu telefono"
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
                                Ciudad
                                <input
                                    type="text"
                                    placeholder="Ingresa tu ciudad de residencia"
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
                                Registrar
                            </button>
                        </form>
                    </aside>
                    <aside style={{ flex: '1 1 320px' }}>
                        <ImagenPublicitario />
                    </aside>
                </div>
            </section>
        </>

    )
}

export default Register