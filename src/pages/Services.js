import React, {useState} from 'react'
import ServiceCard from '../components/ServiceCard'
import serviceData from '../helpers/ServiceData'
import bannerPic from '../assets/Services.jpg'
import  "../styles/Service.css"

function Services() {
  const[active,setActive] = useState("FirstCard")

  return (
    <div className='services'>

        <div className='banner'>
            <img src={bannerPic} alt=" "/>
            <h1>Services</h1>
        </div>
        <div className='services-wrap'>
            <nav>
              <button className='services-button' onClick={()=> setActive("FirstCard")}>Glute Enhancement</button>
              <button className='services-button' onClick={()=> setActive("SecondCard")}>Fat Reduction</button>
              <button  className='services-button' onClick={()=> setActive("ThirdCard")}>Cellulite Removal</button>
              <button className='services-button' onClick={()=> setActive("LastCard")}>Skin Tightening</button>
            </nav>
            <div>
              {active === "FirstCard" && <ServiceCard data = {serviceData} serviceIndex={0}/> }
              {active === "SecondCard" && <ServiceCard data ={serviceData} serviceIndex={1}/> }
              {active === "ThirdCard" && <ServiceCard data ={serviceData} serviceIndex={2}/>}
              {active === "LastCard" && <ServiceCard data ={serviceData} serviceIndex={3}/>}
            </div>
        </div>
    </div>
  )
}

export default Services