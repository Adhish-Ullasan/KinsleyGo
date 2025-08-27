import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const UserLayout = () => {
  return (
    <>
    <Navbar />
    <main >
      <div >
        <Outlet /> 
      </div>
    </main>
    <Footer />
    </>
  )
}

export default UserLayout