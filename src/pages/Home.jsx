import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import AboutCard from '../components/AboutCard'
import Places from '../components/Places'


const Home = () => {
  return (
      <>
        <Banner />
        <AboutCard/>
        <Places/>
      </>
  )
}

export default Home
