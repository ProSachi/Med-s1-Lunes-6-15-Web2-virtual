import React from 'react'
import FormularioLogin from '../components/FormularioLogin'
import ImagenPublicitario from '../components/ImagenPublicitario'
import Navar from '../components/Navar'
import Footer from '../components/Footer'

const Login = () => {
    return (
        <>
        <Navar />
            <h2 style={{ color: '#e43504' }}> Página de Logeo </h2>
            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '30px 16px',
                    background: '#f3f4f6'
                }}
            >
                <h2> Página de Logeo </h2>
                <div
                    style={{
                        width: '100%',
                        maxWidth: '980px',
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        background: '#ffffff',
                        borderRadius: '14px',
                        padding: '20px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
                    }}
                >
                    <aside style={{ flex: '1 1 320px' }}>
                        <FormularioLogin />
                    </aside>
                    <aside style={{ flex: '1 1 320px' }}>
                        <ImagenPublicitario />
                    </aside>
                </div>
            </section>
        <Footer />
        </>

    )
}

export default Login