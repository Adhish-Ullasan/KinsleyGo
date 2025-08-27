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
import Login from './pages/admin/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLayout from './components/layout/AdminLayout'
import UserLayout from './components/layout/UserLayout'
// import { Toaster } from 'react-hot-toast'
// import { Contact } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AdminLayout />} >
          <Route path="/dashboard" element={<AdminDashboard />} /> 
        </Route>
        <Route element={<UserLayout />}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/restaurent' element={<Restaurent/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
