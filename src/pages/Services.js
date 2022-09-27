import React from 'react'
import bannerPic from '../assets/Services.jpg'
import  "../styles/Service.css"
function Services() {
  return (
    <div className='services'>

      <div className='banner'>
          <img src={bannerPic} alt="banner-image"/>
          <h1>Services</h1>
      </div>

    </div>
  )
}

export default Services