import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/index'
import { Contact, About, Home, Socials, Projects } from './pages'

function App() {

  return (
    <div>
        <Projects />
    </div>
  )
}

export default App
