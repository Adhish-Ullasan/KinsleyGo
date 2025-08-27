import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (

      <>
    <p>navbar</p>
    <p>sidebar</p>
    <main >
      <div >
        <Outlet /> 
      </div>
    </main>
  </>
  )
}

export default AdminLayout