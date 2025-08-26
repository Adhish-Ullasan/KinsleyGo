import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import AboutCard from '../components/AboutCard'
import Places from '../components/Places'
import SimpleSlider from '../components/Carousal'
import Component from '../components/Component'
import { placeData } from '../data/PlaceData'

const HomePage = () => {

  

  return (
      <>
        <Banner />
        <AboutCard/>
        <Places/>
        <SimpleSlider>     
          {
            placeData.map(place=>  ( <div >
                            <img src={place.placeimage} alt="" id='placeImg' />
                        </div>))
          }
        </SimpleSlider>
        
      </>
  )
}

export default HomePage
