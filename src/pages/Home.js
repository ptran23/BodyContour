import React, {useState,useRef,useEffect} from 'react'
import Video from '../assets/Happy.mp4'
import picture from '../assets/person.jpg'
import ServiceItem from '../components/ServiceItem'
import {serviceList} from '../helpers/ServiceList'
import Testimonies from '../components/Testimonies'
import {testimonyList} from '../helpers/TestimonyList'
import { motion } from "framer-motion"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css"
import "../styles/Home.css"


function Home() {
// service carousel
const [width,setWidth] = useState(0)
const carousel = useRef()
useEffect(() => {
  let widthVariable = 1.5;
  if (carousel.current.scrollWidth > 1300){
    widthVariable = 1.2
  }
  else if (carousel.current.scrollWidth > 700){
    widthVariable = 1.6
  }
  setWidth((carousel.current.scrollWidth *  widthVariable ) - (carousel.current.offsetWidth ))
}, [])
// Testimony carousel
const[current, setCurrent] = useState(0)
const length = testimonyList.length

const nextSlide = () => {
  setCurrent(current === length -1 ? 0 : current +1 )
}
const prevSlide = () => {
  setCurrent(current===0? length -1 : current -1)
}

//AOS init
  useEffect(() =>{
    Aos.init({duration:1000,once: true })
  },[])
  
  return (
    <div className='home'>

        <video  src={Video} 
                autoPlay
                loop 
                muted
                playsInline
              />        
        <div className='container'>
              <h1>Sculpt the body you envision </h1>

          <div className='buttons'>
            <a href='/booking'>
              <button className='button'>Book Now</button>
            </a>
          </div>

        </div>

      <div className='services-container'>
     
        <div className='service-text'>
          <h4>Discover</h4>
          <h1> The many services </h1>
          <p> Body Contour is on a mission to sculpt your
              ideal body using only the best products
              and proven procedures. Here's a look at the services we provide.
          </p>
          
            <a href='/services'>
              <button className='sbutton'>Learn More</button>
            </a>
        </div>
        <motion.div ref={carousel} className="carousel" data-aos="fade-up">
          <motion.div 
            drag = "x"
            dragConstraints= {{right: 0, left: -width}} 
            className='services-listing'
            >
            {serviceList.map ((service)=>{
              return <ServiceItem name = {service.name} image ={service.image} key ={service.image}/>
            })}
            
          </motion.div>
        </motion.div>
      </div>

      <div className='aboutMe'>
        <div className='aboutText'>
          <h4>Know</h4>
          <h1> More about me </h1>
          <p> 
              Certified body contouring technician with two years of experience. 
              Received additional training to specialize in glute enhancement and fat reduction . 
              Highly motivated to continue my education as a body contouring technician with 
              the hopes of becoming a nurse practitioner. 
          </p>
        </div>
        <div className='aboutPicture' >
            <img src= {picture} alt="Name"/> 
           <figcaption>Name Here </figcaption>
        </div>
      </div>

      <div className='testimony-wrap' >
        <h1 data-aos="zoom-in"> See what others are saying !</h1>
        <div className='inner-wrap'>
              <div className='quotes'>

                <div className='left'>
                  <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                </div>

                <div className='quote'>
                  {testimonyList.map ((testimony,index)=>{
                      return (
                        <div className= {index ===current ? 'quote active' : 'quote'} key ={testimony.name} >
                          {index === current && (<Testimonies quote = {testimony.quote} name = {testimony.name}  />)}
                          
                        </div>
                      )
                      
                  })}
                </div>

                <div className='right'>
                  <FaArrowAltCircleRight className='right-arrow' onClick = {nextSlide} />
                </div>
              </div>
              <a href='/booking'>
                <button className='tbutton'>Book Now</button>
              </a>
          </div>
      </div>

    </div>
  )
}

export default Home