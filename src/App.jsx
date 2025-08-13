import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Restaurent from './pages/Restaurent'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// import { Contact } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Rooms' element={<Rooms/>} />
        <Route path='/Restaurent' element={<Restaurent/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
