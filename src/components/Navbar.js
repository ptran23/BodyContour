import React,{useState,useEffect} from 'react'
import {Link,useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/YouTube"
import EmailIcon from "@material-ui/icons/Email"


function Navbar() {

  const[navbar,setNavbar] = useState(false) //Navbar color change/*
  const location = useLocation() 
  
  // mobile NavBar
  const [expandNavbar, setExpandNavbar] = useState(false)

//Close Navbar when location changes
  useEffect (() => {
    setExpandNavbar(false)
  }, [location])

  const changeNavColor = () => {
    if(window.scrollY >= 90) {
      setNavbar(true)
    } 
    else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavColor)


  return (
    <div className={navbar ? 'navbar active' : 'navbar'} id ={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
        </div>
        <div className='title'> BODY CONTOUR </div>
        <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/services"> Services </Link>
            <Link to="/results"> Gallery </Link>
            <Link to="/booking"> Book Now </Link>
        </div>
    </div>
  )
}

export default Navbar