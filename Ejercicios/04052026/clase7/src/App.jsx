import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './page/Inicio'
import Acerca from './page/Acerca'
import Redes from './component/Redes'
import Login from './page/Login'


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>

  )
}
export default App
