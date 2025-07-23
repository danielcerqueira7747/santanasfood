
import './App.css'

import Navbar from './layout/Navbar/Navbar.jsx'
import Footer from './layout/Footer/Footer.jsx'
import Home from './pages/Home.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>

      <Navbar />

      <Home />

      <Footer />  

    </Router>
  )
}

export default App
