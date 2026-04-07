import Nav from './components/Nav'
import Foother from './components/Foother'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import './App.css'

const App = () => {
  return (
    <>
      <Nav />
      <Service />
      <Contact />
      <Home />
      <Foother />
    </>
  )
}

export default App