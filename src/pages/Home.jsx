import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <a href="/about" style={{ display: 'block'}}>about</a>

      <Link to={'/about'}>Link to about</Link>
    </div>
  )
}

export default Home
