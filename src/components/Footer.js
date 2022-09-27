import React from 'react'
import {Link} from "react-router-dom"
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/YouTube"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='line1'><hr/></div>
        <div className='footer-title'>
            BODY CONTOUR
            <div className='footer-links'>
                <Link to="/"> Home</Link>
                <Link to="/services"> Services </Link>
                <Link to="/results"> Gallery </Link>
                <Link to="/booking"> Book Now </Link>
            </div>
        </div>
        <div className='line2'><hr/></div>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <YoutubeIcon/>
            <EmailIcon/>
        </div>
    </div>
  )
}

export default Footer